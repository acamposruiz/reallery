describe('Lists navegation', function() {
  it('Navegates betwwen the lists', function() {
    cy.visit('http://127.0.0.1:8080/');
    cy.get('.home-project-button-paintings>a').click();
    cy.url().should('include', 'paintings');
    cy.get('div.project-button-container.home-project-button-paintings').should('have.class', 'active');
    cy.get('div.project-button-container.home-project-button-sculptures').should('have.class', 'no-active');
    cy.get('div.project-button-container.home-project-button-architecture').should('have.class', 'no-active');
    cy.get('#Gallery > div:nth-child(10)').trigger('mousedown');
    cy.wait(500);
    cy.get('#Gallery > div[data-type]').should('have.length', 20);
    cy.get('#Gallery > div:nth-child(20)').trigger('mousedown');
    cy.get('div.project-button-container.home-project-button-sculptures').click();
    cy.url().should('include', 'sculptures');
    cy.get('div.project-button-container.home-project-button-sculptures').should('have.class', 'active');
    cy.get('div.project-button-container.home-project-button-architecture').click();
    cy.url().should('include', 'architecture');
    cy.get('div.project-button-container.home-project-button-architecture').should('have.class', 'active');
  });
});
