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
      customerName: String,
      date: Date,
      pros: String,
      cons: String,
      title: String,
      star: Number,
      review: String,
      email: String,
      linkedin: String
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
  location: [{
    type: String
  }],
  duration: {
    type: String
  },
  price: {
    type: String
  },
  totalPrice: {
    type: Number
  },
  tags: [{
    type: String,
  }]
});

// 3rd parameter is collection name
module.exports = Bootcamp = mongoose.model("bootcamp", BootcampSchema, 'bootcamps');


