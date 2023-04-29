
export const dropUpgrades = 'DROP TABLE IF EXISTS upgrades';
export const insertUpgrades = 'INSERT INTO upgrades (name, upgrade, image, description, statusBuff, statusDebuff) VALUES ?'

export const createUpgrades = `CREATE TABLE upgrades (
    id INT NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY (id),
    name VARCHAR(250),
    upgrade VARCHAR(250),
    image VARCHAR(250),
    description VARCHAR(250),
    statusBuff VARCHAR(250),
    statusDebuff VARCHAR(250)
)`;