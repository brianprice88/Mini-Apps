import React from 'react';
import ReactDom from 'react-dom';
import Axios from 'axios';
import MovieList from './MovieList.jsx';
import AddMovie from './AddMovie.jsx';
import SearchMovies from './SearchMovies.jsx'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            showMovies: true,
            showSearch: false,
            newMovie: '',
            search: '',
            searchResult: ''
        }
        this.changeHandler = this.changeHandler.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.goBack = this.goBack.bind(this);
        this.addMovie = this.addMovie.bind(this);
        this.deleteMovie = this.deleteMovie.bind(this);
        this.getMovies = this.getMovies.bind(this);
    }

    getMovies() {
        Axios.get('/api/movies')
            .then(data => {
                var movies = data.data.map(item => item.title)
                this.setState({ movies: movies })
            })
            .catch(err => console.error(err))
    }

    componentDidMount() {
        this.getMovies();
    }

    changeHandler(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    addMovie(e) {
        e.preventDefault();
        var newMovie = this.state.newMovie;
        //below checks case not-sensitively that movie doesn't already exist in movie list
        if (this.state.movies.join().toUpperCase().includes(newMovie.toUpperCase())) { alert('movie was already added!'); return }
        Axios.post('/api/movies', { title: newMovie })
            .then(() => this.getMovies())
            .then(() => document.getElementById('addMovieForm').reset())
            .catch(err => console.error(err))
    }

    deleteMovie(e, movie) {
        e.preventDefault();
        Axios.delete(`/api/movies/${movie}`)
            .then(() => this.getMovies())
            .catch(err => console.error(err))
    }

    searchMovies(e) {
        e.preventDefault();
        document.getElementById('searchMovieForm').reset()
        var movies = this.state.movies;
        var search = this.state.search
        //the below checks if search result is included in any existing movies (case not sensitive)
        var result = movies.filter(movie => movie.toUpperCase().includes(search.toUpperCase()))
        this.setState({
            searchResult: result,
            showSearch: true,
            showMovies: false
        }, () => {
            if (this.state.searchResult.length === 0) {
                this.setState({
                    searchResult: ['sorry, no results found']
                })
            }
        })

    }

    goBack(e) {
        e.preventDefault();
        this.setState({
            showSearch: false,
            showMovies: true,
            searchResult: ''
        })
    }


    render() {
        return (
            <div>
                <AddMovie changeHandler={this.changeHandler} addMovie={this.addMovie} />
                <SearchMovies changeHandler={this.changeHandler} searchMovies={this.searchMovies} />
                <MovieList movies={this.state.movies} searchResult={this.state.searchResult} showMovies={this.state.showMovies} deleteMovie={this.deleteMovie} showSearch={this.state.showSearch} goBack={this.goBack} />
            </div>
        )
    }
}

export default App