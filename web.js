var express = require('express');

var app = express.createServer(express.logger());

var datastr;

fs.readFileSync('index.html', function(err, data) {
  if (err) throw err;
  datastr = data;
});

app.get('/', function(request, response) {
  response.send(datastr);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
