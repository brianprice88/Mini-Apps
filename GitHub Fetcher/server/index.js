require('dotenv').config()

const express = require('express');
const github = require('../helpers/github.js');
const mongoose = require('../database/index.js');
const bodyParser = require('body-parser');

let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/repos', function (req, res) {
  var user = req.body.user;
  github.getReposByUsername(user, (err, data) => {
    var repos = JSON.parse(data.body);
    if (err) { console.error(err) }
    else {
      var schema = repos.map((repo) => {
        var name = repo.name;
        var url = repo.html_url;
        var user = repo.owner.login;
        var forks = repo.forks;
        return { name, url, user, forks }
      }
      )
      for (var i = 0; i < schema.length; i++) {
        mongoose.save(schema[i])
      }
    }
  })
  res.end()

});

app.get('/repos', function (req, res) {
  mongoose.findAll((data, err) => {
    if (data) { res.send(data) }
    else { res.sendStatus(200).send(err) }
  })
}
);

let port = 1128;

app.listen(port, function () {
  console.log(`listening on port ${port}`);
});

