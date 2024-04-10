beforeEach(() =>{
    let data;
    cy.fixture('example.json').then((Fdata) =>{
        data=Fdata
    })
});