var express = require('express');
var app = express();

let data = {
  tweets: [
    { id: 1, body: 'Hello React', timestamp: new Date() },
    { id: 2, body: 'Hello Flux++', timestamp: new Date() },
    { id: 3, body: 'Hello Redux', timestamp: new Date() }
  ]
}

app.get('/tweets', function (req, res) {
  res.json(data.tweets);
});

// app.post('/tweets', function (req, res) {
//   res.json(data.tweets);
// });

app.listen(5000, function () {
  console.log('Example app listening on port 5000!');
});
