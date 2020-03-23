const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('connected to Mongoose!')
});

let repoSchema = new mongoose.Schema({
  name: String,
  url: { type: String, unique: true },
  user: String,
  forks: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoInfo) => {
  var thisRepo = new Repo(repoInfo);
  thisRepo.save(function (err, success) {
    if (err) { console.error(err) }
    else { console.log('record created!') }
  })
}

let findAll = (callback) => (
  Repo.find()
    .then(response => response.map(item => item._doc))
    .then(array => array.sort((a, b) => b.forks - a.forks))
    .then(sorted => {
      if (sorted.length > 25) {
        callback(sorted.slice(0, 24))
      } else {
        callback(sorted)
      }
    })
    .catch((err) => console.error(err))
)

module.exports.save = save;
module.exports.findAll = findAll;