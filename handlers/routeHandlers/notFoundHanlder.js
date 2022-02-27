/*
 * Title: Not found route handler
 * Description: Handles not found route
 * Author: Jehad Hossain
 * Date: 27/02/2022
 *
 */
// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found',
    });
};

// module exports
module.exports = handler;
