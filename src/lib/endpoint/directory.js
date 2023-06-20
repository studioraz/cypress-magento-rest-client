const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.countries = function () {
        const endpointUrl = util.format('/directory/countries');
        return restClient.get(endpointUrl);
    };

    module.currency = function () {
        const endpointUrl = util.format('/directory/currency');
        return restClient.get(endpointUrl);
    };

    return module;
};
