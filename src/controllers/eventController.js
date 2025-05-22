const db = require('../config/database');

exports.listarEventos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM events');
    
    // Verifica o Accept header
    if (req.headers.accept.includes('application/json')) {
      return res.json(result.rows);
    }
    
    // Renderiza HTML por padrão
    res.render('page1', { 
      title: 'Lista de Eventos',
      eventos: result.rows 
    });
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro interno');
  }
};

exports.criarEvento = async (req, res) => {
  const { title, description, creator_id, status, event_date } = req.body;
  
  try {
    const query = `
      INSERT INTO events 
      (title, description, creator_id, status, event_date) 
      VALUES ($1, $2, $3, $4, $5) 
      RETURNING *
    `;
    
    const result = await db.query(query, 
      [title, description, creator_id, status, event_date]);
    
    // Resposta diferente para JSON vs HTML
    if (req.headers.accept.includes('application/json')) {
      return res.status(201).json(result.rows[0]);
    }
    
    res.redirect('/events');
    
  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar evento');
  }
};