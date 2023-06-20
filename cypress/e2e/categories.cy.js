const { Magento2Client } = require('../../src/index');

describe('categories tests', () => {
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

    it('can get category collection', () => {
        cy.wrap(client.categories.list())
            .then((categories) => {
                expect(categories.parent_id).to.equal(1);
            });
        cy.log('after list categories test');
    });

    it('can create a new category under a specific parent', () => {
        const newCategory = {
            category: {
                parentId: 3,
                name: 'Category from integration test',
                isActive: true,
                includeInMenu: true,
            },
        };
        cy.wrap(client.categories.create(newCategory))
            .then((response) => {
                expect(response.parent_id).to.equal(3);
            });
    });

    it('update category test', () => {
        const categoryUpdate = {
            category: {
                parentId: 3,
                name: 'Podkategorija 1 updated',
                isActive: true,
                includeInMenu: true,
            },
        };
        client.categories.update(4, categoryUpdate)
            .then((result) => {
                expect(result.parentId).to.equal(3);
            });
    });

    it.skip('delete category test', () => {
        client.categories.delete(23)
            .then((result) => {
                expect(result).to.be.true;
            });
    });
});
