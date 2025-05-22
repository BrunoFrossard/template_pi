const express = require('express');
const router = express.Router();
const UserController = require('../src/controllers/userController');

// Rota para listar participantes (GET /participants)
router.get('/', UserController.listarParticipantes);

module.exports = router;