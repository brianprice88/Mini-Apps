import React from 'react';
import Movie from './Movie.jsx';
import SearchResult from './searchResult.jsx'

var MovieList = (props) => (

    <div className='movieList'>
        <table className='movieTable'>
            {props.showMovies ? <thead id='movieListHeader'><tr><th>Your Movies</th></tr></thead> : ''}
            {props.showSearch ? <thead id='movieListHeader'><tr><th>Search Results</th></tr><button onClick={props.goBack}>Go Back</button>
            </thead> : ''}
            <tbody>
                {props.showMovies ? props.movies.map((movie, index) => <Movie movie={movie} key={index} deleteMovie={props.deleteMovie} />) : ''}
                {props.showSearch ? props.searchResult.map((result, index) => <SearchResult searchResult={result} key={index} />) : ''}
            </tbody>
        </table>
    </div>


)


export default MovieList