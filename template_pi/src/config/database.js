const sqlite3 = require('sqlite3').verbose();
const path = require('path');

<<<<<<< HEAD
const dbPath = path.join(__dirname, '../../database.sqlite');

=======
// Caminho do banco de dados
const dbPath = path.join(__dirname, '../database.sqlite');

// Criação do banco de dados
>>>>>>> 919bcb3 (Remove repositório embutido template_pi e ajusta estrutura)
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
  } else {
    console.log('Conectado ao banco de dados SQLite.');
  }
});

module.exports = db;
