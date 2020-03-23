const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/movielist');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {console.log('connected!')});

var movieSchema = new mongoose.Schema ({
    title: {type: String, unique: true}
});

var Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;