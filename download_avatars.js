
var request = require('request');

var options = {
  url: 'https://api.github.com/repos/jquery/jquery/contributors',
  headers: {
    'User-Agent': 'Bacon'
  }
};
request(options, function(err, response, body) {
  if (err) throw err;
  console.log('Response Status Code:', response.statusCode);
});

var GITHUB_USER = "agault";
var GITHUB_TOKEN = "a51410f8cd2ebcb0b1884aa1d30cc200a3156548";

function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
console.log(requestURL);
}


// getRepoContributors("jquery", "jquery", function(err, result) {
//   console.log("Errors:", err);
//   console.log("Result:", result);
// });
