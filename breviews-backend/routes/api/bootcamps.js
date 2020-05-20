const express = require("express");
const router = express.Router();
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
    const bootcamp = await Bootcamp.find({schoolname: { $eq: name }}).select('-chartData');
    res.json(bootcamp);
  } catch (err) {
    console.error(err.message);
    // res.status(500).send('Server Error');
  }
});

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

    console.log("allreviews: ", allreviews);
    console.log("sum: ", sum);
    console.log("count: ", count);
    console.log("overallRating: ", overallRating);

    // update in db
    // i again had to parse them to int, 
    // float otherwise they stored as strings in DB
    Bootcamp.updateOne(
      { schoolname: { $eq: name } },
      {
        $set: {
          reviews: allreviews,
          overall: parseFloat(overallRating),
          reviewsCount: parseInt(count),
        }
      },
      (err, result) => {
        res.send(
          err === null
          // this makes me write payload.data.data in redux reducers
            ? { msg: "Successfully updated bootcamp and inserted new review!", data: req.body }
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

// test out
router.post("/results", async (req, res) => {
  try {
    // console.log(req.body)
    res.json(req.body)
  } catch (err) {
    console.error(err.message);
  }
});

router.get("/autoCompleteNames", async (req, res) => {
  try {
    const customNamesObj = await Bootcamp.find({}, 'customName').select("-_id");
    const customeNamesArr = customNamesObj.map(obj => {return obj.customName } );
    // console.log(customeNamesArr);
    res.json(customeNamesArr);
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;

