import { dropWeapons } from "../tables/weaponsTable.js";
import { createWeapons } from "../tables/weaponsTable.js";
import { insertWeapons } from "../tables/weaponsTable.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const Damage = [
  {
    "Physical Damage": 585,
    "Magic Damage": 0,
    "Fire Damage": 0,
    "Lightning Damage": 0,
    "Critical Damage": 100
  },
  {
    "Physical Damage": 5800,
    "Magic Damage": 30,
    "Fire Damage": 10,
    "Lightning Damage": 50,
    "Critical Damage": 1400
  }
]



const Defense = [
  {
    "Physical Reduction": 70.0,
    "Magic Reduction": 10.0,
    "Fire Reduction": 50.0,
    "Lightning Reduction": 50.0,
    "Bleed Reduction": 55,
    "Poison": 55,
    "Toxic": 55,
    "Curse": 54
  },
  {
    "Physical Reduction": 40.0,
    "Magic Reduction": 10.0,
    "Fire Reduction": 30.0,
    "Lightning Reduction": 30.0,
    "Bleed Reduction": 0,
    "Poison": 0,
    "Toxic": 0,
    "Curse": 0
  }
]

const Reqs = [
  {
    "Strength": 50,
    "Dexterity": 10,
    "Intelligence": 0,
    "Faith": 0,
  }, 
  {
    "Strength": 32,
    "Dexterity": 18,
    "Intelligence": 0,
    "Faith": 0,
  }
]

const Bonus = [
  {
    "Strength": "",
    "Dexterity": "",
    "Intelligence": "",
    "Faith": "",
  },
  {
    "Strength": "D",
    "Dexterity": "E",
    "Intelligence": "",
    "Faith": "",
  }
]

const ItensToUpgrade = [
  {
    "Itens": "10x Dragon Scale",
    "Souls": 50000,
  },
  {
    "Itens": "10x Twinkling Titanite.",
    "Souls": 10000,
  }
]

const Tips = [
  {
    "Tip01": "Give to Frampt to receive 5000 souls.",
    "Tip02": "Special: Gives +20 Magic and +20 Fire resistance.",
    "Tip03": "Special: Two-handed R2 shoots a shock wave in a straight line along the ground, and will even travel up walls. Using this ability reduces the weapon durability by 50 points per use.",
    "Tip04": "Only 34 Strength is required to use it if held in both hands.",
    "Tip05": "The Dragon Greatsword, Black Knight Greatsword and Demon Great Machete are slower than the Greatsword and the Zweihander. Though they don't appear to be much slower, it is more difficult to stunlock enemies with the first three."
  },
  {
    "Tip01": "Give to Frampt to receive 100 souls.",
    "Tip02": "Uniquely, The Black Knight Halberd can outdamage  the Black Knight Greataxe and the Black Knight Sword at 40 strength and 40 dexterity.",
    "Tip03": "As with all heavy weapons, a plunging attack with the Black Knight Halberd is an effective way to kill the Taurus Demon and Asylum Demon.",
    "Tip04": 'The one-handed heavy attack seemingly strikes twice. The first "strike" however is not an attack and is a part of the wind-up leading to the actual strike. Uniquely, in Dark Souls 3 this was corrected and the first strike is considered a hit.',
    "Tip05": "The two-handed heavy attack has slightly shorter wind-up time to strike compared to the one-handed heavy attack.."
  }
]

