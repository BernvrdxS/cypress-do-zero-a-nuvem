describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')
  })

  it('verifica o título da aplicação', () => {
    cy.title().should('be.equal', "Central de Atendimento ao Cliente TAT")
  })


  //Exercício Extra 1 - Aula 2
  it('preenche os campos obrigatórios', () => {
    cy.clock()

    const longText = Cypress._.repeat('Teste.', 3)
    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#email').type('joao.silva@example.com')
    cy.get('#phone').type('11987654321')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.contains('button', 'Enviar').click()

    cy.get('span[class="success"]').should('be.visible')

    cy.tick(3000)

    cy.get('.success').should('not.be.visible')
  })

  //Exercício Extra 2 - Aula 2

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', () => {
    cy.clock()

    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#phone').type('11987654321')
    cy.get('#email').type('joao.silva@com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

    cy.tick(3000)

    cy.get('.error').should('not.be.visible')
  })

  //Exercício Extra 3 - Aula 2
  it('campo telefone continua vazio quando preenchido com valor não-numérico', () => {
    cy.get('#phone')
      .type('abcde')
      .should('have.value', '')
  })

  //Exercício Extra 4 - Aula 2
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()

    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#phone').type(' ')
    cy.get('#email').type('joao.silva@com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').click()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

    cy.tick(5000)

    cy.get('.error').should('not.be.visible')
  })

  //Exercício Extra 5 - Aula 2
  it('preenche e limpa os campos nome, sobrenome, email e telefone', () => {
    cy.get('#firstName')
      .type('João')
      .should('have.value', 'João')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('Silva')
      .should('have.value', 'Silva')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('joao.silva@gmail.com')
      .should('have.value', 'joao.silva@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('123456789')
      .should('have.value', '123456789')
      .clear()
      .should('have.value', '')
    cy.get('#open-text-area')
      .type('Teste')
      .should('have.value', 'Teste')
      .clear()
      .should('have.value', '')
  })

  //Exercício Extra 6 - Aula 2
  it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
    cy.clock()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

    cy.tick(3000)

    cy.get('.error').should('not.be.visible')

  })

  //Exercício Extra 7 - Aula 2
  it('envia o formulário com sucesso usando um comando customizado', () => {
    cy.clock()

    cy.fillMandatoryFieldsAndSubmit()

    cy.get('span[class="success"]').should('be.visible')

    cy.tick(3000)

    cy.get('span[class="success"]').should('not.be.visible')
  })

  //Exercício 1 - Aula 3

  it('seleciona um produto (YouTube) por seu texto', () => {
    cy.get('#product').select('YouTube').should('have.value', 'youtube')

  })

  //Exercício Extra 1 - Aula 3

  it('seleciona um produto (Mentoria) por seu valor (value)', () => {
    cy.get('#product').select('mentoria').should('have.value', 'mentoria')
  })

  //Exercício Extra 2 - Aula 3

  it('seleciona um produto (Blog) por seu índice', () => {
    cy.get('#product').select(1).should('have.value', 'blog')
  })

  //Exercício 1 - Aula 4
  it('marca o tipo de atendimento "Feedback"', () => {
    cy.get('input[type=radio][value="feedback"]').check().should('be.checked')
  })

  //Exercício Extra 1 - Aula 4
  it('marca cada tipo de atendimento', () => {
    cy.get('input[type=radio]')
      .each((typeOfSearch) => {
        cy.wrap(typeOfSearch)
          .check()
          .should('be.checked')
      })
  })

  //Exercício 1 - Aula 5
  it('marca ambos checkboxes, depois desmarca o último', () => {
    cy.get('input[type=checkbox]')
      .check()
      .should('be.checked')
      .last().uncheck()
      .should('not.be.checked')
  })

  //Exercício 2 - Aula 5
  it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    cy.clock()

    cy.get('#firstName').type('João')
    cy.get('#lastName').type('Silva')
    cy.get('#phone').type(' ')
    cy.get('#email').type('joao.silva@com')
    cy.get('#open-text-area').type('Teste')
    cy.get('#phone-checkbox').check()
    cy.contains('button', 'Enviar').click()

    cy.get('.error').should('be.visible')

    cy.tick(3000)

    cy.get('.error').should('not.be.visible')
  })

  //Exercício 1 - Aula 6
  it('seleciona um arquivo da pasta fixtures', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json')
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  //Exercício Extra 1 - Aula 6
  it('seleciona um arquivo simulando um drag-and-drop', () => {
    cy.get('#file-upload')
      .selectFile('cypress/fixtures/example.json', { action: 'drag-drop' })
      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  //Exercício Extra 2 - Aula 6
  it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
    cy.fixture('example.json').as('sampleFile')
    cy.get('#file-upload')
      .selectFile('@sampleFile')

      .should((input) => {
        expect(input[0].files[0].name).to.equal('example.json')
      })
  })

  //Exercício 1 - Aula 7
  it('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', () => {
    cy.contains('a', 'Política de Privacidade')

      .should('have.attr', 'href', 'privacy.html')
      .and('have.attr', 'target', '_blank')
  })

  //Exercício Extra 1 - Aula 7
  it('acessa a página da política de privacidade removendo o target e então clicando no link', () => {
    cy.contains('a', 'Política de Privacidade')
      .invoke('removeAttr', 'target')
      .click()

    cy.contains('h1', 'CAC TAT - Política de Privacidade')
      .should('be.visible')
  })

  //Exercício .invoke()
  it('exibe e oculta as mensagens de sucesso e erro usando .invoke()', () => {
    cy.get('.success')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Mensagem enviada com sucesso.')
      .invoke('hide')
      .should('not.be.visible')
    cy.get('.error')
      .should('not.be.visible')
      .invoke('show')
      .should('be.visible')
      .and('contain', 'Valide os campos obrigatórios!')
      .invoke('hide')
      .should('not.be.visible')
  })

  //Exercício .invoke() 2
  it('preenche o campo da área de texto usando o comando invoke', () => {
    cy.get('#open-text-area')
      .invoke('val', 'um texto qualquer')
      .should('have.value', 'um texto qualquer')
  })
  it('faz uma requisição HTTP', () => {
    cy.request('GET', 'https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.statusText).to.eq('OK');
      expect(response.body).to.include('CAC TAT');
    });
  })

  //Resolução exercício .request() feita pelo Walmyr
  it('faz uma requisição HTTP', () => {
    cy.request('https://cac-tat-v3.s3.eu-central-1.amazonaws.com/index.html')
      .as('getRequest')
      .its('status')
      .should('be.equal', 200)
    cy.get('@getRequest')
      .its('statusText')
      .should('be.equal', 'OK')
    cy.get('@getRequest')
      .its('body')
      .should('include', 'CAC TAT')
  })

  //Exercício Final - Encontre o Gato
  it('encontre o gato', () => {
    cy.get('#cat')
      .invoke('show')
      .should('be.visible').and('contain', '🐈')
    cy.get('#title')
      .invoke('text', 'CAT TAT')
    cy.get('#subtitle')
      .invoke('text', 'Eu ❤ gatos!')
  })
})