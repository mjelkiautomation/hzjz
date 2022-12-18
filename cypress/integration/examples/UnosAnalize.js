/// <reference types="cypress" />
import UnosAnalizePage from '../../support/pageObjects/UnosAnalizePage'
import MikrobioloskiPokazateljiMonitoringAPage from '../../support/pageObjects/MikrobioloskiPokazateljiMonitoringAPage'
import KemijskiPokazateljiMonitoringAPage from '../../support/pageObjects/KemijskiPokazateljiMonitoringAPage'
import IndikatorskiPokazateljiMonitoringAPage from '../../support/pageObjects/IndikatorskiPokazateljiMonitoringAPage'
import MikrobioloskiPokazateljiMonitoringBPage from '../../support/pageObjects/MikrobioloskiPokazateljiMonitoringBPage'
import KemijskiPokazateljiMonitoringBPage from '../../support/pageObjects/KemijskiPokazateljiMonitoringBPage'
import IndikatorskiPokazateljiMonitoringBPage from '../../support/pageObjects/IndikatorskiPokazateljiMonitoringBPage'
import PesticidiPokazateljiMonitoringBPage from '../../support/pageObjects/PesticidiPokazateljiMonitoringBPage'
import MikrobioloskiPokazateljiIzvorisniPage from '../../support/pageObjects/MikrobioloskiPokazateljiIzvorisniPage'
import KemijskiPokazateljiIzvorisniPage from '../../support/pageObjects/KemijskiPokazateljiIzvorisniPage'
import IndikatorskiPokazateljiIzvorisniPage from '../../support/pageObjects/IndikatorskiPokazateljiIzvorisniPage'
import PesticidiPokazateljiIzvorisniPage from '../../support/pageObjects/PesticidiPokazateljiIzvorisniPage'

describe('UnosAnalize', function()
{

    //before
    beforeEach('Login', () => {
        cy.fixture('example.json').then((podaci) => {
            cy.login(podaci.username, podaci.password)
        })

    })

it('Monitoring parametara skupine A',function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiMonitoringAPage = new MikrobioloskiPokazateljiMonitoringAPage()
const kemijskiPokazateljiMonitoringAPage = new KemijskiPokazateljiMonitoringAPage()
const indikatorskiPokazateljiMonitoringAPage = new IndikatorskiPokazateljiMonitoringAPage()

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
unosAnalizePage.getDatumUzorkovanja().type('28.01.2021').should('have.value','28.01.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Sisačko-moslavačka{enter}{enter}`).should('have.text','Sisačko-moslavačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PETRINJA-SISAK{enter}{enter}`).should('have.text','DP PETRINJA-SISAK')
unosAnalizePage.getZonaOpskrbe().type(`ZO HRVATSKA KOSTAJNICA{enter}{enter}`).should('have.text','ZO HRVATSKA KOSTAJNICA')
unosAnalizePage.getOznakaZO().should('have.value','81')
unosAnalizePage.getJivu().type(`JP KOMUNALAC D.O.O.{enter}{enter}`).should('have.text','JP KOMUNALAC D.O.O.')
unosAnalizePage.getAdresa().should('have.value','UNSKA 1')
unosAnalizePage.getOib().should('have.value','28622553096')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Hrvatska Kostajnica{enter}{enter}`).should('have.text','Hrvatska Kostajnica')
unosAnalizePage.getLokacijaUzorkovanja().type(`Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica{enter}{enter}`)
.should('have.text','Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica')
unosAnalizePage.getOznakaLokacije().should('have.value','10079')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5009603')
unosAnalizePage.getKoordinataE().should('have.value','503468')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano{enter}{enter}`).should('have.text','Potpuno isprano')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dnevni slučajni uzorak{enter}{enter}`).should('have.text','Dnevni slučajni uzorak')
unosAnalizePage.getUzorkovatelj().type(`Sisak Administrator{enter}{enter}`).should('have.text','Sisak Administrator')
unosAnalizePage.getAnalitickiBroj().type('Test025/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiMonitoringAPage.getClostridium().type('-9999')
mikrobioloskiPokazateljiMonitoringAPage.getEnterokoki().type('59')
mikrobioloskiPokazateljiMonitoringAPage.getEscherichia().type('1,18')
mikrobioloskiPokazateljiMonitoringAPage.getPseudomonas().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiMonitoringAPage.getArsen().type('-9999')
kemijskiPokazateljiMonitoringAPage.getKlorati().type('11')
kemijskiPokazateljiMonitoringAPage.getKloriti().type('32')
kemijskiPokazateljiMonitoringAPage.getNitrati().type('87')
kemijskiPokazateljiMonitoringAPage.getNitriti().type('15')
kemijskiPokazateljiMonitoringAPage.getNitritiNaIzlasku().type('-9999')
kemijskiPokazateljiMonitoringAPage.getOtopljeniOzon().type('2,228')
kemijskiPokazateljiMonitoringAPage.getRezidualniKlor().type('35')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiMonitoringAPage.getAluminijUkupni().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getAmonijRedovni().type('0,2')
indikatorskiPokazateljiMonitoringAPage.getBoja().type('<5')
indikatorskiPokazateljiMonitoringAPage.getBrojKolonija22().type('0')
indikatorskiPokazateljiMonitoringAPage.getBrojKolonija36().type('0')
indikatorskiPokazateljiMonitoringAPage.getElektricnaVodljivost().type('459')
indikatorskiPokazateljiMonitoringAPage.getHidrogenkarbonati().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getKloridi().type('4,6')
indikatorskiPokazateljiMonitoringAPage.getKoncentracijaVodikovihIona().type('7,8')
indikatorskiPokazateljiMonitoringAPage.getMangan().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiMonitoringAPage.getMutnoca().type('0,18')
indikatorskiPokazateljiMonitoringAPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiMonitoringAPage.getTemperatura().type('11,8')
indikatorskiPokazateljiMonitoringAPage.getUkupniKoliformi().type('40')
indikatorskiPokazateljiMonitoringAPage.getUtrošakKMnO4().type('0,8')
indikatorskiPokazateljiMonitoringAPage.getZeljezoUkupno().type('-9999')
//indikatorskiPokazateljiMonitoringAPage.getOcjenaIspravnosti().type(`Ispravan{enter}{enter}`)

//Klik Spremi
cy.contains('Spremi').click()

//Provjera poruke Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Podaci su uspješno spremljeni.')
})

indikatorskiPokazateljiMonitoringAPage.getOcjenaIspravnosti().should('be.visible')



})


