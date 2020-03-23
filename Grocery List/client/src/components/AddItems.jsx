import React from 'react';

var AddItems = (props) => (
  <div>
    <form id='form'>
      <label> Item
            <input name="newItem" placeholder='item' onChange={function (event) { props.handleInputChange(event) }} />
      </label>
      <label> Quantity
            <input name="newQuantity" placeholder='quantity' onChange={function (event) { props.handleInputChange(event) }} />
      </label>
      <button onClick={(event) => { props.addItem(event) }}>Add Item</button>
    </form>
  </div>
)



export default AddItems;