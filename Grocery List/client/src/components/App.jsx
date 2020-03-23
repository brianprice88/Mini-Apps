import AddItems from './AddItems.jsx';
import ItemList from './ItemList.jsx';
import Item from './Item.jsx';
import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentItems: [],
      newItem: '',
      newQuantity: ''
    }
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addItem(event) {
    event.preventDefault();
    var item = this.state.newItem;
    var quantity = this.state.newQuantity;
    axios.post('/api', { params: [item, quantity] })
      .then(response => {
        document.getElementById('form').reset();
        this.getItems();
      })
  };

  deleteItem(item, event) {
    event.preventDefault();
    axios.delete('/api', { params: item })
      .then(response => {
        this.getItems();
      })
  };

  updateItem(item, quantity, event) {
    event.preventDefault();
    if (quantity === 0) { this.deleteItem(item, event) }
    else {
      axios.put('/api', { params: [item, quantity] })
        .then(response => {
          this.getItems();
        })
    }
  }

  getItems() {
    axios.get('/api')
      .then(response => {
        this.setState({
          currentItems: response.data
        });
      })
  }

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <div>
        <AddItems addItem={this.addItem} handleInputChange={this.handleInputChange} />
        <ItemList items={this.state.currentItems} deleteItem={this.deleteItem} updateItem={this.updateItem} />
      </div>
    )
  }
}




export default App