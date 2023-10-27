const express = require('express');
const app = express();
const pool = require('./conexao');

app.use(express.json());

app.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const resultado = await pool.query(`select * from empresas where id = ${id}`);
    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("Sua Api está rodando na porta 3000");
});

//passar na url http://localhost:3000/1 or 1=1 ao invez de trazer o 1 ele traz todos, isso é um  ataque de sql injection 