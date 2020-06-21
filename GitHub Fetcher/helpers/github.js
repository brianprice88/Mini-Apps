const request = require('request');

let getReposByUsername = (user, callback) => {
  let options = {
    url: `https://api.github.com/users/${user}/repos`,
    headers: {
      'User-Agent': 'request',
      'Authorization': `token ${process.env.TOKEN}`
    }
  };
 request(options, callback)
}

module.exports.getReposByUsername = getReposByUsername;