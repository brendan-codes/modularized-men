const dogs = require('./../controllers/dogs');

module.exports = (app) => {
    app.get('/api/dogs', dogs.index)
        .get('/api/dogs/:id', dogs.findById)
        .post('/api/dogs', dogs.create)
        .delete('/api/dogs/:id', dogs.delete);
        // .put('/api/dogs/:id', dogs.edit);
}