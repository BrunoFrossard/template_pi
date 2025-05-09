const fs = require('fs');
const path = require('path');
const db = require('../src/config/database');

const sqlPath = path.join(__dirname, 'init.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

db.exec(sql, (err) => {
  if (err) {
    console.error('Erro ao executar o SQL:', err);
  } else {
    console.log('Banco de dados inicializado com sucesso.');
  }
  db.close();
});
