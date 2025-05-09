const fs = require('fs');
const path = require('path');
const db = require('../src/config/database');

// Caminho do script SQL
const sqlPath = path.join(__dirname, 'init.sql');

// Ler o conteúdo do script SQL
fs.readFile(sqlPath, 'utf-8', (err, sql) => {
  if (err) {
    console.error('Erro ao ler o script SQL:', err);
    return;
  }

  // Executar o script SQL
  db.exec(sql, (err) => {
    if (err) {
      console.error('Erro ao executar o script SQL:', err);
    } else {
      console.log('Banco de dados inicializado com sucesso.');
    }
  });
});
