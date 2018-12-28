//`npm run build` to build
//`npm start` to run locally

const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
//require('dotenv').load();
const port = 8080;
const app = express();
app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
console.log("Listening on port " + port);
app.listen(port);
