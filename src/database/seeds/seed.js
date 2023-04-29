import axios from 'axios';
import { insertUpgrades, createUpgrades, dropUpgrades } from '../tables/sql.js';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

//Used to limit the amount of records that get saved in the DB. Set to undefined
//if you want to save all records
const MAX_RECORDS = 1000;

const characterIndexToWandIndex  = {};

const upgrade = [
    {
      name: 'Fireball',
      upgrade: 'Increased damage',
      image: 'fireball.png',
      description: 'Increases the damage of fireball spells',
      statusBuff: 'attack',
      statusDebuff: ''
    },
    {
      name: 'Healing potion',
      upgrade: 'Increased healing',
      image: 'healing-potion.png',
      description: 'Increases the amount of health restored by healing potions',
      statusBuff: 'health',
      statusDebuff: ''
    },
    {
      name: 'Dark curse',
      upgrade: 'Increased duration',
      image: 'dark-curse.png',
      description: 'Increases the duration of dark curses',
      statusBuff: '',
      statusDebuff: 'defense'
    }
  ];
  

const loadAndSaveData = async () => {
	try {
		//clear the existing records
		await connection.query(dropUpgrades);
		console.log('***dropped upgrades table***');

		await connection.query(createUpgrades);        
		console.log('***created upgrades table***');


		await connection.query(insertUpgrades, [upgrade.map(u => Object.values(u))]);
		console.log('***wands saved***');
    
	}catch(err){
		console.error(err);
	}
};


await loadAndSaveData();
process.exit(0);