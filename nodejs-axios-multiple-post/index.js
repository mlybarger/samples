const axios = require('axios');

const URL='https://postman-echo.com/post?foo1=bar1&foo2=bar2';

async function sendRequests() {
  const requestData = {
    key1: 'value1',
    key2: 'value2'
  };

  const requestConfig = {
    method: 'post',
    url: URL,
    data: requestData
  };

  try {
    const requests = Array.from({ length: 3 }, () => axios(requestConfig));
    const responses = await Promise.all(requests);

    responses.forEach((response, index) => {
      console.log(`Response headers from request ${index + 1}:`, response.headers);
      console.log(`Response data from request ${index + 1}:`, response.data);
    });
  } catch (error) {
    console.error('Error sending requests:', error.message);
  }
}

sendRequests();

