const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BootcampSchema = new Schema({
  _id: Schema.Types.ObjectId,
  schoolname: {
    type: String
  },
  customName: {
    type: String
  },
  reviews: [
    {
      id: String,
      customerName: String,
      date: String,
      pros: String,
      cons: String,
      dateGraduated: Number,
      star: Number,
      jobfound: String,
      review: String,
    }
  ],
  logo: {
    type: String
  },
  overall: {
    type: Number
  },
  reviewsCount: {
    type: Number
  },
  jobrate: {
    type: Number
  },
  chartData: {
    name: {
      type: String
    },
    rate: {
      type: Number
    }
  },
  website: {
    type: String
  },
  definition: {
    type: String
  },
  mode: {
    type: String
  },
  itbackground: {
    type: String
  },
  location: {
    type: String
  },
  duration: {
    type: String
  },
  price: {
    type: String
  }
});

// 3rd parameter is collection name
module.exports = Bootcamp = mongoose.model("bootcamp", BootcampSchema, 'bootcamps');


