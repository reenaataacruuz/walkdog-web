class registerPage {

    addName(fullName){
        cy.get('[name="name"]').type(`${fullName}`)
    }

    addEmail(email){
        cy.get('[name="email"]').type(`${email}`)
    }

    addCpf(cpf){
        cy.get('[name="cpf"]').type(`${cpf}`)
    }

    addCep(cep){
        cy.get('[name="cep"]').type(`${cep}`)
        cy.get('[value="Buscar CEP"]').click()
    }

    addAddressNumber(addressNumber){
        cy.get('[name="addressNumber"]').type(`${addressNumber}`)
    }

    addActivity(activity){
        switch (activity) {
            case "cuidar":
                cy.get('span:contains("Cuidar")').click()
                break
            
            case "adestrar":
                cy.get('span:contains("Adestrar")').click()
                break
        } 
    }

    addDocument(documentType){
        cy.get('input[type="file"]').selectFile(`${documentType}`, {force:true})
    }

    finallyRegister(){
        cy.get('.button-register').click()
    }

    backPage(){
        cy.get('button:contains("Voltar")').click()
    }

}

export default new registerPage()
