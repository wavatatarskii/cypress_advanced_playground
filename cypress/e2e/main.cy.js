describe('Advanced Cypress Playground', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Ожидает появления элемента с задержкой', () => {
    cy.get('#delayed').should('be.visible')
  })

  it('Проверяет таблицу цен', () => {
    cy.get('#price-table tr').should('have.length', 4)
    cy.get('#price-table tr').each(($el, index) => {
      if (index === 0) return
      cy.wrap($el).find('td').eq(1).invoke('text').then(price => {
        expect(Number(price)).to.be.greaterThan(0)
      })
    })
  })

  it('Работает с localStorage', () => {
    cy.window().then(win => win.localStorage.setItem('auth_token', '123abc'))
    cy.reload()
    cy.get('#secure-content').should('be.visible')
  })

  it('Обрабатывает JS-ошибку', () => {
    cy.on('uncaught:exception', (err) => {
      expect(err.message).to.include('Симулированная ошибка')
      return false
    })
    cy.contains('Вызвать ошибку').click()
  })

  it('Проверяет валидацию формы', () => {
    cy.get('button[type=submit]').click()
    cy.get('#form-message').should('be.visible')
    cy.get('#email').type('user@example.com')
    cy.get('#name').type('User')
    cy.get('button[type=submit]').click()
    cy.get('#form-message').should('not.be.visible')
  })
})
