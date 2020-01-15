import React from "React";
import ReactDom from "React-Dom";

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        f1: false,
        f2: false,
        f3: false
      }
  }

  render() {
      return (
          <div>
              <button name="Checkout">Checkout</button>
              {this.state.f1 ? (<F1/>) : ''}
          </div>
      )
  }
}

var F1 = (props) => (
 <div>
     <form>

     </form>
 </div> 
)

ReactDom.render(<App />, document.getElementById('app'))

export default App;