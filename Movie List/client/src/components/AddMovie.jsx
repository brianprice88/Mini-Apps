import React from 'react'


var AddMovie = (props) => (
    <div className='addMovie'>
        <form id = 'addMovieForm'>
            <input type='text' name='newMovie' required placeholder='Add A Movie' onChange = {props.changeHandler}></input>
            <button className='submit' onClick = {props.addMovie}>Add</button>
        </form>
    </div>
)

export default AddMovie