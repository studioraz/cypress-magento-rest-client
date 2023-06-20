'use strict';
const { Magento2Client } = require('../../src/index');

describe('customer tests', () => {

    let client;

    before(() => {
        client = Magento2Client({
            url: Cypress.config('baseUrl'),
            consumerKey: Cypress.config('consumerKey'),
            consumerSecret: Cypress.config('consumerSecret'),
            accessToken: Cypress.config('accessToken'),
            accessTokenSecret: Cypress.config('accessTokenSecret')
        });
    });

    it('can get customer token', () => {
        cy.wrap(client.customers.token({
            username: Cypress.config('customerUsername'),
            password: Cypress.config('customerPassword')
        }))
        .then((token) => {
            expect(token).to.be.a('string');
        });
    });

    it.only('can get customer info', () => {
        cy.wrap(client.customers.token({
            username: Cypress.config('customerUsername'),
            password: Cypress.config('customerPassword')
        })).then((token) => {
            expect(token).to.be.a('string');
            cy.wrap(client.customers.me(token))
                .then((customer) => {
                    expect(customer.id).to.be.a('number');
                });
        });
    });

});