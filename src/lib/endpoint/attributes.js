const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (searchCriteria) {
        const query = 'searchCriteria=' + searchCriteria;
        const endpointUrl = util.format('/products/attributes?%s', query);
        return restClient.get(endpointUrl);
    };

    module.create = function (categoryAttributes) {
        return restClient.post('/products/attributes', categoryAttributes);
    };

    module.update = function (attributeId, categoryAttributes) {
        const endpointUrl = util.format('/products/attributes/%d', attributeId);
        return restClient.put(endpointUrl, categoryAttributes);
    };

    module.delete = function (attributeId) {
        const endpointUrl = util.format('/products/attributes/%d', attributeId);
        return restClient.delete(endpointUrl);
    };

    return module;
};
