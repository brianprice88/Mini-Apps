import React from 'react';

var Json = (props) => (
    <div>
        <form id='form'>
            <div>
                <textarea rows='50' cols='100' placeholder='Json goes here' onChange={function (event) { props.handleJson(event) }}></textarea>
            </div>
            <button onClick={function (event) { props.handleSubmit(event) }}>Submit</button>
        </form>
    </div>

)

export default Json;



