/// <reference types="cypress" /> 
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

//You need to install the iframe plugin npm install -D cypress-iframe
describe('This is the eighth test case, automating web elements VII', function()
{
    it('Eighth test case, DOM Iframes', () => {
        cy.visit(Cypress.env('url')+'/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()
        cy.wait(2000)
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)        
    }) 
})