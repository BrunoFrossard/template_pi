const fs = require('fs');
const path = require('path');
const supabase = require('../src/config/database');

const sqlPath = path.join(__dirname, 'init.sql');
const sql = fs.readFileSync(sqlPath, 'utf8');

(async () => {
  try {
    const { error } = await supabase.rpc('run_sql', { sql });
    if (error) throw error;
    console.log('Banco de dados inicializado com sucesso.');
  } catch (err) {
    console.error('Erro ao executar o SQL:', err);
  }
})();
