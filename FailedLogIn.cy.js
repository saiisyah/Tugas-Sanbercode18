describe('log in', () => {
  it('failed log in', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type('tomsmith')
    cy.get('#password').type('akulucusekali')
    cy.get('.fa').click()
  })
})