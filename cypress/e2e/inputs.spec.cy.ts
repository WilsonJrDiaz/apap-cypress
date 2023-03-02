
describe('Input Process', () => {

  let numbersRandom = [1,2,3,4,5,6,7,8,9,10]
  let x = Math.floor((Math.random() * 3)) + 1


  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl').inputs)
  })


  it('check input and enter number randomly and after that validate', () => {

    let randomNumber = numbersRandom[x]

    cy.get('#content > div > div > div > input[type=number]').type(randomNumber.toString())
    
    cy.get('#content > div > div > div > input[type=number]').should('contain.value', randomNumber.toString())

  });

})



