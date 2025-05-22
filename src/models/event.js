const db = require('../config/database');

exports.listarEventos = async () => {
  const query = 'SELECT * FROM events';
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (err) {
    throw new Error('Erro ao listar eventos');
  }
};

exports.criarEvento = async (title, description, creator_id, status, event_date) => {
  const query = 'INSERT INTO events (title, description, creator_id, status, event_date) VALUES ($1, $2, $3, $4, $5) RETURNING *';
  try {
    const result = await db.query(query, [title, description, creator_id, status, event_date]);
    return result.rows[0];
  } catch (err) {
    throw new Error('Erro ao criar evento');
  }
};
