var commons = require('../commons');

describe('Scroll', function() {
  commons.runOnEachViewport(viewportCases => {
    viewportCases.forEach(data => {
      describe(`Viewport: ${data.describe}`, function() {
        beforeEach(function() {
          data.beforeEach(cy);
        });
        it('Visits some page content', function() {
          cy.visit('http://127.0.0.1:8080/');
          cy.contains('Michelangelo Buonarroti');
          cy.get('.home-project-button-architecture>a').click();
          cy.get('#Gallery > div[data-type]').should('have.length', 10);
          cy.get('#Gallery > div[data-type="article"]').should('have.length', 3);
          cy.get('#Gallery > div[data-type="photo"]').should('have.length', 5);
          cy.get('#Gallery > div[data-type="video"]').should('have.length', 2);
          cy.get('#Gallery > div:nth-child(10)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 15);
          cy.get('#Gallery > div:nth-child(15)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 15);
        });
        it('Visits another page content', function() {
          cy.visit('http://127.0.0.1:8080/');
          cy.contains('Michelangelo Buonarroti');
          cy.get('.home-project-button-paintings>a').click();
          cy.get('#Gallery > div[data-type]').should('have.length', 10);
          cy.get('#Gallery > div:nth-child(10)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 20);
          cy.get('#Gallery > div:nth-child(20)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 27);
          cy.get('#Gallery > div:nth-child(27)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 27);
        });
      });
    });
  });
});