const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (sku) {
        const endpointUrl = util.format('/configurable-products/%s/children', encodeURIComponent(sku));
        return restClient.get(endpointUrl);
    };

    return module;
};
