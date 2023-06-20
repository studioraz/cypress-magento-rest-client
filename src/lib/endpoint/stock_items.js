const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (sku) {
        const endpointUrl = util.format('/stockItems/%s', encodeURIComponent(sku));
        return restClient.get(endpointUrl);
    };

    // MSI
    module.getSalableQty = function (sku, stockId) {
        const endpointUrl = util.format(
            '/inventory/get-product-salable-quantity/%s/%d',
            encodeURIComponent(sku),
            encodeURIComponent(stockId)
        );
        return restClient.get(endpointUrl);
    };

    // MSI
    module.isSalable = function (sku, stockId) {
        const endpointUrl = util.format(
            '/inventory/is-product-salable/%s/%d',
            encodeURIComponent(sku),
            encodeURIComponent(stockId)
        );
        return restClient.get(endpointUrl);
    };

    return module;
};
