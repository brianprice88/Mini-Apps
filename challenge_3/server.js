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

app.post('/api', (req, res) => {
    var user = req.body.purchase;
    console.log(user)
    db.query(`Insert Into Users (name, email, password, address_line_1, address_line_2, city, state, zip_code, credit_card_number, expiry_date, CVV, billing_zip) Values ("${user.name}", "${user.email}", "${user.password}", "${user.address_line_1}", "${user.address_line_2}", "${user.city}", "${user.state}", "${user.zip_code}", "${user.credit_card_number}", "${user.expiry_date}", "${user.CVV}", "${user.billing_zip}")`,
        (err, data) => {
            console.log(err)
            if (err) { res.send(err) }
            else { res.send(data) }
        }
    )
    }
);

app.listen(3000, () => (console.log('server listening on port 3000!')))
