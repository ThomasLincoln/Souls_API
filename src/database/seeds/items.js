import { dropItems } from "../tables/itemsTable.js";
import { createItems } from "../tables/itemsTable.js";
import { insertItems } from "../tables/itemsTable.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const Localizacao = [
  {
    "Location1":
      "Found in the Tomb of the Giants, before the first bonfire, on a petrified blacksmith. In a square hole, guarded by six Giant Skeletons; can be dangerous due to the lack of light and cramped quarters. Probably the easiest way to get the ember is to just run past the skeletons and make a beeline for the ember.",
  },
  {
    "Location1":
      "Found in the maze-like well portion of the Painted World of Ariamis.",
  },
];

const Uso = [
    {
    "Usage 1": 
    "Giving the Large Divine Ember to Andre of Astora allows him to further ascend divine weapons from +5 to +6, allowing for further divine weapon reinforcement from +6 to +10 (the highest).",
    },
    {
    "Usage 1": 
    "Opens the Annex in the Painted World of Ariamis",
    }
  ];

const LocSTRING = JSON.stringify(Localizacao[0]);
const UsaSTRING = JSON.stringify(Uso[0]);
const Loc2STRING = JSON.stringify(Localizacao[0]);
const Usa2STRING = JSON.stringify(Uso[0]);

// REQUIREMENDS
const items = [
  {
    Name: "LARGE DIVINE EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/f/f3/Large_Divine_Ember.png/revision/latest?cb=20120827021347",
    InGameDescription:
      "Ember required for weapon ascension. Large divine ember, of secret church rites. Intended for select divine blacksmiths. Ascends +5 divine weapon. Allows reinforcement to +10, on par with the very weapons of the Gods.",
    Type: "Ember",
    Localization: LocSTRING,
    Usage: UsaSTRING,
  },
  {
    Name: "ANNEX KEY",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/44/Annex_Key.png/revision/latest?cb=20120901100558",
    InGameDescription:
      "Key to the annex in the Painted World of Ariamis. In the wintery painted world, there is a structure resembling an old cathedral; its annex serves as a type of storehouse.",
    Type: "Key Item",
    Localization: LocSTRING,
    Usage: UsaSTRING,
  },
];

const loadAndSaveData = async () => {
  try {
    await connection.query(dropItems);
    console.log("Tabelas apagadas antes de enviar elas");

    await connection.query(createItems);
    console.log("Criada tabela de Items");

    await connection.query(insertItems, [items.map((u) => Object.values(u))]);
    console.log("Dados enviados para Upgradres");
  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
