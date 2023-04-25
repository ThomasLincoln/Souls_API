const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const url = require('url');


const app = express();

// Configurar rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Estabelecer conexão com o banco de dados
const connection = mysql.createConnection(process.env.DATABASE_URL);
console.log('Connected to PlanetScale!');

connection.query('SHOW TABLES;', (error, results) => {
  if (error) {
    console.log(error);
    connection.end();
    return;
  }

  console.log('Tables:');
  console.log(results);
});

// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);

});
