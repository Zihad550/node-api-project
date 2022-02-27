/*
 * Title: Sample handler
 * Description: handler for sample route
 * Author: Jehad Hossain
 * Date: 27/02/2022
 *
 */

// module scaffolding
const handler = {};
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};

// module exports
module.exports = handler;
