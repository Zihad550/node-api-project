/*
 * Title: Environments
 * Description: Handle all environment ralated things
 * Author: Jehad Hossain
 * Date: 27/02/2022
 *
 */

// dependencies

// module scaffolding
const environments = {};

environments.staging = {
    port: 8000,
    envName: 'staging',
};
environments.production = {
    port: 5000,
    envName: 'production',
};

// determine which environment was passed
const currentEnvironment =
    typeof process.env.NODE_ENV === 'staging' ? process.env.NODE_ENV : 'staging';
// export the corresponding environment object
const environmentToExport =
    typeof environments[currentEnvironment] === 'object'
        ? environments[currentEnvironment]
        : environments.staging;

// export module
module.exports = environmentToExport;
