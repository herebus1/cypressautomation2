/// <reference types="cypress" /> 

//You need to install the iframe plugin npm install -D cypress-iframe
describe('This is the nineth test case, before and after hooks', function()
{   
    let data; //closure variable
    before(function(){
        cy.fixture('example.json').then((Fdata) => {
            //makes data a global variable
            data=Fdata
        })
    })

    it('Nineth test case, before and after hooks', () => {
          cy.visit('https://www.rahulshettyacademy.com/angularpractice/ ')  
          cy.get('input[name="name"]:nth-child(2)').type(data.name) 
          cy.get('select').select(data.gender)
          cy.get(':nth-child(4) > .ng-untouched').should('have.value', data.name)
          //Validates the input name has the minimum length according to its validation
          cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')
          cy.get('#inlineRadio3').should('be.disabled')
          cy.get(':nth-child(2) > .nav-link').click() 
          //Selects the nth element of the list according to the name and the look for the according button
          cy.get('h4.card-title').each(($el, index, $list) => {
                if($el.text().includes('Blackberry')){
                   cy.get('button.btn.btn-info').eq(index).click() 
                }
          }) 
    }) 
})