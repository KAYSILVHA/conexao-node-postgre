// com id

// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/:id', async (req, res) => {
//   const {id} = req.params;
//   try {
//     const query = `select * from empresas where id = $1`;
//     const params = [id];

//     const resultado = await pool.query(query, params);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });

// //passar na url http://localhost:3000/1 or 1=1 ao invez de trazer o 1 ele traz todos, isso é um  ataque de sql injection 

//dois parametros com nomes
// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/:id', async (req, res) => {
//   const {id} = req.params;
//   try {
//     const query = `select * from empresas where nome = $1 or nome = $2`;
//     const params = ['Google', 'Facebook'];

//     const resultado = await pool.query(query, params);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });

//fazendo update
const express = require('express');
const app = express();
const pool = require('./conexao');

app.use(express.json());

app.get('/:id', async (req, res) => {
  const {id} = req.params;
  try {
    const query = `update empresas set site = $1 where id = $2`;
    const params = ['ww.cackewalk.com', 1];

    const resultado = await pool.query(query, params);
    return res.json(resultado.rows);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("Sua Api está rodando na porta 3000");
});

//passar na url http://localhost:3000/1 or 1=1 ao invez de trazer o 1 ele traz todos, isso é um  ataque de sql injection 