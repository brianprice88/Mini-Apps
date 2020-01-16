import React from 'react';
import { render } from 'react-dom';
import Headers from './Headers.jsx';
import Rows from './Rows.jsx'

//Board component comprised of six rows (which will each have seven columns/squares)
//the top row should have a button for each column to drop a piece, depending on if that column has empty spaces
//also invoke changeTurn function whenever a piece is placed
//also include here the algorithm to keep track of which rows in which columns have been filled, and whether anyone has won
//write function to clear board if someone wins game

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            turn: 'black'
        }
        this.changeTurn = this.changeTurn.bind(this);
    }

        //function to be invoked when a header is clicked, which will change to the other player's turn. 
    changeTurn(event) {
        event.preventDefault();
        if (this.state.turn === 'black') {
            this.setState({ turn: 'red' })
        }
        else { this.setState({ turn: 'black' }) }
    }

    render() {
        return (
            <div>
                <h2 id='nowUp'>Now up: <span style={{ color: this.state.turn }}>{this.state.turn}</span></h2>
                <table>
                    <thead>
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                        < Headers changeTurn = {this.changeTurn} />
                    </thead>
                    <tbody>
                        < Rows />
                        < Rows />
                        < Rows />
                        < Rows />
                        < Rows />
                        < Rows />
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Board;