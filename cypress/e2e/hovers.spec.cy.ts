import "cypress-real-events";

describe('dropdown Process', () => {


  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl').hovers)
  })


  it('Should test on mouse hovers', () => {

    cy.get('#content > div > div:nth-child(3) > img').realHover()

    cy.get('#content > div > div:nth-child(3) > div > h5').contains('name: user1').should('be.visible')
    

  });

})



