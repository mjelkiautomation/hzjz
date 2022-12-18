class MikrobioloskiPokazateljiIzvorisniPage
{

    getClostridium()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(2) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getCoxackie()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEcho()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEnterokoki()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEnterovirusi()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(6) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getEscherichia()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(7) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getHepatitisA()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(8) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getPolio()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(9) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getRota()
    {
        return cy.get('#pills-1 > :nth-child(2) > .col-md-6 > :nth-child(10) > .hydra-text-box-wrapper > .hydra-text-box')
    }

}

export default MikrobioloskiPokazateljiIzvorisniPage;