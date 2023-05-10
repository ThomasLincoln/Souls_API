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
  {
    "Availability":
      "Can be found on a corpse down the stairs from the church in Undead Parish, near the lever that opens the portcullis back to the area with the Fang Boar.",
  },
  {
    "Availability":
      "Dropped by Asylum Demon, if killed on second encounter.",
    "Availability2": "Given by Oscar, Knight of Astora, if the Asylum Demon was killed on first encounter.",
    "Availability3": "Drops from Oscar of Astora. (Guaranteed - Northern Undead Asylum and Northern Undead Asylum Revisit)",
  },
  {
    "Availability":
      "The Blighttown Key is dropped by the Gaping Dragon upon defeat.",
  },
  {
    "Availability":
      "It can be purchased from Domhnall of Zena located in the Depths (until both bells are rung) for 1,000 souls. He can be found sitting between the way to the Gaping Dragon and the entrance to Blighttown.",
    "Availability2": "Since Patch 1.05, it can also be purchased from the Undead Male Merchant located in the Undead Burg for 1,000 souls.",
  },
  {
    "Availability":
      "Dropped by a respawning Crystal Golem located near the beginning of The Duke's Archives. The Golem will only drop the pendant if Dusk of Oolacile has been rescued from within the Golden Crystal Golem, which can be found in an alcove past the Hydra in Darkroot Basin.",
  },
  {
    "Availability":
      "At the bottom of the tower where the Crestfallen Merchant is, guarded by a Serpent Mage.",
  },
  {
    "Availability":
      "Found off a Mimic in Oolacile Township, shortly before fighting the Chained Prisoner. The player must jump off a wooden bridge to their left, onto a balcony.",
  },
  {
    "Availability":
    "Purchased from the blacksmith, Andre of Astora, for 20,000 souls.",
    "Availability2":
    "Andre of Astora drops the Crest of Artorias if it wasn't bought from him already.",
  },
  {
    "Availability":
      "On the corpse that is thrown down into the players cell by Oscar, Knight of Astora.",
  },
  {
    "Availability":
      "The Key to Depths is dropped by the Capra Demon found in the lower Undead Burg.",
  },
  {
    "Availability":
      "Found in a chest in Blighttown, close to the entrance to the Valley of Drakes.",
  },
  {
    "Availability":
      "Given by Ingward to the player after he/she obtains the Lordvessel. Killing Ingward will cause him to drop the key, regardless of whether or not the player has the Lordvessel.",
  },
  {
    "Availability":
    "Choose it as a starting gift.",
    "Availability2": 
    "Starting equipment for Thief.",
    "Availability3": "Purchase from Domhnall of Zena for 5,000 souls after he has relocated to the Firelink Shrine."

    
  },
  {
    "Availability":
      "In the area of Undead Parish with the sword wielding Hollows. It is down the stairs behind the Armored Tusk. The key is on a corpse near a ladder at the end of the room.",
  },
  {
    "Availability":
      "The Peculiar Doll can be found when revisiting the Undead Asylum (it cannot be found during the tutorial). It is located in the cell where the game began, guarded by a Black Knight.",
  },
  {
    "Availability":
    "Sold by the Undead Male Merchant for 3,000 souls.",
    "Availability2":
    "Sold by Andre of Astora for 2,000 souls.",
  },
  {
    "Availability":
    "Can be purchased from Undead Male Merchant for 1,000 souls.",
    "Availability2":
    "Drops from the Undead Male Merchant when killed if it was not already bought from him.",
  },
  {
    "Availability":
      "Found on a corpse in the Giant Undead Rat chamber of the Depths. Can also be looted, through the bars, from a tunnel that connects to the area where a Channeler is encountered.",
  },
  {
    "Availability":
      "Given by Oscar, Knight of Astora in the Undead Asylum after talking to him.",
  },
  {
    "Availability":
      "At Firelink Shrine, on the roof that is above Petrus of Thorolund. To reach the roof, the player must ride the elevator leading to Undead Parish and jump off at the opening just above the Firelink Shrine entrance. After this, walk out on the right cliff and jump or roll onto the nearby pillar and walk into the building it is connected to, then the player can drop from there onto the roof to get the key.",
  },
  {
    "Availability":
      "After defeating the Moonlight Butterfly in Darkroot Garden, this key is found on the body of the dead blacksmith, along with the Divine Ember.",
  },
  {
    "Availability":
      "Andre of Astora sells the Weapon Smithbox for 2,000 souls.",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
  },
  {
    "Availability":
      "lorem",
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
    {
      "Usage": "Undead Burg. Unlocks the small door at the start of the Hellkite bridge.",
    },
    {
      "Usage": "It it used to open the locked door guarded by the Asylum Demon, which lets you exit the Northern Undead Asylum.",
    },
    {
      "Usage": "Unlocks Blighttown. Huge doors beside Domhnall of Zena (sewer merchant) in Depths.",
    },
    {
      "Usage": "Store excess items, a la Stockpile Thomas. Can only be accessed at a bonfire.",
      "Usage2": "There is no weight carry limit in Dark Souls, but the box allows you to have twice the amount of some items.",
    },
    {
      "Usage": "The stone pendant is the key to enter Lost Oolacile from the Darkroot Basin.",
      "Usage1": "Enter the vortex inside the cave behind where the Hydra originally was to trigger a cut-scene that takes you back in time.",
    },
    {
      "Usage": "Unlocks all hanging cages in Sen's Fortress. The Master Key will also work for Big Hat Logan's cage and the Hero soul, but not for the elevator.",
      "Usage1": "Free Big Hat Logan. Behind breakable wall, accessed by directing boulders.",
      "Usage": "Access a Hero Soul. Behind breakable wall, accessed by directing boulders.",
      "Usage": "Unlocks cage elevator on top of the fortress.",
      "Usage": "Unlocks all other empty hanging cages.",
    },
    {
      "Usage": "Unlocks the door leading to Hawkeye Gough.",
    },
    {
      "Usage": "This crest unlocks the magically sealed door in Darkroot Garden.",
    },
    {
      "Usage": "Northern Undead Asylum. Unlock cell door.",
    },
    {
      "Usage": "Unlocks door to the Depths. Go down stairs by the Capra location, the door is at the bottom of the tower by two thiefs.",
    },
    {
      "Usage": "Unlocks barred shortcut between upper New Londo Ruins and Valley of Drakes.",
    },
    {
      "Usage": "Access lower New Londo, Valley of Drakes (2nd entrance) and The Abyss.",
    },
    {
      "Usage": "Reusable key that can open any door with a simple lock.",
      "Usage2": "Open residences in Undead Burg, except for that of Griggs of Vinheim (replaces Residence Key).",
      "Usage3": "Open bottom of the tower in which Havel resides in Undead Burg. This leads to Darkroot Basin, and the door can be accessed from that side as well (replaces Watchtower Basement Key).",
      "Usage4": "Open Lautrec's cell door in Undead Parish (replaces Mystery Key).",
      "Usage5": "Open door to the bonfire in The Depths (replaces Sewer Chamber Key).",
      "Usage6": "Open the passageway between New Londo and the Valley of Drakes (replaces Key to New Londo Ruins).",
      "Usage7": "Open the cage doors in Sen's Fortress (but not the elevator cages) (replaces Cage Key).",

    },
    {
      "Usage": "Free Lautrec. Behind a breakable door, on the upper floor of the Undead Church, opposite end of boss entrance.",
    },
    {
      "Usage": "This doll grants you the ability to enter the Painted World of Ariamis, which is located inside the giant painting in Anor Londo.",
    },
    {
      "Usage": "Used to repair broken equipment. Can only be used at a bonfire.",
    },
    {
      "Usage": "Access 3x Gold Pine Resin in a residence in Undead Burg, close to the watchtower.",
      "Usage2": "Free Griggs of Vinheim in Lower Undead Burg.",
    },
    {
      "Usage": "Unlocks Bonfire room in the first slime-hallway in the Depths, close to the kitchen.",
    },
    {
      "Usage": "It unlocks the locked door on the third level's east wing, behind the boulder trap, in the Northern Undead Asylum.",
    },
    {
      "Usage": "It unlocks the locked door on the third level's west wing, guarded by two Undead Soldiers, in the Northern Undead Asylum.",
    },
    {
      "Usage": "Unlocks shortcut between Undead Burg and Darkroot Basin, guarded by Havel.",
    },
    {
      "Usage": "Allows weapon reinforcement at Bonfires.",
      "Usage2": "Only needs to be bought once each playthrough.",
      "Usage3": "You still need to use the same amount of souls and titanite as you would if a Blacksmith did the reinforcement.",
      "Usage4": "This item does not carry over to New Game Plus.",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },
    {
      "Usage": "YPSILOM",
    },

  ];


  const Notas = [
    {
    "Note": 
    "Chaos weapons cannot be buffed.",
    "Note2":"Chaos weapons will inflict damage depending on your Humanity level (max at 10 Humanity). The Humanity scaling decreases exponentially: the first humanity is worth more damage than the tenth. Bear this in mind.",
    "Note3":"Chaos ascension also changes the fire damage to physical damage ratio; from 1:1 to approx 2:1.",
    "Note4":"Exploiting the Dark Hand's R2 attack can give you a lot of soft Humanity, if you're worried about using up your reserves.",
    },
    {
    "Note": 
    "Chaos Crystal weapons cannot be repaired. Repair Powder is disabled and the Repair sorcery does not restore a crystal weapon's durability. The only way to repair a crystal weapon is to upgrade it. Upon upgrading, its durability is restored to maximum.",
    "Note2":"Crystal weapons cannot be downgraded.",
    "Note3":"The crystal equipment that Domnhall of Zena sells are not upgraded through the crystal path. They cannot be repaired, but have much higher durability.",
    "Note4":"In most cases, a crystal +4 weapon will have greater attack rating than a normal +15.",
    "Note5":"You can use the crystal halberd dropped by the first mimic in Anor Londo to obtain the Crystal Weapon trophy/achievement. Only 7 Titanite Chunks and 1 Titanite Slab are required to upgrade it to maximum.",
    "Note5":"It is recommended that when you ascend a weapon to crystal only max it for the trophy/achievement. Its durability will be reduced to 10% of its original value. It will break very fast and it cannot be repaired with anything at all. It is impossible to revert your weapons, so once you ascend a weapon to crystal there is no going back. The scaling on crystal weapons is good enough you don't need to exceed +4 for it to be better than a regular +15. It is advisable to use weapons that drop from enemies or that can be bought.",
    },
    {
      "Note": 
      "It isn't the same thing as divine. Divine excels in fighting undead and things that have no soul anymore, like skeletons and such. Occult is a whole other type of reinforcement, it excels in fighting living things that have souls, like a lot of enemies in the game (especially Black Knights and Silver Knights, which take extra damage).",
      "Note2":"Note that NO extra damage is done by occult to invaders, hosts or phantoms in PvP.",
    },
    {
      "Note": 
      "Divine weapons are effective against the Undead, such as the skeletons found in the Catacombs.",
      "Note2":"They can't reform themselves after being slain by a divine weapon.",
    },
    {
      "Note":"",
    },
    {
      "Note":"When entering the area containing the Large Divine Ember, be prepared due to the 4 giant skeletons guarding the body and item. Be extra vigilant in this dangerous area.",
      "Note2":"One way to get the ember without killing any skeletons is by jumping across the gap where the ladder is located. This will allow circling the top of the pit containing the giant skeletons. Once above the ember, equip a Ring of Sacrifice drop down quickly grabbing the ember and then either dying or attempting to escape. You can also equip the Slumbering Dragoncrest Ring to move around the skeletons before they begin to attack you.",
      "Note3":"Lightly equipped characters with pyromancy spells or firebombs, it is possible after entering the giant coffin with the giant skeletons to run and jump over the gap described above, and running all the way to the end of the right side. This will aggro all of the skeletons into a group below you, and they will only very rarely be able to hit you. If you lock on and cast some pyromancy spells you can hit them all with the splash damage. The corners at the end of the room work best when attempting this maneuver. If necessary move back and forth along the ledge to re-aggro and get them into another group. You must be close to the edge while casting, being careful not to fall to a quick and certain death at the hands of the giant skeletons.",
      "Note4":"Before descending the first ladder leading into the tomb, equip the Ring of Fog and the Slumbering Dragoncrest Ring and unequip any lit items. Descend the ladders down to the floor of the tomb and lure the large skeletons one by one either by proximity or arrows.",
      "Note3":"If using a bow to shoot down upon the giant skeletons, they tend to bunch up directly underneath the ledge, where they are incapable of being hit. To lure them back out into the open, use the Aural Decoy spell.",
      
    },

    {
      "Note":"",
    },
    {
      "Note":"Fire upgrade weapons cannot be buffed. However, the Magic Shield and Strong Magic Shield sorceries can still be used to enchant fire upgrade shields.",
    },

    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"Only needs to be bought once each playthrough.",
      "Note2":"You still need to use souls and titanite as you would if a Blacksmith did the reinforcement.",
      "Note3":"This item does not carry over to New Game Plus.",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"This door can only be opened from the Depths side.",
    },
    {
      "Note":"The bottomless box can be filled after gaining a lot items. You have approximately 2000-2250 slots available.",
    },
    {
      "Note":"The pendant can be obtained even if the player has killed the Golem prior to rescuing Dusk.",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"The key is a manual pick-up.",
    },
    {
      "Note":"Artorias is related to The Abyss Watchers of DS3",
    },
    {
      "Note": ""
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"On the PC PTD Edition, killing Ingward is currently bugged, and he may not always drop the Key to the Seal. It is currently unknown what causes this, but the key becomes completely unrecoverable (quitting/loading or visiting the chest in Fire Link Shrine do not work) effectively preventing you from completing the game.",
      "Note2": "Ingward will also drop it if killed, without the Lordvessel.",
    },
    {
      "Note":"If Lautrec is freed, he will be available as a summon for the Bell Gargoyle boss.",
      "Note2":"He will also give a gift of one Sunlight Medal when he returns to Firelink Shrine.",
      "Note3":"If Lautrec is not set free, he will still escape his imprisonment after the Gargoyles are slain, but gives no gift.",
    },
    {
      "Note":"Note that, once you enter the Painted World of Ariamis, there is no return until you jump off of the cliff into oblivion after the boss room. The boss fight with Crossbreed Priscilla is optional because she allows you to leave in peace. She will only attack when first provoked.",
    },
    {
      "Note":"Only needs to be bought once each playthrough.",
      "Note2":"Repairs still cost souls, so there is no difference in price if the box is used instead of a Blacksmith.",
      "Note3":"This item does not carry over to New Game Plus.",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":'The original Japanese item description does not contain the last sentence of the English version that reads: "For his own good, of course."',
    },
        {
      "Note":"",
    },
    {
      "Note":"DEIXA",
    },
        {
      "Note":"DEIXA",
    },
    {
      "Note":"DEIXA",
    },
    {
      "Note":"DEIXA",
    },
    {
      "Note":"DEIXA",
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

    Type: "Key Bonfire Item",

    Availability: location[15],

    Usage: usage[15],

    Notes: notes[15],
  },
  {
    Name: "BASEMENT KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/a8/Basement_Key.png/revision/latest?cb=20120901100559",

    InGameDescription:
      `Opens the narrow passage leading below at the far face of the great bridge in the Undead Burg. The lower Undead Burg is a treacherous place. Do not turn your back on the wily thieves, or the wild dogs who serve the Capra Demon.`,

    GeneralInformation:"The Basement Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[16],

    Usage: usage[16],

    Notes: notes[16],
  },
  {
    Name: "BIG PILGRIM'S KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/e/e7/Big_Pilgrim%27s_Key.png/revision/latest?cb=20120901100600",

    InGameDescription:
      `Key to the inner door of the Undead Asylum main hall. Big key belonging to a chosen Undead pilgrim. But this chosen Undead knows not what this pilgrimage has in store.`,

    GeneralInformation:"The Big Pilgrim's Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[17],

    Usage: usage[17],

    Notes: notes[17],
  },
  {
    Name: "BLIGHTTOWN KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/6/68/Blighttown_Key.png/revision/latest?cb=20120901100600",

    InGameDescription:
      `Key to Blighttown from the Depths of the Undead Burg. Swallowed by the Gaping Dragon. As its name suggests, Blighttown is a place of great pestilence. Even the polluted inhabitants of the Depths are aware of its dangers, and built this mighty door in hopes that they could remain safely separated.`,

    GeneralInformation: "The Blighttown Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[18],

    Usage: usage[18],

    Notes: notes[18],
  },
  {
    Name: "BOTTOMLESS BOX",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/8/8a/2088.png/revision/latest?cb=20111211011602",

    InGameDescription:
      ` peculiar bottomless wooden box. Its origins are unknown. Some deride it as a symbol of unbrideled avarice. Any number of items can be deposited into the box, and items can be managed while resting at a Bonfire.`,

    GeneralInformation: "The Bottomless Box is an item in Dark Souls.",

    Type: "Key Bonfire Items",

    Availability: location[19],

    Usage: usage[19],

    Notes: notes[19],
  },
  {
    Name: "BROKEN PENDANT",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/d/d0/Broken_Pendant.png/revision/latest?cb=20121125193608",

    InGameDescription:
      `Half of a broken stone pendant. The vine appears to originate from Oolacile. A powerful magic can be sensed from this ancient stone. Yet men of this time can neither manipulate nor sense its power, which has distinct air consisting of both reverence and nostalgia.`,

    GeneralInformation: "The Broken Pendant is a key item in Dark Souls. It is exclusive to the Artorias of the Abyss DLC. A pendant is mentioned in the description of the Soul of Manus as an item of great importance and the reason for his descent into insanity. However, there is no other connection between Manus and this pendant.",

    Type: "Key",

    Availability: location[20],

    Usage: usage[20],

    Notes: notes[20],
  },
  {
    Name: "CAGE KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/d/df/Cage_Key.png/revision/latest?cb=20120926094515",

    InGameDescription:
      `Key to the hanging cage in Sen's Fortress. If a hapless adventurer becomes fatigued during an imprudent attempt to overcome the fortress, the serpent men will not kill him, but lock him up in a lonely cage. Eventually, unless they have forgotten, they drag the victim off to who-knows-where.`,

    GeneralInformation: "The Cage Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[21],

    Usage: usage[21],

    Notes: notes[21],
  },
  {
    Name: "CREST KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/2/26/Crest_Key.png/revision/latest?cb=20121125141543",

    InGameDescription:
      `Bent Crest Key. The grooves of the crest are enchanted, the door sealed with a powerful spell.`,
      

    GeneralInformation: "The Crest Key is a key in Dark Souls. It is only available in the Artorias of the Abyss DLC.",

    Type: "Key",

    Availability: location[23],

    Usage: usage[23],

    Notes: notes[23],
  },
  {
    Name: "CREST OF ARTORIAS",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/e/ea/Crest_of_Artorias.png/revision/latest?cb=20120901100600",

    InGameDescription:
      `This crest opens a door in the Darkroot Garden sealed by ancient magic. The door leads to the grave of Sir Artorias the Abysswalker. Many adventurers have left for the grave,but none have returned, for they make easy prey for local bandits. With such dangers, the crest can do more harm than good in the hands of the uninitiated.`,
      

    GeneralInformation: "The Crest of Artorias is a key in Dark Souls. The in-game description of the Crest of Artorias gives some hints about what lies behind the magical door in Darkroot Garden. The local bandits refer to the Forest Hunter Covenant members that attack the player when they go through the magical door. The uninitiated refers to people who are not part of the Forest Hunter covenant because if the player joins the covenant, the bandits will not attack anymore.",

    Type: "Key",

    Availability: location[24],

    Usage: usage[24],

    Notes: notes[24],
  },
  {
    Name: "DUNGEON CELL KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/1/17/Dungeon_Cell_Key.png/revision/latest?cb=20120901100800",

    InGameDescription:
      `Key to the dungeon of the Undead Asylum to the North. A mysterious knight, without saying a word, shoved a corpse down into the cell, and on its person was this key. Who was this knight? And what was his purpose? There may be no answer, but one must still forge ahead.`,
      

    GeneralInformation: "The Dungeon Cell Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[25],

    Usage: usage[25],

    Notes: notes[25],
  },
  {
    Name: "KEY TO DEPTHS",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/9/91/Key_to_Depths.png/revision/latest?cb=20120901100800",

    InGameDescription:
    `Key opening the door from the lower Undead Burg to the Depths. Those banished from the Undead Burg eke out their existence in the Depths, a damp lair with no trace of sunlight. Nearly half of the Depths form a perilous flooded labyrinth.`,
      

    GeneralInformation: "The Key to Depths is a key in Dark Souls that allows access to the Depths.",

    Type: "Key",

    Availability: location[26],

    Usage: usage[26],

    Notes: notes[26],
  },
  {
    Name: `KEY TO NEW LONDO RUINS`,

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/c/c6/Key_to_New_Londo_Ruins.png/revision/latest?cb=20120901100800",

    InGameDescription:
      `Key to the iron bars separating the ruins of New Londo and Drake Valley.
      The ruins of New Londo were blocked off, for the cursed ghosts posed danger to life and spirit, and the legends speak of a terrible Dark that was sealed away.`,
      

    GeneralInformation: "The Key to New Londo Ruins is a key in Dark Souls.",

    Type: "Key",

    Availability: location[27],

    Usage: usage[27],

    Notes: notes[27],
  },
  {
    Name: "KEY TO THE SEAL",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/ac/Key_to_the_Seal.png/revision/latest?cb=20120901100600",

    InGameDescription:
      `Key to the floodgates of New Londo, which seal away the Four Kings who fell to Dark.
      The Sealers flooded New Londo to banish the Darkwraiths and the Four Kings. The agonizing decision was made with the realization that countless lives, and the robust culture of the city, would be lost. The victims now roam the ruins as ghosts.`,
      

    GeneralInformation: "The Key to the Seal is a key in Dark Souls.",

    Type: "Key",

    Availability: location[28],

    Usage: usage[28],

    Notes: notes[28],
  },
  {
    Name: "MASTER KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/5/57/Master_Key.png/revision/latest?cb=20120901100800",

    InGameDescription:
      `This universal key opens any basic lock. Tool of the trade for thieves.
      But in the cursed land of the Undead, most doors are left unopened.`,
      

    GeneralInformation: "The Master Key is a key and starting gift in Dark Souls.",

    Type: "Key",

    Availability: location[29],

    Usage: usage[29],

    Notes: notes[29],
  },
  {
    Name: "MYSTERY KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The Mystery Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
  },
  {
    Name: "PECULIAR DOLL",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/08/Peculiar_doll.png/revision/latest?cb=20120123093734",

    InGameDescription:
      `A strange doll in strange dress. There once was an abomination who had no place in this world. She clutched this doll tightly, and eventually was drawn into a cold and lonely painted world.`,
      

    GeneralInformation: "The Peculiar Doll is a key in Dark Souls.",

    Type: "Key",

    Availability: location[31],

    Usage: usage[31],

    Notes: notes[31],
  },
  {
    Name: "REPAIRBOX",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/b/b3/Repairbox.png/revision/latest?cb=20121201041005",

    InGameDescription:
      `Specialized mortar used to repair weapons and armor by grinding repair powder. Rest at a bonfire to make weapon and armor repair possible. Repair powder is fragile and cannot be taken along.`,
      

    GeneralInformation: "The Repairbox is a weapon modification item in Dark Souls.",

    Type: "Key Bonfire Item",

    Availability: location[32],

    Usage: usage[32],

    Notes: notes[32],
  },
  {
    Name: "RESIDENCE KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/2/2c/Residence_Key.png/revision/latest?cb=20120901100802",

    InGameDescription:
      `Key to a residence in the Undead Burg. Simple, sturdy design of the locks in the Burg keep out unwanted visitors.
      But this is a standard key in these parts, and will open several residences.`,
      

    GeneralInformation: "The Residence Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[33],

    Usage: usage[33],

    Notes: notes[33],
  },
  {
    Name: "SEWER CHAMBER KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/1/15/Sewer_Chamber_Key.png/revision/latest?cb=20120901100802",

    InGameDescription:
      `Key to the sewer chamber in the Depths. In any community, a few bad apples are sure to exhibit insatiable greed. If they were turned Undead, and banished to the Depths, would they reconsider their ways? Use this key to see for yourself.`,
      

    GeneralInformation: "The Sewer Chamber Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[34],

    Usage: usage[34],

    Notes: notes[34],
  },
  {
    Name: "UNDEAD ASYLUM F2 EAST KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/b/b1/Undead_Asylum_F2_East_Key.png/revision/latest?cb=20120901100802",

    InGameDescription:
      `Key to the iron bars on the east side of the second floor of the North Undead Asylum. The Undead Asylum is a giant Undead prison, segmented by countless iron bars. Even if an Undead were to escape from a cell, passage to the outside world would not be gained easily.`,
      

    GeneralInformation: "The Undead Asylum F2 East Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[35],

    Usage: usage[35],

    Notes: notes[35],
  },
  {
    Name: "UNDEAD ASYLUM F2 WEST KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/c/cf/Undead_Asylum_F2_West_Key.png/revision/latest?cb=20120901100802",

    InGameDescription:
      `Key to the iron bars on the west side of the second floor of the North Undead Asylum. The Undead Asylum is a giant Undead prison, segmented by countless iron bars. But even if a hero found a key in Lordran to liberate this prison, would he have the means, or the heart, to ever come back?`,
      

    GeneralInformation: "The Undead Asylum F2 West Key is a key in Dark Souls.",
    
    Type: "Key",

    Availability: location[36],

    Usage: usage[36],

    Notes: notes[36],
  },
  {
    Name: "WATCHTOWER BASEMENT KEY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/e/e6/Watchtower_Basement_Key.png/revision/latest?cb=20120901100834",

    InGameDescription:
      `Key to the basement of the watchtower in the Undead Burg. The basement of the watchtower forms a stone cell. There are rumors of a hero turned Hollow who was locked away by a dear friend. For his own good, of course.`,
      

    GeneralInformation: "The Watchtower Basement Key is a key in Dark Souls.",

    Type: "Key",

    Availability: location[37],

    Usage: usage[37],

    Notes: notes[37],
  },
  {
    Name: "WEAPON SMITHBOX",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/9/99/Weapon_Smithbox.png/revision/latest?cb=20121204035155",

    InGameDescription:
      `Tools used to etch titanite into weapons for reinforcement. Rest at a bonfire to make weapon reinforcement possible.`,
      

    GeneralInformation: "The Weapon Smithbox is a weapon modification tool in Dark Souls.",

    Type: "Key",

    Availability: location[38],

    Usage: usage[38],

    Notes: notes[38],
  },
  {
    Name: "",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The  is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
  },
  {
    Name: "",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The  is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
  },
  {
    Name: "",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The  is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
  },
  {
    Name: "",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The  is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
  },
  {
    Name: "",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/49/Mystery_Key.png/revision/latest?cb=20120901100801",

    InGameDescription:
      `The purpose of this key is unknown. Resembles a basic prison cell key.`,
      

    GeneralInformation: "The  is a key in Dark Souls.",

    Type: "Key",

    Availability: location[30],

    Usage: usage[30],

    Notes: notes[30],
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
