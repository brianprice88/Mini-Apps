import React from 'react';
import ReactDom from 'react-dom';
import Json from './Json.jsx';
import Csv from './Csv.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          json: '',
          Csv: '', 
        }
     this.handleJson = this.handleJson.bind(this); // update this.state.json as it's added to textarea
     this.handleSubmit = this.handleSubmit.bind(this); //send this.state.json to server when json text is submitted
     this.postCsv = this.postCsv.bind(this); // when server returns Csv from json request, update the state so Csv component will render
    }

    // handleJson () {

    // };

    // handleSubmit () {

    // };

    // postCsv () {

    // };

    render() {
        return (
            <div>
            < Json />
            <Csv output = {this.state.Csv}/>
            </div>
        )

    }
    
}






export default App;