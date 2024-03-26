class textsModal {

    verifyMessagesModal(element) {
            const messages = {
                success: "Recebemos o seu cadastro e em breve retornaremos o contato.",
                default: "Mensagem padrão",
            }
        
        const textModal = messages[element]

        cy.contains(`div.swal2-html-container`, textModal)
            .should('be.visible')
        }
    
}

export default new textsModal()