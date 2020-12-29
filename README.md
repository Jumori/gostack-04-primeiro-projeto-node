

<h1 align="center">
  GoBarber Web Services
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/Jumori/gostack-04-primeiro-projeto-node?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Jumori/gostack-04-primeiro-projeto-node">

  <a href="https://github.com/Jumori/gostack-04-primeiro-projeto-node/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Jumori/gostack-04-primeiro-projeto-node">
  </a>

</p>

<h4 align="center">
	🚧 Em construção 🚀 🚧
</h4>

Tabela de conteúdos
=================
<!--ts-->
   * [Sobre o projeto](#-sobre-o-projeto)
   * [Funcionalidades](#️-funcionalidades)
   * [Como executar o projeto](#-como-executar-o-projeto)
     * [Pré-requisitos](#pré-requisitos)
     * [Rodando a aplicação](#-rodando-o-backend-servidor)
   * [Tecnologias](#-tecnologias)
   * [Autora](#-autora)
   * [Licença](#user-content--licença)
<!--te-->


## 💻 Sobre o projeto

GoBarber web services - conjunto de funcionalidade back-end para o GoBarber, uma aplicação para a realização de agendamentos em barbearias. Este repositório contempla apenas as funcionalidades iniciais da aplicação utilizando conceitos aprendidos durante um dos módulos do **GoStack Bootcamp** oferecido pela [Rocketseat](https://nextlevelweek.com/).


## ⚙️ Funcionalidades

### Cadastro e login
- [x] Usuário deve poder se cadastrar na aplicação
- [x] Usuário cadastrado deve poder se autenticar na aplicação para ter acesso às demais funcionalidades

### Recuperação de senha
- [x] Usuário deve poder recuperar sua senha informando o seu email
  - [x] [RNF] Utilizar [Ethereal](http://ethereal.email/) para testar envios em ambiente de desenvolvimento
  - [x] [RNF] Utilizar [Amazon SES](https://aws.amazon.com/pt/ses/) para envios em produção
  - [x] [RNF] O envio de emails deve acontecer em segundo plano (background job)
- [x] Usuário deve receber um email com instruções de recuperação de senha
  - [x] [RN] O link enviado por email para resetar senha, deve expirar em 2 horas
- [x] Usuário deve poder resetar sua senha
  - [x] [RN] Usuário precisa confirmar a nova senha ao resetar sua senha

### Atualização do perfil
- [x] Usuário deve poder atualizar seu nome, email e senha
  - [x] [RN] Usuário não pode alterar seu email para um email já utilizado
  - [x] [RN] Para atualizar sua senha, o usuário deve informar a senha antiga
  - [x] [RN] Para atualizar sua senha, o usuário deve confirmar a nova senha
- [x] Usuário deve poder atualizar seu avatar

### Agendamento de serviços
- [x] Usuário deve poder listar todos prestadores de serviço cadastrados
  - [x] [RNF] Listagem de prestadores deve ser armazenada em cache
- [x] Usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- [x] Usuário deve poder listar horários disponíveis em um dia específico de um prestador
- [x] Usuário deve poder realizar um novo agendamento com um prestador
  - [x] [RN] Cada agendamento deve durar 1 hora exatamente
  - [x] [RN] Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h, último ás 17h)
  - [x] [RN] Usuário não pode agendar em um horário já ocupado
  - [x] [RN] Usuário não pode agendar em um horário que já passou
  - [x] [RN] Usuário não pode agendar serviços com ele próprio

### Painel do prestador
- [x] Usuário deve poder listar seus agendamentos de um dia específico
  - [x] [RNF] Os agendamentos do prestador no dia atual devem ser armazenados em cache
- [x] Prestador deve receber uma notificação sempre que houver um novo agendamento
  - [x] [RNF] As notificações do prestador devem ser armazenadas no [MongoDB](https://www.mongodb.com/)
  - [ ] [RNF] As notificações do prestador devem ser enviadas em tempo-real utilizando [Socket.io](Socket.io)
- [ ] Prestador deve poder visualizar as notificações não lidas
  - [x] [RN] A notificação deve ter um status de lida ou não-lida para que o prestador possa controlar
## 🚀 Como executar o projeto

Este projeto possui apenas os serviços do back-end (servidor).

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Yarn](https://yarnpkg.com/)

#### 🎲 Rodando o Backend (servidor)

```bash

# Clone este repositório
$ git clone git@github.com:Jumori/gostack-04-primeiro-projeto-node.git

# Acesse a pasta do projeto no seu terminal/cmd
$ cd gostack-04-primeiro-projeto-node

# Instale as dependências
$ yarn

# Execute a aplicação em modo de desenvolvimento
$ yarn start

# A aplicação será aberta na porta:33333 - acesse http://localhost:3333

```
<p align="center">
  <a href="https://github.com/Jumori/gostack-04-primeiro-projeto-node/blob/master/Insomnia_2020-12-28" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### **Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[date-fns](https://date-fns.org/)**
-   **[Express](https://expressjs.com/)**
-   **[JSON Web Token](https://github.com/auth0/node-jsonwebtoken)**
-   **[Multer](https://github.com/expressjs/multer)**
-   **[TypeORM](https://typeorm.io/)**

> Veja o arquivo  [package.json](https://github.com/Jumori/gostack-04-primeiro-projeto-node/blob/master/package.json)


## 🦸 Autora

<a href="https://github.com/Jumori">
 <img style="border-radius: 50%;" src="https://avatars1.githubusercontent.com/u/44618499?s=460&u=691cddb486d4b665417d25d8a575e508d6ef9563&v=4" width="100px;" alt=""/>
 <br />
 <sub><b>Juliana Morikoshi</b></sub></a>
 <br />

[![Linkedin Badge](https://img.shields.io/badge/-Juliana-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/julianamorikoshi/)](https://www.linkedin.com/in/julianamorikoshi/)
[![Gmail Badge](https://img.shields.io/badge/-julianamorikoshi@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:julianamorikoshi@gmail.com)](mailto:julianamorikoshi@gmail.com)

---

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).

Feito com ❤️ por Juliana Morikoshi 👋 [Entre em contato!](https://www.linkedin.com/in/julianamorikoshi/)
