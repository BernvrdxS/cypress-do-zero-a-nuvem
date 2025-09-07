Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'Testador',
    lastName: 'da Silva',
    email: 'testador.dasilva@testes.com',
    text: 'testes.'
}) => {
    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#phone').type('11987654321')
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"][class="button"]').click()
})