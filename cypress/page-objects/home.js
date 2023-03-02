class Home {
    get getHomeTittle() {
        return cy.get("h2");
    }

    open() {
        cy.visit(Cypress.env('baseUrl').login)
    }
}

export default new Home();