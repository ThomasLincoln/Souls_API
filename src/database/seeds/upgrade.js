import { dropUpgrades, dropWeapons, dropArmor, dropBosses, dropEnemies, dropNPCs, dropSpells } from "../tables/upgrade.js";
import { createUpgrades, createWeapons, createArmor, createBosses, createEnemies, createNPCs, createSpells } from "../tables/upgrade.js";
import { insertUpgrades, insertWeapons } from "../tables/upgrade.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);


// REQUIREMENDS 


const StandardJSON = [{
  "Weapons": "Most weapons can be upgraded on the standard path, but not all. Standard upgrades cannot be performed on weapons which are by default bound to special paths, such as Unique or Dragon weapons, or on (former) standard weapons that have been ascended to another upgrade path. However, a blacksmith can downgrade some ascended weapons back to standard (souls and materials previously expended are permanently lost).",
  "Upgrade0To5": "9 Titanite Shards (1/1/2/2/3)",
  "Ascension5To6": "Large Ember",
  "Upgrade5To10": "9 Large Titanite Shards (1/1/2/2/3)",
  "Ascension10To11": "Very Large Ember",
  "Upgrade11To14": "7 Titanite Chunks (1/1/2/3)",
  "Upgrade14To15": "Titanite Slab."
},
{
  "Weapons": "standard weapon +5",
  "Upgrade0To5": "9 Titanite Shards (1/1/2/2/3)",
  "Ascension5To6": "Large Ember",
  "Upgrade5To10": "9 Large Titanite Shards (1/1/2/2/3)",
  "Ascension10To11": "Very Large Ember",
  "Upgrade11To14": "7 Titanite Chunks (1/1/2/3)",
  "Upgrade14To15": "Titanite Slab."
}, 
];

const StandardSTRING = JSON.stringify(StandardJSON[0])

const upgrade = [
  {
    name: "Chaos",
    upgrade: "Upgrade Chaos weapons from +0 to +5.",
    image: "https://static.wikia.nocookie.net/darksouls/images/4/4d/Upgrade_Path_Chaos.png/revision/latest?cb=20130513110231",
    description: "The Chaos path adds Fire Damage to a weapon, but removes all stat scaling bonuses. This makes it a good choice for lower levels. However, Chaos cannot be augmented. This, along with the lack of stat scaling, ultimately means that Chaos weapons have an inferior damage potential in the long run. Uniquely for weapon upgrade paths, the Chaos path scales with humanity (up to 10). At 10 humanity, Chaos weapons are superior to Fire weapons (and, indeed, nearly all the other weapon paths in terms of raw damage) that are upgraded to the same level. However, they are inferior if the player is lacking in liquid humanity. Compared with Lightning weapons, Chaos weapons with optimal humanity deal more damage against unprotected foes; however, as most enemies possess more Flame than Lightning Defense, Lightning weapons are often a better choice.",
    Modifications: "Fire Damage",
    statusBuff: "",
    statusDebuff: "",
    Availability: "Vamos gains the ability to ascend weapons down the Chaos path after receiving the Chaos Flame Ember. Creation of a Chaos weapon requires a +5 Fire weapon (which in turn requires a standard weapon +5), Red Titanite Chunks for upgrading to +4 and a Red Titanite Slab for upgrading to +5, as well as the requisite souls.",
    Requirements: "",  
  },
  {
    name: "Standard",
    upgrade: "Upgrade Regular weapons from +0 to +15.",
    image: "https://static.wikia.nocookie.net/darksouls/images/9/9f/Upgrade_Path_Standard.png/revision/latest?cb=20130513104257",
    description: "Standard upgrades improve the weapon's base damage as well as the scaling it receives from Strength and/or Dexterity, unlike Raw Upgrades. For Strength and Dexterity builds, standard upgrades are the best choice in the long run for this reason. Although the Crystal path technically creates weapons with greater damage output, crystal weapons cannot be repaired and are therefore only effective in the short term; normal weapons can be used indefinitely as long as they are repaired. All standard weapons (minus certain categories that are never enchantable, such as Bows and Crossbows) may be augmented.",
    Modifications: "",
    statusBuff: "STR/DEX",
    statusDebuff: "",
    Availability: "Intermediate standard upgrades (+0 to +5, +6 to +10, and +11 to +15) are available through all blacksmiths and the Weapon Smithbox item. Andre of Astora is the only blacksmith who has the ability to ascend standard items from +5 to +6 and from +10 to +11, after being given the Large Ember and the Very Large Ember, respectively.",
    Requirements: StandardSTRING,  
  },
];



const loadAndSaveData = async () => {
  try {
    await connection.query(dropUpgrades);
    // await connection.query(dropWeapons);
    // await connection.query(dropArmor);
    // await connection.query(dropBosses);
    // await connection.query(dropEnemies);
    // await connection.query(dropNPCs);
    // await connection.query(dropSpells);
    

    console.log("Tabelas apagadas antes de enviar elas");

    
    
    await connection.query(createUpgrades);
    console.log("Criada tabela de Upgrades");
    
    // await connection.query(createWeapons);
    // console.log("Criada tabela de Weapons");
    
    // await connection.query(createArmor);
    // console.log("Criada tabela de Armor");
    
    // await connection.query(createBosses);
    // console.log("Criada tabela de Bosses");
    
    // await connection.query(createEnemies);
    // console.log("Criada tabela de Enemies");
    
    // await connection.query(createNPCs);
    // console.log("Criada tabela de NPCs");
    
    // await connection.query(createSpells);
    // console.log("Criada tabela de Spells");

    await connection.query(insertUpgrades, [upgrade.map((u) => Object.values(u))]);
    console.log("Dados enviados para Upgradres");

  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
