class HomePage{

    getEditBox(){
        return cy.get('input[name="name"]:nth-child(2)')
    }

    getDataBinding(){
        return cy.get(':nth-child(4) > .ng-untouched')
    }

    getGender(){
        return cy.get('select')
    }

    getEntrepeneur(){
        return cy.get('#inlineRadio3')
    }

    getShopTab(){
        return cy.get(':nth-child(2) > .nav-link')
    }
}

//Make the class available for all the project
export default HomePage