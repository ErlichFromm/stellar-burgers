describe('app works correctyle with ingredients modals', () => {
  // переход на страницу конструктора
  before(() => {
    cy.visit('http://localhost:3000').wait(2000)
  });
 
  it('should open ingredient modal and check content', () => {
    // Получение всех ингредиентов
    cy.get('[class^=ingredient-card_card__]').as('ingredients');

    // Клик по первому ингредиену
    cy.get('@ingredients').first().click();

    // Проверка содержимого модального окна
    // названия
    cy.get('[class^=ingredient-details_name__]').should('exist');
    
    cy.get('.calories > .value').should('exist');
    cy.get('.squirrels > .value').should('exist');
    cy.get('.fats > .value').should('exist');
    cy.get('.carbohydrates > .value').should('exist');
  })

})