/// <reference types="Cypress" />
import neatCSV from "neat-csv"
//const neatCSV = require('neat-csv')
let productName

describe('Auth login session example', function(){
    it('Adding token through local storage', function(){

        cy.loginApi().then(function(){
            cy.visit('https://rahulshettyacademy.com/client ', {
                onBeforeLoad: function(window){
                    window.localStorage.setItem('token', Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body b').eq(1).then(function(element){
            productName = element.text()
        })
        cy.get('.card-body button:last-of-type').eq(1).click()
        cy.get('[routerlink*="cart"]').click()
        cy.contains('Checkout').click()
        cy.get('[placeholder*="Country"').type('ind')
        cy.get('.ta-results button').each(($el, $index, $list) =>{
            if($el.text() === ' India'){
                cy.wrap($el).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(3000)
        cy.get('.order-summary button').contains('CSV').click()
        cy.readFile(Cypress.config('fileServerFolder')+'\cypress\downloads\order-invoice_testemail.csv').
        then(async (text) =>{
            const csv = await neatCSV(text)
            console.log(csv)
            //access the property when it has spaces on the column name
            const productCSV = csv[0]["Product Name"]
            expect(productName).to.equal(productCSV)
        })
        
    })
})
