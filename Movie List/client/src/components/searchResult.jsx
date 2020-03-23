import React from 'react';

var SearchResult = (props) => (
    <div className = 'movie'>
    <tr>
   <td> {props.searchResult}</td>
    </tr>
    </div>
)



export default SearchResult;