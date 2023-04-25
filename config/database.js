const url = require('url');
require('dotenv').config();
const { Sequelize } = require('sequelize');



const dbUrl = process.env.DATABASE_URL;
const dbConfig = url.parse(dbUrl);

console.log(dbConfig)

module.exports = {
    dialect: 'mysql',
    host: process.env.host,
    port: 3306,
    username: process.env.username,
    password: process.env.password,
    database: process.env.database,
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  
    dialectOptions: {
      timezone: 'America/Sao_Paulo',
      ssl: {
        rejectUnauthorized: true
      },
    },
  
    timezone: 'America/Sao_Paulo',
  };
  

