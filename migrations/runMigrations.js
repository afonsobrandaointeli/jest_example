// migrate_and_seed.js

const { Pool } = require('pg');

// Carrega variáveis de ambiente, se desejar
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER || 'postgres',
  host: process.env.PG_HOST || 'localhost',
  database: process.env.PG_DATABASE || 'motivation',
  password: process.env.PG_PASSWORD || 'example',
  port: process.env.PG_PORT ? parseInt(process.env.PG_PORT) : 5432,
});

const runMigrationAndSeed = async () => {
  const client = await pool.connect();
  try {
    // MIGRATION: Criação da tabela
    await client.query(`
      CREATE TABLE IF NOT EXISTS phrases (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        author VARCHAR(100) NOT NULL,
        created_at TIMESTAMP DEFAULT NOW()
      );
    `);

    // SEED: Inserção de frases motivacionais
    await client.query(`
      INSERT INTO phrases (text, author) VALUES
        ('Every accomplishment starts with the decision to try', 'Gail Devers'),
        ('The only way to do great work is to love what you do', 'Steve Jobs'),
        ('Success is not final, failure is not fatal: it is the courage to continue that counts', 'Winston Churchill'),
        ('Don''t watch the clock; do what it does. Keep going', 'Sam Levenson'),
        ('The future belongs to those who believe in the beauty of their dreams', 'Eleanor Roosevelt'),
        ('You are never too old to set another goal or to dream a new dream', 'C.S. Lewis'),
        ('Act as if what you do makes a difference. It does', 'William James'),
        ('Positive anything is better than negative nothing', 'Elbert Hubbard'),
        ('Limit your ''always'' and your ''nevers''', 'Amy Poehler'),
        ('What you do makes a difference, and you have to decide what kind of difference you want to make', 'Jane Goodall')
      ON CONFLICT DO NOTHING;
    `);

    console.log('Migration and seed ran successfully!');
  } catch (err) {
    console.error('Error running migration and seed:', err);
  } finally {
    client.release();
    await pool.end();
  }
};

runMigrationAndSeed();