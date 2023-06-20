const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (sku) {
        const endpointUrl = util.format('/configurable-products/%s/options/all', encodeURIComponent(sku));
        return restClient.get(endpointUrl);
    };

    return module;
};
