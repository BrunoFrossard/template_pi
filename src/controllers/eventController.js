const db = require('../config/database');

exports.listarEventos = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM events');

    if (req.headers.accept.includes('application/json')) {
      return res.json(result.rows);
    }

    res.render('pages/page1', {
      title: 'Lista de Eventos',
      featuredEvents: result.rows  // <<== usa "featuredEvents" pois é assim que o EJS espera
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

    const result = await db.query(query, [title, description, creator_id, status, event_date]);

    if (req.headers.accept.includes('application/json')) {
      return res.status(201).json(result.rows[0]);
    }

    res.redirect('/events');

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar evento');
  }
};
