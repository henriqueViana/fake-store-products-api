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

_HTTPS_

```bash
git clone https://github.com/henriqueViana/fake-store-products-api.git
cd fake-store-products-api.git
```

_SSH_

```bash
git clone git@github.com:henriqueViana/fake-store-products-api.git
cd fake-store-products-api.git
```

### 2. Configuração do MongoDB e RabbitMQ com Docker

O projeto utiliza o Docker para rodar a aplicação, o MongoDB e o RabbitMQ em containers, a partir de um docker-compose.yml e um Dockerfile já configurados. Para isso, basta rodar o seguinte comando:

```bash
yarn docker:dev
```

Isso vai subir o MongoDB na porta _27017_ e o RabbitMQ na porta _15672_ com as credenciais configuradas no arquivo _.env_

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

## Rodando o projeto

Para a documentação está sendo utilizado o módulo chamado **Compodoc** como dev-dependency

Executando o comando abaixo, irá gerar um diretório na raiz do projeto chamado **documentation** contendo todos os arquivos necessários

```bash
npx @compodoc/compodoc -p tsconfig.json -s
```

Após gerada a documentação, ficará disponível para visualização em: **http://localhost:8080**
