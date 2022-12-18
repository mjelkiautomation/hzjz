class IndikatorskiPokazateljiMonitoringAPage
{

    getAluminijUkupni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(2) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getAmonijRedovni()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBoja()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBrojKolonija22()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getBrojKolonija36()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(6) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getElektricnaVodljivost()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(7) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getHidrogenkarbonati()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(8) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKloridi()
    {
        return cy.get('#pills-3 > :nth-child(2) > .col-md-6 > :nth-child(9) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKoncentracijaVodikovihIona()
    {
        return cy.get(':nth-child(10) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getMangan()
    {
        return cy.get(':nth-child(11) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getMiris()
    {
        return cy.get(':nth-child(12) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getMutnoca()
    {
        return cy.get(':nth-child(13) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getOkus()
    {
        return cy.get(':nth-child(14) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getTemperatura()
    {
        return cy.get(':nth-child(15) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUkupniKoliformi()
    {
        return cy.get(':nth-child(16) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getUtrošakKMnO4()
    {
        return cy.get(':nth-child(17) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getZeljezoUkupno()
    {
        return cy.get(':nth-child(18) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getOcjenaIspravnosti()
    {
        return cy.get('.col-md-6 > :nth-child(19)')
        //cy.get(':nth-child(19) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

}

export default IndikatorskiPokazateljiMonitoringAPage;