describe('Advanced Cypress Playground', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Waits till element appears with delay', () => {
    cy.get('#delayed').should('be.visible')
  })

  it('Checks prices table', () => {
    cy.get('#price-table tr').should('have.length', 4)
    cy.get('#price-table tr').each(($el, index) => {
      if (index === 0) return
      cy.wrap($el).find('td').eq(1).invoke('text').then(price => {
        expect(Number(price)).to.be.greaterThan(0)
      })
    })
  })

  it('Works with localStorage', () => {
    cy.window().then(win => win.localStorage.setItem('auth_token', '123abc'))
    cy.reload()
    cy.get('#secure-content').should('be.visible')
  })

  it('Process JS-error', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('Simulated error')
      return false
    })
    cy.contains('Call an error').click()
  })

  it('Checks form validation', () => {
    cy.get('button[type=submit]').click()
    cy.get('#form-message').should('be.visible')
    cy.get('#email').type('user@example.com')
    cy.get('#name').type('User')
    cy.get('button[type=submit]').click()
    cy.get('#form-message').should('not.be.visible')
  })
})
