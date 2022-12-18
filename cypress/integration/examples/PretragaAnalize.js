/// <reference types="cypress" />
import PretragaUnesenihAnalizaPage from '../../support/pageObjects/PretragaUnesenihAnalizaPage'
import UnosAnalizePage from '../../support/pageObjects/UnosAnalizePage'
import PretragaPrivremenoSpremljenihAnalizaPage from '../../support/pageObjects/PretragaPrivremenoSpremljenihAnalizaPage'

describe('PretragaAnalize', function()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })


it('Pretraga unesenih analiza Monitoring A', function()
{

const pretragaUnesenihAnalizaPage = new PretragaUnesenihAnalizaPage()
const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaUnesenihAnalizaPage.getPretragaUnesenihAnaliza().should('have.text','Pretraga unesenih analiza')

//Pretraga po filteru
pretragaUnesenihAnalizaPage.getZavod().type(`ZZJZ - Sisak{enter}{enter}`)
pretragaUnesenihAnalizaPage.getZonaOpskrbe().type('ZO HRVATSKA KOSTAJNICA')
cy.get('#react-select-4-option-0:visible').should('have.text','ZO HRVATSKA KOSTAJNICA').click({force: true})
pretragaUnesenihAnalizaPage.getNaseljeUzorkovanja().type('Hrvatska Kostajnica')
cy.get('#react-select-5-option-0:visible').should('have.text','Hrvatska Kostajnica').click({force: true})
pretragaUnesenihAnalizaPage.getPravnaOsoba().type('JP KOMUNALAC D.O.O.')
cy.get('#react-select-6-option-0:visible').should('have.text','JP KOMUNALAC D.O.O.').click({force: true})
pretragaUnesenihAnalizaPage.getTipVodoopskrbe().type(`Javna{enter}{enter}`)
pretragaUnesenihAnalizaPage.getLokacijaUzorkovanja().type('Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica')
cy.get('#react-select-9-option-0:visible').should('have.text','Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica').click({force: true})
pretragaUnesenihAnalizaPage.getOcjenaIspravnosti().type(`Ispravan{enter}{enter}`)
pretragaUnesenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaUnesenihAnalizaPage.getAnalitickiBroj().type('Test001/2021')
pretragaUnesenihAnalizaPage.getVrstaMonitoringa().type(`Monitoring parametara skupine A{enter}{enter}`)

//Klik Pretraži
cy.contains('Pretraži').click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
unosAnalizePage.getAnalitickiBroj().should('have.value','Test001/2021')



})


it('Pretraga unesenih analiza Monitoring B', function()
{

const pretragaUnesenihAnalizaPage = new PretragaUnesenihAnalizaPage()
const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaUnesenihAnalizaPage.getPretragaUnesenihAnaliza().should('have.text','Pretraga unesenih analiza')

//Pretraga po filteru
pretragaUnesenihAnalizaPage.getZavod().type(`ZZJZ - Karlovac{enter}{enter}`)
pretragaUnesenihAnalizaPage.getZonaOpskrbe().type('ZO GENERALSKI STOL')
cy.get('#react-select-4-option-0:visible').should('have.text','ZO GENERALSKI STOL').click({force: true})
pretragaUnesenihAnalizaPage.getNaseljeUzorkovanja().type('Generalski Stol')
cy.get('#react-select-5-option-0:visible').should('have.text','Generalski Stol').click({force: true})
pretragaUnesenihAnalizaPage.getPravnaOsoba().type('Komunalno Duga Resa d.o.o.')
cy.get('#react-select-6-option-0:visible').should('have.text','Komunalno Duga Resa d.o.o.').click({force: true})
pretragaUnesenihAnalizaPage.getTipVodoopskrbe().type(`Javna{enter}{enter}`)
pretragaUnesenihAnalizaPage.getLokacijaUzorkovanja().type('Zgrada općine Generalski Stol, Genaralski Stol 32')
cy.get('#react-select-9-option-0:visible').should('have.text','Zgrada općine Generalski Stol, Genaralski Stol 32').click({force: true})
//pretragaUnesenihAnalizaPage.getOcjenaIspravnosti().type(`Ispravan{enter}{enter}`)
pretragaUnesenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaUnesenihAnalizaPage.getAnalitickiBroj().type('Test1000/2021')
pretragaUnesenihAnalizaPage.getVrstaMonitoringa().type(`Monitoring parametara skupine B{enter}{enter}`)

//Klik Pretraži
cy.contains('Pretraži').click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
unosAnalizePage.getAnalitickiBroj().should('have.value','Test1000/2021')



})


