// const WebClient = require('javascript-web-client');

// const myApiWebClient = new WebClient('http://localhost:3000/');

// const path = 'smartiies';
// const options = {
//     /* request.js options object
//        see https://github.com/request/request
//     */
// }
// myApiWebClient.requestBodyAsJson(path, options)
//     .then(response => {
//         console.log(response); // This will log the response body, as an object.
//     });
// myApiWebClient.post

var Client = require('node-rest-client').Client;
 
var client = new Client();
 
// // direct way
// client.get("http://localhost:3000/smartiies", function (data, response) {
//     // parsed response body as js object
//     console.log(data);
//     // raw response
//     //console.log(response);
// });
 
// registering remote methods
// client.registerMethod("jsonMethod", "http://remote.site/rest/json/method", "GET");
 
// client.methods.jsonMethod(function (data, response) {
//     // parsed response body as js object
//     console.log(data);
//     // raw response
//     console.log(response);
// });

// set content-type header and data as json in args parameter
var args = {
    data: { bookmark: "http://colguin.com" },
    headers: { "Content-Type": "application/json" }
};

var argsWithError = {
    data: { bookmarkssss: "http://colguin.com" },
    headers: { "Content-Type": "application/json" }
};

//var assert = require('assert');


describe('BookSmart_RESTful_Client', function() {
  describe('ping', function() {
    it('should be able to get reply from server', function() {
      let pong = client.get("http://localhost:3000/smartiies", function (data, response) {
        //console.log(data);
      });
    });
  });
  describe('create smartii', function() {
    it('should be able to create a smartii (error)', function(done) {
      let listPromise = client.post("http://localhost:3000/smartiies", argsWithError, function (data, response) {
        //console.log(data);
        if(data.errors)
          done('error');
      });
      
      listPromise.on('error', function (err) {
        done(err);
      });
      
    });
    it('should be able to create a smartii', function(done) {
      let listPromiseNoError = client.post("http://localhost:3000/smartiies", args, function (data, response) {
        //console.log(data);
        if(data.errors)
          done('error');
        else done();
      });
      
      listPromiseNoError.on('error', function (err) {
        done(err);
      });
      
    });
  });
});
 
// registering remote methods
// client.registerMethod("postMethod", "http://remote.site/rest/json/method", "POST");
 
// client.methods.postMethod(args, function (data, response) {
//     // parsed response body as js object
//     console.log(data);
//     // raw response
//     console.log(response);
// });