/// <reference types="cypress" /> 

describe('This is the first test suite', function()
{
    it('Fisrt test case', () => {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/') 
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent-child chaining
        cy.get('.products').as('productlocator')
        cy.get('@productlocator').find('.product').should('have.length', 4)
        cy.get(':nth-child(3) > .product-action > button').click()
        //Find the second product of the list array
        cy.get('@productlocator').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('@productlocator').find('.product').each(($el, index, $list) => {
           const textVeg = $el.find('h4.product-name').text()
           if(textVeg.includes('Cashews')){
                cy.wrap($el).find('button').click()
           }
        })

        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
    }) 
})