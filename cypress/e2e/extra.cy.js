
import 'cypress-file-upload'

describe('Additional components', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('iframe access', () => {
    cy.get('#demo-frame').then($iframe => {
      const doc = $iframe[0].contentDocument
      expect(doc.getElementById('frame-text').textContent).to.include('frame content')
    })
  })

  it('Autocomplete', () => {
    cy.get('#autocomplete').type('mu')
    cy.get('#autocomplete').should('have.value', 'mu')
  })

  it('API load и intercept', () => {
    cy.intercept('GET', '**/posts/1').as('getPost')
    cy.get('#load-api').click()
    cy.wait('@getPost')
    cy.get('#api-output').should('not.be.empty')
  })

  it('File upload', () => {
    cy.get('#file-upload').attachFile({ filePath: 'example.json', fileName: 'test.json' })
    cy.get('#file-name').should('contain', 'test.json')
  })

  it('Drag and Drop', () => {
    cy.get('#drag-source').trigger('dragstart')
    cy.get('#drop-target').trigger('drop')
    cy.get('#drop-target').should('contain', 'Dropped')
  })
})
