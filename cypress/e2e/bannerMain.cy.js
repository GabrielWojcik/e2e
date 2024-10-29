describe('BannerMain Component', () => {
    beforeEach(() => {
        cy.visit('/'); 
    });

    it('should render input with placeholder and allow typing', () => {
        cy.wait(1000); 

        cy.get('body').then(($body) => {
            cy.log($body.html()); 
        });

        cy.get('input[placeholder="Golf..."]', { timeout: 10000 })
            .should('exist')
            .and('be.visible')
            .type('Meu carro');

        cy.get('input[placeholder="Golf..."]').should('have.value', 'Meu carro');
    });
});
