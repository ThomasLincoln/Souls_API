export const dropArmor = "DROP TABLE IF EXISTS Armor";
export const insertArmor =
  "INSERT INTO Armor (Name, InGameDescription, Image, Availability, SetName, ItensToUpgrade, Defenses, Durability, Weight, PieceType) VALUES ?";

export const createArmor = `CREATE TABLE Armor (
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id),
    Name VARCHAR(250),
    InGameDescription VARCHAR(400),
    Image VARCHAR(200),
    Availability VARCHAR(400),
    SetName VARCHAR(250),
    ItensToUpgrade JSON,
    Defenses JSON,
    Durability INT,
    Weight FLOAT,
    PieceType VARCHAR(100)
)`;