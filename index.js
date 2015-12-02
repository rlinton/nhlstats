// index.js

// BASE SETUP
// =============================================================================

// call the packages we need
//Load the request module
var request = require('request');
var parser = require('xml2json');
//Lets try to make a HTTP GET request to modulus.io's website.
request('http://app.cgy.nhl.yinzcam.com/V2/Stats/Standings', function (error, response, body) {
    if (!error && response.statusCode == 200) {
        var xml = body;
        console.log(xml);
        var json = parser.toJson(xml); //returns a string containing the JSON structure by default
        //console.log(json);
        var obj = JSON.parse(json);
    }
});

