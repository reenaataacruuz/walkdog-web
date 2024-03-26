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

    verifyErrorMessages(element) {
            const messages = {
                errorName: "Informe o seu nome completo",
                errorEmail:"Informe o seu melhor email",
                errorCpf:"Informe o seu CPF",
                errorCep:"Informe o seu CEP",
                errorAddressNumber:"Informe um número maior que zero",
                errorDocument:"Adcione um documento com foto (RG ou CHN)",
                default: "Mensagem padrão",
            }
        
        const textModal = messages[element]

        cy.contains(`span.alert-error`, textModal)
            .should('be.visible')
        }
    
}

export default new textsModal()