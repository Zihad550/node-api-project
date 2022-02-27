/*
 * Title: handle Request Response
 * Description:Handle request and response
 * Author: Jehad Hossain
 * Date: 27/02/2022
 *
 */

// dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
const { notFoundHandler } = require('../handlers/routeHandlers/notFoundHanlder');
const routes = require('../routes');

// module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
    // request handle
    //* step1(get the url and parse it)
    // here true is used so that our url accepts query parameters
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    //* step-2 manage the method
    const method = req.method.toLowerCase();
    //* get the query strings
    const queryStringObject = parsedUrl.query;

    //* get header
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };

    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;

    // we know that node sends file data into buffer that's why we have to open the data event and listen to it
    // when it is done then we have to end it
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();
        chosenHandler(requestProperties, (statusCode, payload) => {
            const checkedStatusCode = typeof statusCode === 'number' ? statusCode : 500;
            const checkedPayload = typeof payload === 'object' ? payload : {};
            const payloadString = JSON.stringify(checkedPayload);
            // return the final response
            res.writeHead(checkedStatusCode);
            res.end(payloadString);
        });
        res.end('hello world');
    });
};
// module exports
module.exports = handler;
