export const dropItems = "DROP TABLE IF EXISTS items";
export const insertItems =
  "INSERT INTO items (Name, Image, InGameDescription, Type, Localization, Usage) VALUES ?";

export const createItems = `CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    Name VARCHAR(250),
    Image VARCHAR(250),
    InGameDescription VARCHAR(250),
    Type VARCHAR(250),
    Localization JSON,
    Usage JSON
  )`;