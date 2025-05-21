const { Client } = require('pg');  // Importando o pacote pg
const fs = require('fs');
const path = require('path');
require("dotenv").config();

// Criando o cliente do PostgreSQL
const client = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

(async () => {
  try {
    // Conectar ao banco de dados
    await client.connect();

    // Caminho do arquivo SQL
    const sqlPath = path.join(__dirname, 'init.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');

    // Dividir o SQL por ponto e vírgula para executar um por um
    const queries = sql.split(';').map(q => q.trim()).filter(q => q.length);

    for (const query of queries) {
      const res = await client.query(query);  // Executa o comando SQL
      console.log('SQL executado com sucesso:', query);
    }

    console.log('Script SQL executado com sucesso.');
    await client.end();  // Fechar a conexão
  } catch (err) {
    console.error('Erro ao executar o SQL:', err.message);
  }
})();
