//server connection

const express = require('express')
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', express.static(path.join(__dirname, 'public')))

//DB connection

const mysql = require('mysql')
const db = mysql.createConnection({
    user: 'root',
    password: '',
    database: 'Checkout'
});

db.connect();

//

app.get('/api', (req, res) => (
    db.query("SELECT * FROM Users",
        (err, data) => {
            if (err) { res.send(err) }
            else { res.send(data) }
        }
    )
)
);

app.listen(3000, () => (console.log('server listening on port 3000!')))
