/// <reference types="Cypress" />

describe('Intercept example case', function(){
    it('Test example', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept(
            {
                method:'GET',
                url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
            }, 
            {
                statusCode: 200,
                body: [
                    {
                        "book_name": "Rest assured with java",
                        "isbn": "RSU",
                        "aisle": "2301"
                    }
                ]
            }
        ).as('bookretrieve')

        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@bookretrieve').then(({request, response})=>{
            cy.get('tr').should('have.length', response.body.length+1)
        })
        cy.get('p').should('have.text', 'Oops only 1 Book available')
    })
})
