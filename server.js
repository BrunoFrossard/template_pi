require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./src/config/database');
const eventRoutes = require('./routes/eventRoutes');
const userRoutes = require('./routes/userRoutes');
const tarefaRoutes = require('./routes/tarefaRoutes');


const app = express();
const port = process.env.PORT || 3000;


// Configurações

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/tarefas', tarefaRoutes);

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Conexão com Banco de Dados
db.connect(async (err) => {
  if (err) {
    console.error('❌ Erro no banco de dados:', err);
    process.exit(1);
  }

  console.log('✅ Banco de dados conectado');

  // Rotas
  app.use('/events', eventRoutes);
  app.use('/participants', userRoutes);

  // Rota Home (Página Inicial)
  app.get('/', async (req, res) => {
    try {
      const events = await db.query('SELECT * FROM events ORDER BY event_date DESC LIMIT 3');
      res.render('pages/page1', { 
        title: 'PartyFinder - Encontre as melhores festas',
        featuredEvents: events.rows 
      });
    } catch (error) {
      console.error(error);
      res.status(500).render('error', { message: 'Erro ao carregar eventos' });
    }
  });

  // Inicia Servidor
  app.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
  });
});
