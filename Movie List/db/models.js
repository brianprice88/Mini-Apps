const mongoose = require('mongoose');
const movie = require('./index.js')

const models = {

    get: () => (
        movie.find()
    ),

    post: (title) => (
        movie.create({ title })

    ),

    delete: (title) => (
        movie.deleteOne({ title })
    )
}

module.exports = models;