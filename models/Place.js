import mongoose from "mongoose"

const placeSchema = new mongoose.Schema({
  location: {
    type: String, 
    required: true, 
    minlength: [1, "Must be at least 1 character"],
    maxlength: [100, "Must be less that 100 characters"]
  },
  title: {
    type: String,
    required: true,
    minlength: [1, "Must be at least 1 character"],
    maxlength: [100, "Must be less that 100 characters"]
  },
  description: {
    type: String,
    required: true,
    minlength: [1, "Must be at least 1 character"],
  },
  star: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: true
  },
  long: {
    type: Number,
    required: true
  },
  lat: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  }
  /* Make relationship between place and a user that created it */
});

module.exports = mongoose.models.Place || mongoose.model("Place", placeSchema);