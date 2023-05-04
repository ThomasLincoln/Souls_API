import express from "express";
import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);
const app = express();

app.get("/items/", async (req, res) => {
  const { id, name, type } = req.query;

  let query = "SELECT * FROM items";
  const params = [];

  if (id) {
    query += " WHERE id = ?";
    params.push(id);
  }

  if (name) {
    if (params.length) {
      query += " AND Name = ?";
    } else {
      query += " WHERE Name = ?";
    }
    params.push(name);
  }

  if (type) {
    if (params.length) {
      query += " AND type = ?";
    } else {
      query += " WHERE type = ?";
    }
    params.push(type);
  }

  const [rows] = await connection.query(query, [params]);

  if (!rows.length) {
    return res.json({ msg: "Couldn't find that Item" });
  }

  res.json(rows);
});

app.get("/teste/", async (req, res) => {
  const { id, name } = req.query; // recuperando os valores dos parâmetros
  console.log(typeof(id))
  console.log(`id: ${id}, name: ${name}`);
  res.json([id, name]);
});

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.listen(3001, () => {
  console.log("App is running");
});
