const express = require('express');
const path = require('path');
const app = express();

app.get('/*', function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ "hello": "world!" }));
});

// default Heroku PORT
app.listen(process.env.PORT || 3000);
