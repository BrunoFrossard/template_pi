require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  ssl: {
    rejectUnauthorized: false,
  },
});

pool.on('connect', () => {
  console.log('Conectado ao banco de dados PostgreSQL no Supabase');
});

pool.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err.message);
});

module.exports = pool;
