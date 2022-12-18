/// <reference types="cypress" />

describe('PreuzmiPlanMonitoringa', function() 
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })

it('Preuzmi Plan monitoringa', function() 
{

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Plan monitoringa
cy.get('.navbar-nav').find('li').eq(4).invoke('show').contains('Plan monitoringa').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb > :nth-child(1)').should('have.text','Administracija')
cy.get('.breadcrumb > .active').should('have.text','Plan monitoringa')

//Odabir Godine monitoringa
cy.get(':nth-child(2) > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container',{timeout: 2000})
.should(($x) => {
    expect($x).have.text('2020')
})

//Klik na gumb Pretraži
cy.contains('Pretraži').click()

//Klik na gumb za preuzimanje Exxcela
cy.contains('Izvoz u xls').click()



})


})