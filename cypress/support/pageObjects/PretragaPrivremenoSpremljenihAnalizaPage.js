class PretragaPrivremenoSpremljenihAnalizaPage
{

    getPretragaPrivremeoSpremljenihAnaliza()
    {
        return cy.get('#pills-tab-1')
    }

    getUzorciUcitani()
    {
        return cy.get('#pills-1 > :nth-child(1) > :nth-child(3) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getZavod()
    {
        return cy.get('.col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getZonaOpskrbe()
    {
        return cy.get('#pills-1 > :nth-child(1) > :nth-child(3) > .col-md-6 > :nth-child(3) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getNaseljeUzorkovanja()
    {
        return cy.get('#pills-1 > :nth-child(1) > :nth-child(3) > .col-md-6 > :nth-child(4) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getPravnaOsoba()
    {
        return cy.get(':nth-child(5) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getTipVodoopskrbe()
    {
        return cy.get('.col-sm-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getGodinaUzorkovanja()
    {
        return cy.get('.col-sm-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getAnalitickiBroj()
    {
        return cy.get(':nth-child(3) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getAnalitickiBrojHZJZ()
    {
        return cy.get(':nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getVrstaMonitoringa()
    {
        return cy.get('.col-sm-6 > :nth-child(5) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getbtnPretrazi()
    {
        return cy.get('#pills-1 > :nth-child(1) > :nth-child(3) > .col-sm-6 > .mb-3 > .large')
    }

    getBrowse()
    {
        return cy.get(':nth-child(9) > :nth-child(2) > .d-flex > .form-control')
    }

    getbtnPreuzmiDatoteku()
    {
        return cy.get(':nth-child(8) > .col-md-6 > .d-flex > .large')
    }

    getbtnUcitajDatoteku()
    {
        return cy.get(':nth-child(10) > .col-md-6 > .d-flex > .btn-primary')
    }

}

export default PretragaPrivremenoSpremljenihAnalizaPage;