it('Monitoring parametara skupine B', function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiMonitoringBPage = new MikrobioloskiPokazateljiMonitoringBPage()
const kemijskiPokazateljiMonitoringBPage = new KemijskiPokazateljiMonitoringBPage()
const indikatorskiPokazateljiMonitoringBPage = new IndikatorskiPokazateljiMonitoringBPage()
const pesticidiPokazateljiMonitoringBPage = new PesticidiPokazateljiMonitoringBPage()

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
unosAnalizePage.getDatumUzorkovanja().type('01.03.2021').should('have.value','01.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Karlovačka{enter}{enter}`).should('have.text','Karlovačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP KARLOVAC-DUGA RESA{enter}{enter}`).should('have.text','DP KARLOVAC-DUGA RESA')
unosAnalizePage.getZonaOpskrbe().type(`ZO GENERALSKI STOL{enter}{enter}`).should('have.text','ZO GENERALSKI STOL')
unosAnalizePage.getOznakaZO().should('have.value','63')
unosAnalizePage.getJivu().type(`Komunalno Duga Resa d.o.o.{enter}{enter}`).should('have.text','Komunalno Duga Resa d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Kolodvorska 1')
unosAnalizePage.getOib().should('have.value','26222996778')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Generalski Stol{enter}{enter}`).should('have.text','Generalski Stol')
unosAnalizePage.getLokacijaUzorkovanja().type(`Zgrada općine Generalski Stol, Genaralski Stol 32{enter}{enter}`)
.should('have.text','Zgrada općine Generalski Stol, Genaralski Stol 32')
unosAnalizePage.getOznakaLokacije().should('have.value','9882')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5023509.5')
unosAnalizePage.getKoordinataE().should('have.value','412137.8')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano i dezinfekcija točke uzorkovanja{enter}{enter}`)
.should('have.text','Potpuno isprano i dezinfekcija točke uzorkovanja')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dezinfekcija točke uzorkovanja{enter}{enter}`).should('have.text','Dezinfekcija točke uzorkovanja')
unosAnalizePage.getUzorkovatelj().type(`HZJZ - Admin Karlovac{enter}{enter}`).should('have.text','HZJZ - Admin Karlovac')
unosAnalizePage.getAnalitickiBroj().type('Test1021/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiMonitoringBPage.getClostridium().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getCoxackie().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEcho().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEnterokoki().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getEnterovirusi().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEscherichia().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getHepatitisA().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getPolio().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getPseudomonas().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getRota().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiMonitoringBPage.getDikloretan().type('1')
kemijskiPokazateljiMonitoringBPage.getAkrilamid().type('-9999')
kemijskiPokazateljiMonitoringBPage.getAntimonUkupni().type('27')
kemijskiPokazateljiMonitoringBPage.getArsenUkupni().type('<1')
kemijskiPokazateljiMonitoringBPage.getBakarUkupni().type('0,1')
kemijskiPokazateljiMonitoringBPage.getBenzen().type('<0,2')
kemijskiPokazateljiMonitoringBPage.getBenzoApiren().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoBfluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoGHIperilen().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoKfluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBorUkupni().type('12')
kemijskiPokazateljiMonitoringBPage.getBromati().type('<2')
kemijskiPokazateljiMonitoringBPage.getBromdiklormetan().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBromoform().type('-9999')
kemijskiPokazateljiMonitoringBPage.getCijanidiUkupni().type('<15')
kemijskiPokazateljiMonitoringBPage.getDibromklormetan().type('-9999')
kemijskiPokazateljiMonitoringBPage.getEpiklorhidrin().type('<0,05')
kemijskiPokazateljiMonitoringBPage.getFluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getFluoridi().type('0,14')
kemijskiPokazateljiMonitoringBPage.getIndeno123CDPiren().type('-9999')
kemijskiPokazateljiMonitoringBPage.getKadmijUkupni().type('5')
kemijskiPokazateljiMonitoringBPage.getKlorati().type('<10')
kemijskiPokazateljiMonitoringBPage.getKloriti().type('100')
kemijskiPokazateljiMonitoringBPage.getKromUkupni().type('8')
kemijskiPokazateljiMonitoringBPage.getNikalUkupni().type('6')
kemijskiPokazateljiMonitoringBPage.getNitratiRevizijskiIIzvorisni().type('6,7')
kemijskiPokazateljiMonitoringBPage.getNitriti().type('0,1')
kemijskiPokazateljiMonitoringBPage.getNitritiUVodi().type('-9999')
kemijskiPokazateljiMonitoringBPage.getOlovoUkupno().type('7')
kemijskiPokazateljiMonitoringBPage.getOtopljeniOzon().type('-9999')
kemijskiPokazateljiMonitoringBPage.getPesticidiUkupni().type('<0,5')
kemijskiPokazateljiMonitoringBPage.getPAH().type('0,1')
kemijskiPokazateljiMonitoringBPage.getRezidualniKlor().type('0,18')
kemijskiPokazateljiMonitoringBPage.getSelenUkupni().type('-9999')
kemijskiPokazateljiMonitoringBPage.getSumaTetrakloretenITrikloreten().type('0,17')
kemijskiPokazateljiMonitoringBPage.getTetrakloreten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTrihalometaniUkupni().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTrikloreten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTriklormetanKloroform().type('-9999')
kemijskiPokazateljiMonitoringBPage.getVinilKlorid().type('-9999')
kemijskiPokazateljiMonitoringBPage.getZivaUkupna().type('0,6')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiMonitoringBPage.getAluminijUkupni().type('9,5')
indikatorskiPokazateljiMonitoringBPage.getAmonijRevizijskiIIzvorisni().type('0,2')
indikatorskiPokazateljiMonitoringBPage.getBarijUkupni().type('22,4')
indikatorskiPokazateljiMonitoringBPage.getBerilijUkupni().type('14')
indikatorskiPokazateljiMonitoringBPage.getBoja().type('5')
indikatorskiPokazateljiMonitoringBPage.getBrojKolonija22().type('0')
indikatorskiPokazateljiMonitoringBPage.getBrojKolonija36().type('0')
indikatorskiPokazateljiMonitoringBPage.getCinkUkupni().type('209')
indikatorskiPokazateljiMonitoringBPage.getDetergentiAnionski().type('50')
indikatorskiPokazateljiMonitoringBPage.getDetergentiNeionski().type('224')
indikatorskiPokazateljiMonitoringBPage.getElektricnaVodljivost().type('480')
indikatorskiPokazateljiMonitoringBPage.getFenoliUkupni().type('<2')
indikatorskiPokazateljiMonitoringBPage.getHidrogenkarbonati().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getKalcij().type('74')
indikatorskiPokazateljiMonitoringBPage.getKalij().type('1,8')
indikatorskiPokazateljiMonitoringBPage.getKloridiRevizijskiIIzvorisni().type('7,2')
indikatorskiPokazateljiMonitoringBPage.getKobaltUkupni().type('2,5')
indikatorskiPokazateljiMonitoringBPage.getKoncentracijaVodikovihIona().type('7,8')
indikatorskiPokazateljiMonitoringBPage.getMagnezij().type('15')
indikatorskiPokazateljiMonitoringBPage.getManganUkupni().type('23,4')
indikatorskiPokazateljiMonitoringBPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiMonitoringBPage.getMutnoca().type('0,21')
indikatorskiPokazateljiMonitoringBPage.getNatrij().type('5,2')
indikatorskiPokazateljiMonitoringBPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiMonitoringBPage.getOrtofosfatiOtopljeni().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getSilikatiOtopljeni().type('6,9')
indikatorskiPokazateljiMonitoringBPage.getSrebroUkupno().type('30')
indikatorskiPokazateljiMonitoringBPage.getSulfati().type('22')
indikatorskiPokazateljiMonitoringBPage.getTemperaturaVode().type('18,2')
indikatorskiPokazateljiMonitoringBPage.getTvrdocaUkupna().type('276')
indikatorskiPokazateljiMonitoringBPage.getUgljikovodici().type('<5')
indikatorskiPokazateljiMonitoringBPage.getUkupneSuspendiraneTvari().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getUkupniBrojKoliformnihBakterija().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getUkupniKoliformi().type('0')
indikatorskiPokazateljiMonitoringBPage.getUkupniOrganskiUgljik().type('15')
indikatorskiPokazateljiMonitoringBPage.getUtrošakKMnO4().type('0,6')
indikatorskiPokazateljiMonitoringBPage.getVanadijUkupni().type('23')
indikatorskiPokazateljiMonitoringBPage.getVodikovSulfid().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getZeljezoUkupno().type('23,4')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Pesticidni pokazatelji
pesticidiPokazateljiMonitoringBPage.get24D().type('2')
pesticidiPokazateljiMonitoringBPage.get26Diklorbenzamid().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAcetoklor().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getAtrazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getBentazon().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getBromacil().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getDesetilAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDikamba().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getDimetoat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDiuron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getFosetil().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getGlifosat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getIzodrin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getIzoproturon().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getKlorfenvinfos().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getKlorpirifosEtil().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getKlorpirifosMetil().type('0,1')
pesticidiPokazateljiMonitoringBPage.getKlortoluron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getLinuron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMalation().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMankozeb().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getMCPA().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMekoprop().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getMetolaklor().type('-9999')
pesticidiPokazateljiMonitoringBPage.getMetribuzin().type('-9999')
pesticidiPokazateljiMonitoringBPage.getOmetoat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getPendimetalin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getPirimifosMetil().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getSimazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getSMetolaklor().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getTebukonazol().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getTerbutilazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetilDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetil2HidroksiAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiSimazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiTerbutilazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetilTerbutilazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getMalaokson().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDesmetilIzoproturon().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDimetenamidP().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getProsulfokarb().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getPropineb().type('<0,04')
pesticidiPokazateljiMonitoringBPage.getTiofanatMetil().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAzoksistrobin().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getFolpet().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAcetoklorESA().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getAcetoklorOXA().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getMetolaklorESA().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getMetolaklorOXA().type('<0,01')
//pesticidiPokazateljiMonitoringBPage.getOcjenaIspravnosti().type(`Ispravan{enter}{enter}`)

//Klik Spremi
cy.contains('Spremi').click()

//Provjera poruke Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Podaci su uspješno spremljeni.')
})

