let mongoose = require('mongoose');
// Creating the Model
let workoutModel = mongoose.Schema({
    Exercise: String,
    Sets: Number,
    Reps: String,
    Rest: String,
    Intesity: String,
    Lifted: String, // Update the 1st part and rename day 1 to lifted
    },
    {
        collections: "Assignment3"
    }
);
module.exports = mongoose.model('Assignment3', workoutModel);

