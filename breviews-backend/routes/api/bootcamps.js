const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator/check");
const Bootcamp = require('../../models/Bootcamps');

// @route  GET api/landing
// access  Public
router.get("/landing", async (req, res) => {
  try {
    const landing = await Bootcamp.find().select('-reviews');
    res.json(landing);
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server Error');
  }
});

// @route  GET api/bootcamps/:name
// access  Public
router.get("/bootcamps/:name", async (req, res) => {
  try {
    const name = req.params.name;
    const bootcamp = await Bootcamp.find({schoolname: { $eq: name }});
    res.json(bootcamp);
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server Error');
  }
});

// WORKS BUT NOT ENTIRELY SURE ABOUT ARCHITECTURE
// @route  POST api/bootcamps/:name
// access  Public
router.post("/bootcamps/:name", async (req, res) => {

  try {
    const name = req.params.name;
    await Bootcamp.find({ schoolname: { $eq: name } }, (err, bootcamp) => {
    // get all reviews
    var allreviews = bootcamp[0].reviews;
    // insert new review
    allreviews.push(req.body);
    // compute sum of stars
    var sum = 0;
    allreviews.map(obj => {
      sum += obj.star;
    });
    // get review count
    let count = allreviews.length;
    //  calculate overall review
    let overallRating = parseFloat(sum / count).toFixed(1); 

    // job rate calculate
    let found = 0;
    let notfound = 0;
    let neitherfound = 0;
    allreviews.map(obj => {
      if(obj.jobfound === "Yes") {
        found++;
      } else if(obj.jobfound === "No") {
        notfound++;
      }else {
        neitherfound++;
      }
    })
    let rate =  parseFloat( ( (found / (count - neitherfound) ) * 100 ) ).toFixed(2);
    // chart data
    let chartData = { "name": bootcamp[0].customName, "rate": parseInt(rate) };

    console.log("rate", rate)
    console.log("chartData", chartData);
    console.log("allreviews: ", allreviews);
    console.log("sum: ", sum);
    console.log("count: ", count);
    console.log("overallRating: ", overallRating);

    // update in db
    // i again had to parse them to int, 
    // float otherwise they stored as strings in DB
    Bootcamp.update(
      { schoolname: { $eq: name } },
      {
        $set: {
          reviews: allreviews,
          overall: parseFloat(overallRating),
          reviewsCount: parseInt(count),
          jobrate: parseFloat(rate),
          chartData: chartData
        }
      },
      (err, result) => {
        res.send(
          err === null
            ? { msg: "Successfully updated bootcamp and inserted new review!" }
            : { msg: err }
        );
      }
    );
  }); 
  } catch(err) {
    console.error(err.message);
    // res.status(500).send("Server Error");
  }
});

module.exports = router;

