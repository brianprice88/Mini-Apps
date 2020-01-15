import React from 'react';
import ReactDom from 'react-dom';
import Json from './Json.jsx';
import Csv from './Csv.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          json: '',
          Csv: '', 
        }
     this.handleJson = this.handleJson.bind(this); // update this.state.json as it's added to textarea
     this.handleSubmit = this.handleSubmit.bind(this); //send this.state.json to server when json text is submitted, get csv and set it to csv state as callback
    }

    handleJson (event) {
    event.preventDefault();
    this.setState({
        json: event.target.value
    })
    };

    handleSubmit (event) {
    event.preventDefault();
    var json = this.state.json;
    axios.get('/api', {params: json})
    .then(response => {
        this.setState({
            Csv: response.data
        })
    })
    document.getElementById('form').reset();
    };


    render() {
        return (
            <div>
            < Json handleJson = {this.handleJson} handleSubmit={this.handleSubmit}/>
            <Csv output = {this.state.Csv}/>
            </div>
        )

    }
    
}






export default App;