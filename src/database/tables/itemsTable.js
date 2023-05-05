export const dropItems = "DROP TABLE IF EXISTS items";
export const insertItems =
  "INSERT INTO items (Name, Image, InGameDescription, GeneralInformation, Type, Availability, Usage, Notes) VALUES ?";

export const createItems = `CREATE TABLE items (
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    Name VARCHAR(250),
    Image VARCHAR(250),
    InGameDescription VARCHAR(400),
    GeneralInformation VARCHAR (500),
    Type VARCHAR(250),
    Availability JSON,
    Usage JSON,
    Notes JSON
  )`;