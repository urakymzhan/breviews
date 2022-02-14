// NOTE:  Make sure Express logic (req, res etc..) ends in here and not pass to Services
const { findLandinPageData, findBootcampPageData, findSearchOptions, findResultsCategory, findAndUpdateReviews } = require('../services');
const HttpError = require('../models/http-errors');
const { validationResult } = require('express-validator');
const _ = require('lodash');

const getLandingPageData = async (req, res, next) => {
    try {
        const landing = await findLandinPageData();
        if (!landing) {
            return next(
                new HttpError('There was an error loading data. Please try later', 404)
            );
        }
        // filter top bootcamps
        let topBootcamps = landing.filter(bootcamp => { 
            let isTop = 0;
            const isJobGuaranteed = bootcamp.tags.includes('Career Services');
            const isRemote = bootcamp.location.includes("Remote")

            if (bootcamp.overall > 4) {
                isTop += 5;
            }
            if (bootcamp.totalPrice < 10000) {
                isTop += 1;
            }
            if (isJobGuaranteed) {
                isTop += 2;
            }
            if (isRemote) {
                isTop += 1;
            }
            if (isTop > 6) {
                return bootcamp;
            } 
        })
        // filter remote bootcamps
        let remoteBootcamps = landing.filter((bootcamp) =>
            bootcamp.location.includes("Remote")
        );
        // show only 4 in landing page
        const maxCount = 4;
        topBootcamps = topBootcamps.slice(0, maxCount);
        remoteBootcamps = remoteBootcamps.slice(0, maxCount);

        const finalLanding = {
            topBootcamps,
            remoteBootcamps
        }
        if (!finalLanding) {
            return next(
                new HttpError('There was an error loading data. Please try later', 404)
            );
        }
        res.json(finalLanding);

    } catch (err) {
        console.error(err.message);
        return next(
            new HttpError('Server Error', 500)
        );
    }
};

const getBootcampPageData = async (req, res, next) => {
    try {
        const name = req.params.name;
        const bootcamp = await findBootcampPageData(name);

        if (!bootcamp) {
            return next(
                new HttpError('Could not find any bootcamps with this name.', 404)
            );
        }
        res.json(bootcamp);

    } catch (err) {
        console.error(err.message);
        return next(
            new HttpError('Server Error', 500)
        );
    }
}

const postReview = async (req, res, next) => {
    // express validator
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        throw new HttpError('Invalid form data passed!', 422);
    }
    try {
        const name = req.params.name;
        const newReview = req.body;
        const postedReview = await findAndUpdateReviews(name, newReview);
        if (!postedReview) {
            return next(
                new HttpError('Could not post a review to this bootcamp. Please try later', 404)
            );
        }
        res.json(postedReview);

    } catch (err) {
        console.error(err.message);
        return next(
            new HttpError('Server Error', 500)
        );
    }
}

const getSearchOptions = async (req, res, next) => {
    try {
        const customNamesObj = await findSearchOptions();


        if (!customNamesObj) {
            return next(
                new HttpError('Could not find any options for this search input. Please try later', 404)
            );
        }
        // Because semantic-ui Search requires to have title!
        const customArr = customNamesObj.map(obj => { return obj.customName });
        const resultWithTitle = customArr.reduce((result, key) => {
            result.push({ 'title': key })
            return result;
        }, []);

        res.json(resultWithTitle);

    } catch (err) {
        return next(
            new HttpError('Server Error', 500)
        );
    }
}

const getResultsCategory = async (req, res, next) => {
    try {
        const query = req.query.search;
        const resultsData = await findResultsCategory();

        if (!resultsData) {
            return next(
                new HttpError('Could not find any bootcamp for this criteria. Please try later', 404)
            );
        }

        if (query === 'all') {
            res.json(resultsData);
        } else if (query === 'top') {
            const topBootcamps = resultsData.filter(top => top.overall > 4);
            res.json(topBootcamps)
        } else if (query === 'remote') {
            const remoteBootcamps = resultsData.filter(remote => remote.location.includes('Remote'));
            res.json(remoteBootcamps);
        } else if (query === "search") {
            const selectedOption = req.body.searchCriterias.selectedOption;
            const selectedTags = req.body.searchCriterias.selectedTags;
            const searchResult = resultsData.filter(singleBoot => singleBoot.customName === selectedOption || singleBoot['tags'].some(eachTag => _.includes(selectedTags, eachTag))); 
            res.json(searchResult);
        } else {
            return next(
                new HttpError('Could not find any bootcamp for this criteria. Please try later', 404)
            );
        }
    } catch (err) {
        console.error(err.message);
        return next(
            new HttpError('Server Error', 500)
        );
    }
}
module.exports = {
    getLandingPageData,
    getBootcampPageData,
    postReview,
    getSearchOptions,
    getResultsCategory
}


