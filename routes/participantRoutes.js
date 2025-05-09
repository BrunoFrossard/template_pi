const express = require('express');
const router = express.Router();
const db = require('../src/config/database');

// Rota GET - Lista todos os participantes
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM participants');
    res.json(result.rows);
  } catch (err) {
    console.error('Erro ao buscar participantes:', err.message);
    res.status(500).json({ error: 'Erro ao buscar participantes' });
  }
});

module.exports = router;
