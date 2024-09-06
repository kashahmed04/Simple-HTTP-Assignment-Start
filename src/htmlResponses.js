// in node everything is private by default
const fs = require('fs'); // pull in the file system module (allows us to read and write from files)
// readFileSync method reads a file in synchronously (lock up the process until they complete)
// __dirname is a gloal in node of whichever folder this file is in
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// response object has all of node's HTTP response class's methods
// and attributes
// why do we need request if we don't use it for all variables**
const getIndex = (request, response) => {
  // status code and JSON object of the headers to send back
  // by using text/html the browser will render it as HTML instead of raw text
  response.writeHead(200, { 'Content-Type': 'text/html' });
  // writing the contents of index to go back to client
  response.write(index);
  // in HTTP standard we can only send one response per request
  // once response.end() fires, the response is sent back to the client
  // response is not sent until we call end
  // all data needs to be written to the response before we call end
  response.end();
};

const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;

/**
 * is this the same as the demo**
 * module.exports = {
    getIndex,
    getPage2
};
 */
