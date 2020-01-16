const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(express.static('public'));


app.listen(3000, () => (console.log('express listening on port 3000!')))