pesticidiPokazateljiMonitoringBPage.getOcjenaIspravnosti().should('be.visible')



})


it('Izvorišni monitoring', function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiIzvorisniPage = new MikrobioloskiPokazateljiIzvorisniPage()
const kemijskiPokazateljiIzvorisniPage = new KemijskiPokazateljiIzvorisniPage()
const indikatorskiPokazateljiIzvorisniPage = new IndikatorskiPokazateljiIzvorisniPage()
const pesticidiPokazateljiIzvorisniPage = new PesticidiPokazateljiIzvorisniPage()

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
unosAnalizePage.getDatumUzorkovanja().type('15.03.2021').should('have.value','15.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Dubrovačko-neretvanska{enter}{enter}`).should('have.text','Dubrovačko-neretvanska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PLOČE{enter}{enter}`).should('have.text','DP PLOČE')
unosAnalizePage.getZonaOpskrbe().type(`ZO PLOČE{enter}{enter}`).should('have.text','ZO PLOČE')
unosAnalizePage.getOznakaZO().should('have.value','471')
unosAnalizePage.getJivu().type(`IZVOR Ploče javna ustanova{enter}{enter}`).should('have.text','IZVOR Ploče javna ustanova')
unosAnalizePage.getAdresa().should('have.value','Trg kralja Tomislava 16')
unosAnalizePage.getOib().should('have.value','09475552617')
unosAnalizePage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`).should('have.text','Lokalna')
unosAnalizePage.getTipVode().type(`Boćata{enter}{enter}`).should('have.text','Boćata')
unosAnalizePage.getNazivVodozahvata().type(`Modro Oko{enter}{enter}`).should('have.text','Modro Oko')
unosAnalizePage.getOznakaVodozahvata().should('have.value','567')

//Ostalo
unosAnalizePage.getVremenskePrilike().type(`Oblačno{enter}{enter}`).should('have.text','Oblačno')
cy.get(':nth-child(11) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`HZJZ - Admin Dubrovnik{enter}{enter}`).should('have.text','HZJZ - Admin Dubrovnik')
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box').type('Test2016/2021')//Potrebno izmijeniti vrijednost koja se prosljeđuje prije svakog pokretanja

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiIzvorisniPage.getClostridium().type('1')
mikrobioloskiPokazateljiIzvorisniPage.getCoxackie().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getEcho().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getEnterokoki().type('5')
mikrobioloskiPokazateljiIzvorisniPage.getEnterovirusi().type('3')
mikrobioloskiPokazateljiIzvorisniPage.getEscherichia().type('4')
mikrobioloskiPokazateljiIzvorisniPage.getHepatitisA().type('6')
mikrobioloskiPokazateljiIzvorisniPage.getPolio().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getRota().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiIzvorisniPage.getDikloretan().type('1')
kemijskiPokazateljiIzvorisniPage.getAntimonUkupni().type('1,5')
kemijskiPokazateljiIzvorisniPage.getArsenUkupni().type('<1')
kemijskiPokazateljiIzvorisniPage.getBakarUkupni().type('0,005')
kemijskiPokazateljiIzvorisniPage.getBenzen().type('0,5')
kemijskiPokazateljiIzvorisniPage.getBenzoApiren().type('0,003')
kemijskiPokazateljiIzvorisniPage.getBenzoBfluoranten().type('0,008')
kemijskiPokazateljiIzvorisniPage.getBenzoGHIperilen().type('0,004')
kemijskiPokazateljiIzvorisniPage.getBenzoKfluoranten().type('0,005')
kemijskiPokazateljiIzvorisniPage.getBorUkupni().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getBromati().type('<2')
kemijskiPokazateljiIzvorisniPage.getCijanidiUkupni().type('20')
kemijskiPokazateljiIzvorisniPage.getFluoranten().type('0,009')
kemijskiPokazateljiIzvorisniPage.getFluoridi().type('0,63')
kemijskiPokazateljiIzvorisniPage.getIndeno123CDPiren().type('0,036')
kemijskiPokazateljiIzvorisniPage.getKadmijUkupni().type('12')
kemijskiPokazateljiIzvorisniPage.getKromUkupni().type('7')
kemijskiPokazateljiIzvorisniPage.getNikalUkupni().type('11')
kemijskiPokazateljiIzvorisniPage.getNitratiRevizijskiIIzvorisni().type('16')
kemijskiPokazateljiIzvorisniPage.getNitriti().type('<0,01')
kemijskiPokazateljiIzvorisniPage.getOlovoUkupno().type('5')
kemijskiPokazateljiIzvorisniPage.getOtopljeniKisik().type('-9999')
kemijskiPokazateljiIzvorisniPage.getPesticidiUkupni().type('<0,5')
kemijskiPokazateljiIzvorisniPage.getPAH().type('0,007')
kemijskiPokazateljiIzvorisniPage.getSelenUkupni().type('8')
kemijskiPokazateljiIzvorisniPage.getSumaTetrakloretenITrikloreten().type('0,8')
kemijskiPokazateljiIzvorisniPage.getTetrakloreten().type('0,8')
kemijskiPokazateljiIzvorisniPage.getTrikloreten().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getTriklormetanKloroform().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getZivaUkupna().type('0,6')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiIzvorisniPage.getAluminijUkupni().type('42')
indikatorskiPokazateljiIzvorisniPage.getAmonijRevizijskiIIzvorisni().type('0,15')
indikatorskiPokazateljiIzvorisniPage.getBarijUkupni().type('34,2')
indikatorskiPokazateljiIzvorisniPage.getBerilijUkupni().type('1')
indikatorskiPokazateljiIzvorisniPage.getBoja().type('6')
indikatorskiPokazateljiIzvorisniPage.getBrojKolonija22().type('7')
indikatorskiPokazateljiIzvorisniPage.getBrojKolonija36().type('63')
indikatorskiPokazateljiIzvorisniPage.getCinkUkupni().type('17,8')
indikatorskiPokazateljiIzvorisniPage.getDetergentiAnionski().type('40')
indikatorskiPokazateljiIzvorisniPage.getDetergentiNeionski().type('200')
indikatorskiPokazateljiIzvorisniPage.getElektricnaVodljivost().type('741')
indikatorskiPokazateljiIzvorisniPage.getFenoliUkupni().type('2')
indikatorskiPokazateljiIzvorisniPage.getHidrogenkarbonati().type('466')
indikatorskiPokazateljiIzvorisniPage.getKalcij().type('139')
indikatorskiPokazateljiIzvorisniPage.getKalij().type('1,5')
indikatorskiPokazateljiIzvorisniPage.getKloridiRevizijskiIIzvorisni().type('29')
indikatorskiPokazateljiIzvorisniPage.getKobaltUkupni().type('4')
indikatorskiPokazateljiIzvorisniPage.getKoncentracijaVodikovihIona().type('6,8')
indikatorskiPokazateljiIzvorisniPage.getMagnezij().type('16')
indikatorskiPokazateljiIzvorisniPage.getManganUkupni().type('1,4')
indikatorskiPokazateljiIzvorisniPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiIzvorisniPage.getMutnoca().type('0,8')
indikatorskiPokazateljiIzvorisniPage.getNatrij().type('18')
indikatorskiPokazateljiIzvorisniPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiIzvorisniPage.getOrtofosfatiOtopljeni().type('81')
indikatorskiPokazateljiIzvorisniPage.getSilikatiOtopljeni().type('9,39')
indikatorskiPokazateljiIzvorisniPage.getSrebroUkupno().type('7')
indikatorskiPokazateljiIzvorisniPage.getSulfati().type('21')
indikatorskiPokazateljiIzvorisniPage.getTemperaturaVode().type('14')
indikatorskiPokazateljiIzvorisniPage.getTricij().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getTvrdocaUkupna().type('414')
indikatorskiPokazateljiIzvorisniPage.getUgljikovodici().type('25')
indikatorskiPokazateljiIzvorisniPage.getUkupneOtopljeneTvari().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getUkupneSuspendiraneTvari().type('9')
indikatorskiPokazateljiIzvorisniPage.getUkupniBrojKoliformnihBakterija().type('17')
indikatorskiPokazateljiIzvorisniPage.getUkupniKoliformi().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getUkupniOrganskiUgljik().type('1,75')
indikatorskiPokazateljiIzvorisniPage.getUtrošakKMnO4().type('2,21')
indikatorskiPokazateljiIzvorisniPage.getVanadijUkupni().type('18')
indikatorskiPokazateljiIzvorisniPage.getVodikovSulfid().type('5')
indikatorskiPokazateljiIzvorisniPage.getZeljezoUkupno().type('42,7')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Pesticidi pokazatelji
pesticidiPokazateljiIzvorisniPage.get24D().type('0,05')
pesticidiPokazateljiIzvorisniPage.get26Diklorbenzamid().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAcetoklor().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getAtrazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getBentazon().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getBromacil().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getDesetilAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDikamba().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getDimetoat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDiuron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getFosetil().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getGlifosat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getIzodrin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getIzoproturon().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getKlorfenvinfos().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getKlorpirifosEtil().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getKlorpirifosMetil().type('0,1')
pesticidiPokazateljiIzvorisniPage.getKlortoluron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getLinuron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMalation().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMankozeb().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getMCPA().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMekoprop().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getMetolaklor().type('-9999')
pesticidiPokazateljiIzvorisniPage.getMetribuzin().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getOmetoat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getPendimetalin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getPirimifosMetil().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getSimazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getSMetolaklor().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getTebukonazol().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getTerbutilazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetilDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetil2HidroksiAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiSimazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiTerbutilazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetilTerbutilazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getMalaokson().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDesmetilIzoproturon().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDimetenamidP().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getProsulfokarb().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getPropineb().type('<0,04')
pesticidiPokazateljiIzvorisniPage.getTiofanatMetil().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAzoksistrobin().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getFolpet().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAcetoklorESA().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getAcetoklorOXA().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getMetolaklorESA().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getMetolaklorOXA().type('<0,01')
//pesticidiPokazateljiIzvorisniPage.getOcjenaIspravnosti().type(`Neispravan{enter}{enter}`)

//Klik Spremi
cy.contains('Spremi').click()

//Provjera poruke Spremanja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Podaci su uspješno spremljeni.')
})

