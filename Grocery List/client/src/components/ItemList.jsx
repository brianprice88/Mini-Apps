import Item from './Item.jsx';
import React from 'react';

var ItemList = (props) => (
  <div>
    <ul className="groceries">
      {props.items.map(item =>
        <li>
          {<Item item={item.Item} quantity={item.Quantity} deleteItem={props.deleteItem} updateItem={props.updateItem} />}
        </li>)}
    </ul>

  </div>
)




export default ItemList;