var commons = require('../commons');

describe('Basic functionality', function() {
  commons.runOnEachViewport(viewportCases => {
    viewportCases.forEach(data => {
      describe(`Viewport: ${data.describe}`, function() {
        beforeEach(function() {
          data.beforeEach(cy);
        });
        it(`Visits the default language page`, function() {
          cy.visit('http://127.0.0.1:8989/');
          cy.contains('Michelangelo Buonarroti');
          cy.contains('Paintings');
          cy.contains('Sculptures');
          cy.contains('Architecture');
          cy.contains('View on github');
          cy.contains('mbuonarroti@reallery.com');
          cy.contains('555-555-555');
          cy.get('.home-project-button-architecture>a').click();
          cy.url().should('include', 'en/project/view/architecture');
          cy.contains('Lorem very carrots, enhanced ecological environment. ');
          cy.contains('Michelangelo').click();
          cy.url().should('include', 'en');
          cy.contains('Paintings');
        });
        it(`Visits the spanish language page`, function() {
          cy.visit('http://127.0.0.1:8989/#/es');
          cy.contains('Michelangelo Buonarroti');
          cy.contains('Pinturas');
          cy.contains('Esculturas');
          cy.contains('Arquitectura');
          cy.get('.home-project-button-architecture>a').click();
          cy.url().should('include', 'es/project/view/architecture');
          cy.contains('El hombre no tiene vehículos león arcos de la propaganda.');
          cy.contains('Michelangelo Buonarroti').click();
          cy.url().should('include', 'es');
          cy.contains('Pinturas');
        });
      });
    });
  });
});
