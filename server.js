const express = require('express');
// useragent module that identifies IP address, language and operating system for my browser
const useragent = require('useragent');
const app = express();

app.get('/', function(req, res) {
    res.send('hello world');
})

app.listen(8080, function() {
    console.log('Listening on port 8080');
});

app.get('/:address', function(req, res) {
    
})