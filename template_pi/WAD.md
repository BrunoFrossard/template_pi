# Documentação Técnica - Banco de Dados


## Introdução

Este documento descreve a estrutura do banco de dados utilizado na aplicação Template PI. O banco foi criado utilizando SQLite e segue a estrutura MVC para organização do código.


## Estrutura do Banco de Dados

O banco de dados é composto por três tabelas principais:

1. participants: Armazena os dados dos participantes cadastrados na plataforma.
2. events: Armazena os eventos criados pelos participantes.
3. subscriptions: Relaciona os participantes aos eventos em que estão inscritos.


## Descrição das Tabelas

### Tabela participants

| Campo         | Tipo         | Descrição           |
|---------------|--------------|---------------------|
| participant_id| INTEGER     | Chave Primária      |
| name          | VARCHAR(100)| Nome do participante |
| email         | VARCHAR(100)| Email único         |
| created_at    | TIMESTAMP   | Data de criação     |


### Tabela events

| Campo         | Tipo         | Descrição             |
|---------------|--------------|-----------------------|
| event_id      | INTEGER     | Chave Primária        |
| title         | VARCHAR(255)| Título do evento      |
| description   | TEXT        | Descrição do evento   |
| creator_id    | INTEGER     | ID do criador (FK)    |
| status        | VARCHAR(20) | Status do evento      |
| event_date    | DATE        | Data do evento        |
| created_at    | TIMESTAMP   | Data de criação       |


### Tabela subscriptions

| Campo         | Tipo     | Descrição              |
|---------------|----------|------------------------|
| subscriber_id | INTEGER  | ID do participante (FK)|
| event_id      | INTEGER  | ID do evento (FK)      |
| subscription_date | TIMESTAMP | Data da inscrição  |


## Diagrama Relacional

O diagrama relacional do banco de dados está disponível no arquivo assets/dd.png.


## Execução do Banco de Dados

1. Para criar o banco de dados, execute o script init.sql:

npm run init-db

2. Acesse as rotas para verificar os dados no banco:

- GET /api/participants - Lista todos os participantes.




