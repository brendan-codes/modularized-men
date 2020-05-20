const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [2, "Your dog's name must be 2 characters or more!"]
    },
    color: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: 1
    },
    isAdopted: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

mongoose.model("Dog", DogSchema);