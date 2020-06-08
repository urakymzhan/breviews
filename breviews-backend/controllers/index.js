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
        // filter top and remote from bootcamps
        let topBootcamps = landing.filter((bootcamp) => bootcamp.overall > 4);
        let remoteBootcamps = landing.filter((bootcamp) =>
            bootcamp.location.includes("Remote")
        );
        // show only 4 bootcamps in landing page
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
        // TODO: maybe also use custom HttpError here ?
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
        const customResult = customArr.reduce((result, key) => {
                result.push({ 'title': key})
                return result;
            }, []);

        res.json(customResult);

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
        }
        else if (query === 'top') {
            const topBootcamps = resultsData.filter(top => top.overall > 4);
            res.json(topBootcamps)
        } else if (query === 'remote') {
            const remoteBootcamps = resultsData.filter(remote => remote.location.includes('Remote'));
            res.json(remoteBootcamps);
        } else if (query === "search") {
            // TODO: handle lowerCase or upperCases and double check code
            const selectedOption = req.body.searchCriterias.selectedOption;
            const selectedTags = req.body.searchCriterias.selectedTags;
            const searchResult = resultsData.filter(singleBoo => singleBoo.customName === selectedOption || singleBoo['tags'].some(r => selectedTags.includes(r)));
            res.json(searchResult);
        }
        // TODO: revise this
        else {
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


