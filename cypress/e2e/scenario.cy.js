import registerPage from "../support/pages/register"
import textsModal from '../support/components/Modal'
import homePage from "../support/pages/home"

describe('Validação de conteúdo nos inputs', () =>{
    
    beforeEach(() => {
        cy.visit('/')
        homePage.startRegister()
      })

      it('Validando que os campos são obrigatórios para preenchimento', () =>{
        registerPage.finallyRegister()
        textsModal.verifyErrorMessages('errorName')
        textsModal.verifyErrorMessages('errorEmail')
        textsModal.verifyErrorMessages('errorCpf')
        textsModal.verifyErrorMessages('errorCep')
        textsModal.verifyErrorMessages('errorAddressNumber')
        textsModal.verifyErrorMessages('errorDocument')
      })
})