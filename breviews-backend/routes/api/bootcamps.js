const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator/check");
const Bootcamps = require('../../models/Bootcamps');

// @route  GET api/landing
// access  Public
router.get("/landing", function(req, res) {
  var db = req.db;
  var collection = db.get("bootcamps");
  // on landing page excluding all reviews in order to make page load faster
  collection.find(
    {},
    {
      sort: { schoolname: 1, logo: 1, overall: 1, lastreview: 1 },
      fields: { reviews: 0 } // deprecated warning
    },
    (err, data) => {
      if (err) {
        console.log(err);
      }
      res.json(data);
    }
  );
});

// @route  GET api/bootcamps/:name
// access  Public
router.get("/bootcamps/:name", function(req, res) {
  const name = req.params.name;
  var newArr;
  var db = req.db;
  var collection = db.get("bootcamps");
  collection.find({ schoolname: { $eq: name } }, (err, docs) => {
    // newArr = docs;
    // // get all reviews array
    // var allreviews = newArr[0].reviews;
    // // send all reviews
    res.json(docs);
  });
});

// WORKS BUT NOT ENTIRELY SURE ABOUT ARCHITECTURE
// @route  POST api/bootcamps/:name
// access  Public
router.post("/bootcamps/:name", function(req, res) {
  const name = req.params.name;

  let db = req.db;
  let collection = db.get("bootcamps");

  var newArr;
  collection.find({ schoolname: { $eq: name } }, (err, results) => {
    newArr = results;
    // get all reviews
    var allreviews = newArr[0].reviews;
    // insert the new review
    allreviews.push(req.body);
    // compute sum of stars
    // make sure star value is integer from submit
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
    let chartData = { "name": name, "rate": parseInt(rate) };

    console.log("rate", rate)
    console.log("chartData", chartData);
    console.log("allreviews: ", allreviews);
    console.log("sum: ", sum);
    console.log("count: ", count);
    console.log("overallRating: ", overallRating);

    // update in db
    collection.update(
      { schoolname: { $eq: name } },
      {
        $set: {
          reviews: allreviews,
          overall: parseFloat(overallRating),
          reviewsCount: parseInt(count),
          jobrate: parseFloat(rate),
          charData: chartData
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
});

module.exports = router;

