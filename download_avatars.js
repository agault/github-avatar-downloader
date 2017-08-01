
var request = require('request');



var GITHUB_USER = "agault";
var GITHUB_TOKEN = "a51410f8cd2ebcb0b1884aa1d30cc200a3156548";

function getRepoContributors(repoOwner, repoName, callback) {
  if (!repoOwner  || !repoName) {
    console.log("error")
    return;
  }
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
    var options = {
       url: requestURL,
        headers: {
          'User-Agent': 'Bacon'
        }
    };

 request(options, function(err, response, body) {
   if (err) throw err;
   //console.log('Response Status Code:', body);
     var parsebody = JSON.parse(body);
     //console.log(parsebody)
     callback(err, parsebody)
 });
}
var callback = function(err, result) {
  // console.log("Errors:", err);
  // console.log("Result:", result);
  result.forEach(function (user){
    var filePath = "./avatars/" + user.login + ".png"
    downloadImageByURL(user.avatar_url, filePath)
  })
};
getRepoContributors(process.argv[2], process.argv[3], callback)

function downloadImageByURL(url, filePath) {
  var request = require('request');
  var fs = require('fs');

  request.get(url)
    .on('error', function (err){
      throw err;
    })
    .on('response', function (response) {                           // Note 3
      console.log('Response Status Code: ', response.statusCode);
    })
    .pipe(fs.createWriteStream(filePath));               // Note 4
}
//console.log(downloadImageByURL("https://avatars2.githubusercontent.com/u/2741?v=3&s=466", "avatars/kvirani.jpg"))

// downloadImageByURL()
