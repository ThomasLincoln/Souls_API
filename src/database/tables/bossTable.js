export const dropBosses = "DROP TABLE IF EXISTS boss";
export const insertBosses =
  "INSERT INTO boss (Name, Information, Image, Lore, Location, Drops, Notes, Attacks, HP) VALUES ?";
export const createBosses = `CREATE TABLE boss (
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