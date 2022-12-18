class PopravneRadnjePage
{

    getStatusUnosa()
    {
        return cy.get(':nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getZavod()
    {
        return cy.get(':nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getVodoopskrbnoPodrucje()
    {
        return cy.get(':nth-child(3) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getZonaOpskrbe()
    {
        return cy.get(':nth-child(4) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getNaseljeUzorkovanja()
    {
        return cy.get(':nth-child(5) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getPravnaOsoba()
    {
        return cy.get(':nth-child(6) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getTipVodoopskrbe()
    {
        return cy.get(':nth-child(7) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getNazivVodocrpilista()
    {
        return cy.get(':nth-child(8) > .hydra-autocomplete > .dropdown__control > .dropdown__value-container')
    }

    getDatumUzorkovanjaOD()
    {
        return cy.get(':nth-child(1) > .hydra-date-picker > .flatpickr-wrapper > :nth-child(1) > .form-control')
    }

    getDatumUzorkovanjaDO()
    {
        return cy.get(':nth-child(2) > .hydra-date-picker > .flatpickr-wrapper > :nth-child(1) > .form-control')
    }

    getGodinaUzorkovanja()
    {
        return cy.get(':nth-child(3) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getDatumUnosaAnalizeOD()
    {
        return cy.get(':nth-child(4) > .hydra-date-picker > .flatpickr-wrapper > :nth-child(1) > .form-control')
    }

    getDautmUnosaAnalizeDO()
    {
        return cy.get(':nth-child(5) > .hydra-date-picker > .flatpickr-wrapper > :nth-child(1) > .form-control')
    }

    getAnalitickiBroj()
    {
        return cy.get(':nth-child(6) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getAnalitickiBrojHZJZ()
    {
        return cy.get(':nth-child(7) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getVrstaMonitoringa()
    {
        return cy.get(':nth-child(8) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getbtnPretrazi()
    {
        return cy.get('.large')
    }

}

export default PopravneRadnjePage;