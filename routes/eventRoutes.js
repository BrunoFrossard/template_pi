const express = require('express');
const router = express.Router();
const db = require('../src/config/database');

// Página com lista completa de eventos
router.get('/', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM events ORDER BY event_date DESC');
    res.render('pages/page2', {
      title: 'Todos os Eventos',
      events: result.rows
    });
  } catch (error) {
    res.status(500).render('error', { message: 'Erro ao carregar eventos.' });
  }
});

// Página de formulário de criação de evento
router.get('/create', (req, res) => {
  res.render('pages/create-event', { title: 'Criar Evento' });
});

// Enviar novo evento (POST)
router.post('/', async (req, res) => {
  const { name, description, event_date } = req.body;
  try {
    await db.query(
      'INSERT INTO events (name, description, event_date) VALUES ($1, $2, $3)',
      [name, description, event_date]
    );
    res.redirect('/events');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao criar evento.' });
  }
});

// (Opcional) Excluir evento
router.post('/delete/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM events WHERE id = $1', [id]);
    res.redirect('/events');
  } catch (error) {
    res.status(500).render('error', { message: 'Erro ao excluir evento.' });
  }
});

module.exports = router;
