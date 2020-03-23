import React from 'react';

var Item = (props) => (
  <div>
    <button onClick={function (event) { props.deleteItem(props.item, event) }}>Delete item</button>
    <span>{props.item}  </span>
    <span>{props.quantity}</span>
    <button onClick={function (event) { props.updateItem(props.item, props.quantity + 1, event) }}>Increase item quantity</button>
    <button onClick={function (event) { props.updateItem(props.item, props.quantity - 1, event) }}>Decrease item quantity</button>
  </div>
)



export default Item;