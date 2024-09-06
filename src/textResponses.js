// adding a dynamic function that can be called to get us the current time
const hello = 'Hello World';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// content is text/plain (sends the time and sends hello)
const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

// is this how we export it**
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
