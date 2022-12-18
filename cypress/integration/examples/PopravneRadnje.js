/// <reference types="cypress" />
import PopravneRadnjePage from '../../support/pageObjects/PopravneRadnjePage'

describe('PopravneRadnje', function ()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })


it('Unesi popravne radnje za Monitoring A', function()
{

const popravneRadnjePage = new PopravneRadnjePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Popravne radnje').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Popravne radnje')

//Filter pretrage
popravneRadnjePage.getStatusUnosa().type(`Nije uneseno{enter}{enter}`)
popravneRadnjePage.getZavod().type(`ZZJZ - Sisak{enter}{enter}`)
popravneRadnjePage.getVodoopskrbnoPodrucje().type('DP PETRINJA-SISAK')
cy.get('#react-select-5-option-0:visible').should('have.text','DP PETRINJA-SISAK').click({force: true})
popravneRadnjePage.getZonaOpskrbe().type('ZO HRVATSKA KOSTAJNICA')
cy.get('#react-select-6-option-0:visible').should('have.text','ZO HRVATSKA KOSTAJNICA').click({force: true})
popravneRadnjePage.getNaseljeUzorkovanja().type('Hrvatska Kostajnica')
cy.get('#react-select-7-option-0:visible').should('have.text','Hrvatska Kostajnica').click({force: true})
popravneRadnjePage.getPravnaOsoba().type('JP KOMUNALAC D.O.O.')
cy.get('#react-select-8-option-0:visible').should('have.text','JP KOMUNALAC D.O.O.').click({force: true})
popravneRadnjePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`)
popravneRadnjePage.getGodinaUzorkovanja().type(`2021{enter}{enter}`)
popravneRadnjePage.getAnalitickiBroj().type(`Test022/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja
popravneRadnjePage.getVrstaMonitoringa().type(`Monitoring parametara skupine A{enter}{enter}`)

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Klik na Uredi
//cy.get('.text-center > a > .icon > use').click({force: true})

cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena ispravna Analiza
cy.get('.hydra-section-title > p').should('have.text','Popravne radnje za analizu')
cy.get('.analyticNumb > .text-uppercase').should('have.text','Test022/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja
cy.get(':nth-child(2) > .text-uppercase').should('have.text','Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica')

//Popunjavanje Popravnih radnji za pokazatelje
cy.get(':nth-child(1) > .text-left').should('have.text','Ukupni koliformi')
cy.get(':nth-child(1) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(1) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(1) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(1) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(2) > .text-left').should('have.text','Rezidualni klor slobodni')
cy.get(':nth-child(2) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Pročišćavanje{enter}{enter}`)
cy.get(':nth-child(2) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) zamjene izvora{enter}{enter}`)
cy.get(':nth-child(2) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kratkoročno, t.j. ne više od 30 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(2) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(3) > .text-left').should('have.text','Nitriti')
cy.get(':nth-child(3) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Javna distribucijska mreža{enter}{enter}`)
cy.get(':nth-child(3) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Uspostava, nadogradnja ili poboljšanje pročišćavanja{enter}{enter}`)
cy.get(':nth-child(3) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Srednjeročno, t.j. više od 30 dana, ali ne više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(3) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(4) > .text-left').should('have.text','Nitrati - redovni')
cy.get(':nth-child(4) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kućne instalacije{enter}{enter}`)
cy.get(':nth-child(4) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Zamjena, isključenje ili popravak neispravnih komponenti{enter}{enter}`)
cy.get(':nth-child(4) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Dugoročno, t.j. više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(4) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(5) > .text-left').should('have.text','Escherichia coli - redovni')
cy.get(':nth-child(5) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kombinirano{enter}{enter}`)
cy.get(':nth-child(5) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Čišćenje, ispiranje i/ili dezinfekcija kontaminiranih komponenti{enter}{enter}`)
cy.get(':nth-child(5) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kratkoročno, t.j. ne više od 30 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(5) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(6) > .text-left').should('have.text','Enterokoki')
cy.get(':nth-child(6) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Nepoznato{enter}{enter}`)
cy.get(':nth-child(6) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Sigurnosne mjere za sprječavanje neovlaštenog pristupa{enter}{enter}`)
cy.get(':nth-child(6) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(6) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

//Povratak na prethodnu stranicu
cy.go('back')

//Provjera statusa
popravneRadnjePage.getStatusUnosa().type(`Uneseno{enter}{enter}`)
//popravneRadnjePage.getAnalitickiBroj().type(`Test020/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Provjera podataka u tablici Rezultati pretrage
cy.get('tbody > tr > :nth-child(1)').should('have.text','Monitoring parametara skupine A')
cy.get('tbody > tr > :nth-child(2)').should('have.text','Javna')
cy.get('tbody > tr > :nth-child(3)').should('have.text','JP KOMUNALAC D.O.O.')
cy.get('tbody > tr > :nth-child(4)').should('have.text','ZO HRVATSKA KOSTAJNICA')
cy.get('tbody > tr > :nth-child(5)').should('have.text','Hrvatska Kostajnica')
cy.get('tbody > tr > :nth-child(7)').should('have.text','Test022/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja
cy.get('tbody > tr > :nth-child(8)').should('have.text','Unesene')



})


it('Unesi popravne radnje za Monitoring B', function()
{

const popravneRadnjePage = new PopravneRadnjePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Popravne radnje').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Popravne radnje')

//Filter pretrage
popravneRadnjePage.getStatusUnosa().type(`Nije uneseno{enter}{enter}`)
popravneRadnjePage.getAnalitickiBroj().type(`Test1015/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja
popravneRadnjePage.getVrstaMonitoringa().type(`Monitoring parametara skupine B{enter}{enter}`)

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Klik na Uredi
//cy.get('.text-center > a > .icon > use').click({force: true})

cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena ispravna Analiza
cy.get('.hydra-section-title > p').should('have.text','Popravne radnje za analizu')
cy.get('.analyticNumb > .text-uppercase').should('have.text','Test1015/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja
cy.get(':nth-child(2) > .text-uppercase').should('have.text','Zgrada općine Generalski Stol, Genaralski Stol 32')

//Popunjavanje Popravnih radnji za pokazatelje
cy.get(':nth-child(1) > .text-left').should('have.text','2,4-D')
cy.get(':nth-child(1) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(1) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(1) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(1) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(2) > .text-left').should('have.text','Vanadij ukupni')
cy.get(':nth-child(2) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kućne instalacije{enter}{enter}`)
cy.get(':nth-child(2) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Osiguranje privremenog alternativnog izvora vode za piće (npr. voda u bocama, voda u kontejnerima, tankeri s vodom{enter}{enter}`)
cy.get(':nth-child(2) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Srednjeročno, t.j. više od 30 dana, ali ne više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(2) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(3) > .text-left').should('have.text','Srebro ukupno')
cy.get(':nth-child(3) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Drugo{enter}{enter}`)
cy.get(':nth-child(3) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Obavijest i upute potrošačima, npr. zabrana upotrebe, obveza prokuhavanja vode, privremeno ograničenje potrošnje{enter}{enter}`)
cy.get(':nth-child(3) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(3) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(4) > .text-left').should('have.text','Bor ukupni')
cy.get(':nth-child(4) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Pročišćavanje{enter}{enter}`)
cy.get(':nth-child(4) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Zamjena, isključenje ili popravak neispravnih komponenti{enter}{enter}`)
cy.get(':nth-child(4) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kratkoročno, t.j. ne više od 30 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(4) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(5) > .text-left').should('have.text','Antimon ukupni')
cy.get(':nth-child(5) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(5) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) zamjene izvora{enter}{enter}`)
cy.get(':nth-child(5) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Dugoročno, t.j. više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(5) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(6) > .text-left').should('have.text','Detergenti neionski')
cy.get(':nth-child(6) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Nepoznato{enter}{enter}`)
cy.get(':nth-child(6) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(6) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Srednjeročno, t.j. više od 30 dana, ali ne više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(6) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

//Povratak na prethodnu stranicu
cy.go('back')

//Provjera statusa
popravneRadnjePage.getStatusUnosa().type(`Uneseno{enter}{enter}`)
//popravneRadnjePage.getAnalitickiBroj().type(`Test1014/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Provjera podataka u tablici Rezultati pretrage
cy.get('tbody > tr > :nth-child(7)').should('have.text','Test1015/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja
cy.get('tbody > tr > :nth-child(8)').should('have.text','Unesene')



})


it('Unesi popravne radnje za Izvorišni monitoring', function()
{

const popravneRadnjePage = new PopravneRadnjePage()

//Provjera da li sam ulogiran
cy.get('.navbar-brand').should('have.text','Analiza vode za ljudsku potrošnju')
cy.get('.breadcrumb > .active').should('have.text','Odnos planiranih i ostvarenih analiza')

//Odabir Pretraga analize
cy.contains('Popravne radnje').click({force: true})

//Provjera da li sam na pravoj stranici
cy.get('.breadcrumb-item').should('have.text','Popravne radnje')

//Filter pretrage
popravneRadnjePage.getStatusUnosa().type(`Nije uneseno{enter}{enter}`)
popravneRadnjePage.getAnalitickiBroj().type(`Test2012/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja
popravneRadnjePage.getVrstaMonitoringa().type(`Izvorišni{enter}{enter}`)

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Klik na Uredi
//cy.get('.text-center > a > .icon > use').click({force: true})

cy.get('[data-original-title="Uredi"]').click({force: true})

//Provjera da li je otvorena ispravna Analiza
cy.get('.hydra-section-title > p').should('have.text','Popravne radnje za analizu')
cy.get('.analyticNumb > .text-uppercase').should('have.text','Test2012/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja


//Popunjavanje Popravnih radnji za pokazatelje
cy.get(':nth-child(1) > .text-left').should('have.text','Clostridium perfringens (uključujući spore) - revizijski i izvorišni')
cy.get(':nth-child(1) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(1) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(1) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(1) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(2) > .text-left').should('have.text','Vanadij ukupni')
cy.get(':nth-child(2) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kućne instalacije{enter}{enter}`)
cy.get(':nth-child(2) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Osiguranje privremenog alternativnog izvora vode za piće (npr. voda u bocama, voda u kontejnerima, tankeri s vodom{enter}{enter}`)
cy.get(':nth-child(2) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Srednjeročno, t.j. više od 30 dana, ali ne više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(2) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(3) > .text-left').should('have.text','Ukupni broj koliformnih bakterija - revizijski i izvorišni')
cy.get(':nth-child(3) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Drugo{enter}{enter}`)
cy.get(':nth-child(3) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Obavijest i upute potrošačima, npr. zabrana upotrebe, obveza prokuhavanja vode, privremeno ograničenje potrošnje{enter}{enter}`)
cy.get(':nth-child(3) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(3) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(4) > .text-left').should('have.text','Kadmij ukupni')
cy.get(':nth-child(4) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Pročišćavanje{enter}{enter}`)
cy.get(':nth-child(4) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Zamjena, isključenje ili popravak neispravnih komponenti{enter}{enter}`)
cy.get(':nth-child(4) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Kratkoročno, t.j. ne više od 30 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(4) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(5) > .text-left').should('have.text','Hepatitis A')
cy.get(':nth-child(5) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(5) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) zamjene izvora{enter}{enter}`)
cy.get(':nth-child(5) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Dugoročno, t.j. više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(5) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(6) > .text-left').should('have.text','Escherichia coli - revizijski i izvorišni')
cy.get(':nth-child(6) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Nepoznato{enter}{enter}`)
cy.get(':nth-child(6) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(6) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Srednjeročno, t.j. više od 30 dana, ali ne više od godinu dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(6) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(7) > .text-left').should('have.text','Enterovirusi')
cy.get(':nth-child(7) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Slivno područje{enter}{enter}`)
cy.get(':nth-child(7) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Radnja (radnje) uklanjanja ili ublažavanja uzroka{enter}{enter}`)
cy.get(':nth-child(7) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(7) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

cy.get(':nth-child(8) > .text-left').should('have.text','Enterokoki')
cy.get(':nth-child(8) > :nth-child(5) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Nepoznato{enter}{enter}`)
cy.get(':nth-child(8) > .extra-large > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Osiguranje privremenog alternativnog izvora vode za piće (npr. voda u bocama, voda u kontejnerima, tankeri s vodom{enter}{enter}`)
cy.get(':nth-child(8) > :nth-child(7) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`Hitno, t.j. ne više od 1 dana{enter}{enter}`)

//Klik Spremi
cy.get(':nth-child(8) > :nth-child(8) > a > .icon').click({force: true})

//Provjera Poruke spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Popravna radnja je uspješno dodana.')
})

//Povratak na prethodnu stranicu
cy.go('back')

//Provjera statusa
popravneRadnjePage.getStatusUnosa().type(`Uneseno{enter}{enter}`)
//popravneRadnjePage.getAnalitickiBroj().type(`Test2011/2021{enter}{enter}`)//Potrebno je ažurirati analitički broj prije svakog pokretanja

//Klik na gumb Pretraži
popravneRadnjePage.getbtnPretrazi().click()

//Provjera podataka u tablici Rezultati pretrage
cy.get('tbody > tr > :nth-child(7)').should('have.text','Test2012/2021')//Potrebno je ažurirati analitički broj prije svakog pokretanja
cy.get('tbody > tr > :nth-child(8)').should('have.text','Unesene')



})



})