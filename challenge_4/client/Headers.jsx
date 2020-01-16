import React from 'React'
//player who's going can click a header column to drop a piece there, which changes to other player's turn
//NEED TO ADD CONDITION THAT THIS BUTTON ONLY EXISTS IF COLUMN ISN'T FULL
var Headers = (props) => (
    <th><button onClick = {(event) => (props.changeTurn(event))}>{props.name} Drop piece here</button> </th>
)

export default Headers