const express = require('express');
const router = express.Router();

// Exemplo de rota para listar participantes
router.get('/', (req, res) => {
  res.send('Listar participantes');
});

module.exports = router;
