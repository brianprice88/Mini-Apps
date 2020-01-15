import React from "React";
import ReactDom from "React-Dom";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkout: true,
            f1: false,
            f2: false,
            f3: false,
            purchase: false,
            name: '',
            email: '',
            password: '',
            address_line_1: '',
            address_line_2: '',
            city: '',
            state: '',
            zip_code: '',
            credit_card_number: '',
            expiry_date: '',
            CVV: '',
            billing_zip: ''
        }
        this.togglef1 = this.togglef1.bind(this);
        this.togglef2 = this.togglef3.bind(this);
        this.togglef3 = this.togglef3.bind(this);
        this.togglePurchase = this.togglePurchase.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    handleSubmit (event) {
        event.preventDefault();
    }

    togglef1(event) {
        event.preventDefault();
        this.setState({
            checkout: !this.state.checkout,
            f1: !this.state.f1
        })
    };

    togglef2(event) {
        event.preventDefault();
        this.setState({
            f1: !this.state.f1,
            f2: !this.state.f2
        })
    };

    togglef3(event) {
        event.preventDefault();
        this.setState({
            f2: !this.state.f2,
            f3: !this.state.f3
        })
    };

    togglePurchase(event) {
        event.preventDefault();
        this.setState({
            f3: !this.state.f3,
            purchase: !this.state.purchase
        })
    }


    //purchase button onClick = collect data, send axios, reset form to homepage

    render() {
        return (
            <div>
                {this.state.checkout ? (<button name="Checkout" onClick={this.togglef1}>Checkout</button>) : ''}
                {this.state.f1 ? (<F1 togglef2={this.togglef2} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}
 />) : ''}
                {this.state.f2 ? (<F2 togglef3={this.togglef3} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}
 />) : ''}
                {this.state.f3 ? (<F3 togglePurchase={this.togglePurchase} handleChange={this.handleChange} handleSubmit = {this.handleSubmit}
 />) : ''}
                {this.state.purchase ? (<button name="Purchase">Purchase</button>) : ''}
            </div>
        )
    }
}

var F1 = (props) => (
    <div>
        <form onSubmit = {props.handleSubmit}>
            <input type='text' name='name' placeholder='name' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='email' placeholder='email' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='password' placeholder='password' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <button name="next" onClick={function (event) { props.togglef2(event) }}>Next</button>
        </form>
    </div>
)

var F2 = (props) => (
    <div>
        <form onSubmit = {props.handleSubmit}>
            <input type='text' name='address_line_1' placeholder='address line 1' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='address_line_2' placeholder='address line 2' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='city' placeholder='city' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='state' placeholder='state' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='zip_code' placeholder='zip code' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <button name="next" onClick={function (event) { props.togglef3(event) }}>Next</button>
        </form>
    </div>
)

var F3 = (props) => (
    <div>
        <form onSubmit = {props.handleSubmit}>
            <input type='text' name='credit_card_number' placeholder='credit card #' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='expiry_date:' placeholder='expiry date (MMDDYY)' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='CVV' placeholder='CVV' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <input type='text' name='billing_zip' placeholder='billing zip code' onChange={function (event) { props.handleChange(event) }}
            ></input>
            <button name="next" onClick={function (event) { props.togglePurchase(event) }}>Next</button>
        </form>
    </div>
)

ReactDom.render(<App />, document.getElementById('app'))

export default App;