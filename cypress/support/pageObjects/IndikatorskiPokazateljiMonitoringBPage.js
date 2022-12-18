class IndikatorskiPokazateljiMonitoringBPage
{

    getAluminijUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(2) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getAmonijRevizijskiIIzvorisni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBarijUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBerilijUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBoja()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(6) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBrojKolonija22()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(7) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBrojKolonija36()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(8) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getCinkUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(9) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getDetergentiAnionski()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(10) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getDetergentiNeionski()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(11) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getElektricnaVodljivost()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(12) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getFenoliUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(13) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getHidrogenkarbonati()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(14) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKalcij()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(15) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKalij()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(16) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKloridiRevizijskiIIzvorisni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(17) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKobaltUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(18) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKoncentracijaVodikovihIona()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(19) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getMagnezij()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(20) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getManganUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(21) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getMiris()
    {
        return cy.get(':nth-child(22) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getMutnoca()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(23) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getNatrij()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(24) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getOkus()
    {
        return cy.get(':nth-child(25) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getOrtofosfatiOtopljeni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(26) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getSilikatiOtopljeni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(27) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getSrebroUkupno()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(28) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getSulfati()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(29) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getTemperaturaVode()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(30) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getTvrdocaUkupna()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(31) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUgljikovodici()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(32) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUkupneSuspendiraneTvari()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(33) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUkupniBrojKoliformnihBakterija()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(34) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUkupniKoliformi()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(35) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUkupniOrganskiUgljik()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(36) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUtrošakKMnO4()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(37) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getVanadijUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(38) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getVodikovSulfid()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(39) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getZeljezoUkupno()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(40) > .hydra-text-box-wrapper > .hydra-text-box')
    }

}

export default IndikatorskiPokazateljiMonitoringBPage;