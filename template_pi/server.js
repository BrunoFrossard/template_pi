const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rotas
const routes = require('./src/routes/index');
app.use('/api', routes);

// Inicializa o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
