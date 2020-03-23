import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'Axios';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: []
    }
  }
  getRepos() {
    Axios.get('/repos')
      .then((response) => {
        this.setState({
          repos: response.data
        })
      }
      )
      .catch(function (err) {
        console.error(err)
      })
  }
  componentDidMount() {
    this.getRepos()
  }
  search(term) {
    Axios.post('/repos', { user: term })
      .then(function (response) {
        console.log(`${term} was searched`);
      })
      .catch(function (error) {
        console.error(error)
      })
  }
  render() {
    return (<div>
      <h1>Github Fetcher</h1>
      <Search onSearch={this.search.bind(this)} />
      <RepoList repos={this.state.repos} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));