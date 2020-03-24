const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator/check");

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
router.get("/bootcamps/:name", function(req, res) {
  const name = req.params.name;
  var newArr;
  var db = req.db;
  var collection = db.get("bootcamps");
  collection.find({ schoolname: { $eq: name } }, (err, docs) => {
    newArr = docs;
    // get all reviews array
    var allreviews = newArr[0].reviews;
    // send all reviews
    res.json(allreviews);
  });
});

// WORKS BUT NOT ENTIRELY SURE ABOUT ARCHITECTURE
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
    let overallRating = parseInt(sum / count).toFixed(1);

    // console.log(" allreviews after push: ", allreviews);
    // console.log(" sum after push: ", sum);
    // console.log(" count after push: ", count);
    // console.log(" overallRating after push: ", overallRating);

    // update in db
    collection.update(
      { schoolname: { $eq: name } },
      {
        $set: {
          reviews: allreviews,
          overall: overallRating,
          reviewsCount: count
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

// // TODO: Couldn't figure out post yet
// router.post("/bootcamps/:name", function(req, res) {
//   const name = req.params.name;

//   let db = req.db;
//   let collection = db.get("reviewlist");

//   var newArr;
//   collection.find({ schoolname: { $eq: name } }, (err, results) => {
//     newArr = results;
//     console.log(" newArr: ", newArr);
//     // get all reviews
//     var allreviews = newArr[0].reviews;

//     // insert the new review
//     allreviews.push(req.body);

//     console.log(" allreviews after push: ", allreviews);

//     // compute sum of stars
//     var sum = 0;
//     allreviews.map(obj => {
//       console.log(typeof obj.star);
//       sum += obj.star;
//     });

//     console.log(" sum after push: ", sum);

//     // get review count
//     var count = allreviews.length;

//     console.log(" count after push: ", count);

//     //  calculate overall review
//     var overallRating = (sum / count).toFixed(1);

//     console.log(" overallRating after push: ", overallRating);

//     // set overall rating, reviews, count
//     newArr[0].overall = overallRating;
//     newArr[0].reviews = allreviews;
//     newArr[0].reviewsCount = count;

//     // without this i get ducplicate key error. doesnt work
//     // newArr[0]._id = null;

//     // update in db
//     collection.update(newArr, (err, result) => {
//       console.log("newArr before insert: ", newArr);
//       err === null
//         ? console.log("Successfully added new review")
//         : console.log("error:   ", err);
//       res.send(
//         err === null ? { msg: "Successfully added new review" } : { msg: err }
//       );
//     });
//   });

//   // console.log(req.body);
// });
