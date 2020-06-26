const express = require("express");
const { check } = require('express-validator');
const router = express.Router();
const { getLandingPageData, getBootcampPageData, postReview, getSearchOptions, getResultsCategory } = require('../../controllers');

// @route  GET api/landing
// access  Public
router.get("/landing", getLandingPageData);

// @route  GET api/search/:options
// access  Public
// hint: autosuggest options
router.get("/search/options", getSearchOptions);

// @route  GET api/bootcamps/:name
// access  Public
router.get("/bootcamps/:name", getBootcampPageData);

// @route  POST api/bootcamps/:name
// access  Public
router.post("/bootcamps/:name", 
[
    check('customerName')
    .not()
    .isEmpty(),
    check('star')
    .not()
    .isEmpty(),
    check('title')
    .not()
    .isEmpty(),
    check('review')
    .not()
    .isEmpty(),
    check('email')
    .isEmail(),
    check('linkedin')
    .not()
    .isEmpty()
],
postReview);

// @route  GET api/results/:category
// access  Public
router.get("/results", getResultsCategory)

// @route  POST api/results/:category
// access  Public
router.post("/results", getResultsCategory)

module.exports = router;

