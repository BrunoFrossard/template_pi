const express = require('express');
const router = express.Router();

// Rota inicial
router.get('/', (req, res) => {
  res.send('Bem-vindo à API do Projeto!');
});

module.exports = router;
