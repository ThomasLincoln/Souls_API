import { dropItems } from "../tables/itemsTable.js";
import { createItems } from "../tables/itemsTable.js";
import { insertItems } from "../tables/itemsTable.js";
import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const connection = await mysql.createConnection(process.env.DATABASE_URL);

const Localizacao = [
  {
    "Availability":
      "Found in the Demon Ruins, behind the seven Taurus Demons, in a pool of lava (even if Ceaseless Discharge is defeated). Wearing the Orange Charred Ring while attempting to obtain it is almost necessary due to the high damage lava inflicts when not wearing said ring; however, it is possible to reach it without the Orange Charred Ring. Flash Sweat and high hit points helps.",
  },


  {
    "Availability":
      "The Crystal Ember is found in The Duke's Archives, in the small library near the entrance to the Crystal Garden. It is found in the same room where the entrance to the Crystal Cave is located, in a chest in a small alcove on the right side of the room from the entrance.",
  },
  {
    "Availability":
      "Found in the Painted World of Ariamis. It is located on the petrified corpse of a blacksmith, inside the Annex structure. The Annex Key is normally required to obtain it, although it's possible to reach it without the Annex Key by jumping onto the bridge with Velka's Rapier from a nearby ledge.",
  },
  {
    "Availability":
      "Found in Darkroot Garden, past the Moonlight Butterfly, on the petrified blacksmith.",
  },
  {
    "Availability":
      "Found late in the Darkroot Garden, in a chest guarded by two Mushroom Parents.",
  },
  {
    "Availability":
      "Found in the Tomb of the Giants, before the first bonfire, on a petrified blacksmith. In a square hole, guarded by six Giant Skeletons; can be dangerous due to the lack of light and cramped quarters. Probably the easiest way to get the ember is to just run past the skeletons and make a beeline for the ember.",
  },
  {
    "Availability":
      "The Large Ember is found in the Depths, in a chest behind the table with raw meat. It is guarded by the first Butcher, as well as an Attack Dog.",
  },

  {
    "Availability":
      "The Large Ember is found in the Depths, in a chest behind the table with raw meat. It is guarded by the first Butcher, as well as an Attack Dog.",
  },
  {
    "Availability":
      "In the Demon Ruins, past the second bonfire. Walk down the stairs leading to the Demon Firesage, but turn left instead of going forward at the intersection, and follow the path to the end, where the Large Flame Ember waits in a box. The way there is blocked by some Demonic Statues, as well as three Taurus Demons and some ambushing Burrowing Rockworms that surround the player immediately before reaching the chest. They will not attack the player as long as the player stays in the middle.",
  },
  {
    "Availability":
      "Found in The Duke's Archives, after encountering Seath the Scaleless in the Crystal Cave. Found in the center of the room where the player first encounters Seath, in a chest.",
  },
  {
    "Availability":
      "Found in the New Londo Ruins, after the water level is lowered. Easily accessed via the first elevator shortcut, the one nearest to the ruin's entrance. Directly next to the elevator's bottom doorway lies a second identical archway leading to a narrow staircase. By following the narrow path up all the way around the room's perimeter, a second staircase leads to the room containing the item's chest.",
  },
  {
    "Availability":
      "Found in the maze-like well portion of the Painted World of Ariamis.",
  },
  {
    "Availability":
      "Can be found on a corpse in the prison Tower of The Duke's Archives. Drop down from the third cell to the fourth to find it.",
  },
  {
    "Availability":
      "Dropped by the Serpent Soldier guarding the player's cell in The Duke's Archives tower.",
  },
  {
    "Availability":
      "In the chest behind the gramophone, guarded by two Serpent Soldiers and a Serpent Mage.",
  },
  {
    "Availability":
      "In a chest in the room close to the exit from the Duke's Archives, leading to Crystal Cave.",
      
  },
  {
    "Availability":
      "Sold by Andre of Astora for 2,000 souls.",
      
  },
];

