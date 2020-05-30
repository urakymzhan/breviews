// NOTE:  Make sure Express logic (req, res etc..) ends in here and not pass to Services
const { findLandinPageData, findBootcampPageData, findSearchOptions, findResultsCategory, findAndUpdateReviews } = require('../services');
const Bootcamp = require('../models/Bootcamps');

const getLandingPageData = async (req, res) => {
    try {
        const landing = await findLandinPageData();
        res.json(landing);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

const getBootcampPageData = async (req, res) => {
    try {
        const name = req.params.name;
        const bootcamp = await findBootcampPageData(name);
        res.json(bootcamp);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const postReview = async (req, res) => {
    // TODO: revise this code
    try {
        const name = req.params.name;
        const newReview = req.body;
        const postedReview = await findAndUpdateReviews(name, newReview);
        res.json(postedReview);

    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
}

const getSearchOptions = async (req, res) => {
    try {
        const customNamesObj = await findSearchOptions();
        const customNamesArr = customNamesObj.map(obj => { return obj.customName });
        res.json(customNamesArr);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}

const getResultsCategory = async (req, res) => {
    try {
        const category = req.params.category;

        const resultsData = await findResultsCategory();

        if (category === 'all') {
            res.json(resultsData);
        }
        else if (category === 'top') {
            const topBootcamps = resultsData.filter(top => top.overall > 4);
            res.json(topBootcamps)
        } else if (category === 'remote') {
            const remoteBootcamps = resultsData.filter(remote => remote.location.includes('Remote'));
            res.json(remoteBootcamps);
        } else if (category === "search") {
            // TODO: handle lowerCase or upperCases and double check code
            const selectedOption = req.body.searchCriterias.selectedOption;
            const selectedTags = req.body.searchCriterias.selectedTags;
            const searchResult = resultsData.filter(singleBoo => singleBoo.customName === selectedOption || singleBoo['tags'].some(r => selectedTags.includes(r)));
            // console.log("final:", searchResult)
            res.json(searchResult);

        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Server Error');
    }
}
module.exports = {
    getLandingPageData,
    getBootcampPageData,
    postReview,
    getSearchOptions,
    getResultsCategory
}


