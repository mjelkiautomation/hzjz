class KemijskiPokazateljiMonitoringAPage
{

    getArsen()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(2) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKlorati()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKloriti()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getNitrati()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getNitriti()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(6) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getNitritiNaIzlasku()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(7) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getOtopljeniOzon()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(8) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getRezidualniKlor()
    {
        return cy.get('#pills-2 > :nth-child(2) > .col-md-6 > :nth-child(9) > .hydra-text-box-wrapper > .hydra-text-box')
    }

}

export default KemijskiPokazateljiMonitoringAPage;