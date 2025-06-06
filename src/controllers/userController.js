const db = require('../config/database');

exports.listarParticipantes = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM participants');

    if (req.headers.accept.includes('application/json')) {
      return res.json(result.rows);
    }

    res.render('pages/page2', {
      title: 'Participantes',
      events: result.rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar participantes');
  }
};
