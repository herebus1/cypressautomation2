/// <reference types="cypress" /> 

describe('This is the third test case, automating web elements II', function()
{
    it('Third test case, DOM options [Checkbox]', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1') 
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        //Select multiple checkboxes
        cy.get('input[type="checkbox"]').check(['option2','option3'])


        //Static dropdowns
        cy.get('select').select('option2').should('have.value','option2')

        //Dynamic dropdowns
        cy.get('#autocomplete').type('Co')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            if($el.text()==="Colombia"){
                cy.wrap($el).click()
            }
        })
        cy.get('#autocomplete').should('have.value', 'Colombia')

        //Hyde and show fields
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //Radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    }) 
})