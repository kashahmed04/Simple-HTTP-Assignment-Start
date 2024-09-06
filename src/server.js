// require keyword is used to import modules/files
// git add . adds every change then git commit
// -m 'message', then git push to make changes to github

// one of nodes built-in modules for servers
const http = require('http');
// if we use ./ in the name and give it the path to a file, that
// specific file will be loaded instead
// ./ indicates to require that it should load a file from a path
// instead of from the modules
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

// the port is just a number of a specific endpoint on a computer

// constant for which port our server will listen on
const port = process.env.PORT || process.env.NODE_PORT || 3000;

// start the server and listen for HTTP traffic
// why do we need request and response here usually if we don't
// use both
// how does it know to display things on the browser
// if there are no return statements**
// the request and response objects contain all the information
// about the client's request and the server's response
// we can then edit the response before sending it
const onRequest = (request, response) => {
  console.log(request.url);
  // handle the URL and decide which page to send back
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

// creates a new HTTP server taking in the function we specified
// the second parameter is called when the server sucessfully starts up
// why do we need another parameter here because on the demo we only put port**
http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on 127.0.0.1: ${port}`);
});