const Uso = [
    {
    "Usage": 
    "Give it to Blacksmith Vamos to modify +5 Fire weapons to the Chaos path.",
    },
    {
    "Usage": 
    "Give it to the Giant Blacksmith to ascend +10 Normal weapons to Crystal weapons.",
    },
    {
      "Usage": "Given to Blacksmith Andre to modify +5 Divine weapons into Occult weapons and can be given to Andre at any time."
    },
    {
      "Usage": "Given to Blacksmith Andre to allow him to ascend a +5 standard weapon to a divine weapon. This divine weapon can then be upgraded to an additional +5."
    },
    {
      "Usage": "Give it to Rickert of Vinheim to ascend +5 Magic weapons into Enchanted weapons."
    },
    {
      "Usage": "Give to Blacksmith Andre, it will allow him to ascend a +5 Divine weapon to +10."
    },
    {
      "Usage": "Given to Blacksmith Andre to allow him to modify +5 normal weapons to +10 normal, and +5 raw."
    },
    {
      "Usage": "Given to Blacksmith Andre to allow him to modify +5 normal weapons to +10 normal, and +5 raw."
    },
    {
      "Usage": "Give the Ember to Blacksmith Vamos to ascend +5 Fire weapons to +10."
    },
    {
      "Usage": "Give to Rickert of Vinheim to ascend +5 Magic weapons into +10 Magic."
    },
    {
      "Usage": "Give to Blacksmith Andre to modify +10 standard weapons up to +15.",
      "Usage2":"Must give the Large Ember to Andre first, or he will not ask for the Very Large Ember."
    },
    {
      "Usage": "Opens Annex in Painted World of Ariamis. Access to Dark Ember."
    },
    {
      "Usage": "The Duke's Archives Tower. Opens the other cell doors in Archive Tower.",
      "Usage2": "Also opens second door in the Bonfire cell, and shortcut to gramophone."
    },
    {
      "Usage": "Opens bonfire cell in Archive Tower.",
      "Usage2": "Opens third cell-door down from bonfire cell. Access Archive Prison Extra Key by dropping down to the cell below."
    },
    {
      "Usage": "The Duke's Archives. Exit Archive Tower.",
      "Usage2": "Unlocks the large doors at the ledge above the ladder, at the top of the stairs."
    },
    {
      "Usage": "The Duke's Archives Tower. Opens cell behind Pisacas. Free Big Hat Logan and a Fire Keeper Soul.",
    },
    {
      "Usage": "Allows armor reinforcement at bonfires.",
    },
  ];


  const Notas = [
    {
    "Note1": 
    "Chaos weapons cannot be buffed.",
    "Note2":"Chaos weapons will inflict damage depending on your Humanity level (max at 10 Humanity). The Humanity scaling decreases exponentially: the first humanity is worth more damage than the tenth. Bear this in mind.",
    "Note3":"Chaos ascension also changes the fire damage to physical damage ratio; from 1:1 to approx 2:1.",
    "Note4":"Exploiting the Dark Hand's R2 attack can give you a lot of soft Humanity, if you're worried about using up your reserves.",
    },
    {
    "Note1": 
    "Chaos Crystal weapons cannot be repaired. Repair Powder is disabled and the Repair sorcery does not restore a crystal weapon's durability. The only way to repair a crystal weapon is to upgrade it. Upon upgrading, its durability is restored to maximum.",
    "Note2":"Crystal weapons cannot be downgraded.",
    "Note3":"The crystal equipment that Domnhall of Zena sells are not upgraded through the crystal path. They cannot be repaired, but have much higher durability.",
    "Note4":"In most cases, a crystal +4 weapon will have greater attack rating than a normal +15.",
    "Note5":"You can use the crystal halberd dropped by the first mimic in Anor Londo to obtain the Crystal Weapon trophy/achievement. Only 7 Titanite Chunks and 1 Titanite Slab are required to upgrade it to maximum.",
    "Note5":"It is recommended that when you ascend a weapon to crystal only max it for the trophy/achievement. Its durability will be reduced to 10% of its original value. It will break very fast and it cannot be repaired with anything at all. It is impossible to revert your weapons, so once you ascend a weapon to crystal there is no going back. The scaling on crystal weapons is good enough you don't need to exceed +4 for it to be better than a regular +15. It is advisable to use weapons that drop from enemies or that can be bought.",
    },
    {
      "Note1": 
      "It isn't the same thing as divine. Divine excels in fighting undead and things that have no soul anymore, like skeletons and such. Occult is a whole other type of reinforcement, it excels in fighting living things that have souls, like a lot of enemies in the game (especially Black Knights and Silver Knights, which take extra damage).",
      "Note2":"Note that NO extra damage is done by occult to invaders, hosts or phantoms in PvP.",
    },
    {
      "Note1": 
      "Divine weapons are effective against the Undead, such as the skeletons found in the Catacombs.",
      "Note2":"They can't reform themselves after being slain by a divine weapon.",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"When entering the area containing the Large Divine Ember, be prepared due to the 4 giant skeletons guarding the body and item. Be extra vigilant in this dangerous area.",
      "Note2":"One way to get the ember without killing any skeletons is by jumping across the gap where the ladder is located. This will allow circling the top of the pit containing the giant skeletons. Once above the ember, equip a Ring of Sacrifice drop down quickly grabbing the ember and then either dying or attempting to escape. You can also equip the Slumbering Dragoncrest Ring to move around the skeletons before they begin to attack you.",
      "Note3":"Lightly equipped characters with pyromancy spells or firebombs, it is possible after entering the giant coffin with the giant skeletons to run and jump over the gap described above, and running all the way to the end of the right side. This will aggro all of the skeletons into a group below you, and they will only very rarely be able to hit you. If you lock on and cast some pyromancy spells you can hit them all with the splash damage. The corners at the end of the room work best when attempting this maneuver. If necessary move back and forth along the ledge to re-aggro and get them into another group. You must be close to the edge while casting, being careful not to fall to a quick and certain death at the hands of the giant skeletons.",
      "Note4":"Before descending the first ladder leading into the tomb, equip the Ring of Fog and the Slumbering Dragoncrest Ring and unequip any lit items. Descend the ladders down to the floor of the tomb and lure the large skeletons one by one either by proximity or arrows.",
      "Note3":"If using a bow to shoot down upon the giant skeletons, they tend to bunch up directly underneath the ledge, where they are incapable of being hit. To lure them back out into the open, use the Aural Decoy spell.",
      
    },

    {
      "Note1":"",
    },
    {
      "Note1":"Fire upgrade weapons cannot be buffed. However, the Magic Shield and Strong Magic Shield sorceries can still be used to enchant fire upgrade shields.",
    },

    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"",
    },
    {
      "Note1":"Only needs to be bought once each playthrough.",
      "Note2":"You still need to use souls and titanite as you would if a Blacksmith did the reinforcement.",
      "Note3":"This item does not carry over to New Game Plus.",
    },
  ];


