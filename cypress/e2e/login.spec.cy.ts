import home from "../page-objects/home";

describe('Login Process - Succesful', () => {

  beforeEach(() => {
    home.open()
  })


  it('should be on the login page', () => {

    home.getHomeTittle.contains("Login Page").should('be.visible')

  })

  it('handling inputs - enter credentiales - login ', () => {

    cy.get('#username').type(Cypress.env('username'))
    cy.get('#password').type(Cypress.env('password'))

    cy.get('#login > button > i').click()

    cy.get("#flash").contains("You logged into a secure area!").should('be.visible')

  });

})



describe('Login Process - not successful', () => {

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl').login)
  })


  it('should be on the login page', () => {

  })

  it('should type username, password and click to btn login ', () => {

    cy.get('#username').type('username')
    cy.get('#password').type('password')
    cy.get('#login > button > i').click()

    cy.get("#flash").contains("Your username is invalid!");

  });

})