pesticidiPokazateljiIzvorisniPage.getOcjenaIspravnosti().should('be.visible')



})


it('Analitički broj već postoji u sustavu Monitoring A',function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiMonitoringAPage = new MikrobioloskiPokazateljiMonitoringAPage()
const kemijskiPokazateljiMonitoringAPage = new KemijskiPokazateljiMonitoringAPage()
const indikatorskiPokazateljiMonitoringAPage = new IndikatorskiPokazateljiMonitoringAPage()

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
unosAnalizePage.getDatumUzorkovanja().type('28.01.2021').should('have.value','28.01.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Sisačko-moslavačka{enter}{enter}`).should('have.text','Sisačko-moslavačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PETRINJA-SISAK{enter}{enter}`).should('have.text','DP PETRINJA-SISAK')
unosAnalizePage.getZonaOpskrbe().type(`ZO HRVATSKA KOSTAJNICA{enter}{enter}`).should('have.text','ZO HRVATSKA KOSTAJNICA')
unosAnalizePage.getOznakaZO().should('have.value','81')
unosAnalizePage.getJivu().type(`JP KOMUNALAC D.O.O.{enter}{enter}`).should('have.text','JP KOMUNALAC D.O.O.')
unosAnalizePage.getAdresa().should('have.value','UNSKA 1')
unosAnalizePage.getOib().should('have.value','28622553096')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Hrvatska Kostajnica{enter}{enter}`).should('have.text','Hrvatska Kostajnica')
unosAnalizePage.getLokacijaUzorkovanja().type(`Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica{enter}{enter}`)
.should('have.text','Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica')
unosAnalizePage.getOznakaLokacije().should('have.value','10079')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5009603')
unosAnalizePage.getKoordinataE().should('have.value','503468')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano{enter}{enter}`).should('have.text','Potpuno isprano')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dnevni slučajni uzorak{enter}{enter}`).should('have.text','Dnevni slučajni uzorak')
unosAnalizePage.getUzorkovatelj().type(`Sisak Administrator{enter}{enter}`).should('have.text','Sisak Administrator')
unosAnalizePage.getAnalitickiBroj().type('Test010/2021')

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiMonitoringAPage.getClostridium().type('-9999')
mikrobioloskiPokazateljiMonitoringAPage.getEnterokoki().type('59')
mikrobioloskiPokazateljiMonitoringAPage.getEscherichia().type('1,18')
mikrobioloskiPokazateljiMonitoringAPage.getPseudomonas().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiMonitoringAPage.getArsen().type('-9999')
kemijskiPokazateljiMonitoringAPage.getKlorati().type('11')
kemijskiPokazateljiMonitoringAPage.getKloriti().type('32')
kemijskiPokazateljiMonitoringAPage.getNitrati().type('87')
kemijskiPokazateljiMonitoringAPage.getNitriti().type('15')
kemijskiPokazateljiMonitoringAPage.getNitritiNaIzlasku().type('-9999')
kemijskiPokazateljiMonitoringAPage.getOtopljeniOzon().type('2,228')
kemijskiPokazateljiMonitoringAPage.getRezidualniKlor().type('35')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiMonitoringAPage.getAluminijUkupni().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getAmonijRedovni().type('0,2')
indikatorskiPokazateljiMonitoringAPage.getBoja().type('<5')
indikatorskiPokazateljiMonitoringAPage.getBrojKolonija22().type('0')
indikatorskiPokazateljiMonitoringAPage.getBrojKolonija36().type('0')
indikatorskiPokazateljiMonitoringAPage.getElektricnaVodljivost().type('459')
indikatorskiPokazateljiMonitoringAPage.getHidrogenkarbonati().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getKloridi().type('4,6')
indikatorskiPokazateljiMonitoringAPage.getKoncentracijaVodikovihIona().type('7,8')
indikatorskiPokazateljiMonitoringAPage.getMangan().type('-9999')
indikatorskiPokazateljiMonitoringAPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiMonitoringAPage.getMutnoca().type('0,18')
indikatorskiPokazateljiMonitoringAPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiMonitoringAPage.getTemperatura().type('11,8')
indikatorskiPokazateljiMonitoringAPage.getUkupniKoliformi().type('40')
indikatorskiPokazateljiMonitoringAPage.getUtrošakKMnO4().type('0,8')
indikatorskiPokazateljiMonitoringAPage.getZeljezoUkupno().type('-9999')

