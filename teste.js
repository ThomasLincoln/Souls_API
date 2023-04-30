export const dropWeaponsItems = 'DROP TABLE IF EXISTS weapons_items';
export const insertWeaponsItems = 'INSERT INTO weapons_items (weapon_id, item_id) VALUES ?';

export const createWeaponsItems = `CREATE TABLE weapon_items (
    weapon_id INT,
    item_id INT,
    PRIMARY KEY (weapon_id, item_id),
    FOREIGN KEY (weapon_id) REFERENCES weapons(id),
    FOREIGN KEY (item_id) REFERENCES items(id)
  );`;


