const express = require('express');
const router = express.Router();

// Exemplo de rota para listar eventos
router.get('/', (req, res) => {
  res.send('Listar eventos');
});

module.exports = router;
