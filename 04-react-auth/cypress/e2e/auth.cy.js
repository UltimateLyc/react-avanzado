/* eslint-disable no-undef */

describe('Mi primer grupo de pruebas ', () => {
  it('Leo la palabra Home en /', () => {
    // 01. Establecer el estado de la app
    cy.visit('/')

    // 02. Realizar acciones
    cy.get('h1')
      .contains('Home') // 03. Espero un resultado
  })

  it('Login funcionando como Customer', () => {
    // 01. Establecer el estado de la app
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')

    // 02. Realizar acciones
    cy.get('#floatingEmail').type('drstrange@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi') // Espero que resuelva la llamada del API

    // 03. Espero un resultado
    cy.get('h1').should('have.text', 'Dashboard')
  })

  it('Login funcionando como Customer', () => {
    // 01. Establecer el estado de la app
    cy.intercept('https://ecomerce-master.herokuapp.com/api/v1/login').as('loginApi')
    cy.visit('/login')

    // 02. Realizar acciones
    cy.get('#floatingEmail').type('drstrange@marvel.com')
    cy.get('#floatingPassword').type('multiverso')
    cy.get('button[type=submit]').click()
    cy.wait('@loginApi') // Espero que resuelva la llamada del API

    cy.get('nav > ul li:last').click()

    // 03. Espero un resultado
    cy.get('h1').should('have.text', 'Home')
  })
})