const location = [], usage = [], notes = [];

  
for (const objeto of Localizacao) {
  location.push(JSON.stringify(objeto));
}

for (const objeto of Uso) {
  usage.push(JSON.stringify(objeto));
}


for (const objeto of Notas) {
  notes.push(JSON.stringify(objeto));
}

const items = [
  {
    Name: "CHAOS FLAME EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/7/7d/Chaos_Flame_Ember.png/revision/latest?cb=20120807234627",
    InGameDescription:
      "Ember required for weapon ascension. Chaos Flame Ember is an art of the lost city of Izalith. Handled only by blacksmiths knowledgeable in ancient methods. Ascends +5 fire weapon to chaos weapon. (chaos weapon can be reinforced to +5) Chaos weapons are demon weapons augmented by humanity which inflict fire damage.",
    GeneralInformation: "The Chaos Flame Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[0],
    Usage: usage[0],
    Notes: notes[0],
  },
  {
    Name: "CRYSTAL EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/a6/Crystal_Ember.png/revision/latest?cb=20120808142347",
    InGameDescription:
      "Ember required for weapon ascension. Crystal ember created by Seath the Scaleless. Handled only by the giant God's blacksmiths. Ascends +10 standard wpn to crystal weapon. (crystal weapons can be reinforced to +5) Crystal weapons are powerful but brittle, and cannot be repaired once broken.",
    GeneralInformation:"The Crystal Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[1],
    Usage: usage[1],
    Notes: notes[1],
  },
  {
    Name: "DARK EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/6/6b/Dark_Ember.png/revision/latest?cb=20120815031741",
    InGameDescription:
      "Ember required for weapon ascension. The church long hid the forbidden black ember, and no living blacksmith knows of it. Ascends +5 divine weapon to occult weapon. (occult weapons can be reinforced to +5) Occult weapons were used to hunt the gods, and are effective against their following and kin.",
    GeneralInformation:"The Dark Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[2],
    Usage: usage[2],
    Notes: notes[2],
  },
  {
    Name: "DIVINE EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/3/32/Divine_Ember.png/revision/latest?cb=20120812150128",
    InGameDescription:
      "Ember required for weapon ascension. Divine embers are property of the church, and intended for divine blacksmiths. Ascends +5 standard wpn to divine weapon. (divine weapon can be reinforced to +5) Divine weapons are for Undead hunting. Use against Undead and the pawns of necromancers.",
    GeneralInformation:"The Divine Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[3],
    Usage: usage[3],
    Notes: notes[3],
  },
  {
    Name: "ENCHANTED EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/c/c1/Enchanted_Ember.png/revision/latest?cb=20120815124442",
    InGameDescription:
      "Ember required for weapon ascension. This enchanted ember, a form of sorcery, is a vestige of the lost land of Oolacile. Ascends +5 magic wpn to enchanted weapon (enchanted weapon can be magic reinforced to +5). The sorcerer's enchanted weapon that inflicts magic damage and is boosted by intelligence.",
    GeneralInformation:"The Enchanted Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[4],
    Usage: usage[4],
    Notes: notes[4],
  },
  {
    Name: "LARGE DIVINE EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/f/f3/Large_Divine_Ember.png/revision/latest?cb=20120827021347",
    InGameDescription:
      "Ember required for weapon ascension. Large divine ember, of secret church rites. Intended for select divine blacksmiths. Ascends +5 divine weapon. Allows reinforcement to +10, on par with the very weapons of the Gods.",
    GeneralInformation:"The Large Divine Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[5],
    Usage: usage[5],
    Notes: notes[5],
  },
  {
    Name: "LARGE DIVINE EMBER",
    Image:
      "https://static.wikia.nocookie.net/darksouls/images/f/f3/Large_Divine_Ember.png/revision/latest?cb=20120827021347",
    InGameDescription:
      "Ember required for weapon ascension. Large divine ember, of secret church rites. Intended for select divine blacksmiths. Ascends +5 divine weapon. Allows reinforcement to +10, on par with the very weapons of the Gods.",
    GeneralInformation:"The Large Ember is an Ember in Dark Souls.",
    Type: "Ember",
    Availability: location[6],
    Usage: usage[6],
    Notes: notes[6],
  },

  {
    Name: "LARGE FLAME EMBER",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/7/78/Large_Flame_Ember.png/revision/latest?cb=20120806185050",

    InGameDescription:
      "Ember required for weapon ascension. Large flame ember used in ancient rites. Handled only by blacksmiths knowledgeable in ancient methods. Ascends +5 fire weapon. Allows reinforcement to +10, the most powerful level for fire weapons.",

    GeneralInformation:"The Large Flame Ember is an Ember in Dark Souls.",

    Type: "Ember",

    Availability: location[7],

    Usage: usage[7],

    Notes: notes[7],
  },
  {
    Name: "LARGE MAGIC EMBER",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/08/Large_Magic_Ember.png/revision/latest?cb=20120812153547",

    InGameDescription:
      "Ember required for weapon ascension. Large magic ember, a form of sorcery. handled only by the Vinheim blacksmiths. Ascends +5 magic weapons. Allows reinforcement to +10, the most powerful level for magic weapons.",

    GeneralInformation:"The Large Magic Ember is an Ember in Dark Souls.",

    Type: "Ember",

    Availability: location[8],

    Usage: usage[8],

    Notes: notes[8],
  },
  {
    Name: "VERY LARGE EMBER",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/d/d4/Very_Large_Ember.png/revision/latest?cb=20120806184555",

    InGameDescription:
      "Ember required for weapon ascension. Huge ember of highest quality. Handled by the blacksmiths of Astora.Ascension for +10 standard weapon. Allows reinforcement to +15, on par with the greatest weapons of legend.",

    GeneralInformation:"The Very Large Ember is an Ember in Dark Souls.",

    Type: "Ember",

    Availability: location[9],

    Usage: usage[9],

    Notes: notes[9],
  },

    {
    Name: "ANNEX KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/44/Annex_Key.png/revision/latest?cb=20120901100558",

    InGameDescription:
      "Key to the annex in the Painted World of Ariamis. In the wintery painted world, there is a structure resembling an old cathedral; its annex serves as a type of storehouse.",

    GeneralInformation:"The Annex Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[10],

    Usage: usage[10],

    Notes: notes[10],
  },
  {
    Name: "ARCHIVE PRISON EXTRA KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/8/84/Archive_Prison_Extra_Key.png/revision/latest?cb=20120901100559",

    InGameDescription:
      "Extra key to a cell in the Duke's Archive Tower. Perhaps the serpent men were careless, for there are several keys scattered about which fit Archive Tower cells.",

    GeneralInformation:"The Archive Prison Extra Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[11],

    Usage: usage[11],

    Notes: notes[11],
  },
  {
    Name: "ARCHIVE TOWER CELL KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/d/d8/Archive_Tower_Cell_Key.png/revision/latest?cb=20120901100559",

    InGameDescription:
      `Key to the cell of the Duke's Archive Tower. The Archive Tower, once a trove of precious tomes and letters, became a prison after the onset of Seath's madness. The serpent men who guard the prison know not the value of what they hide. In the basement of the tower are the writhing "mistakes" of the terrifying experiments which were conducted there.`,

    GeneralInformation:"The Archive Tower Cell Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[12],

    Usage: usage[12],

    Notes: notes[12],
  },

  {
    Name: "ARCHIVE TOWER GIANT DOOR KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/9/9c/Archive_Tower_Giant_Door_Key.png/revision/latest?cb=20120901100559",

    InGameDescription:
      `Key to the giant door leading out from the uppermost floor of Archive Tower, which now serves as a prison. The key's design resembles not the key of a prison; indeed, the tower was once no prison at all, but a trove of precious tomes.`,

    GeneralInformation:"The Archive Tower Giant Door Key, not to be confused with Archive Tower Giant Cell Key is a key item in Dark Souls.",

    Type: "Key",

    Availability: location[13],

    Usage: usage[13],

    Notes: notes[13],
  },

  {
    Name: "ARCHIVE TOWER GIANT CELL KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/2/2a/Archive_Tower_Giant_Cell_Key.png/revision/latest?cb=20120901100559",

    InGameDescription:
      `Key to the giant cell below the Duke's Archives Tower. The giant cell once imprisoned countless maidens, but is now empty, save for a few key persons. They struggle to uphold their sanity, as the horde of "mistakes" writhe at a fearfully close proximity.`,

    GeneralInformation:"The Archive Tower Giant Cell Key is a key item in Dark Souls.",

    Type: "Key",

    Availability: location[14],

    Usage: usage[14],

    Notes: notes[14],
  },
  {
    Name: "ARMOR SMITHBOX",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/04/Armor_Smithbox.png/revision/latest?cb=20121201041311",

    InGameDescription:
      `Tool used to etch titanite into armor for reinforcement. Rest at a bonfire to make armor reinforcement possible.`,

    GeneralInformation:"The Armor Smithbox is an armor modification tool in Dark Souls.",

    Type: "Key",

    Availability: location[15],

    Usage: usage[15],

    Notes: notes[15],
  },
];

const loadAndSaveData = async () => {
  try {
    await connection.query(dropItems);
    console.log("Tabelas apagadas antes de enviar elas");

    await connection.query(createItems);
    console.log("Criada tabela de Items");

    await connection.query(insertItems, [items.map((u) => Object.values(u))]);
    console.log("Dados enviados para Upgradres");
  } catch (err) {
    console.error(err);
  }
};

await loadAndSaveData();
process.exit(0);
