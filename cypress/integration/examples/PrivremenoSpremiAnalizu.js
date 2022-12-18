/// <reference types="cypress" />
import UnosAnalizePage from '../../support/pageObjects/UnosAnalizePage'

describe('PrivremenoSpremiAnalizu', function()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })

it('Privremeno spremi analizu Monitoring A', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/monitoring-parametara-skupine-A"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Monitoring parametara skupine A')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(9) > p').should('have.text','Ostalo')
cy.get(':nth-child(12) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(14) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('14.02.2021').should('have.value','14.02.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Osječko-baranjska{enter}{enter}`).should('have.text','Osječko-baranjska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP NAŠICE{enter}{enter}`).should('have.text','DP NAŠICE')
unosAnalizePage.getZonaOpskrbe().type(`ZO ĐURĐENOVAC{enter}{enter}`).should('have.text','ZO ĐURĐENOVAC')
unosAnalizePage.getOznakaZO().should('have.value','54')
unosAnalizePage.getJivu().type(`VODORAD d.o.o.{enter}{enter}`).should('have.text','VODORAD d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Trg dr. Franje Tuđmana 6')
unosAnalizePage.getOib().should('have.value','61359571034')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Đurđenovac{enter}{enter}`).should('have.text','Đurđenovac')
unosAnalizePage.getLokacijaUzorkovanja().type(`VZ Đurđenovac - crpilište Đurđenovac, strojarnica{enter}{enter}`)
.should('have.text','VZ Đurđenovac - crpilište Đurđenovac, strojarnica')
unosAnalizePage.getOznakaLokacije().should('have.value','9844')
unosAnalizePage.getTipLokacije().should('have.value','Vodni objekti')
unosAnalizePage.getKoordinataN().should('have.value','5045521.6')
unosAnalizePage.getKoordinataE().should('have.value','621124.6')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Dnevni slučajni uzorak{enter}{enter}`).should('have.text','Dnevni slučajni uzorak')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Potpuno isprano{enter}{enter}`).should('have.text','Potpuno isprano')
unosAnalizePage.getUzorkovatelj().type(`HZJZ - Admin Osijek{enter}{enter}`).should('have.text','HZJZ - Admin Osijek')
unosAnalizePage.getAnalitickiBroj().type('PrS-019/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analiza je privremeno spremljena.')
})



})


it('Privremeno spremi analizu Monitoring B', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/monitoring-parametara-skupine-B"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Monitoring parametara skupine B')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(9) > p').should('have.text','Ostalo')
cy.get(':nth-child(12) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(14) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('13.02.2021').should('have.value','13.02.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Ličko-senjska{enter}{enter}`).should('have.text','Ličko-senjska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP GOSPIĆ{enter}{enter}`).should('have.text','DP GOSPIĆ')
unosAnalizePage.getZonaOpskrbe().type(`ZO GOSPIĆ 1{enter}{enter}`).should('have.text','ZO GOSPIĆ 1')
unosAnalizePage.getOznakaZO().should('have.value','65')
unosAnalizePage.getJivu().type(`USLUGA D.O.O.{enter}{enter}`).should('have.text','USLUGA D.O.O.')
unosAnalizePage.getAdresa().should('have.value','BUŽIMSKA 10')
unosAnalizePage.getOib().should('have.value','90077579259')
unosAnalizePage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`).should('have.text','Lokalna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Gospić{enter}{enter}`).should('have.text','Gospić')
unosAnalizePage.getLokacijaUzorkovanja().type(`Caffe bar Euro caffe, Kaniška bb, Gospić{enter}{enter}`)
.should('have.text','Caffe bar Euro caffe, Kaniška bb, Gospić')
unosAnalizePage.getOznakaLokacije().should('have.value','9991')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','4934547.9')
unosAnalizePage.getKoordinataE().should('have.value','410054.3')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Dezinfekcija točke uzorkovanja{enter}{enter}`).should('have.text','Dezinfekcija točke uzorkovanja')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Potpuno isprano i dezinfekcija točke uzorkovanja{enter}{enter}`)
.should('have.text','Potpuno isprano i dezinfekcija točke uzorkovanja')
unosAnalizePage.getUzorkovatelj().type(`Gospić Operater{enter}{enter}`).should('have.text','Gospić Operater')
unosAnalizePage.getAnalitickiBroj().type('PrS-364/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analiza je privremeno spremljena.')
})



})


