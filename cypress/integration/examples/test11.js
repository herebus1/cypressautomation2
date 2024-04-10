/// <reference types="Cypress" />

describe('Intercept example case', function(){
    it('Test example', function(){

        cy.visit('https://rahulshettyacademy.com/angularAppdemo')

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty', 
            (req)=>{
                req.url='https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra1234'
                req.continue((res)=>{
                    //expect(res.statusCode).to.equal(403)
                })
            }
        ).as("dummyUrl")
        cy.get('button[class="btn btn-primary"]').click()
        cy.wait('@dummyUrl')

        
    })
})
