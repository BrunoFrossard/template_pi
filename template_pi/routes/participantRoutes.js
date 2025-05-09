const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
=======

// Exemplo de rota para listar participantes
router.get('/', (req, res) => {
  res.send('Listar participantes');
});
>>>>>>> 919bcb3 (Remove repositório embutido template_pi e ajusta estrutura)

module.exports = router;
