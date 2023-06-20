const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (rateId) {
        const endpointUrl = util.format('/taxRates/%d', rateId);
        return restClient.get(endpointUrl);
    };

    module.create = function (rateAttributes) {
        return restClient.post('/taxRates', rateAttributes);
    };

    module.update = function (rateId, rateAttributes) {
        const endpointUrl = util.format('/taxRates/%d', rateId);
        return restClient.put(endpointUrl, rateAttributes);
    };

    module.delete = function (rateId) {
        const endpointUrl = util.format('/taxRates/%d', rateId);
        return restClient.delete(endpointUrl);
    };

    return module;
};
