const express = require('express');
const router = express.Router();
const db = require('../src/config/database');

// Listar todos os eventos
router.get('/', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT e.*, COUNT(p.id) as participant_count 
      FROM events e
      LEFT JOIN participants p ON p.event_id = e.id
      GROUP BY e.id
      ORDER BY e.event_date DESC
    `);
    
    res.render('events/list', { 
      title: 'Todos os Eventos',
      events: result.rows 
    });
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao carregar eventos' });
  }
});

// Formulário de criação
router.get('/create', (req, res) => {
  res.render('events/create', { 
    title: 'Criar Novo Evento' 
  });
});

// Detalhes do evento
router.get('/:id', async (req, res) => {
  try {
    const event = await db.query('SELECT * FROM events WHERE id = $1', [req.params.id]);
    const participants = await db.query('SELECT * FROM participants WHERE event_id = $1', [req.params.id]);
    
    res.render('events/detail', {
      title: event.rows[0].title,
      event: event.rows[0],
      participants: participants.rows
    });
  } catch (error) {
    console.error(error);
    res.status(404).render('error', { message: 'Evento não encontrado' });
  }
});

// Criar evento (POST)
router.post('/', async (req, res) => {
  const { title, description, location, event_date, category } = req.body;
  
  try {
    await db.query(
      `INSERT INTO events 
      (title, description, location, event_date, category) 
      VALUES ($1, $2, $3, $4, $5)`,
      [title, description, location, event_date, category]
    );
    
    res.redirect('/events');
  } catch (error) {
    console.error(error);
    res.status(500).render('error', { message: 'Erro ao criar evento' });
  }
});

module.exports = router;