const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded ({extended: true}));
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/api', (req, res) => {res.send('hi')})


app.listen(3000, () => {console.log('server listening on port 3000!')})

