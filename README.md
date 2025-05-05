# 🛒 E-commerce Product API com NestJS e MongoDB

Este projeto é uma API para um sistema de e-commerce utilizando **NestJS**, **MongoDB**, **Docker** e **Mongoose**. Ele segue as boas práticas de **arquitetura limpa**, **CQRS** e **EventBus**, com integração ao **RabbitMQ** para comunicação assíncrona.

---

## 🚀 Tecnologias

- **NestJS** - Framework Node.js para construir APIs eficientes e escaláveis.
- **MongoDB** - Banco de dados NoSQL para armazenar informações de produtos.
- **Docker** - Containerização do ambiente de desenvolvimento e produção.
- **RabbitMQ** - Sistema de filas para comunicação assíncrona.
- **Mongoose** - Biblioteca para trabalhar com MongoDB e modelar os dados.

---

## 📦 Pré-requisitos

Antes de rodar o projeto, é necessário ter os seguintes pré-requisitos instalados:

- [Docker](https://www.docker.com/get-started) (para rodar o MongoDB)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/) (gerenciadores de pacotes)
- [Node.js](https://nodejs.org/) (versão >= 18)

---

## 🚀 Rodando o projeto

### 1. Clone o repositório

Clone este repositório em sua máquina local:

```bash
git clone https://github.com/usuario/projeto-ecommerce.git
cd projeto-ecommerce
```

### 2. Configuração do MongoDB e RabbitMQ com Docker
O projeto utiliza o Docker para rodar a aplicação, o MongoDB e o RabbitMQ em containers, a partir de um docker-compose.yml e um Dockerfile já configurados. Para isso, basta rodar o seguinte comando:

```bash
yarn docker:dev
```

Isso vai subir o MongoDB na porta *27017* e o RabbitMQ na porta *15672* com as credenciais configuradas no arquivo *.env*

**Exemplo de arquivo .env**

```bash
# .env
MONGO_USER=admin
MONGO_PASSWORD=admin
MONGO_HOST=mongodb
MONGO_PORT=27017
MONGO_DB=meubanco
```

E por fim, será executado o comando **yarn start:dev** que será responsável por subir a aplicação

