class MikrobioloskiPokazateljiMonitoringAPage
{

    getClostridium()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(2) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEnterokoki()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEscherichia()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getPseudomonas()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

}

export default MikrobioloskiPokazateljiMonitoringAPage;