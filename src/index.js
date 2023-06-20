'use strict';

const RestClient = require('./lib/client').RestClient;
const categories = require('./lib/endpoint/categories');
const attributes = require('./lib/endpoint/attributes');
const products = require('./lib/endpoint/products');
const productMedia = require('./lib/endpoint/product_media');
const categoryProducts = require('./lib/endpoint/category_products');
const configurableChildren = require('./lib/endpoint/configurable_children');
const configurableOptions = require('./lib/endpoint/configurable_options');
const taxRates = require('./lib/endpoint/tax_rates');
const taxRules = require('./lib/endpoint/tax_rules');
const stockItems = require('./lib/endpoint/stock_items');
const customers = require('./lib/endpoint/customers');
const directory = require('./lib/endpoint/directory');
const cart = require('./lib/endpoint/cart');
const orders = require('./lib/endpoint/orders');
const reviews = require('./lib/endpoint/reviews');


const MAGENTO_API_VERSION = 'V1';

module.exports.Magento2Client = function (options) {
    const instance = {
        addMethods(key, module) {
            const client = RestClient(options);
            if (module) {
                if (this[key])
                    this[key] = Object.assign(this[key], module(client))
                else
                    this[key] = module(client)
            }
        }
    };

    options.version = MAGENTO_API_VERSION;

    const client = RestClient(options);

    instance.attributes = attributes(client);
    instance.categories = categories(client);
    instance.products = products(client);
    instance.productMedia = productMedia(client);
    instance.categoryProducts = categoryProducts(client);
    instance.configurableChildren = configurableChildren(client);
    instance.configurableOptions = configurableOptions(client);
    instance.stockItems = stockItems(client);
    instance.taxRates = taxRates(client);
    instance.taxRules = taxRules(client);
    instance.customers = customers(client);
    instance.cart = cart(client);
    instance.orders = orders(client);
    instance.directory = directory(client);
    instance.reviews = reviews(client);

    return instance;
}
