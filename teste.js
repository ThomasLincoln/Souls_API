import dotenv from 'dotenv'
dotenv.config();
import mysql from 'mysql2/promise'
const connection = mysql.createConnection(process.env.DATABASE_URL)
console.log('Connected to PlanetScale!')
