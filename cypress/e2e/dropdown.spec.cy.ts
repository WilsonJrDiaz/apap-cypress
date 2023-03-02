
describe('dropdown Process', () => {


  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl').dropdown)
  })


  it('should select and option from dropdown list', () => {

    cy.get('#dropdown').select('1').should('have.value', 'Option 1')

  });

})



