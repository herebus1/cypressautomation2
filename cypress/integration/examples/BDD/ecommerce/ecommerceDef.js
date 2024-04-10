import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage  from "../ecommerce/pageObjects/HomePage"; 
import ProductsPage from "../ecommerce/pageObjects/ProdcutsPage";

const homePage = new HomePage()
const productsPage = new ProductsPage()
let name

Given('I open ecommerce page', () => {
    cy.visit(Cypress.env('url')+'/angularpractice/')
})

When('I add items to the cart', () => {
    homePage.getShopTab().click()          
    data.productName.forEach(function (element) {
      cy.selectProduct(element)
    }) 

    productsPage.getCheckout().click()
})

When('Validate the total prices', () =>{
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
})

Then('Select the country submit and verify the success message', () =>{
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

When('I fill the form details', function(dataTable){

    name = dataTable.rawTable[1][0]
    homePage.getEditBox().type(dataTable.rawTable[1][0]) 
    homePage.getGender().select(dataTable.rawTable[1][1])
})

Then('Validate the form behavior', function(){
    homePage.getDataBinding().should('have.value', name)
    //Validates the input name has the minimum length according to its validation
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEntrepeneur().should('be.disabled')
})

Then('open the shop page', () =>{
    homePage.getShopTab().click() 
})