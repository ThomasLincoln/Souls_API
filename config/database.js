import dotenv from 'dotenv';
import url from 'url';
import { Sequelize } from 'sequelize';
dotenv.config();


const dbName = process.env.database;
const dbUser = process.env.username;
const dbHost = process.env.host;
const dbPassword = process.env.password;

const sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  dialect: "mysql", //informar o tipo de banco que vamos utilizar
  host: dbHost, //o host, neste caso estamos com um banco local
  port: 3306,
  username: dbUser,
  password: dbPassword,
  database: dbName,
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
});


export default sequelize; //exportar