const { error } = require('console');
const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();
const url = require('url');
const app = express();
const connection = mysql.createConnection(process.env.DATABASE_URL);





// Configurar rotas
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/teste', async (req,res)=>{
    connection.query('select * from teste; ' ,(error, results) =>{
        if (error) {
            console.log(error);
            connection.end();
            return;
          }
          
        console.log('Tables:');
        console.log(results);
        res.json(results)
    })
})



// Iniciar servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}.`);

});
