const mongoose = require('mongoose');
const Dog = mongoose.model("Dog");


module.exports = {
    index: (req, res) => {
        Dog.find()
            .then(dogs => res.json(dogs))
            .catch(err => res.json(err))
    },
    findById: (req, res) => {
        Dog.findOne({_id: req.params.id})
            .then(dog => res.json(dog))
            .catch(err => res.json(err))
    },
    create: (req, res) => {
        Dog.create(req.body)
            .then(dog => res.json(dog))
            .catch(err => res.json(err))
    },
    delete: (req, res) => {
        Dog.deleteOne({_id: req.params.id})
            .then(dog => res.json(dog))
            .catch(err => res.json(err))
    }
}