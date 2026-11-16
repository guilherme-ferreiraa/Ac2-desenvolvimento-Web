# Sistema de Inscrição em Oficinas

Aplicação web desenvolvida com Angular para cadastrar e acompanhar inscrições em oficinas. É possível registrar participantes, visualizar as inscrições, confirmar ou remover cada registro e consultar os totais por status.

## Funcionalidades

- Cadastro de participante com nome, e-mail e oficina.
- Lista de inscrições com status confirmado ou pendente.
- Confirmação de inscrições pendentes.
- Remoção de inscrições.
- Contadores de inscrições totais, confirmadas e pendentes.
- Navegação entre as telas de cadastro e listagem.

As oficinas disponíveis são Desenvolvimento Angular, Lógica de Programação e Banco de Dados SQL.

## Tecnologias

- Angular 22
- TypeScript
- FormsModule e Angular Router
- Vitest para testes

## Pré-requisitos

- Node.js em uma versão compatível com Angular 22.
- npm.

## Como executar

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   git clone https://github.com/guilherme-ferreiraa/Ac2-desenvolvimento-Web.git
   cd Ac2-desenvolvimento-Web
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. Acesse [http://localhost:4200](http://localhost:4200).

A aplicação abre na tela de cadastro. Após cadastrar uma inscrição, você será direcionado para a lista.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm start` | Inicia o servidor de desenvolvimento Angular. |
| `npm run build` | Compila a aplicação para produção. |
| `npm run watch` | Recompila a aplicação automaticamente ao detectar alterações. |
| `npm test` | Executa os testes com Vitest. |

## Estrutura do projeto

```text
src/
├── app/
│   ├── cadastrar-inscricao/   # Formulário de cadastro
│   ├── lista-inscricao/       # Listagem, confirmação e remoção
│   ├── models/                # Modelo de inscrição
│   ├── app.routes.ts          # Rotas da aplicação
│   └── inscricao-service.ts   # Gerenciamento das inscrições
├── index.html
├── main.ts
└── styles.css
```

## Persistência dos dados

As inscrições são mantidas em memória pelo serviço Angular e não são salvas em um banco de dados. Por isso, os dados são perdidos ao recarregar ou fechar a aplicação.
