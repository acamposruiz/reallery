var commons = require('../commons');

describe('Scroll', function() {
  commons.runOnEachViewport(viewportCases => {
    viewportCases.forEach(data => {
      describe(`Viewport: ${data.describe}`, function() {
        beforeEach(function() {
          data.beforeEach(cy);
        });
        function isBigScreen() {
          return data.describe == '1780x3000';
        }
        it('Visits some page content', function() {
          cy.visit('http://127.0.0.1:8989/');
          cy.screenshot(data.describe+'_homepage');
          cy.contains('Michelangelo Buonarroti');
          cy.get('.home-project-button-paintings>a').click();
          cy.get('#Gallery > div[data-type]').should('have.length', isBigScreen()? 20: 10);
          cy.get(`#Gallery > div:nth-child(${ isBigScreen()? 20: 10})`).trigger('mousedown');
          cy.wait(500);
          cy.screenshot(data.describe+'_painting_page');
          cy.get('#Gallery > div[data-type]').should('have.length',  isBigScreen()? 27: 20);
          cy.get(`#Gallery > div:nth-child(${ isBigScreen()? 27: 20})`).trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 27);
          cy.get('#Gallery > div:nth-child(27)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 27);
          cy.get('div.project-button-container.home-project-button-architecture').click();
          cy.get('#Gallery > div[data-type]').should('have.length', isBigScreen()? 15: 10);
          cy.get('#Gallery > div[data-type="article"]').should('have.length', 3);
          cy.get('#Gallery > div[data-type="photo"]').should('have.length',  isBigScreen()? 8: 5);
          cy.get('#Gallery > div[data-type="video"]').should('have.length',  isBigScreen()? 4: 2);
          cy.get('#Gallery > div:nth-child(10)').trigger('mousedown');
          cy.wait(500);
          cy.screenshot(data.describe+'_architecture_page');
          cy.get('#Gallery > div[data-type]').should('have.length', 15);
          cy.get('#Gallery > div:nth-child(15)').trigger('mousedown');
          cy.wait(500);
          cy.get('#Gallery > div[data-type]').should('have.length', 15);
        });
      });
    });
  });
});