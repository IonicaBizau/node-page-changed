// Dependencies
var Http = require("http")
  , PageChanged = require("../lib")
  ;

// Constants
const PORT = 8000;

// Create a http server
Http.createServer(function (req, res) {
    res.end(Math.floor(new Date().getTime() / 1000).toString());
}).listen(PORT);

// Detect changes
var pc = new PageChanged({
    page: "http://localhost:" + PORT
  , interval: 1000
}, function (err, html) {
    console.log(html);
});
