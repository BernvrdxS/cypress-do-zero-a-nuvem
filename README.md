# 🚀 Cypress do Zero à Nuvem

Este repositório contém a prática e os exercícios realizados durante o curso **“Cypress do Zero à Nuvem”** da Escola Talking About Testing.  
O objetivo é aplicar conceitos de automação de testes de ponta a ponta utilizando **Cypress**, integrando boas práticas de desenvolvimento, versionamento de código e execução em nuvem (CI/CD).

---

## 📚 Conceitos aplicados no projeto

Durante o curso e neste projeto, foram trabalhados os seguintes pontos:

- **Configuração do ambiente Cypress**  
  - Instalação do Cypress via `npm`  
  - Estrutura básica de diretórios (`e2e`, `fixtures`, `support`)  

- **Interações com a aplicação**  
  - Visitar páginas locais e remotas (`cy.visit`)  
  - Interação com campos de formulário (inputs, selects, checkboxes, radios, uploads de arquivos)  
  - Clique em botões e links, incluindo links que abrem em nova aba  

- **Validações (assertions)**  
  - Uso de **assertions implícitas e explícitas**  
  - Verificação de conteúdo, visibilidade, estados de campos e mensagens exibidas  

- **Boas práticas com Cypress**  
  - Criação de **comandos customizados** para reutilização de código  
  - Uso de **fixtures** para centralizar dados de teste  
  - Organização de testes em cenários independentes  

- **Execução em múltiplos ambientes**  
  - Configuração de diferentes `baseUrl` para rodar localmente ou em produção  
  - Simulação de diferentes tamanhos de tela (desktop e mobile)  

- **Integração Contínua e Nuvem**  
  - Configuração de pipeline de testes com **GitHub Actions**  
  - Execução e relatórios de testes no **Cypress Cloud**  

---

## ⚙️ Como configurar o projeto em um novo computador

Se você clonar este repositório em uma máquina diferente, siga os passos abaixo:

### 1. Pré-requisitos

- **Node.js** instalado (versão 16 ou superior recomendada)  
  👉 [Download Node.js](https://nodejs.org/)  
- **npm** ou **yarn** configurado (npm já vem junto com o Node.js)  
- **Git** instalado para clonar o repositório  

## 2. Clonar o repositório
```bash
git clone https://github.com/BernvrdxS/cypress-do-zero-a-nuvem.git cd cypress-do-zero-a-nuvem
```

## 3. Instalar dependências
```bash
npm install
```

## 4. Executar os testes localmente
### Abrir a interface interativa do Cypress:
```bash
npx cypress open
```

## Rodar todos os testes em modo headless (linha de comando):
```bash
npx cypress run
```

## Scripts úteis
No arquivo *package.json* estão configurados os seguintes scripts:

### Rodar o Cypress em modo interativo:
```bash
npm run cy:open
```

### Rodar todos os testes em modo headless:
```bash
npm run cy:run
```

### Executar testes com gravação no Cypress Cloud:
```bash
npm run cy:cloud
```

