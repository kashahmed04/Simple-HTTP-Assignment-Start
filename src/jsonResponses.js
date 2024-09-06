const text = require('./textResponses.js');

// creates a JSON object of hello text from textResponses
const getHelloJSON = (request, response) => {
  const helloJSON = {
    message: text.hello, // do we need a comma here or no**
  };
  const stringMessage = JSON.stringify(helloJSON);
  // converts a JS object into a JSON string as the object**

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// similar function for the time
const getTimeJSON = (request, response) => {
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