it('Pretraga unesenih analiza Izvorišni', function()
{

const pretragaUnesenihAnalizaPage = new PretragaUnesenihAnalizaPage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaUnesenihAnalizaPage.getPretragaUnesenihAnaliza().should('have.text','Pretraga unesenih analiza')

//Pretraga po filteru
pretragaUnesenihAnalizaPage.getZavod().type(`ZZJZ - Dubrovnik{enter}{enter}`)
pretragaUnesenihAnalizaPage.getZonaOpskrbe().type('ZO PLOČE')
cy.get('#react-select-4-option-0:visible').should('have.text','ZO PLOČE').click({force: true})
pretragaUnesenihAnalizaPage.getPravnaOsoba().type('IZVOR Ploče javna ustanova')
cy.get('#react-select-6-option-0:visible').should('have.text','IZVOR Ploče javna ustanova').click({force: true})
pretragaUnesenihAnalizaPage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`)
pretragaUnesenihAnalizaPage.getOcjenaIspravnosti().type(`Neispravan{enter}{enter}`)
pretragaUnesenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaUnesenihAnalizaPage.getAnalitickiBroj().type('Test2000/2021')
pretragaUnesenihAnalizaPage.getVrstaMonitoringa().type(`Izvorišni{enter}{enter}`)

//Klik Pretraži
cy.contains('Pretraži').click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box').should('have.value','Test2000/2021')



})


it('Pretraga privremeno spremljenih analiza Monitoring A', function()
{

const pretragaPrivremenoSpremljenihAnalizaPage = new PretragaPrivremenoSpremljenihAnalizaPage()
const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaPrivremenoSpremljenihAnalizaPage.getPretragaPrivremeoSpremljenihAnaliza().click({force: true})
cy.get(':nth-child(6) > p').should('have.text','Učitavanja analiza')

//Filter pretrage
pretragaPrivremenoSpremljenihAnalizaPage.getUzorciUcitani().type(`Ne{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZavod().type(`ZZJZ - Osijek{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZonaOpskrbe().type('ZO ĐURĐENOVAC')
cy.get('#react-select-15-option-0:visible').should('have.text','ZO ĐURĐENOVAC').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage. getNaseljeUzorkovanja().type('Đurđenovac')
cy.get('#react-select-16-option-0:visible').should('have.text','Đurđenovac').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getPravnaOsoba().type('VODORAD d.o.o.')
cy.get('#react-select-17-option-0:visible').should('have.text','VODORAD d.o.o.').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getTipVodoopskrbe().type(`Javna{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getAnalitickiBroj().type('PrS-012/2021')
pretragaPrivremenoSpremljenihAnalizaPage.getVrstaMonitoringa().type(`Monitoring parametara skupine A{enter}{enter}`)

//Klik Pretraži
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPretrazi().click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
unosAnalizePage.getAnalitickiBroj().should('have.value','PrS-012/2021')



})


it('Pretraga privremeno spremljenih analiza Monitoring B', function()
{

const pretragaPrivremenoSpremljenihAnalizaPage = new PretragaPrivremenoSpremljenihAnalizaPage()
const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Pretraga analize').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Pretraga analiza')
pretragaPrivremenoSpremljenihAnalizaPage.getPretragaPrivremeoSpremljenihAnaliza().click({force: true})
cy.get(':nth-child(6) > p').should('have.text','Učitavanja analiza')

//Filter pretrage
pretragaPrivremenoSpremljenihAnalizaPage.getUzorciUcitani().type(`Ne{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZavod().type(`ZZJZ - Gospić{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZonaOpskrbe().type('ZO GOSPIĆ 1')
cy.get('#react-select-15-option-0:visible').should('have.text','ZO GOSPIĆ 1').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage. getNaseljeUzorkovanja().type('Gospić')
cy.get('#react-select-16-option-0:visible').should('have.text','Gospić').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getPravnaOsoba().type('USLUGA D.O.O.')
cy.get('#react-select-17-option-0:visible').should('have.text','USLUGA D.O.O.').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getAnalitickiBroj().type('PrS-356/2021')
pretragaPrivremenoSpremljenihAnalizaPage.getVrstaMonitoringa().type(`Monitoring parametara skupine B{enter}{enter}`)

//Klik Pretraži
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPretrazi().click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
unosAnalizePage.getAnalitickiBroj().should('have.value','PrS-356/2021')



})


it('Pretraga privremeno spremljenih analiza Izvorišni', function()
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

//Filter pretrage
pretragaPrivremenoSpremljenihAnalizaPage.getUzorciUcitani().type(`Ne{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZavod().type(`ZZJZ - Rijeka{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getZonaOpskrbe().type('ZO FUŽINE')
cy.get('#react-select-15-option-0:visible').should('have.text','ZO FUŽINE').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getPravnaOsoba().type('Komunalac vodoopskrba i odvodnja d.o.o.')
cy.get('#react-select-17-option-0:visible').should('have.text','Komunalac vodoopskrba i odvodnja d.o.o.').click({force: true})
pretragaPrivremenoSpremljenihAnalizaPage.getTipVodoopskrbe().type(`Javna{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
pretragaPrivremenoSpremljenihAnalizaPage.getAnalitickiBroj().type('PrS-653/2021')
pretragaPrivremenoSpremljenihAnalizaPage.getVrstaMonitoringa().type(`Izvorišni{enter}{enter}`)

//Klik Pretraži
pretragaPrivremenoSpremljenihAnalizaPage.getbtnPretrazi().click()

//Klik Uredi analizu
cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena dobra analiza
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box').should('have.value','PrS-653/2021')



})



})