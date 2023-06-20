const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function () {
        return restClient.get('/categories');
    };

    module.create = function (categoryAttributes) {
        return restClient.post('/categories', categoryAttributes);
    };

    module.update = function (categoryId, categoryAttributes) {
        const endpointUrl = util.format('/categories/%d', categoryId);
        return restClient.put(endpointUrl, categoryAttributes);
    };

    module.delete = function (categoryId) {
        const endpointUrl = util.format('/categories/%d', categoryId);
        return restClient.delete(endpointUrl);
    };

    return module;
};
