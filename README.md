This repository contains the cypress-magento-rest-client package, which is a Magento 2 REST API client designed for Cypress integration tests.

#### Installation
To install the **cypress-magento-rest-client** package, follow these steps:

1. Ensure you have Node.js installed on your machine.
2. Create a new Cypress project or navigate to your existing project.
3. Run the following command in your project directory to install the package:

```bash
$ npm install cypress-magento-rest-client --save-dev`
```

#### Usage
To use the cypress-magento-rest-client package in your Cypress spec, follow the example below:

``` javascript
const { Magento2Client } = require('cypress-magento-rest-client');
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

});
```