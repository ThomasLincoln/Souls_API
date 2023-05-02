import { dropArmor } from "../tables/armorTable.js";
import { createArmor } from "../tables/armorTable.js";
import { insertArmor } from "../tables/armorTable.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const ItensToUpgrade = [
    {
        "Item01":"Cannot be reinforced."
    }
  ];
  
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
        "Curse": 54
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
        "Curse": 54
    },
  ]
  
  
  const itens = [], defesas = [];
  
  for (const objeto of ItensToUpgrade) {
    itens.push(JSON.stringify(objeto));
  }
  
  for (const objeto of Defense) {
    defesas.push(JSON.stringify(objeto));
  }
  

const armors = [
  {
    Name: "BRACELET OF THE GREAT LORD",
    InGameDescription: "Bracelet of Gwyn, Lord of Cinder, who linked the First Flame. Lord Gwyn, bearer of the ultimate soul, divided that power among his clan before linking the flame. When he departed, he left only with his greatsword, his garb, and the crown, now bereft of power.",
    Image: "https://static.wikia.nocookie.net/darksouls/images/3/33/Bracelet_of_the_Great_Lord.png/revision/latest?cb=20120929092902",
    Availability: "Purchased from Domhnall of Zena for 20,000 souls after the player has defeated Gwyn, Lord of Cinder, and started a new game.",
    SetName: "Great Lord",
    ItensToUpgrade: itens[0],
    Defenses: defesas[0],
    Durability: 400,
    Weight: 2.8,
    PieceType: "Hands Armor"
  },
  {
    Name: "SIX-EYED HELM OF THE CHANNELERS",
    InGameDescription: "Helm of the Channelers, sorcerers that serve Seath the Scaleless. The six eyes arranged in two vertical columns compensate for Seath's lack of sight. The heaviest of protective gear for sorcerers, and imbued with magic.",
    Image: "https://static.wikia.nocookie.net/darksouls/images/e/e1/Six-Eyed_Helm_of_the_Channelers.png/revision/latest?cb=20121009030404",
    Availability: "Found in a chest near the end of The Duke's Archives.",
    SetName: "Channelers",
    ItensToUpgrade: itens[0],
    Defenses: defesas[0],
    Durability: 400,
    Weight: 2.8,
    PieceType: "Hands Armor"
  },
];

const loadAndSaveData = async () => {
  try {
    await connection.query(dropArmor);
    console.log("Tabelas apagadas antes de enviar elas");

    await connection.query(createArmor);
    console.log("Criada tabela de Armor");

    await connection.query(insertArmor, [armors.map((u) => Object.values(u))]);
    console.log("Dados enviados para Armor");
  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
