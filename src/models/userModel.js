const db = require('../config/database');

exports.listarParticipantes = async () => {
  const query = 'SELECT * FROM participants';
  try {
    const result = await db.query(query);
    return result.rows;
  } catch (err) {
    throw new Error('Erro ao listar participantes');
  }
};
