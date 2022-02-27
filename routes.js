/*
 * Title: Routes
 * Description: Application Routes
 * Author: Jehad Hossain
 * Date: 27/02/2022
 *
 */

// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

// it holds a map that which route will call which func
const routes = {
    sample: sampleHandler,
};
// module exports
module.exports = routes;
