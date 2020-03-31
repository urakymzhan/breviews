const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BootcampSchema = new Schema({
  _id: Schema.Type.ObjectId,
  schoolname: {
    type: String,
    trim: true,
    required: true
  },
  reviews: [
    {
      // uuid id
      id: String,
      name: String,
      date: Date,
      pros: String,
      cons: String,
      dateGraduated: Date,
      star: Number
    }
  ],
  logo: {
    type: String,
    required: true
  },
  overall: {
    type: Number,
    required: true
  },
  lastreviw: {
    id: String,
    name: String,
    date: Date,
    pros: String,
    cons: String,
    dateGraduated: Date,
    star: Number
  }
});

module.exports = mongoose.model("BootcampSchema", BootcampSchema);

// Correct EXAMPLE:

// data: [
//     id: String, //or number, whatever you need
//     name: String,
//     description: String,
//     category: String,
//     points: Number,
//     startDate​:​ Date,
//     endDate​: ​Date,
//     isActive​: ​Boolean​,
//     alreadyAnswered​:​ Boolean​,
//     questions:[{
//             id: String, //or again, number
//             text: String,
//             type: String,
//             options: [
//                 {
//                     id: String, //or number
//                     text: String,
//                     value: String
//                 }
//             ]
//         }
//     ]
// ]
