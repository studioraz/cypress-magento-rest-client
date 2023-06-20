const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (searchCriteria) {
        const query = 'searchCriteria=' + searchCriteria;
        const endpointUrl = util.format('/products?%s', query);
        return restClient.get(endpointUrl);
    };

    module.renderList = function (searchCriteria, currencyCode = 'USD', storeId = 1) {
        const query = 'searchCriteria=' + searchCriteria;
        const endpointUrl = util.format(
            '/products-render-info?%s&storeId=%d&currencyCode=' + encodeURIComponent(currencyCode),
            query,
            storeId
        );
        return restClient.get(endpointUrl);
    };

    module.create = function (productAttributes) {
        return restClient.post('/products', productAttributes);
    };

    module.update = function (productSku, productAttributes) {
        const endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
        return restClient.put(endpointUrl, productAttributes);
    };

    module.delete = function (productSku) {
        const endpointUrl = util.format('/products/%s', encodeURIComponent(productSku));
        return restClient.delete(endpointUrl);
    };

    return module;
};
