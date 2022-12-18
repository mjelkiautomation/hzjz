/// <reference types="cypress" />
import PretragaPrivremenoSpremljenihAnalizaPage from '../../support/pageObjects/PretragaPrivremenoSpremljenihAnalizaPage'

describe('UcitajDatoteku', function ()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })


it('Učitaj datoteku Monitoring A', function()
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

//Ucitaj datoteku
cy.get('[type="file"]').attachFile('monitoring_parametara_skupine_A.xlsx')
pretragaPrivremenoSpremljenihAnalizaPage.getBrowse().should('have.value','monitoring_parametara_skupine_A.xlsx')

//Klik Ucitaj datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnUcitajDatoteku().click()

//Provjera poruke
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Dokument je uspješno učitan.')
})



})


it('Učitaj datoteku Monitoring B', function()
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

//Ucitaj datoteku
cy.get('[type="file"]').attachFile('monitoring_parametara_skupine_B.xlsx')
pretragaPrivremenoSpremljenihAnalizaPage.getBrowse().should('have.value','monitoring_parametara_skupine_B.xlsx')

//Klik Ucitaj datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnUcitajDatoteku().click()

//Provjera poruke
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Dokument je uspješno učitan.')
})



})


it('Učitaj datoteku Izvorišni', function()
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

//Ucitaj datoteku
cy.get('[type="file"]').attachFile('izvorisni_monitoring.xlsx')
pretragaPrivremenoSpremljenihAnalizaPage.getBrowse().should('have.value','izvorisni_monitoring.xlsx')

//Klik Ucitaj datoteku
pretragaPrivremenoSpremljenihAnalizaPage.getbtnUcitajDatoteku().click()

//Provjera poruke
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Dokument je uspješno učitan.')
})



})


})