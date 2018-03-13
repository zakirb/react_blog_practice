var express = require('express');
var mongoose = require('mongoose');
var path = require('path');

var app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, 'client', 'build')));

app.get('*', (req,res) => {
  res.sendFile(__dirname, 'client', 'build', 'index.html');
});

app.listen( PORT, () => {
  console.log(`App is listening on ${PORT}`);
});