it('Privremeno spremi Izvorišni monitoring', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/izvorisni"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Izvorišni monitoring')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(10) > p').should('have.text','Ostalo')
cy.get(':nth-child(13) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(15) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('08.03.2021').should('have.value','08.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Primorsko-goranska{enter}{enter}`).should('have.text','Primorsko-goranska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP OPATIJA-RIJEKA-KRK{enter}{enter}`).should('have.text','DP OPATIJA-RIJEKA-KRK')
unosAnalizePage.getZonaOpskrbe().type(`ZO FUŽINE{enter}{enter}`).should('have.text','ZO FUŽINE')
unosAnalizePage.getOznakaZO().should('have.value','61')
unosAnalizePage.getJivu().type(`Komunalac vodoopskrba i odvodnja d.o.o.{enter}{enter}`).should('have.text','Komunalac vodoopskrba i odvodnja d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Frana Supila 173')
unosAnalizePage.getOib().should('have.value','13670112490')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getTipVode().type(`Površinska{enter}{enter}`).should('have.text','Površinska')
unosAnalizePage.getNazivVodozahvata().type(`izvor Ličanke{enter}{enter}`).should('have.text','izvor Ličanke')
unosAnalizePage.getOznakaVodozahvata().should('have.value','288')

//Ostalo
unosAnalizePage.getVremenskePrilike().type(`Slaba kiša{enter}{enter}`).should('have.text','Slaba kiša')
cy.get(':nth-child(11) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Administrator  Rijeka{enter}{enter}`).should('have.text','Administrator  Rijeka')
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box')
.type('PrS-660/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik Privremeno Spremi
cy.get(':nth-child(14) > .col-md-6 > .d-flex > .large').click()

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analiza je privremeno spremljena.')
})



})

