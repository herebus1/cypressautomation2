/// <reference types="cypress" /> 

describe('This is the fifth test case, automating web elements IV', function()
{
    it('Fifth test case, DOM options child windows and tabs', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //Removes the attribute in the css element to open a new tab 
        //and then can click on the element opens the window on the same cypress
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //Command to change to a new website
        cy.origin('https://www.qaclickacademy.com/', () => {
            cy.get('#navbarSupportedContent a[href*="about"]').click()
            cy.get('.mt-50 h2').should('contain', 'QAClick Academyy') 
        })
        
    }) 
})