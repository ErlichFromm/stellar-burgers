
describe('app works correctyle with constructor', () => {
  // переход на страницу конструктора
  before(() => {
    cy.visit('http://localhost:3000')
  });

  beforeEach(() => {
    // перехватываем запросы
    cy.intercept("GET", "api/auth/user", {fixture: "user.json"});
    cy.intercept("POST", "api/orders", {fixture: "order.json"});
    // устанавливаем accessToken
    window.localStorage.setItem(
      'accessToken', 'eyJhbGciOiJIUzI1NiIsInR5'
    )
  })
  
  it('should drag and drop ingredients into constructor', () => {

    // Ингредиенты
    cy.get('[id=643d69a5c3f7b9001cfa093c]').as('bun');
    cy.get('[id=643d69a5c3f7b9001cfa0941]').as('main');
    // Окно конструктора
    cy.get('[class^=burger-constructor_wrapper]').as('dropArea');
    // Кнопка оформления заказа
    cy.get('.button_type_primary').as('makeOrderBtn');


    // Перетаскиваем булку
    cy.get('@bun').trigger('dragstart');
    cy.get('@dropArea').should('exist').trigger('drop');

    // Перетаскиваем начинку
    cy.get('@main').trigger('dragstart');
    cy.get('@dropArea').should('exist').trigger('drop');

    // Оформляем заказ
    cy.get('@makeOrderBtn').click();

    // Проверяем наличие модального окна
    cy.get('[class^=order-details_order__]').should('exist');

    // Закрываем модальное окно
    cy.get('#modal svg').should('exist').click();

    // Убеждаемся в его отсутствии
    cy.get('[class^=order-details_order__]').should('not.exist');

  })
  

  


})