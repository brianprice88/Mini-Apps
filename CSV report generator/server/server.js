const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const controllers = require('./controllers.js')

app.use('/', express.static(path.join(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(cors());

app.get('/api', (req, res) => {
controllers.get (req, res);
})

app.listen(3000, () => {console.log('express listening on port 3000!')})


