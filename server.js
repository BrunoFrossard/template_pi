require('dotenv').config();
const express = require('express');
const path = require('path');
const db = require('./src/config/database');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());

// Testar a conexão ao banco de dados
db.connect((err, client, release) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    process.exit(1);
  }

  console.log('Conectado ao banco de dados PostgreSQL');
  release(); // Liberar o cliente para evitar leaks

  // Rotas
  const participantRoutes = require('./routes/participantRoutes');
  app.use('/participants', participantRoutes);

  const indexRoutes = require('./routes/index');
  app.use('/', indexRoutes);

  // Middleware para lidar com erros de rota não encontrada
  app.use((req, res, next) => {
    res.status(404).send('Página não encontrada');
  });

  // Middleware para lidar com erros internos do servidor
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erro no servidor');
  });

  // Iniciar o servidor
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});
