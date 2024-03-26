class homePage{

    startRegister(){
        cy.contains('a', 'Quero ser Dog Walker').click()
    }
}

export default new homePage()