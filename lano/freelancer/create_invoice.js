describe('Invoice creation', () => {

    it('Create and submit an invoice', () => {
        //cy.viewport(1280, 720)
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed+1578@lano.io')
        cy.get('#user_password').type('Testuser123!') 
        cy.contains('Sign in').click()
    

        // Goto invoices
        cy.get('#side-menu > li:nth-child(7) > a').click()

        // click 'add invoice' button
        cy.get('a.btn.btn-sm.btn-primary.page-heading__btn--disabled').click()

        // click add client
        cy.get('div.add_client.invoice-add-client.invoice-page--add-client').click()

        // find & click a real client
        cy.contains('beyond').click()

        // Click select button for detached invoice 
        cy.get('[data-invoice-type="detached"]').click() 

        // Click 'add item' button 
        cy.get('#new_invoice > div.quick-invoice--form-layout.m-b-lg > div.current-page.invoice-page.quick-invoice--page.shadowed.white-bg > div.pdf-wrapper.pdf-body.quick-invoice--body > div > div:nth-child(4) > div:nth-child(5) > a > span').click()

        // Add a position title
        cy.get('[data-target="inline-edit.mainInput invoices--position-form.titleInput"]').type('Test position 1')

        
        // get the current date
        var currentDate = new Date();
        var day = currentDate.getDate();
        cy.log(day)

        // click on start date field
        cy.get('[data-target="invoices--position-form.startsOnInput"]').click({
            force: true
          })
        
        // select start date
        cy.contains('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > tr > td', day).click()
        
        // click on end date field
        cy.get('[data-target="invoices--position-form.endsOnInput"]').click({
          force: true
        })

        // select end date
        cy.contains('.datepicker-dropdown > .datepicker-days > .table-condensed > tbody > tr > td', day).click()

        // Add price
        cy.get('[data-target="invoices--position-form.rateInput"]').type('20')

        // click on 'currecny' field
        cy.get('div.selectize-control.form-field__control.select.required.single').click()
        
        // select currency 'EUR'
        cy.contains('[data-value]', 'EUR').click()

        // click on 'create & submit' button
        cy.get('.btn-border-radius').click()
        
        // // click on 'create & submit' button for final confirmation step
        cy.get('.in > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()

      })

    
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        //used for all application related uncaught expcetion errors
        return false
      })
})