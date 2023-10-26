const express = require('express');
const app = express();
const pool = require('./conexao')
app.use(express.json());

app.get('/', async (req, res) => {
  try {
    const resultado = await pool.query('select * from empresas');
    return res.json(resultado)
  } catch (error) {
    console.log(error.message)
  }
});

app.listen(3000, () => {
  console.log("Sua Api está rodando na porta 3000")
});