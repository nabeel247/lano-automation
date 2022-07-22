describe('Verify Lano Login', () => {

    it('Visit Login page and go to reigstration page from there', () => {
        //cy.viewport(1280, 720)
        cy.visit('https://staging.lano.io/en/login')
        //1 Sign in page
        cy.contains ('Welcome to Lano').should('exist')
        //2 Find registration link and click on it  
        cy.contains ('Create your account').click()
        cy.url().should('include','/registration')
        cy.wait(5000)
        //3 Go back
        cy.go('back')
        //4 Click
        cy.contains ('Continue with Google').click()
        //cy.get('#user_email')
    })


    it.only('Sign in as lano admin', () => {
        cy.visit('https://staging.lano.io/en/login')
        cy.get('#user_email').type('nabeel.ahmed@lano.io')
        cy.get('#user_password').type('Lano2020!')
        cy.get('input.btn.btn-blue.block.signup-button-width').click()
    })
 /*   it('Verify Header is present', () => {
        cy.get('h1').first().should('be.exist');
    })
    it('Verify Product menu are present', () => {
        cy.get('#product-menu-toggle').first().should('be.exist');
        cy.get('#developers-menu-toggle').first().should('be.exist');
        cy.get('#developers-menu-toggle').first().should('be.exist');
    })
    it('Verify menu Links are  present', () => {
        cy.get("a[title='Pricing']").first().should('be.exist');
        cy.get("a[title='Sign In']").first().should('be.exist');
        cy.get("a[title='Live for Teams']").first().should('be.exist');
    }) */
})