//Klik Spremi
cy.contains('Spremi').click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


it('Analitički broj već postoji u sustavu Monitoring B',function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiMonitoringBPage = new MikrobioloskiPokazateljiMonitoringBPage()
const kemijskiPokazateljiMonitoringBPage = new KemijskiPokazateljiMonitoringBPage()
const indikatorskiPokazateljiMonitoringBPage = new IndikatorskiPokazateljiMonitoringBPage()
const pesticidiPokazateljiMonitoringBPage = new PesticidiPokazateljiMonitoringBPage()

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
unosAnalizePage.getDatumUzorkovanja().type('01.03.2021').should('have.value','01.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Karlovačka{enter}{enter}`).should('have.text','Karlovačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP KARLOVAC-DUGA RESA{enter}{enter}`).should('have.text','DP KARLOVAC-DUGA RESA')
unosAnalizePage.getZonaOpskrbe().type(`ZO GENERALSKI STOL{enter}{enter}`).should('have.text','ZO GENERALSKI STOL')
unosAnalizePage.getOznakaZO().should('have.value','63')
unosAnalizePage.getJivu().type(`Komunalno Duga Resa d.o.o.{enter}{enter}`).should('have.text','Komunalno Duga Resa d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Kolodvorska 1')
unosAnalizePage.getOib().should('have.value','26222996778')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Generalski Stol{enter}{enter}`).should('have.text','Generalski Stol')
unosAnalizePage.getLokacijaUzorkovanja().type(`Zgrada općine Generalski Stol, Genaralski Stol 32{enter}{enter}`)
.should('have.text','Zgrada općine Generalski Stol, Genaralski Stol 32')
unosAnalizePage.getOznakaLokacije().should('have.value','9882')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5023509.5')
unosAnalizePage.getKoordinataE().should('have.value','412137.8')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano i dezinfekcija točke uzorkovanja{enter}{enter}`)
.should('have.text','Potpuno isprano i dezinfekcija točke uzorkovanja')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dezinfekcija točke uzorkovanja{enter}{enter}`).should('have.text','Dezinfekcija točke uzorkovanja')
unosAnalizePage.getUzorkovatelj().type(`HZJZ - Admin Karlovac{enter}{enter}`).should('have.text','HZJZ - Admin Karlovac')
unosAnalizePage.getAnalitickiBroj().type('Test1000/2021')

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiMonitoringBPage.getClostridium().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getCoxackie().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEcho().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEnterokoki().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getEnterovirusi().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getEscherichia().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getHepatitisA().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getPolio().type('-9999')
mikrobioloskiPokazateljiMonitoringBPage.getPseudomonas().type('0')
mikrobioloskiPokazateljiMonitoringBPage.getRota().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiMonitoringBPage.getDikloretan().type('1')
kemijskiPokazateljiMonitoringBPage.getAkrilamid().type('-9999')
kemijskiPokazateljiMonitoringBPage.getAntimonUkupni().type('27')
kemijskiPokazateljiMonitoringBPage.getArsenUkupni().type('<1')
kemijskiPokazateljiMonitoringBPage.getBakarUkupni().type('0,1')
kemijskiPokazateljiMonitoringBPage.getBenzen().type('<0,2')
kemijskiPokazateljiMonitoringBPage.getBenzoApiren().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoBfluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoGHIperilen().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBenzoKfluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBorUkupni().type('12')
kemijskiPokazateljiMonitoringBPage.getBromati().type('<2')
kemijskiPokazateljiMonitoringBPage.getBromdiklormetan().type('-9999')
kemijskiPokazateljiMonitoringBPage.getBromoform().type('-9999')
kemijskiPokazateljiMonitoringBPage.getCijanidiUkupni().type('<15')
kemijskiPokazateljiMonitoringBPage.getDibromklormetan().type('-9999')
kemijskiPokazateljiMonitoringBPage.getEpiklorhidrin().type('<0,05')
kemijskiPokazateljiMonitoringBPage.getFluoranten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getFluoridi().type('0,14')
kemijskiPokazateljiMonitoringBPage.getIndeno123CDPiren().type('-9999')
kemijskiPokazateljiMonitoringBPage.getKadmijUkupni().type('5')
kemijskiPokazateljiMonitoringBPage.getKlorati().type('<10')
kemijskiPokazateljiMonitoringBPage.getKloriti().type('100')
kemijskiPokazateljiMonitoringBPage.getKromUkupni().type('8')
kemijskiPokazateljiMonitoringBPage.getNikalUkupni().type('6')
kemijskiPokazateljiMonitoringBPage.getNitratiRevizijskiIIzvorisni().type('6,7')
kemijskiPokazateljiMonitoringBPage.getNitriti().type('0,1')
kemijskiPokazateljiMonitoringBPage.getNitritiUVodi().type('-9999')
kemijskiPokazateljiMonitoringBPage.getOlovoUkupno().type('7')
kemijskiPokazateljiMonitoringBPage.getOtopljeniOzon().type('-9999')
kemijskiPokazateljiMonitoringBPage.getPesticidiUkupni().type('<0,5')
kemijskiPokazateljiMonitoringBPage.getPAH().type('0,1')
kemijskiPokazateljiMonitoringBPage.getRezidualniKlor().type('0,18')
kemijskiPokazateljiMonitoringBPage.getSelenUkupni().type('-9999')
kemijskiPokazateljiMonitoringBPage.getSumaTetrakloretenITrikloreten().type('0,17')
kemijskiPokazateljiMonitoringBPage.getTetrakloreten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTrihalometaniUkupni().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTrikloreten().type('-9999')
kemijskiPokazateljiMonitoringBPage.getTriklormetanKloroform().type('-9999')
kemijskiPokazateljiMonitoringBPage.getVinilKlorid().type('-9999')
kemijskiPokazateljiMonitoringBPage.getZivaUkupna().type('0,6')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiMonitoringBPage.getAluminijUkupni().type('9,5')
indikatorskiPokazateljiMonitoringBPage.getAmonijRevizijskiIIzvorisni().type('0,2')
indikatorskiPokazateljiMonitoringBPage.getBarijUkupni().type('22,4')
indikatorskiPokazateljiMonitoringBPage.getBerilijUkupni().type('14')
indikatorskiPokazateljiMonitoringBPage.getBoja().type('5')
indikatorskiPokazateljiMonitoringBPage.getBrojKolonija22().type('0')
indikatorskiPokazateljiMonitoringBPage.getBrojKolonija36().type('0')
indikatorskiPokazateljiMonitoringBPage.getCinkUkupni().type('209')
indikatorskiPokazateljiMonitoringBPage.getDetergentiAnionski().type('50')
indikatorskiPokazateljiMonitoringBPage.getDetergentiNeionski().type('224')
indikatorskiPokazateljiMonitoringBPage.getElektricnaVodljivost().type('480')
indikatorskiPokazateljiMonitoringBPage.getFenoliUkupni().type('<2')
indikatorskiPokazateljiMonitoringBPage.getHidrogenkarbonati().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getKalcij().type('74')
indikatorskiPokazateljiMonitoringBPage.getKalij().type('1,8')
indikatorskiPokazateljiMonitoringBPage.getKloridiRevizijskiIIzvorisni().type('7,2')
indikatorskiPokazateljiMonitoringBPage.getKobaltUkupni().type('2,5')
indikatorskiPokazateljiMonitoringBPage.getKoncentracijaVodikovihIona().type('7,8')
indikatorskiPokazateljiMonitoringBPage.getMagnezij().type('15')
indikatorskiPokazateljiMonitoringBPage.getManganUkupni().type('23,4')
indikatorskiPokazateljiMonitoringBPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiMonitoringBPage.getMutnoca().type('0,21')
indikatorskiPokazateljiMonitoringBPage.getNatrij().type('5,2')
indikatorskiPokazateljiMonitoringBPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiMonitoringBPage.getOrtofosfatiOtopljeni().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getSilikatiOtopljeni().type('6,9')
indikatorskiPokazateljiMonitoringBPage.getSrebroUkupno().type('30')
indikatorskiPokazateljiMonitoringBPage.getSulfati().type('22')
indikatorskiPokazateljiMonitoringBPage.getTemperaturaVode().type('18,2')
indikatorskiPokazateljiMonitoringBPage.getTvrdocaUkupna().type('276')
indikatorskiPokazateljiMonitoringBPage.getUgljikovodici().type('<5')
indikatorskiPokazateljiMonitoringBPage.getUkupneSuspendiraneTvari().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getUkupniBrojKoliformnihBakterija().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getUkupniKoliformi().type('0')
indikatorskiPokazateljiMonitoringBPage.getUkupniOrganskiUgljik().type('15')
indikatorskiPokazateljiMonitoringBPage.getUtrošakKMnO4().type('0,6')
indikatorskiPokazateljiMonitoringBPage.getVanadijUkupni().type('23')
indikatorskiPokazateljiMonitoringBPage.getVodikovSulfid().type('-9999')
indikatorskiPokazateljiMonitoringBPage.getZeljezoUkupno().type('23,4')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Pesticidni pokazatelji
pesticidiPokazateljiMonitoringBPage.get24D().type('2')
pesticidiPokazateljiMonitoringBPage.get26Diklorbenzamid().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAcetoklor().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getAtrazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getBentazon().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getBromacil().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getDesetilAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDikamba().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getDimetoat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDiuron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getFosetil().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getGlifosat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getIzodrin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getIzoproturon().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getKlorfenvinfos().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getKlorpirifosEtil().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getKlorpirifosMetil().type('0,1')
pesticidiPokazateljiMonitoringBPage.getKlortoluron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getLinuron().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMalation().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMankozeb().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getMCPA().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getMekoprop().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getMetolaklor().type('-9999')
pesticidiPokazateljiMonitoringBPage.getMetribuzin().type('-9999')
pesticidiPokazateljiMonitoringBPage.getOmetoat().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getPendimetalin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getPirimifosMetil().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getSimazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getSMetolaklor().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getTebukonazol().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getTerbutilazin().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetilDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetil2HidroksiAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiAtrazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiSimazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getHidroksiTerbutilazin().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDesetilTerbutilazin().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getMalaokson().type('<0,03')
pesticidiPokazateljiMonitoringBPage.getDesmetilIzoproturon().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getDimetenamidP().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getProsulfokarb().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getPropineb().type('<0,04')
pesticidiPokazateljiMonitoringBPage.getTiofanatMetil().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAzoksistrobin().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getFolpet().type('<0,02')
pesticidiPokazateljiMonitoringBPage.getAcetoklorESA().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getAcetoklorOXA().type('<0,01')
pesticidiPokazateljiMonitoringBPage.getMetolaklorESA().type('<0,05')
pesticidiPokazateljiMonitoringBPage.getMetolaklorOXA().type('<0,01')

