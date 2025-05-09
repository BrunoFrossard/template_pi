#Plataforma de eventos → users, events, subscriptions
## Descrição
Uma plataforma simples para criação e inscrição em eventos. Os participantes se inscrever em eventos existentes, ou criar novos eventos também.

## Estrutura do Projeto
- `src/config/` - Configuração do banco de dados SQLite.
- `scripts/` - Scripts SQL e inicialização do banco de dados.
- `server.js` - Servidor principal que inicializa o projeto.
- O `README.md` fornece a documentação geral do projeto.
- O `WAD.md` contém a estrutura técnica e a descrição das funcionalidades.

## Como Executar o Projeto

1. Primeiro, faça o clone do repositório. No terminal, navegue até o diretório onde deseja salvar o projeto e execute o comando: git clone https://github.com/BrunoFrossard/template_pi.git


2. Instale as dependências:
   ```bash
   npm install

3. Após a instalação das dependências, é necessário inicializar o banco de dados SQLite. Para isso, acesse a pasta `scripts` utilizando o comando: cd scripts

4. Dentro da pasta `scripts`, execute o script `runSQLScript.js` utilizando o comando: node runSQLScript.js


5. Esse comando irá criar o banco de dados e as tabelas necessárias. Um arquivo chamado `database.sqlite` será gerado na raiz do projeto. 

Após a inicialização do banco de dados, volte para a pasta raiz do projeto utilizando o comando: cd..
Agora, para iniciar o servidor, execute o comando: node server.js





