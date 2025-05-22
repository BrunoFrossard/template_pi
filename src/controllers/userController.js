const db = require('../config/database');

exports.listarParticipantes = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM participants');
    
    // Verifica se o cliente quer JSON
    if (req.headers.accept.includes('application/json')) {
      return res.json(result.rows);
    }
    
    // Renderiza HTML por padrão
    res.render('page2', {
      title: 'Participantes',
      participantes: result.rows
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar participantes');
  }
};