//Klik Spremi
cy.contains('Spremi').click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


it('Analitički broj već postoji u sustavu Izvorišni',function()
{

const unosAnalizePage = new UnosAnalizePage()
const mikrobioloskiPokazateljiIzvorisniPage = new MikrobioloskiPokazateljiIzvorisniPage()
const kemijskiPokazateljiIzvorisniPage = new KemijskiPokazateljiIzvorisniPage()
const indikatorskiPokazateljiIzvorisniPage = new IndikatorskiPokazateljiIzvorisniPage()
const pesticidiPokazateljiIzvorisniPage = new PesticidiPokazateljiIzvorisniPage()

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
unosAnalizePage.getDatumUzorkovanja().type('15.03.2021').should('have.value','15.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Dubrovačko-neretvanska{enter}{enter}`).should('have.text','Dubrovačko-neretvanska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PLOČE{enter}{enter}`).should('have.text','DP PLOČE')
unosAnalizePage.getZonaOpskrbe().type(`ZO PLOČE{enter}{enter}`).should('have.text','ZO PLOČE')
unosAnalizePage.getOznakaZO().should('have.value','471')
unosAnalizePage.getJivu().type(`IZVOR Ploče javna ustanova{enter}{enter}`).should('have.text','IZVOR Ploče javna ustanova')
unosAnalizePage.getAdresa().should('have.value','Trg kralja Tomislava 16')
unosAnalizePage.getOib().should('have.value','09475552617')
unosAnalizePage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`).should('have.text','Lokalna')
unosAnalizePage.getTipVode().type(`Boćata{enter}{enter}`).should('have.text','Boćata')
unosAnalizePage.getNazivVodozahvata().type(`Modro Oko{enter}{enter}`).should('have.text','Modro Oko')
unosAnalizePage.getOznakaVodozahvata().should('have.value','567')

//Ostalo
unosAnalizePage.getVremenskePrilike().type(`Oblačno{enter}{enter}`).should('have.text','Oblačno')
cy.get(':nth-child(11) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`HZJZ - Admin Dubrovnik{enter}{enter}`).should('have.text','HZJZ - Admin Dubrovnik')
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box').type('Test2000/2021')

//Klik sljedeća stranica
cy.contains('Sljedeće').click()

//Mikrobiološki pokazatelji
mikrobioloskiPokazateljiIzvorisniPage.getClostridium().type('1')
mikrobioloskiPokazateljiIzvorisniPage.getCoxackie().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getEcho().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getEnterokoki().type('5')
mikrobioloskiPokazateljiIzvorisniPage.getEnterovirusi().type('3')
mikrobioloskiPokazateljiIzvorisniPage.getEscherichia().type('4')
mikrobioloskiPokazateljiIzvorisniPage.getHepatitisA().type('6')
mikrobioloskiPokazateljiIzvorisniPage.getPolio().type('-9999')
mikrobioloskiPokazateljiIzvorisniPage.getRota().type('-9999')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Kemijski pokazatelji
kemijskiPokazateljiIzvorisniPage.getDikloretan().type('1')
kemijskiPokazateljiIzvorisniPage.getAntimonUkupni().type('1,5')
kemijskiPokazateljiIzvorisniPage.getArsenUkupni().type('<1')
kemijskiPokazateljiIzvorisniPage.getBakarUkupni().type('0,005')
kemijskiPokazateljiIzvorisniPage.getBenzen().type('0,5')
kemijskiPokazateljiIzvorisniPage.getBenzoApiren().type('0,003')
kemijskiPokazateljiIzvorisniPage.getBenzoBfluoranten().type('0,008')
kemijskiPokazateljiIzvorisniPage.getBenzoGHIperilen().type('0,004')
kemijskiPokazateljiIzvorisniPage.getBenzoKfluoranten().type('0,005')
kemijskiPokazateljiIzvorisniPage.getBorUkupni().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getBromati().type('<2')
kemijskiPokazateljiIzvorisniPage.getCijanidiUkupni().type('20')
kemijskiPokazateljiIzvorisniPage.getFluoranten().type('0,009')
kemijskiPokazateljiIzvorisniPage.getFluoridi().type('0,63')
kemijskiPokazateljiIzvorisniPage.getIndeno123CDPiren().type('0,036')
kemijskiPokazateljiIzvorisniPage.getKadmijUkupni().type('12')
kemijskiPokazateljiIzvorisniPage.getKromUkupni().type('7')
kemijskiPokazateljiIzvorisniPage.getNikalUkupni().type('11')
kemijskiPokazateljiIzvorisniPage.getNitratiRevizijskiIIzvorisni().type('16')
kemijskiPokazateljiIzvorisniPage.getNitriti().type('<0,01')
kemijskiPokazateljiIzvorisniPage.getOlovoUkupno().type('5')
kemijskiPokazateljiIzvorisniPage.getOtopljeniKisik().type('-9999')
kemijskiPokazateljiIzvorisniPage.getPesticidiUkupni().type('<0,5')
kemijskiPokazateljiIzvorisniPage.getPAH().type('0,007')
kemijskiPokazateljiIzvorisniPage.getSelenUkupni().type('8')
kemijskiPokazateljiIzvorisniPage.getSumaTetrakloretenITrikloreten().type('0,8')
kemijskiPokazateljiIzvorisniPage.getTetrakloreten().type('0,8')
kemijskiPokazateljiIzvorisniPage.getTrikloreten().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getTriklormetanKloroform().type('<0,1')
kemijskiPokazateljiIzvorisniPage.getZivaUkupna().type('0,6')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Indikatorski pokazatelji
indikatorskiPokazateljiIzvorisniPage.getAluminijUkupni().type('42')
indikatorskiPokazateljiIzvorisniPage.getAmonijRevizijskiIIzvorisni().type('0,15')
indikatorskiPokazateljiIzvorisniPage.getBarijUkupni().type('34,2')
indikatorskiPokazateljiIzvorisniPage.getBerilijUkupni().type('1')
indikatorskiPokazateljiIzvorisniPage.getBoja().type('6')
indikatorskiPokazateljiIzvorisniPage.getBrojKolonija22().type('7')
indikatorskiPokazateljiIzvorisniPage.getBrojKolonija36().type('63')
indikatorskiPokazateljiIzvorisniPage.getCinkUkupni().type('17,8')
indikatorskiPokazateljiIzvorisniPage.getDetergentiAnionski().type('40')
indikatorskiPokazateljiIzvorisniPage.getDetergentiNeionski().type('200')
indikatorskiPokazateljiIzvorisniPage.getElektricnaVodljivost().type('741')
indikatorskiPokazateljiIzvorisniPage.getFenoliUkupni().type('2')
indikatorskiPokazateljiIzvorisniPage.getHidrogenkarbonati().type('466')
indikatorskiPokazateljiIzvorisniPage.getKalcij().type('139')
indikatorskiPokazateljiIzvorisniPage.getKalij().type('1,5')
indikatorskiPokazateljiIzvorisniPage.getKloridiRevizijskiIIzvorisni().type('29')
indikatorskiPokazateljiIzvorisniPage.getKobaltUkupni().type('4')
indikatorskiPokazateljiIzvorisniPage.getKoncentracijaVodikovihIona().type('6,8')
indikatorskiPokazateljiIzvorisniPage.getMagnezij().type('16')
indikatorskiPokazateljiIzvorisniPage.getManganUkupni().type('1,4')
indikatorskiPokazateljiIzvorisniPage.getMiris().type(`Bez mirisa{enter}{enter}`)
indikatorskiPokazateljiIzvorisniPage.getMutnoca().type('0,8')
indikatorskiPokazateljiIzvorisniPage.getNatrij().type('18')
indikatorskiPokazateljiIzvorisniPage.getOkus().type(`Bez okusa{enter}{enter}`)
indikatorskiPokazateljiIzvorisniPage.getOrtofosfatiOtopljeni().type('81')
indikatorskiPokazateljiIzvorisniPage.getSilikatiOtopljeni().type('9,39')
indikatorskiPokazateljiIzvorisniPage.getSrebroUkupno().type('7')
indikatorskiPokazateljiIzvorisniPage.getSulfati().type('21')
indikatorskiPokazateljiIzvorisniPage.getTemperaturaVode().type('14')
indikatorskiPokazateljiIzvorisniPage.getTricij().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getTvrdocaUkupna().type('414')
indikatorskiPokazateljiIzvorisniPage.getUgljikovodici().type('25')
indikatorskiPokazateljiIzvorisniPage.getUkupneOtopljeneTvari().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getUkupneSuspendiraneTvari().type('9')
indikatorskiPokazateljiIzvorisniPage.getUkupniBrojKoliformnihBakterija().type('17')
indikatorskiPokazateljiIzvorisniPage.getUkupniKoliformi().type('-9999')
indikatorskiPokazateljiIzvorisniPage.getUkupniOrganskiUgljik().type('1,75')
indikatorskiPokazateljiIzvorisniPage.getUtrošakKMnO4().type('2,21')
indikatorskiPokazateljiIzvorisniPage.getVanadijUkupni().type('18')
indikatorskiPokazateljiIzvorisniPage.getVodikovSulfid().type('5')
indikatorskiPokazateljiIzvorisniPage.getZeljezoUkupno().type('42,7')

//Klik sljedeća stranica
cy.contains('Sljedeće').click({force: true})

//Pesticidi pokazatelji
pesticidiPokazateljiIzvorisniPage.get24D().type('0,05')
pesticidiPokazateljiIzvorisniPage.get26Diklorbenzamid().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAcetoklor().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getAtrazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getBentazon().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getBromacil().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getDesetilAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDikamba().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getDimetoat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDiuron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getFosetil().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getGlifosat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getIzodrin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getIzoproturon().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getKlorfenvinfos().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getKlorpirifosEtil().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getKlorpirifosMetil().type('0,1')
pesticidiPokazateljiIzvorisniPage.getKlortoluron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getLinuron().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMalation().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMankozeb().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getMCPA().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getMekoprop().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getMetolaklor().type('-9999')
pesticidiPokazateljiIzvorisniPage.getMetribuzin().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getOmetoat().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getPendimetalin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getPirimifosMetil().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getSimazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getSMetolaklor().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getTebukonazol().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getTerbutilazin().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetilDeisopropilAtrazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetil2HidroksiAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiAtrazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiSimazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getHidroksiTerbutilazin().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDesetilTerbutilazin().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getMalaokson().type('<0,03')
pesticidiPokazateljiIzvorisniPage.getDesmetilIzoproturon().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getDimetenamidP().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getProsulfokarb().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getPropineb().type('<0,04')
pesticidiPokazateljiIzvorisniPage.getTiofanatMetil().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAzoksistrobin().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getFolpet().type('<0,02')
pesticidiPokazateljiIzvorisniPage.getAcetoklorESA().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getAcetoklorOXA().type('<0,01')
pesticidiPokazateljiIzvorisniPage.getMetolaklorESA().type('<0,05')
pesticidiPokazateljiIzvorisniPage.getMetolaklorOXA().type('<0,01')

//Klik Spremi
cy.contains('Spremi').click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


it('Analitički broj već postoji u sustavu Monitoring A Privremeno spremanje',function()
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
unosAnalizePage.getDatumUzorkovanja().type('28.01.2021').should('have.value','28.01.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Sisačko-moslavačka{enter}{enter}`).should('have.text','Sisačko-moslavačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PETRINJA-SISAK{enter}{enter}`).should('have.text','DP PETRINJA-SISAK')
unosAnalizePage.getZonaOpskrbe().type(`ZO HRVATSKA KOSTAJNICA{enter}{enter}`).should('have.text','ZO HRVATSKA KOSTAJNICA')
unosAnalizePage.getOznakaZO().should('have.value','81')
unosAnalizePage.getJivu().type(`JP KOMUNALAC D.O.O.{enter}{enter}`).should('have.text','JP KOMUNALAC D.O.O.')
unosAnalizePage.getAdresa().should('have.value','UNSKA 1')
unosAnalizePage.getOib().should('have.value','28622553096')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Hrvatska Kostajnica{enter}{enter}`).should('have.text','Hrvatska Kostajnica')
unosAnalizePage.getLokacijaUzorkovanja().type(`Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica{enter}{enter}`)
.should('have.text','Tekija aqua j.d.o.o., Tekijska 6, Hrvatska Kostajnica')
unosAnalizePage.getOznakaLokacije().should('have.value','10079')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5009603')
unosAnalizePage.getKoordinataE().should('have.value','503468')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano{enter}{enter}`).should('have.text','Potpuno isprano')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dnevni slučajni uzorak{enter}{enter}`).should('have.text','Dnevni slučajni uzorak')
unosAnalizePage.getUzorkovatelj().type(`Sisak Administrator{enter}{enter}`).should('have.text','Sisak Administrator')
unosAnalizePage.getAnalitickiBroj().type('Test010/2021')

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


it('Analitički broj već postoji u sustavu Monitoring B Privremeno spremanje',function()
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
unosAnalizePage.getDatumUzorkovanja().type('01.03.2021').should('have.value','01.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Karlovačka{enter}{enter}`).should('have.text','Karlovačka')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP KARLOVAC-DUGA RESA{enter}{enter}`).should('have.text','DP KARLOVAC-DUGA RESA')
unosAnalizePage.getZonaOpskrbe().type(`ZO GENERALSKI STOL{enter}{enter}`).should('have.text','ZO GENERALSKI STOL')
unosAnalizePage.getOznakaZO().should('have.value','63')
unosAnalizePage.getJivu().type(`Komunalno Duga Resa d.o.o.{enter}{enter}`).should('have.text','Komunalno Duga Resa d.o.o.')
unosAnalizePage.getAdresa().should('have.value','Kolodvorska 1')
unosAnalizePage.getOib().should('have.value','26222996778')
unosAnalizePage.getTipVodoopskrbe().type(`Javna{enter}{enter}`).should('have.text','Javna')
unosAnalizePage.getNaseljeUzorkovanja().type(`Generalski Stol{enter}{enter}`).should('have.text','Generalski Stol')
unosAnalizePage.getLokacijaUzorkovanja().type(`Zgrada općine Generalski Stol, Genaralski Stol 32{enter}{enter}`)
.should('have.text','Zgrada općine Generalski Stol, Genaralski Stol 32')
unosAnalizePage.getOznakaLokacije().should('have.value','9882')
unosAnalizePage.getTipLokacije().should('have.value','Slavina kod krajnjih potrošača')
unosAnalizePage.getKoordinataN().should('have.value','5023509.5')
unosAnalizePage.getKoordinataE().should('have.value','412137.8')

//Ostalo
unosAnalizePage.getNacinUzorkovanjaZaMetale().type(`Potpuno isprano i dezinfekcija točke uzorkovanja{enter}{enter}`)
.should('have.text','Potpuno isprano i dezinfekcija točke uzorkovanja')
unosAnalizePage.getNacinUzorkovanjaZaMikrobPokazatelj().type(`Dezinfekcija točke uzorkovanja{enter}{enter}`).should('have.text','Dezinfekcija točke uzorkovanja')
unosAnalizePage.getUzorkovatelj().type(`HZJZ - Admin Karlovac{enter}{enter}`).should('have.text','HZJZ - Admin Karlovac')
unosAnalizePage.getAnalitickiBroj().type('Test1000/2021')

//Klik Privremeno Spremi
unosAnalizePage.getBtnPrivremenoSpremi().click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


it('Analitički broj već postoji u sustavu Izvorišni Privremeno spremanje',function()
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
unosAnalizePage.getDatumUzorkovanja().type('15.03.2021').should('have.value','15.03.2021')
unosAnalizePage.getVrijemeUzorkovanja().click({force: true})

//Unos Lokacije
unosAnalizePage.getZupanija().type(`Dubrovačko-neretvanska{enter}{enter}`).should('have.text','Dubrovačko-neretvanska')
unosAnalizePage.getVodoopskrbnoPodrucje().type(`DP PLOČE{enter}{enter}`).should('have.text','DP PLOČE')
unosAnalizePage.getZonaOpskrbe().type(`ZO PLOČE{enter}{enter}`).should('have.text','ZO PLOČE')
unosAnalizePage.getOznakaZO().should('have.value','471')
unosAnalizePage.getJivu().type(`IZVOR Ploče javna ustanova{enter}{enter}`).should('have.text','IZVOR Ploče javna ustanova')
unosAnalizePage.getAdresa().should('have.value','Trg kralja Tomislava 16')
unosAnalizePage.getOib().should('have.value','09475552617')
unosAnalizePage.getTipVodoopskrbe().type(`Lokalna{enter}{enter}`).should('have.text','Lokalna')
unosAnalizePage.getTipVode().type(`Boćata{enter}{enter}`).should('have.text','Boćata')
unosAnalizePage.getNazivVodozahvata().type(`Modro Oko{enter}{enter}`).should('have.text','Modro Oko')
unosAnalizePage.getOznakaVodozahvata().should('have.value','567')

//Ostalo
unosAnalizePage.getVremenskePrilike().type(`Oblačno{enter}{enter}`).should('have.text','Oblačno')
cy.get(':nth-child(11) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
.type(`HZJZ - Admin Dubrovnik{enter}{enter}`).should('have.text','HZJZ - Admin Dubrovnik')
cy.get(':nth-child(12) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box').type('Test2000/2021')

//Klik Privremeno Spremi
cy.get(':nth-child(14) > .col-md-6 > .d-flex > .large').click()

//Poruka upozorenja
cy.get('.Toastify__toast-body:visible',{timeout: 30000}).should(($x) => {
    expect($x).have.text('Analitički broj već postoji u sustavu')
})



})


})