const supabase = require('./src/config/database');

(async () => {
  try {
    const { data, error } = await supabase.from('participants').select('*');
    
    if (error) throw error;
    
    console.log('Conexão estabelecida com sucesso! Dados da tabela "participants":');
    console.log(data);
  } catch (err) {
    console.error('Erro ao conectar com o Supabase:', err.message);
  }
})();
