const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require ('./routes');
const path = require('path')

app.use('/', express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.listen(3000, () => {console.log("listening on port 3000!")})
