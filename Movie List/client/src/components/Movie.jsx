import React from 'react';

var Movie = (props) => (
    <div className = 'movie'>
        <tr>
        <td>{props.movie}</td>
        <button className='submit' onClick = {(e) => props.deleteMovie(e, props.movie)} >Remove</button>
        </tr>
    </div>
)




export default Movie