// NOTE:  Keep Business logic layer here (as well as db access)

const Bootcamp = require('../models/Bootcamps');

const findLandinPageData = async () => {
    try {
        return await Bootcamp.find().select('-reviews');
    } catch (err) {
        throw new Error(err.message);
    }
}

const findBootcampPageData = async (name) => {
    try {
        return await Bootcamp.find({ schoolname: { $eq: name } }).select('-chartData');
    } catch (err) {
        throw new Error(err.message);
    }
}

const findSearchOptions = async () => {
    try {
        return await Bootcamp.find({}, 'customName');
    } catch (err) {
        throw new Error(err.message);
    }
}

const findResultsCategory = async () => {
    try {
        return await Bootcamp.find().select('-reviews');
    } catch (err) {
        throw new Error(err.message);
    }
}
// TODO: revise this code - error handling is incorrect
const findAndUpdateReviews = async (name, newReview) => {
    try {
        return await Bootcamp.find({ schoolname: { $eq: name } }, (err, bootcamp) => {
            // all reviews
            var allreviews = bootcamp[0].reviews;
            // insert new review
            allreviews.push(newReview);
            // sum of stars 
            var sum = 0;
            allreviews.map(obj => {
                sum += obj.star;
            });
            // review count
            let count = allreviews.length;
            // overall review
            let overallRating = parseFloat(sum / count).toFixed(1);

            // update in db
            // i again had to parse them to int, 
            Bootcamp.updateOne(
                { schoolname: { $eq: name } },
                {
                    $set: {
                        reviews: allreviews,
                        overall: parseFloat(overallRating),
                        reviewsCount: parseInt(count),
                    }
                },
                // TODO: no sure about this part. handle this in redux //  payload.data.data in redux reducers
                (err, result ) => {
                    err !== null ? console.log(err.message): console.log("Successfully updated bootcamp and inserted new review")
                }
            );
        });
    } catch (err) {
        throw new Error(err.message);
    }
}

module.exports = {
    findLandinPageData,
    findBootcampPageData,
    findSearchOptions,
    findResultsCategory,
    findAndUpdateReviews
}