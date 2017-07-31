var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}
getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});
var GITHUB_USER = "agault";
var GITHUB_TOKEN = "a51410f8cd2ebcb0b1884aa1d30cc200a3156548";