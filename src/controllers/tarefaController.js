const db = require('../config/database');

// Criar nova tarefa
exports.criarTarefa = async (req, res) => {
  const { nome, descricao } = req.body;

  const query = 'INSERT INTO tarefas (nome, descricao) VALUES ($1, $2) RETURNING *';

  try {
    const result = await db.query(query, [nome, descricao]);
    const tarefa = result.rows[0];

    if (req.headers.accept.includes('application/json')) {
      return res.status(201).json(tarefa);
    }

    res.redirect('/tarefas');

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao criar tarefa');
  }
};

// Listar todas as tarefas
exports.listarTarefas = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM tarefas');

    if (req.headers.accept.includes('application/json')) {
      return res.status(200).json(result.rows);
    }

    // Aqui usamos a page3 como padrão para tarefas
    res.render('pages/page3', {
      title: 'Lista de Tarefas',
      tarefas: result.rows
    });

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao listar tarefas');
  }
};

// Editar uma tarefa
exports.editarTarefa = async (req, res) => {
  const { id } = req.params;
  const { nome, descricao, status } = req.body;

  const query = `
    UPDATE tarefas 
    SET nome = $1, descricao = $2, status = $3, updated_at = CURRENT_TIMESTAMP 
    WHERE id = $4 RETURNING *
  `;

  try {
    const result = await db.query(query, [nome, descricao, status, id]);

    if (result.rows.length === 0) {
      return res.status(404).send('Tarefa não encontrada');
    }

    if (req.headers.accept.includes('application/json')) {
      return res.status(200).json(result.rows[0]);
    }

    res.redirect('/tarefas');

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao editar tarefa');
  }
};

// Excluir uma tarefa
exports.excluirTarefa = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await db.query('DELETE FROM tarefas WHERE id = $1 RETURNING *', [id]);

    if (result.rows.length === 0) {
      return res.status(404).send('Tarefa não encontrada');
    }

    if (req.headers.accept.includes('application/json')) {
      return res.status(200).json({ message: 'Tarefa excluída com sucesso' });
    }

    res.redirect('/tarefas');

  } catch (err) {
    console.error(err);
    res.status(500).send('Erro ao excluir tarefa');
  }
};
