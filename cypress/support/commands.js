// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//Selects the nth element of the list according to the name and the look for the according button
Cypress.Commands.add('selectProduct', (productName) => { 
    cy.get('h4.card-title').each(($el, index, $list) => {
        if($el.text().includes(productName)){
           cy.get('button.btn.btn-info').eq(index).click() 
        }
    }) 
 })

 Cypress.Commands.add('loginApi', () =>{
    cy.request('POST', 'https://rahulshettyacademy.com/api/ecom/auth/login', {"userEmail": "testemail@yopmail.com", "userPassword": "Secure123"}).
    then(function(response){
        expect(response.status).to.equal(200)
        Cypress.env('token', response.body.token)
    })
 })
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })