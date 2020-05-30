const express = require("express");
const router = express.Router();
const { getLandingPageData, getBootcampPageData, postReview, getSearchOptions, getResultsCategory } = require('../../controllers');

// @route  GET api/landing
// access  Public
router.get("/landing", getLandingPageData);

// @route  GET api/bootcamps/:name
// access  Public
router.get("/bootcamps/:name", getBootcampPageData);

// @route  POST api/bootcamps/:name
// access  Public
router.post("/bootcamps/:name", postReview);

// @route  GET api/search/:options
// access  Public
router.get("/search/options", getSearchOptions);

// @route  GET api/results/:category
// access  Public
router.get("/results/:category", getResultsCategory)

router.post("/results/:category", getResultsCategory)

module.exports = router;

