"use strict";

const http = require("http")
    , PageChanged = require("../lib")
    ;

// Constants
const PORT = 8000;

// Create a http server
http.createServer((req, res) => {
    res.end(Math.floor(new Date().getTime() / 1000).toString());
}).listen(PORT);

// Detect changes
let pc = new PageChanged({
    page: "http://localhost:" + PORT
  , interval: 1000
}, (err, html) => {
    console.log(html);
});
