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
    // if ip address is true
    if(ipAddress) {
        // make ip address an array
        const list = ipAddress.split(',');
        // assign address to last element of array
        ipAddress = list[list.length -1];
    } else {
        // get new ip address?
        ipAddress = req.connection.remoteAddress;
    }
    // send response object to client
    res.json({
       ip: ipAddress,
       "language": req.headers['accept-language'].split(',')[0],
    //   detect operating system
       OS: agent.os.family,
    });
})

app.listen(8080, function() {
    console.log('Listening on port 8080');
});