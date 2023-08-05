var request = require('request');

var endpoint = 'https://postman-echo.com/post?foo1=bar1&foo2=bar2'
request.post(
    endpoint,
    { json: { key: 'value' } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
	    console.log('response:');
            console.log(body);
        }
    }
);
