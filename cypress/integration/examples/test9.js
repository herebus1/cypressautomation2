/// <reference types="cypress" />
import HomePage  from "../pageObjects/HomePage"; 
import ProductsPage from "../pageObjects/ProdcutsPage";

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

        const homePage = new HomePage()
        const productsPage = new ProductsPage()

          cy.visit('https://www.rahulshettyacademy.com/angularpractice/ ')  
          homePage.getEditBox().type(data.name) 
          homePage.getGender().select(data.gender)
          homePage.getDataBinding().should('have.value', data.name)
          //Validates the input name has the minimum length according to its validation
          homePage.getEditBox().should('have.attr', 'minlength', '2')
          homePage.getEntrepeneur().should('be.disabled')
          homePage.getShopTab().click()          
          data.productName.forEach(function (element) {
            cy.selectProduct(element)
          }) 

          productsPage.getCheckout().click()
          var sum = 0
          cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res)          
          }).then(function(){
            cy.log(sum)
          })
          cy.get('h3 strong').then(function(element){
            const amount = element.text()
            var result = amount.split(" ")
            var total = result[1].trim()
            expect(Number(total)).to.equal(sum)
          })
          cy.contains('Checkout').click()
          cy.get('#country').type('India')
          cy.get(".suggestions > ul > li > a").click()
          cy.get('#checkbox2').click({force:true})
          cy.get('input[type="submit"]').click()
          //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
          cy.get('.alert').then(function(element){
            const actualText = element.text()
            expect(actualText.includes("Success")).to.be.true
          })

    }) 
})