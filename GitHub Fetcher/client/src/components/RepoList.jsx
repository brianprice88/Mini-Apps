import React from 'react';

const RepoList = (props) => (
  <div>
    <h4>The most-forked repos you've searched for are: </h4>
    <ol>{props.repos.map(repo => <li><a href={repo.url} target="_blank" >{repo.name} </a> </li>)}</ol>

  </div >
)

export default RepoList;