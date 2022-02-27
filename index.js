/*
 * Title: Uptime monitoring application
 * Description: A restful api to monitor up or down time of user defined links
 * Author: Jehad Hosain
 * Date: 25/02/2022
 */

// dependencies
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const envivonment = require('./helpers/environments');

// app object - module scaffolding
const app = {};
// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(envivonment.port, () => {
        console.log(`listening to port ${envivonment.port}`);
    });
};

// handle request response
app.handleReqRes = handleReqRes;
// start the server
app.createServer();
