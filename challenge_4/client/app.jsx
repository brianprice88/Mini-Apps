import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          turn: true
        }
    }

    render() {
        return (
            <div>
            <h2 id = 'nowUp'>Now up: <span style={{color: 'purple'}}>{this.state.turn ? 'black' : 'red'}</span></h2>
              {/* <Board /> */}
            </div>
        )
    }

}




ReactDom.render(<App />, document.getElementById('app'))