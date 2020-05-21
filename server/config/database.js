const mongoose = require('mongoose');

// connect to db and silence deprecation errors
// mongoose.set("runValidators", true);
mongoose.connect('mongodb://localhost/dog-db3', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// require the model here, before routes are called
require('./../models/Dog');