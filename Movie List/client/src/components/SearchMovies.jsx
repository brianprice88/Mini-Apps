import React from 'react';

var SearchMovies = (props) => (
    <div className='searchMovies'>
        <form id='searchMovieForm'>
        <input type='text' name = 'search' placeholder='Search For A Movie' required onChange = {props.changeHandler}></input>
        <button className='submit' onClick = {props.searchMovies}>Search</button>
        </form>
    </div>
)

export default SearchMovies