const mongoose = require('mongoose');
const Dog = mongoose.model("Dog");


module.exports = {
    index: (req, res) => {
        Dog.find()
            .then(dogs => res.json(dogs))
            .catch(err => res.status(400).json(err))
    },
    findById: (req, res) => {
        Dog.findOne({_id: req.params.id})
            .then(dog => res.json(dog))
            .catch(err => res.status(400).json(err))
    },
    create: (req, res) => {
        Dog.create(req.body)
            .then(dog => res.json(dog))
            .catch(err => res.status(400).json(err))
    },
    delete: (req, res) => {
        Dog.deleteOne({_id: req.params.id})
            .then(dog => res.json(dog))
            .catch(err => res.status(400).json(err))
    },
    edit: (req, res) => {
        console.log(req.params.id);
        console.log(req.body);
        Dog.updateOne({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(dog => {
                console.log(dog);
                res.json(dog);
            })
            .catch(err =>{
                console.log(err);
                res.status(400).json(err)
            })
    }
}