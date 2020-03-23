const express = require('express');
const app = express();
const port = 3000;

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const router = require('./routes.js');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router);

app.listen(port, () => {console.log("listening on port 3000!")})