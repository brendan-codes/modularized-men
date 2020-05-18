const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dog-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

require('./../models/Dog');