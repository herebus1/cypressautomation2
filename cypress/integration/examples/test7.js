/// <reference types="cypress" /> 

describe('This is the seventh test case, automating web elements VI', function()
{
    it('Sixth test case, DOM mouse hover', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //cy.get('div .mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')        
    }) 
})