const Moves = [
  {
    "One-handed Weak Attack": "Heavy swing with some starting and ending lag.",
    "One-handed Strong Attack": "Performs an over head slash.",
    "Two-handed Weak Attack": "Same as one-handed.",
    "Two-handed Strong Attack": "Releases a fast ranged attack; capable of interrupting casts; each charge uses 50 durability.",
    "Jump Attack": "Performs a jumping smash.",
    "Running Attack": "A quicker one-handed swing with less startup lag.",
    "Rolling Attack": "A slow thrusting jab.",
    "Kick": "Standard kick.",
    "Left-handed Weak Attack": "A block.",
    "Left-handed Strong Attack": "Same as right-handed weak attack.",
  },
  {
    "One-handed Weak Attack": "Overhead smash followed by a horizontal slash from left to right.",
    "One-handed Strong Attack": "The player spins the halberd around themselves 2 times, hitting on the second spin.",
    "Two-handed Weak Attack": "Same as one-handed.",
    "Two-handed Strong Attack": "The player runs a few steps forward, jumps and smashes the halberd down into the ground.",
    "Jump Attack": "The player jumps into the air and smashes the halberd into the ground.",
    "Running Attack": "Smashes the halberd into the ground.",
    "Rolling Attack": "	Horizontal slash.",
    "Kick": "Standard kick.",
    "Left-handed Weak Attack": "Block with weapon.",
    "Left-handed Strong Attack": "Horizontal slash.",
  }
]


const damages = [], defenses = [], reqs = [], bonus = [], items = [], tips = [], moves = [];

for (const objeto of Damage) {
  damages.push(JSON.stringify(objeto));
}


for (const objeto of Defense) {
  defenses.push(JSON.stringify(objeto));
}

for (const objeto of Reqs) {
  reqs.push(JSON.stringify(objeto));
}

for (const objeto of Bonus) {
  bonus.push(JSON.stringify(objeto));
}

for (const objeto of ItensToUpgrade) {
  items.push(JSON.stringify(objeto));
}


for (const objeto of Tips) {
  tips.push(JSON.stringify(objeto));
}

for (const objeto of Moves) {
  moves.push(JSON.stringify(objeto));
}



const Weapons = [
  {
    Name: "DRAGON GREATSWORD",
    InGameDescription: "This sword, one of the rare dragon weapons, came from the tail of the stone dragon of Ash Lake, descendant of the ancient dragons. Its great mystical power will be unleashed when wielded with two hands.",
    Image: "https://static.wikia.nocookie.net/darksouls/images/7/73/Wpn_Dragon_Greatsword.png/revision/latest?cb=20120420024626",
    Type: "ultra greatsword",
    AttackType: "Regular",
    Enchantable: false,
    Special: true,
    Availability: "Obtained by cutting off the Everlasting Dragon's Tail in Ash Lake.",
    Damage: damages[0],
    Defense: defenses[0],
    Stability: 44,
    Durability: 400,
    Weight: 24.0,
    Reqs: reqs[0],
    Bonus: bonus[0],
    ItensToUpgrade: items[0],
    Tips: tips[0],
    Movesets: moves[0]
  },
  {
    Name: "BLACK KNIGHT HALBERD",
    InGameDescription: "Halberd of the black knights who wander Lordran. Used to face chaos demons. The large motion that puts the weight of the body into the attack reflects the great size of their adversaries long ago.",
    Image: "https://static.wikia.nocookie.net/darksouls/images/5/5a/Wpn_Black_Knight_Halberd.png/revision/latest?cb=20120403084851",
    Type: "halberd",
    AttackType: "Slash",
    Enchantable: false,
    Special: false,
    Availability: "Drops from The Black Knight, specifically the Halberd Knight. (20% chance - Undead Burg, Undead Parish, Darkroot Basin, The Catacombs, Northern Undead Asylum, Tomb of Giants and Kiln of the First Flame)",
    Damage: damages[1],
    Defense: defenses[1],
    Stability: 26,
    Durability: 300,
    Weight: 14.0,
    Reqs: reqs[1],
    Bonus: bonus[1],
    ItensToUpgrade: items[1],
    Tips: tips[1],
    Movesets: reqs[1]
  }
];



const loadAndSaveData = async () => {
  try {
    await connection.query(dropWeapons);
    console.log("Tabelas apagadas antes de enviar elas");
    
    await connection.query(createWeapons);
    console.log("Criada tabela de Weapons");

    await connection.query(insertWeapons, [Weapons.map((u) => Object.values(u))]);
    console.log("Dados enviados para Upgradres");

  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
