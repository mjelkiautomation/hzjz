/// <reference types="cypress" />
import PretragaPrivremenoSpremljenihAnalizaPage from '../../support/pageObjects/PretragaPrivremenoSpremljenihAnalizaPage'

describe('PreuzmiDatoteku', function ()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })


it('Preuzmi datoteku Monitoring A', function()
{

const pretragaPrivremenoSpremljenihAnalizaPage = new PretragaPrivremenoSpremljenihAnalizaPage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaPrivremenoSpremljenihAnalizaPage.getPretragaPrivremeoSpremljenihAnaliza().click({force: true})
cy.get(':nth-child(6) > p').should('have.text','Učitavanja analiza')

//Odabir godine
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}`)

//Odabir monitoringa
cy.get(':nth-child(7) > .col-md-6 > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Monitoring parametara skupine A{enter}{enter}`)

//Klik Preuzmi datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPreuzmiDatoteku().click()

cy.wait(5000)



})


it('Preuzmi datoteku Monitoring B', function()
{

const pretragaPrivremenoSpremljenihAnalizaPage = new PretragaPrivremenoSpremljenihAnalizaPage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaPrivremenoSpremljenihAnalizaPage.getPretragaPrivremeoSpremljenihAnaliza().click({force: true})
cy.get(':nth-child(6) > p').should('have.text','Učitavanja analiza')

//Odabir godine
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}`)

//Odabir monitoringa
cy.get(':nth-child(7) > .col-md-6 > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Monitoring parametara skupine B{enter}{enter}`)

//Klik Preuzmi datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPreuzmiDatoteku().click()

cy.wait(5000)



})


it('Preuzmi datoteku Izvorišni', function()
{

const pretragaPrivremenoSpremljenihAnalizaPage = new PretragaPrivremenoSpremljenihAnalizaPage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaPrivremenoSpremljenihAnalizaPage.getPretragaPrivremeoSpremljenihAnaliza().click({force: true})
cy.get(':nth-child(6) > p').should('have.text','Učitavanja analiza')

//Odabir godine
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}`)

//Odabir monitoringa
cy.get(':nth-child(7) > .col-md-6 > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Izvorišni{enter}{enter}`)

//Klik Preuzmi datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPreuzmiDatoteku().click()

cy.wait(5000)



})



})