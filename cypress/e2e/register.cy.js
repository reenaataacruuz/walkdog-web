describe('Realizando cadastro para cuidar de pets', () => {
  
    beforeEach(() => {
      cy.visit('/')
      cy.contains('a', 'Quero ser Dog Walker').click()
    })
  
    it('Cadastro para *Cuidar* de Pet', () => {
      cy.get('[name="name"]').type('Nome pets')
      cy.get('[name="email"]').type('petts@gmail.com')
      cy.get('[name="cpf"]').type('01234567890')
      cy.get('[name="cep"]').type('60181650')
      cy.get('[value="Buscar CEP"]').click()
      cy.get('[name="addressNumber"]').type('10')
      cy.get('span:contains("Cuidar")').click()

      const image = 'hamster.jpg'
      console.log("imagem", image);
      cy.get('input[type="file"]').selectFile(image)
    //   cy.fixture(image).then(fileContent => {
    //     cy.get('input[type="file"]')
    //     .attachFile({ fileContent, fileName: 'hamster.jpg', mimeType: 'image/jpeg' })
    //   })

      
    //   cy.get('[accept="image/*"]').selectFile('../fixtures/hamster.jpg')
    })
})