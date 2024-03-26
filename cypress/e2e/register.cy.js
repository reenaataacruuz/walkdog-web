import registerPage from "../support/pages/register"
import homePage from "../support/pages/home"
import textsModal from '../support/components/Modal'

describe('Realizando cadastro para cuidar de pets', () => {
    
    beforeEach(() => {
      cy.visit('/')
      homePage.startRegister()
    })
  
    it('Cadastro para *Cuidar* de Pet', () => {
        registerPage.addName('Nome pets')
        registerPage.addEmail('petts@gmail.com')
        registerPage.addCpf('01234567890')
        registerPage.addCep('60181650')
        registerPage.addAddressNumber('10')
        registerPage.addActivity('cuidar')
        registerPage.addDocument('cypress/fixtures/hamster.jpg')
        registerPage.finallyRegister()
        textsModal.verifyMessagesModal('success')
        registerPage.backPage()
    })

    it('Cadastro para *Adestrar* de Pet', () => {
        registerPage.addName('Nome pets')
        registerPage.addEmail('petts@gmail.com')
        registerPage.addCpf('01234567890')
        registerPage.addCep('60181650')
        registerPage.addAddressNumber('10')
        registerPage.addActivity('adestrar')
        registerPage.addDocument('cypress/fixtures/hamster.jpg')
        registerPage.finallyRegister()
        textsModal.verifyMessagesModal('success')
        registerPage.backPage()
    })

    it('Cadastro para *Cuidar* e *Adestrar* de Pet', () => {
        registerPage.addName('Nome pets')
        registerPage.addEmail('petts@gmail.com')
        registerPage.addCpf('01234567890')
        registerPage.addCep('60181650')
        registerPage.addAddressNumber('10')
        registerPage.addActivity('cuidar')
        registerPage.addActivity('adestrar')
        registerPage.addDocument('cypress/fixtures/hamster.jpg')
        registerPage.finallyRegister()
        textsModal.verifyMessagesModal('success')
        registerPage.backPage()
    })
})