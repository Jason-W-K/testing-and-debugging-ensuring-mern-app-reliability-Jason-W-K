describe('Bug creation flow', () => {
  it('submits a bug successfully', () => {
    cy.visit('http://localhost:3000');

    cy.get('input[placeholder="Title"]').type('Bug A');
    cy.get('textarea[placeholder="Description"]').type('Something broke');
    cy.contains('Submit Bug').click();

    cy.contains('Bug A').should('exist');
    describe('Login flow', () => {
  it('logs in successfully', () => {
    cy.visit('http://localhost:3000/login');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('123456');
    cy.contains('Login').click();

    cy.contains('Welcome back!').should('exist');
  });

  describe('Registration flow', () => {
  it('registers a new user', () => {
    cy.visit('http://localhost:3000/register');
    cy.get('input[name="email"]').type('newuser@example.com');
    cy.get('input[name="password"]').type('mypassword');
    cy.contains('Register').click();
    cy.contains('Account created!').should('exist');
  });

  it('creates a bug in the list', () => {
  cy.visit('http://localhost:3000/bugs');
  cy.get('input[placeholder="Title"]').type('Bug A');
  cy.get('textarea[placeholder="Description"]').type('Something broke');
  cy.contains('Add Bug').click();
  cy.contains('Bug A').should('exist');
});

it('edits a bug', () => {
  cy.visit('http://localhost:3000/bugs');
  cy.contains('Bug A').parent().contains('Edit').click();
  cy.get('input[placeholder="Title"]').clear().type('Bug A - Updated');
  cy.contains('Update Bug').click();
  cy.contains('Bug A - Updated').should('exist');
});

it('deletes a bug', () => {
  cy.visit('http://localhost:3000/bugs');
  cy.contains('Bug A - Updated').parent().contains('Delete').click();
  cy.contains('Bug A - Updated').should('not.exist');
});

describe('Visual regression: Bug form', () => {
  it('matches the bug form layout', () => {
    cy.visit('/');
    cy.matchImageSnapshot('bug-form');
  });
});

});
});
  });
});