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
// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/:id', async (req, res) => {
//   const {id} = req.params;
//   try {
//     const query = `update empresas set site = $1 where id = $2`;
//     const params = ['ww.cackewalk.com', 1];

//     const resultado = await pool.query(query, params);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });

//join
// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/', async (req, res) => {
//   try {
//     const query = `select e.id as empresaId, f.id as filialId, e.nome, f.pais, p.nome as funcionario 
//     from empresas e 
//     join filiais f on e.id = f.empresa_id 
//     join pessoas p on e.id = p.empresa_id 
//     ;`;

//     const resultado = await pool.query(query);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });


//left and right join
// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/', async (req, res) => {
//   try {
//     // const query = `
//     // select e.id as empresaId, f.id as filialId, e.nome, f.pais
//     // from empresas e left
//     // join filiais f on e.id = f.empresa_id 
//     // ;`;

//     const query = `    
//     select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e right
//     join filiais f on e.id = f.empresa_id 
//     ;`;

//     const resultado = await pool.query(query);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });

//full join
// const express = require('express');
// const app = express();
// const pool = require('./conexao');

// app.use(express.json());

// app.get('/', async (req, res) => {
//   try {
//     const query = `    
//     select e.id as empresaId, f.id as filialId, e.nome, f.pais from empresas e full join filiais f on e.id = f.empresa_id ;
//     `;

//     const resultado = await pool.query(query);
//     return res.json(resultado.rows);
//   } catch (error) {
//     console.log(error.message);
//   }
// });

// app.listen(3000, () => {
//   console.log("Sua Api está rodando na porta 3000");
// });


//paginação

const express = require('express');
const app = express();
const pool = require('./conexao');

app.use(express.json());

app.get('/', async (req, res) => {
  const { pagina, porPagina } = req.query;
  try {
    const query = `    
    SELECT * FROM pessoas ORDER BY id 
    ASC LIMIT $1 OFFSET $2;
    `;

    const {rowCount} = await pool.query(`select * from pessoas`)

    const offset = pagina === 1 ? 0 : (pagina - 1) * porPagina

    const resultado = await pool.query(query, [porPagina, offset]);
    const result = {
      pagina,
      porPagina,
      total: rowCount,
      registros: resultado.rows,
    }
    return res.json(result);
  } catch (error) {
    console.log(error.message);
  }
});

app.listen(3000, () => {
  console.log("Sua Api está rodando na porta 3000");
});





//passar na url http://localhost:3000/1 or 1=1 ao invez de trazer o 1 ele traz todos, isso é um  ataque de sql injection 