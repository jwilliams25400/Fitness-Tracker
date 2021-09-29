const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    // For the schema of this attribute, define type and default
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    // Schema for each item in exercises array
    {
      type: {
        // TODO: For the schema of this attribute, define type and trim and required
        type: String,
        trim: true,
        required: "Please choose your exercise",
      },
      name: {
        // TODO: For the schema of this attribute, define type and trim and required
        type: String,
        trim: true,
        required: "Please choose your exercise",
      },
      duration: {
        type: Number,
        required: "Please enter a time",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
