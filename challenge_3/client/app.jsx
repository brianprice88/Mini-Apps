import React from "React";
import ReactDom from "React-Dom";

class App extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
      return (
          <div>
              <h1>hi</h1>
          </div>
      )
  }
}

ReactDom.render(<App />, document.getElementById('app'))

export default App;