/*
it('Analitički broj već postoji u sustavu Monitoring A', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/monitoring-parametara-skupine-A"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Monitoring parametara skupine A')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(9) > p').should('have.text','Ostalo')
cy.get(':nth-child(12) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(14) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('14.02.2021').should('have.value','14.02.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Osječko-baranjska{enter}{enter}`).should('have.text','Osječko-baranjska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP NAŠICE{enter}{enter}`).should('have.text','DP NAŠICE')
unosAnalizePage.getZonaOpskrbe().type(`ZO ĐURĐENOVAC{enter}{enter}`).should('have.text','ZO ĐURĐENOVAC')
unosAnalizePage.getOznakaZO().should('have.value','54')
unosAnalizePage.getJivu().type(`VODORAD d.o.o.{enter}{enter}`).should('have.text','VODORAD d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Trg dr. Franje Tuđmana 6')
unosAnalizePage.getOib().should('have.value','61359571034')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Đurđenovac{enter}{enter}`).should('have.text','Đurđenovac')
unosAnalizePage.getLokacijaUzorkovanja().type(`VZ Đurđenovac - crpilište Đurđenovac, strojarnica{enter}{enter}`)
.should('have.text','VZ Đurđenovac - crpilište Đurđenovac, strojarnica')
unosAnalizePage.getOznakaLokacije().should('have.value','9844')
unosAnalizePage.getTipLokacije().should('have.value','Vodni objekti')
unosAnalizePage.getKoordinataN().should('have.value','5045521.6')
unosAnalizePage.getKoordinataE().should('have.value','621124.6')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Dnevni slučajni uzorak{enter}{enter}`).should('have.text','Dnevni slučajni uzorak')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Potpuno isprano{enter}{enter}`).should('have.text','Potpuno isprano')
unosAnalizePage.getUzorkovatelj().type(`HZJZ - Admin Osijek{enter}{enter}`).should('have.text','HZJZ - Admin Osijek')
unosAnalizePage.getAnalitickiBroj().type('PrS-001/2021')

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Poruka upozorenja
cy.get('.hydra-error-box:visible').should('have.text','Analitički broj već postoji u sustavu')

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast:visible').should('be.visible')
cy.get('.Toastify__toast-body:visible').should('have.text','Odaberite i unesite obvezna polja!')



})


it('Analitički broj već postoji u sustavu Monitoring B', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/monitoring-parametara-skupine-B"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Monitoring parametara skupine B')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(9) > p').should('have.text','Ostalo')
cy.get(':nth-child(12) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(14) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('13.02.2021').should('have.value','13.02.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Ličko-senjska{enter}{enter}`).should('have.text','Ličko-senjska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP GOSPIĆ{enter}{enter}`).should('have.text','DP GOSPIĆ')
unosAnalizePage.getZonaOpskrbe().type(`ZO GOSPIĆ 1{enter}{enter}`).should('have.text','ZO GOSPIĆ 1')
unosAnalizePage.getOznakaZO().should('have.value','65')
unosAnalizePage.getJivu().type(`USLUGA D.O.O.{enter}{enter}`).should('have.text','USLUGA D.O.O.')
unosAnalizePage.getAdresa().should('have.value','BUŽIMSKA 10')
unosAnalizePage.getOib().should('have.value','90077579259')
unosAnalizePage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`).should('have.text','Lokalna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Gospić{enter}{enter}`).should('have.text','Gospić')
unosAnalizePage.getLokacijaUzorkovanja().type(`Caffe bar Euro caffe, Kaniška bb, Gospić{enter}{enter}`)
.should('have.text','Caffe bar Euro caffe, Kaniška bb, Gospić')
unosAnalizePage.getOznakaLokacije().should('have.value','9991')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','4934547.9')
unosAnalizePage.getKoordinataE().should('have.value','410054.3')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Dezinfekcija točke uzorkovanja{enter}{enter}`).should('have.text','Dezinfekcija točke uzorkovanja')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Potpuno isprano i dezinfekcija točke uzorkovanja{enter}{enter}`)
.should('have.text','Potpuno isprano i dezinfekcija točke uzorkovanja')
unosAnalizePage.getUzorkovatelj().type(`Gospić Operater{enter}{enter}`).should('have.text','Gospić Operater')
unosAnalizePage.getAnalitickiBroj().type('PrS-360/2021')

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Poruka upozorenja
cy.get('.hydra-error-box:visible').should('have.text','Analitički broj već postoji u sustavu')

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast:visible').should('be.visible')
cy.get('.Toastify__toast-body:visible').should('have.text','Odaberite i unesite obvezna polja!')



})


it('Analitički broj već postoji u sustavu Izvorišni', function()
{

const unosAnalizePage = new UnosAnalizePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir monitoringa
cy.get('div.dropdown-menu').eq(0).invoke('show')
cy.get('[href="/analiza/izvorisni"]:visible').click({force:true})

//Provjera da li je odabran ispravan monitoring i da li se nalazim na kartici Osnovni podaci
cy.get('.breadcrumb > .active').should('have.text','Izvorišni monitoring')
cy.get(':nth-child(1) > p').should('have.text','Datum i vrijeme')
cy.get(':nth-child(3) > p').should('have.text','Lokacija')
cy.get(':nth-child(10) > p').should('have.text','Ostalo')
cy.get(':nth-child(13) > p').should('have.text','Privremeno spremi')
cy.get(':nth-child(15) > p').should('have.text','Preuzmi i učitaj datoteku')

//Unos Datum i vrijeme
unosAnalizePage.getDatumUzorkovanja().type('08.03.2021').should('have.value','08.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Primorsko-goranska{enter}{enter}`).should('have.text','Primorsko-goranska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP OPATIJA-RIJEKA-KRK{enter}{enter}`).should('have.text','DP OPATIJA-RIJEKA-KRK')
unosAnalizePage.getZonaOpskrbe().type(`ZO FUŽINE{enter}{enter}`).should('have.text','ZO FUŽINE')
unosAnalizePage.getOznakaZO().should('have.value','61')
unosAnalizePage.getJivu().type(`Komunalac vodoopskrba i odvodnja d.o.o.{enter}{enter}`).should('have.text','Komunalac vodoopskrba i odvodnja d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Frana Supila 173')
unosAnalizePage.getOib().should('have.value','13670112490')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getTipVode().type(`Površinska{enter}{enter}`).should('have.text','Površinska')
unosAnalizePage.getNazivVodozahvata().type(`izvor Ličanke{enter}{enter}`).should('have.text','izvor Ličanke')
unosAnalizePage.getOznakaVodozahvata().should('have.value','288')

//Ostalo
unosAnalizePage.getVremenskePrilike().type(`Slaba kiša{enter}{enter}`).should('have.text','Slaba kiša')
cy.get(':nth-child(11) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Administrator  Rijeka{enter}{enter}`).should('have.text','Administrator  Rijeka')
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box').type('PrS-658/2021')

//Klik Privremeno Spremi
cy.get(':nth-child(14) > .col-md-6 > .d-flex > .large').click()

//Poruka upozorenja
cy.get('.hydra-error-box:visible').should('have.text','Analitički broj već postoji u sustavu')

//Provjera poruke Privremenog Spremanja
cy.get('.Toastify__toast:visible').should('be.visible')
cy.get('.Toastify__toast-body:visible').should('have.text','Odaberite i unesite obvezna polja!')



})
*/


})