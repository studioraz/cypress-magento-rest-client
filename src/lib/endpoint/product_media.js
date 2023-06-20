const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (productSku) {
        const endpointUrl = util.format('/products/%s/media', productSku);
        return restClient.get(endpointUrl);
    };

    module.get = function (productSku, mediaId) {
        const endpointUrl = util.format('/products/%s/media/%d', encodeURIComponent(productSku), mediaId);
        return restClient.get(endpointUrl);
    };

    module.create = function (productSku, productMediaAttributes) {
        const endpointUrl = util.format('/products/%s/media', encodeURIComponent(productSku));
        return restClient.post(endpointUrl, productMediaAttributes);
    };

    module.update = function (productSku, mediaId, productMediaAttributes) {
        const endpointUrl = util.format('/products/%s/media/%d', encodeURIComponent(productSku), mediaId);
        return restClient.put(endpointUrl, productMediaAttributes);
    };

    module.delete = function (productSku, mediaId) {
        const endpointUrl = util.format('/products/%s/media/%d', encodeURIComponent(productSku), mediaId);
        return restClient.delete(endpointUrl);
    };

    return module;
};
