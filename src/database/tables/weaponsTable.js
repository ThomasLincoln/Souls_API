
export const dropWeapons = "DROP TABLE IF EXISTS weapons";
export const insertWeapons =
  "INSERT INTO weapons (Name, InGameDescription, Image, Type, AttackType, Enchantable, Special, Availability, Damage, Defense, Stability, Durability, Weight, Reqs, Bonus, ItensToUpgrade, Tips, Movesets) VALUES ?";


export const createWeapons = `CREATE TABLE weapons (
      id INT NOT NULL AUTO_INCREMENT, 
      PRIMARY KEY (id),
      Name VARCHAR(250),
      InGameDescription VARCHAR(250),
      Image VARCHAR(250),
      Type VARCHAR(250),
      AttackType VARCHAR(250),
      Enchantable BOOLEAN,
      Special BOOLEAN,
      Availability VARCHAR(250),
      Damage JSON,
      Defense JSON,
      Stability FLOAT,
      Durability FLOAT,
      Weight FLOAT,
      Reqs JSON,
      Bonus JSON,
      ItensToUpgrade JSON, 
      Tips JSON, 
      Movesets JSON
  )`;
