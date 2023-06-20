const util = require('util');

module.exports = function (restClient) {
    const module = {};

    module.list = function (searchCriteria) {
        const query = 'searchCriteria=' + searchCriteria;
        const endpointUrl = util.format('/taxRules/search?%s', query);
        return restClient.get(endpointUrl);
    };

    module.create = function (ruleAttributes) {
        return restClient.post('/taxRules', ruleAttributes);
    };

    module.update = function (ruleId, ruleAttributes) {
        const endpointUrl = util.format('/taxRules/%d', ruleId);
        return restClient.put(endpointUrl, ruleAttributes);
    };

    module.delete = function (ruleId) {
        const endpointUrl = util.format('/taxRules/%d', ruleId);
        return restClient.delete(endpointUrl);
    };

    return module;
};
