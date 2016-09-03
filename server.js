var express = require('express');

var app  = express();

app.use(express.static('public'));

app.listen(3000, function(){
  console.log("Node Server started at port 3000");
});
