# Documentação - Plataforma de eventos → users, events, subscriptions

##  Introdução

A Plataforma de Eventos é um sistema desenvolvido SQL que permite a criação e inscrição de participantes em eventos. O sistema segue a estrutura MVC (Model-View-Controller) para organizar o código. O banco de dados foi estruturado para armazenar participantes, eventos e inscrições.


## Estrutura do Banco de Dados

O banco de dados está composto por três tabelas principais:

1. **participants:** Armazena os dados dos participantes cadastrados na plataforma.
2. **events:** Armazena os eventos criados pelos participantes.
3. **subscriptions:** Relaciona os participantes aos eventos em que estão inscritos.

---

##  Descrição das Tabelas

### Tabela `participants`

* `participant_id` (INTEGER, PK) - Identificador único do participante.
* `name` (VARCHAR) - Nome do participante.
* `email` (VARCHAR, UNIQUE) - Email único do participante.
* `created_at` (TIMESTAMP) - Data e hora do cadastro.

### Tabela `events`

* `event_id` (INTEGER, PK) - Identificador único do evento.
* `event_title` (VARCHAR) - Título do evento.
* `event_description` (TEXT) - Descrição do evento.
* `creator_id` (INTEGER, FK) - ID do participante que criou o evento.
* `event_status` (VARCHAR) - Status do evento (`ativo`, `cancelado`, `concluído`).
* `event_date` (DATE) - Data do evento.
* `created_at` (TIMESTAMP) - Data e hora de criação.

### Tabela `subscriptions`

* `subscriber_id` (INTEGER, FK) - ID do participante inscrito no evento.
* `event_id` (INTEGER, FK) - ID do evento em que o participante está inscrito.
* `subscription_date` (TIMESTAMP) - Data e hora da inscrição.

A chave primária da tabela é composta por `subscriber_id` e `event_id`, garantindo que um participante não possa se inscrever no mesmo evento mais de uma vez.



## Diagrama Relacional

O diagrama relacional do banco de dados está disponível no arquivo `dd.png`, localizado na pasta assets. Ele representa visualmente os relacionamentos entre as tabelas `participants`, `events` e `subscriptions`.


## Funcionalidades Implementadas

* Estruturação do projeto no padrão MVC.
* Banco de dados MySQL configurado e inicializado.
* Script SQL (`dd.sql`) gerado a partir do diagrama DBML.
* Rotas `/participants` e `/events` configuradas no servidor Express para teste.


## Como Executar o Banco de Dados

1. Execute o script SQL `init.sql`, que está localizado dentro da pasta 'scripts' para criar as tabelas:

```
mysql -u root -p seu_banco_de_dados < scripts/dd.sql
```

2. Inicie o servidor:

```
node server.js
```

3. Acesse as rotas para verificar os dados no banco:

* `/participants`
* `/events`



