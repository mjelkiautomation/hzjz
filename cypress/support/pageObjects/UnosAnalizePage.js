class UnosAnalizePage
{
    getDatumUzorkovanja()
    {
        return cy.get(':nth-child(1) > .hydra-date-picker > .flatpickr-wrapper > :nth-child(1) > .form-control')
    }

    getVrijemeUzorkovanja()
    {
        return cy.get('.hydra-time-picker > .flatpickr-wrapper > :nth-child(1) > [data-toggle="true"]:visible')
    }

    getZupanija()
    {
        return cy.get(':nth-child(4) > :nth-child(1) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getVodoopskrbnoPodrucje()
    {
        return cy.get(':nth-child(5) > .col-md-6 > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getZonaOpskrbe()
    {
        return cy.get(':nth-child(6) > :nth-child(1) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getJivu()
    {
        return cy.get(':nth-child(7) > :nth-child(1) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(7) > :nth-child(1) > .d-flex > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getTipVodoopskrbe()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(8) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getTipVode()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getNazivVodozahvata()
    {
        return cy.get(':nth-child(9) > :nth-child(1) > .d-flex > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getNaseljeUzorkovanja()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getOznakaZO()
    {
        return cy.get(':nth-child(6) > :nth-child(2) > .row > .col-md-8 > .d-flex > .hydra-text-box-wrapper > .special')
    }

    getOznakaVodozahvata()
    {
        return cy.get(':nth-child(9) > :nth-child(2) > .row > .col-md-8 > .d-flex > .hydra-text-box-wrapper > .special')
    }

    getAdresa()
    {
        return cy.get(':nth-child(7) > :nth-child(2) > .row > .col-md-8 > .d-flex > .hydra-text-box-wrapper > .special')
    }

    getOib()
    {
        return cy.get('.flex-fill')
    }

    getLokacijaUzorkovanja()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(3) > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(8) > .col-md-6 > :nth-child(3) > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getOznakaLokacije()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(4) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getTipLokacije()
    {
        return cy.get(':nth-child(8) > .col-md-6 > :nth-child(5) > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKoordinataN()
    {
        return cy.get('.north > .mb-0 > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getKoordinataE()
    {
        return cy.get('.east > .mb-0 > .hydra-text-box-wrapper > .hydra-text-box')
    }

    getNacinUzorkovanjaZaMetale()
    {
        return cy.get(':nth-child(10) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(10) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getNacinUzorkovanjaZaMikrobPokazatelj()
    {
        return cy.get(':nth-child(10) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(10) > .col-md-6 > :nth-child(2) > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getVremenskePrilike()
    {
        return cy.get(':nth-child(11) > .col-md-6 > :nth-child(1) > .hydra-select > .dropdown__control > .dropdown__value-container')
    }

    getUzorkovatelj()
    {
        return cy.get(':nth-child(10) > .col-md-6 > :nth-child(3) > .hydra-select > .dropdown__control > .dropdown__value-container')
        //return cy.get(':nth-child(10) > .col-md-6 > :nth-child(3) > .hydra-select > .dropdown__control > .dropdown__indicators > .dropdown__indicator > .css-19bqh2r')
    }

    getAnalitickiBroj()
    {
        return cy.get(':nth-child(11) > :nth-child(1) > .d-flex > .hydra-text-box-wrapper > .hydra-text-box')
    }


    getBtnPrivremenoSpremi()
    {
        return cy.get(':nth-child(13) > .col-md-6 > .d-flex > .large')
    }

}

export default UnosAnalizePage;