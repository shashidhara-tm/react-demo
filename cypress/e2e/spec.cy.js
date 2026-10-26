describe('todo list', () => {
  it('shows an added todo in the table', () => {
    cy.visit('/')
    cy.get('[data-testid="todo-input"]').type("Todo 01")
    cy.get('[data-testid="add-todo"]').click()

    cy.get('table tbody').contains('tr', 'Todo 01').should('exist')
  })
})
