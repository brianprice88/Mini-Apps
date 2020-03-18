import React from 'react';

var Csv = (props) => (
    <div>
        {props.output.map(array =>
            <div>{array}</div>)
        }
    </div>

)

export default Csv;