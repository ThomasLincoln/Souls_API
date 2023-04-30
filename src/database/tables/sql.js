
// TABELA UPGRADES

export const dropUpgrades = "DROP TABLE IF EXISTS upgrades";
export const insertUpgrades =
  "INSERT INTO upgrades (name, upgrade, image, description,Modifications,  statusBuff, statusDebuff, Availability, Requirements) VALUES ?";

export const createUpgrades = `CREATE TABLE upgrades (
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    name VARCHAR(250),
    upgrade VARCHAR(250),
    image VARCHAR(250),
    description VARCHAR(2000),
    Modifications VARCHAR (50),
    statusBuff VARCHAR(250),
    statusDebuff VARCHAR(250),
    Availability VARCHAR (2000),
    Requirements VARCHAR (700)
)`;















// TODO Organizar melhor isso depois


export const dropItems = "DROP TABLE IF EXISTS items";
export const insertItems =
  "INSERT INTO items (Name, Image, Lore, Type, Localization, Usage, Upgrade) VALUES ?";

export const createItems = `CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    Name VARCHAR(250),
    Image VARCHAR(250),
    Lore VARCHAR(250),
    Type VARCHAR(250),
    Localization JSON,
    Usage JSON,
    Upgrade VARCHAR(250)
  )`;

export const dropWeapons = "DROP TABLE IF EXISTS weapons";
export const insertWeapons =
  "INSERT INTO weapons (Name, Lore, Image, Type, AttackType, Enchantable, Special, Location, SetName, ItensToUpgrade, PhysicalDamage, MagicDamage, FireDamage, LightningDefense, PhysicalDefense, MagicDefense, FireDefense, LightningDamage, Stability, Durability, Weight, Reqs, StrBonus, DexBonus, IntBonus, FaithBonus) VALUES ?";

export const createWeapons = `CREATE TABLE weapons (
      id INT NOT NULL AUTO_INCREMENT, 
      PRIMARY KEY (id),
      Name VARCHAR(250),
      Lore VARCHAR(250),
      Image VARCHAR(250),
      Type VARCHAR(250),
      AttackType VARCHAR(250),
      Enchantable BOOLEAN,
      Special BOOLEAN,
      Location VARCHAR(250),
      SetName VARCHAR(250),
      Damage JSON,
      Defense JSON,
      Stability FLOAT,
      Durability FLOAT,
      Reqs JSON,
      Bonus JSON,
      ItensToUpgrade JSON
  )`;

export const dropArmor = "DROP TABLE IF EXISTS Armor";
export const insertArmor =
  "INSERT INTO Armor (Name, Lore, Image, Localization, SetName, ItensToUpgrade, Defenses, Resistances, Durability, Weight) VALUES ?";

export const createArmor = `CREATE TABLE Armors (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    Name VARCHAR(250),
    Lore VARCHAR(250),
    Image VARCHAR(250),
    Localization JSON,
    SetName VARCHAR(250),
    ItensToUpgrade JSON,
    Defenses JSON,
    Resistances JSON,
    Durability INT,
    Weight FLOAT
)`;

export const dropBosses = "DROP TABLE IF EXISTS bosses";
export const insertBosses =
  "INSERT INTO bosses (Name, Information, Image, Lore, Location, Drops, Notes, Attacks, HP) VALUES ?";
export const createBosses = `CREATE TABLE bosses (
      id INT NOT NULL AUTO_INCREMENT, 
      PRIMARY KEY (id),
      Name VARCHAR(250),
      Information JSON,
      Image VARCHAR(250),
      Lore VARCHAR(250),
      Location VARCHAR(250),
      Drops JSON,
      Notes JSON,
      Attacks JSON,
      HP INT
  )`;

export const dropNPCs = "DROP TABLE IF EXISTS npcs";
export const insertNPCs =
  "INSERT INTO npcs (Name, Information, Image, Lore, Lines, Encounters, Summonable, SummonPoints, Merchant, ItemsForSale, Drops, Equipment, Utilities, Notes) VALUES ?";
export const createNPCs = `CREATE TABLE npcs (
        id INT NOT NULL AUTO_INCREMENT, 
        PRIMARY KEY (id),
        Name VARCHAR(250),
        Information JSON,
        Image VARCHAR(250),
        Lore VARCHAR(250),
        Lines JSON,
        Encounters JSON,
        Summonable BOOLEAN,
        SummonPoints JSON,
        Merchant BOOLEAN,
        ItemsForSale JSON,
        Drops JSON,
        Equipment JSON,
        Utilities JSON,
        Notes JSON
    )`;

export const dropSpells = "DROP TABLE IF EXISTS spells";
export const insertSpells =
  "INSERT INTO spells (Name, Type, Subtype, SpellUses, SlotsUsed, Information, Image, Location, AcquiredFrom, Usage, Notes) VALUES ?";
export const createSpells = `CREATE TABLE spells (
      id INT NOT NULL AUTO_INCREMENT, 
      PRIMARY KEY (id),
      Name VARCHAR(250),
      Type VARCHAR(250),
      Subtype VARCHAR(250),
      SpellUses INT,
      SlotsUsed INT,
      Information JSON,
      Image VARCHAR(250),
      Location VARCHAR(250),
      AcquiredFrom JSON,
      Usage JSON,
      Notes JSON
  )`;


  export const dropEnemies = "DROP TABLE IF EXISTS enemies";
export const insertEnemies =
  "INSERT INTO enemies (Name, Information, Image, Type, Lore, Locations, Drops, Notes, Attacks, Defenses, Resistances, HP) VALUES ?";
export const createEnemies = `CREATE TABLE enemies (
      id INT NOT NULL AUTO_INCREMENT, 
      PRIMARY KEY (id),
      Name VARCHAR(250),
      Information JSON,
      Image VARCHAR(250),
      Type VARCHAR(250),
      Lore VARCHAR(250),
      Locations JSON,
      Drops JSON,
      Notes JSON,
      Attacks JSON,
      Defenses JSON,
      Resistances JSON,
      HP INT
  )`;
