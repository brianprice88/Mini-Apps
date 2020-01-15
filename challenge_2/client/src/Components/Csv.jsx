import React from 'react';
import ReactDom from 'react-dom';

var Csv = (props) => (
//Csv output to go here
<div>
    {props.output.map(array => 
    <div>{array}</div>)
    }
</div>

)

export default Csv;