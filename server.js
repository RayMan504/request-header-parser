const express = require('express');
// useragent module that identifies IP address, language and operating system for my browser
const useragent = require('useragent');
const app = express();


app.get('/', function(req, res) {
    // find agent in req object
    const agent = useragent.parse(req.headers['user-agent']);
    // find ip address in req object
    const ipAddress = req.headers['x-forwarded-for'];
    console.log(agent);
    console.log(ipAddress);
    res.send('Hello World');
})

app.listen(8080, function() {
    console.log('Listening on port 8080');
});