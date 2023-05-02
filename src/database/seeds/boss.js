import { dropBosses } from "../tables/bossTable.js";
import { createBosses } from "../tables/bossTable.js";
import { insertBosses } from "../tables/bossTable.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const Defense = [
  {
    "Regular Defense": 15.0,
    "Strike Defense": 10.0,
    "Slash Defense": 50.0,
    "Thrust Defense": 50.0,
    "Magic Defense": 55,
    "Fire Defense": 55,
    "Lightning Defense": 55,
    "Poise": 55,
    "Bleed": 55,
    "Poison": 55,
    "Curse": 54,
  },
  {
    "Regular Defense": 20.0,
    "Strike Defense": 10.0,
    "Slash Defense": 50.0,
    "Thrust Defense": 50.0,
    "Magic Defense": 55,
    "Fire Defense": 55,
    "Lightning Defense": 55,
    "Poise": 55,
    "Bleed": 55,
    "Poison": 55,
    "Curse": 54,
  },
];

const Information = [
    {
      "Respawn": false,
      "Backstab": false,
      "Damage Types": ["Regular", "Fire", "Lightning"],
      "Thrust Defense": 50.0,
      "Magic Defense": 55,
      "Fire Defense": 55,
      "Lightning Defense": 55,
      "Poise": 55,
      "Bleed": 55,
      "Poison": 55,
      "Curse": 54,
    },
  ];

const defesas = [], info = [];

for (const objeto of Defense) {
  defesas.push(JSON.stringify(objeto));
}

for (const objeto of Information) {
    info.push(JSON.stringify(objeto));
  }

const armors = [
  {
    Name: "IRON GOLEM",
    Information: info[0],
    Image: "https://static.wikia.nocookie.net/darksouls/images/4/44/Gargoyle.png/revision/latest/scale-to-width-down/350?cb=20130715164337",
    Lore: " ",
    Location: defesas[0],
    Drops: defesas[0],
    Notes: defesas[0],
    Attacks: defesas[0],
    HP: 100,
  },
];

const loadAndSaveData = async () => {
  try {
    await connection.query(dropBosses);
    console.log("Tabelas apagadas antes de enviar elas");

    await connection.query(createBosses);
    console.log("Criada tabela de Armor");

    await connection.query(insertBosses, [armors.map((u) => Object.values(u))]);
    console.log("Dados enviados para Armor");
  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
