const express = require('express');
const router = express.Router();
const tarefaController = require('../src/controllers/tarefaController');

router.get('/', tarefaController.listarTarefas);



module.exports = router;
