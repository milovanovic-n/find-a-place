import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "Please enter your first name"],
    minlenght: [2, "Must be at least 2 characters long"],
    maxlenght: [20, "Must be less than 20 characters long"]
  },
  lastName: {
    type: String,
    required: [true, "Please enter your last name"],
    minlenght: [2, "Must be at least 2 characters long"],
    maxlenght: [20, "Must be less than 20 characters long"]
  },
  email: {
    type: String,
    required: [true, "Please enter your email address"],
    unique: [true, "User with this email already exists"],
  },
  phoneNumber: {
    type: String,
    validate: {
      validator: function(num) {
        return /\d{3}-\d{3}-\d{3}/.test(num)
      },
      message: props => `${props.value} is not a valid phone number!` 
    }
  },
  password: {
    type: String,
  },
  /* Make relationship between user and posts he created */
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: "Place"}]
});

module.exports = mongoose.models.User || mongoose.model("User", userSchema);