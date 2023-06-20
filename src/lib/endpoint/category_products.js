const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (categoryId) {
        const endpointUrl = util.format('/categories/%d/products', categoryId);
        return restClient.get(endpointUrl);
    };

    return module;
};
