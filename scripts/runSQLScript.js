const fs = require('fs');
const path = require('path');
const supabase = require('../src/config/database');
require("dotenv").config();

// Caminho do arquivo SQL
const sqlPath = path.join(__dirname, 'init.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

(async () => {
  try {
    // Dividir o SQL por ponto e vírgula para executar um por um
    const queries = sql.split(';').map(q => q.trim()).filter(q => q.length);

    for (const query of queries) {
      const { data, error } = await supabase
        .from('participants')  // Utiliza qualquer tabela existente para executar a query
        .select('*')
        .rpc('pg_exec', { sql: query });

      if (error) {
        console.error('Erro ao executar SQL:', error.message);
        continue;
      }

      console.log('SQL executado com sucesso:', query);
    }

    console.log('Script SQL executado com sucesso.');
  } catch (err) {
    console.error('Erro ao executar o SQL:', err.message);
  }
})();
