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
      "Oswald of Carim - Unobtainable",
  },
  {
    "Availability":
    "Three can be found on a corpse in Undead Parish. The corpse is on a ledge above the Fang Boar's initial position, where two crossbow-wielding Hollow Soldiers are perched",
    "Availability2":
    "Sold by Marvelous Chester in Royal Wood for 800 souls each. (AotA)",
    "Availability3":
    "Sold by Undead Female Merchant in Lower Undead Burg for 500 souls each."
  },
  {
    "Availability":
    "Starting gift",
    "Availability2":
    "Found on a corpse towards the end of the graveyard in Firelink Shrine.",
  },
  {
    "Availability":
      "Found outside Anastacia of Astora's cage in Firelink Shrine after Lautrec murders her, which triggers when either the Blighttown Fire Keeper Soul is collected by the player, or after both Bells of Awakening are rung.",
  },
  {
    "Availability":
    "10 are available as a starting gift.",
    "Availability2":
    "5 can be found in a chest in Undead Burg, inside one of the houses beyond the bonfire.",
    "Availability3":
    "Sold by the Crestfallen Merchant in Sen's Fortress for 500 souls each.",
    "Availability4":
    "Sold by Marvelous Chester in Royal Wood for 800 souls each. (AotA)",
  },
  {
    "Availability":
      "Granted to the player at the beginning of the game.",
  },
  {
    "Availability":
    "Dropped by Demonic Foliages in Darkroot Garden.",
    "Availability2":
    "Sold by the Undead Female Merchant for 300 souls each.",
  },
  {
    "Availability": "Uncommonly dropped by Demonic Foliage.",
    "Availability2": "Rarely dropped by Blowdart Snipers.",
    "Availability3": "Uncommonly dropped by Wooden Scarecrows.",
    "Availability4": "Sold by the Undead Female Merchant for 1,000 souls.",
    "Availability5": "Sold by Marvelous Chester for 1,500 souls.",
  },
  {
    "Availability":
      "Granted after joining the Blade of the Darkmoon covenant.",
  },
  {
    "Availability":
      "The Book of the Guilty can be acquired from Oswald of Carim after ringing the first Bell of Awakening. The player can either buy it from him for 1,000 souls, or kill him to get it as a drop.",
  },
  {
    "Availability":
      "Sold by Hawkeye Gough for 5 souls.",
  },
  {
    "Availability":
      "Found on a corpse deep in the Chasm of the Abyss.",
  },
  {
    "Availability":
      `Drops from a specific Bloathead Sorcerer in the Oolacile Township, near where Dark Orb is found.`,
  },
  {
    "Availability":
      `Sold by Hawkeye Gough for 5 souls.`,
  },
  {
    "Availability":
      `Dropped by a Mimic in Oolacile Township.`,
  },
  {
    "Availability":`Sold by the Undead Female Merchant for 500 souls each.`,
    "Availability2":`Drops from Vagrants, specifically the White Good Vagrant.`,
  },
  {
    "Availability":
      `Gifted by Petrus of Thorolund after speaking with him in Firelink Shrine.`,
  },

  {
    "Availability":`Four are found in a chest in Firelink Shrine, under the elevator to Undead Parish.`,
    "Availability2":`Six are found on a corpse in the lower parts of the New Londo Ruins.`,
    "Availability3":`Sold by Darkstalker Kaathe for 3,000 souls each.`,
  },
  {
    "Availability":`Granted to players from the beginning of the game.`,
  },
  {
    "Availability":`Three can be obtained if chosen as a starting gift.`,
    "Availability2":`One is sold by Reah of Thorolund after saving her in the Tomb of the Giants for 1,000 souls.`,
    "Availability3":`Sold by Patches in a limited quantity for 20,000 souls. Patches is available as a merchant in Firelink Shrine after defeating Gravelord Nito.`,
    "Availability4":`Gift from Alvina after killing one invader as a Forest Hunter.`,
    "Availability5":`One can be looted from a chest in Anor Londo (the large room with the painting and the rafters).`,
    "Availability6":`Two can be looted in Lost Izalith off two of the corpses in the lava pit with the Bounding Demons of Izalith. Obscured by a large branch; difficult to obtain without the Orange Charred Ring.`,
    "Availability7":`In a chest in Sen's Fortress guarded by Undead Prince Ricard.`,
    "Availability8":`Two per playthrough can be obtained by trading a Ring of the Sun Princess to Snuggly the Crow.`,
  },
  {
    "Availability":`Obtained after joining the Path of the Dragon covenant.`,
  },
  {
    "Availability":`The Dragon Head Stone is obtained by joining the Path of the Dragon covenant.`,
  },
  {
    "Availability":`Obtained by reaching Rank +2 in the Path of the Dragon covenant.`,
  },
  {
    "Availability":`Painted World of Ariamis. Drop down onto the balcony, from first left turret when facing the castle from the bonfire.`,
    "Availability2":`In Dark Souls Remastered, the dried finger is now sold by the Undead Merchant in the Undead Burg, and the item from its previous location is a Twin Humanities.`,
  },
  {
    "Availability":`Sold by Hawkeye Gough in Oolacile Township for 200 souls each. (AotA)`,
    "Availability2":`Sold by Undead Female Merchant in Lower Undead Burg for 200 souls each.`,
    "Availability3":`Dropped by Dung Giants (all) in Blighttown.`,
    "Availability4":`Drops from Infested Barbarian (50% Chance - Blighttown)`,
    "Availability5":`Drops from Vagrants, specifically the White Good Vagrant.`,
  },
  {
    "Availability":`Sold by Eingyi in Quelaag's Domain for 1,000 souls. If you talk to him while bearing an Egg Head, he will always give you one Vermifuge per infection.`,
    "Availability2":`Treasure in the attic of the first room with several Engorged Zombies(toxic pyro hollows), in Painted World of Ariamis.`,
    "Availability3":`Drops from Tree Lizard (10% Chance - Darkroot Garden)`,
    "Availability4":`Drops from Egg Carrier (5% Chance - Quelaag's Domain or Demon Ruins)`,
    "Availability5":`Drops from Vagrants, specifically the Red Good Vagrant. `,
  },
  {
    "Availability":`One is found on a corpse in the Royal Wood.`,
    "Availability2":`One is received from Elizabeth, after agreeing to help her.`,
    "Availability3":`Another three are received from Elizabeth after defeating Manus, Father of the Abyss.`,
    "Availability4":`Three are dropped by Elizabeth if she is killed. The player must not have already received three as a reward.`,
  },
  {
    "Availability":`Drops from Oscar of Astora. (Guaranteed - Northern Undead Asylum and Northern Undead Asylum Revisit).`,
    "Availability2":`Chest behind Frampt's Location in Firelink Shrine (If not picked up from Oscar after NG0).`,
  },
  {
    "Availability":`3 are found near the coffin behind the Titanite Demon that leads to the Gravelord Servant covenant in The Catacombs.`,
    "Availability2":`3 are found on a corpse in the Tomb of the Giants.`,
    "Availability3":`6% chance drop from Basilisks.`,
    "Availability4":`3 are sold by Patches in Firelink Shrine for 3,000 souls each. `,
  },
  {
    "Availability":`One is located in Undead Parish. It is on an altar in the Undead Church (2nd section of Undead Parish), guarded by a Berenike Knight.`,
    "Availability2":`One is located in New Londo Ruins. It can be seen on the right hand when crossing the narrow wooden walkway. Three ghosts will spawn when getting near.`,
    "Availability3":`One is located in Blighttown. In a wastewater pit, about halfway down from the Valley of Drakes entrance, guarded by fire-dogs and toxic dart shooters.`,
    "Availability4":`One is located in the Duke's Archives. At the bottom of the prison tower, behind the pisaca. You need the Archive Tower Giant Cell Key that is acquired later in the level to access it (don't confuse this with the Archive Tower Giant Door Key).`,
    "Availability5":`One is obtained after killing Quelaag's Sister. Please note that you won't be able to join the Chaos Servant covenant or use the bonfire in front of her anymore (with the exclusion of being able to warp to, but not from, that location).`,
    "Availability6":`One is obtained after killing the Darkmoon Knightess fire keeper in Anor Londo. If you decide to kill her for her soul, her bonfire will no longer be lit but you may still warp there using the Lordvessel.`,
    "Availability7":`One can be obtained if you allow Knight Lautrec kill Anastacia of Astora, then later kill Knight Lautrec in Anor Londo using the Black Eye Orb that was found at Anastacia's dead body (under the Firelink Shrine bonfire.).`,
  },
  {
    "Availability":`Sold by Undead Merchant for 50 souls.`,
    "Availability2":`Sold by Marvelous Chester for 100 souls.`,
    "Availability3":`Dropped by firebomb throwing Hollow Soldiers`,
  },
  {
    "Availability":`Found in the Painted World of Ariamis, on a corpse after jumping through two barrels on a ledge in a room with Snow Rats.`,
    "Availability2":`Mimic drop in Anor Londo, on the second floor after the second bonfire.`,
    "Availability3":`Found in the Royal Wood, on a corpse.`,
  },
  {
    "Availability":`Treasure x3: Undead Burg, residence beside first crossbow sniper (tower). Requires Residence Key or Master Key.`,
    "Availability2":`Sold by Domhnall of Zena (only 3) for 1,000 souls each.`,
    "Availability3":`Sold by Elizabeth (only 5) for 1,000 souls each (AotA).`,
    "Availability4":`Drops from Large Mushroom People (20% or 80% Chance - Darkroot Garden) `,
    "Availability5":`Drops from Small Mushroom People (5% Chance - Darkroot Garden)`,
    "Availability6":`Drops from Vagrants, specifically the Red Good Vagrant`,
  },
  {
    "Availability":`Purchased from the Crestfallen Merchant for 1,000 souls each (unlimited).`,
    "Availability":`Common drop from Frog-Rays in the Darkroot Garden.`,
    "Availability":`Sold by Marvellous Chester for 1,200 souls each.`,
  },
  {
    "Availability":`Can be purchased from Undead Merchant (Female) for 500 souls.`,
    "Availability":`Can be purchased from Blacksmith Vamos for 500 souls.`,
    "Availability":`Can be purchased from Oswald of Carim for 500 souls.`,
    "Availability":`Can be purchased from Hawkeye Gough for 300 souls. `,
    "Availability":`Can be purchased from Marvelous Chester for 800 souls.`,
    "Availability":`Treasure x6 in chest at bottom of elevator shaft in Firelink Shrine.`,
    "Availability":`Drops from Minor Capra Demon (Guaranteed - Demon Ruins)`,
    "Availability":`Drops from Minor Taurus Demon (Guaranteed - Demon Ruins)`,
  },
  {
    "Availability":`Sold by Undead Merchant (Female) for 5,000 souls (one time only).`,
    "Availability2":`Sold by Patches the Hyena for 10,000 souls (only sells 3).`,
    "Availability3":`Sold by Marvelous Chester for 10,000 souls (only sells 13) (AotA)`,
    "Availability4":`Bribe from Patches, if you talk to him before the first incident, and don't forgive him after.`,
    "Availability5":`Dropped by several NPCs.`,
    "Availability6":`Dropped by most Bosses (patch 1.05).`,
    "Availability7":`Dropped by Pisacas in Duke's Archive (4% Chance).`,
    "Availability8":`Dropped by Humanity Sprites in Chasm of the Abyss (AotA) (Small: Single 4.44%, Twin 1.11%; Medium: Single 8%, Twin 2%; Large: Single 9.09%, Twin 4.55%).`,
    "Availability9":`Firelink Shrine: On the corpse hanging over the well.`,
    "Availability10":`Undead Burg: On top of the sewer canal, beside the entrance from Firelink.`,
    "Availability11":`Undead Parish: On a corpse in a barrel inside the church, close to Lautrec's cell.`,
    "Availability12":`New Londo Ruins: At the end of the walkway along the raised wall, close to the Valley of Drakes entrance.`,
    "Availability13":`Valley of Drakes: In a small cave, beside the lone Drake who blocks the narrow path.`,
    "Availability14":`Painted World of Ariamis: One on each of the two hanging corpses, cut chains to gain access.`,
    "Availability15":`Tomb of Giants: On the ledge at the end of the last slide, right above the first bonfire.`,
    "Availability16":`Crystal Cave: Through a narrow passage with invisible floor, after the first Golem.`,
    "Availability17":`Drops from Small Rats (5% Chance - Undead Parish, Depths or Firelink Shrine; 3% Chance - Depths or Painted World of Ariamis`,
    "Availability18":`Drops from Large Rats (100% - Depths)`,
    "Availability19":`Drops from Snow Rats (5% Chance - Painted World of Ariamis)`,
    "Availability20":`Drops from Skeleton Baby (2% Chance - Tomb of Giants)`,
  },
  {
    "Availability":`Sold by Oswald of Carim for 200 souls each.`,
  },
  {
    "Availability":`Four are found in a chest in Firelink Shrine. Drop from the elevator leading to the Undead Parish to obtain them.`,
    "Availability2":`Sold by Marvelous Chester in Royal Wood for 800 souls each.`,
    "Availability3":`Sold by Undead Male Merchant in Undead Burg for 500 souls each.`,
  },
  {
    "Availability":`Sold by the Undead Male Merchant for 100 souls.`,
    "Availability2":`If not purchased, the Undead Male Merchant will drop this item upon death.`,
  },
  {
    "Availability":`Can be obtained as a starting gift.`,
    "Availability2":`Found on the altar in the Undead Parish, if the player allows Petrus to kill Reah.`,
    "Availability3":`Random reward for killing an invader in the Forest Hunter covenant.`,
  },
  {
    "Availability":`Sold by the Undead Female Merchant in Lower Undead Burg for 100 souls each.`,
  },
  {
    "Availability":`Sold by Undead Merchant (Female) for 10 souls.`,
    "Availability2":`Sold by Patches the Hyena for 10 souls.`,
    "Availability3":`Sold by Hawkeye Gough for 10 souls.`,
    "Availability4":`Treasure x20: Chest in The Duke's Archives, beneath the staricase that leads to the Crystal Cave.`,
    "Availability5":`Drops from Vagrants, specifically the White Good Vagrant. `,
  },
  {
    "Availability":`Five are sold by Oswald of Carim in Undead Parish for 3,000 souls each.`,
    "Availability2":`Sold by the Undead Female Merchant in Lower Undead Burg for 6,000 souls each.`,
    "Availability3":`Two per playthrough may be obtained from Snuggly the Crow in exchange for a Cracked Red Eye Orb.`,
    "Availability4":`Dropped by Man-Eater Shells (10% Chance) in Ash Lake or the Crystal Cave.`,
    "Availability5":`Drops from Vagrants, specifically the Red Good Vagrant.`,
  },
  {
    "Availability":`Granted to the player the first time they enter the Battle of Stoicism duel arena, right before the Oolacile Township.`,
  },
  {
    "Availability":`Sold by Undead Merchant (Female) for 500 souls.`,
    "Availability2":`Dropped by Ents in Darkroot Garden.`,
    "Availability3":`Drops from Ents (20% chance - Darkroot Garden)`,
    "Availability4":`Drops from Treant Gardener (Royal Wood)`,
    "Availability5":`Drops from Blowdart Sniper (30% ~ 70% chance - Blighttown)`,
    "Availability6":`Drops from Vagrants, specifically the White Good Vagrant.`,
  },
  {
    "Availability":`Granted to the player by Darkstalker Kaathe upon reaching Darkwraith covenant level +1.`,
  },
  {
    "Availability":`lorem`,
  },
  {
    "Availability":`lorem`,
  },
  {
    "Availability":`lorem`,
  },
  {
    "Availability":`lorem`,
  },
  {
    "Availability":`lorem`,
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
      "Usage": "Abandons a covenant without penalties",
    },
    {
      "Usage": "Throwable item. Attracts some enemies.",
      "Usage2": "Effect lasts about 5 seconds.",
    },
    {
      "Usage": "Used to see distant threats, scenery, and other objects.",
      "Usage1": "This is a key item that can be used more than once.",
      "Usage2": "Zoom in and out by pressing up and down on the d-pad.",
    },
    {
      "Usage": "Used to invade Lautrec's world in Anor Londo, right before the Ornstein and Smough entrance.",
    },
    {
      "Usage": "Throwable item. Deals heavy fire damage.",
      "Usage2": "Black Firebombs do 21 poise damage.",
    },
    {
      "Usage": "Used to send summoned White Phantoms back to their own world.",
      "Usage1": "Used to leave the host's world as a summoned or invading Phantom.",
      "Usage2": "Using this as an ally will give you +1 Sin in the Book of the Guilty.",
      "Usage3": "If you are the host using it allows you to see your phantoms' online victories",
      "Usage4": "Used to send summoned NPC Phantoms back to their own world.",
      "Usage5": "Banished NPCs can not be re-summoned to the same world, even after resting at a bonfire.",
      "Usage6": "Quit / reload to make their signs appear again.",
    },
    {
      "Usage": "Reduces the accumulation of bleeding when consumed.",
    },
    {
      "Usage": "Reduces the accumulation of both poison and toxin, as well as curing their respective status effects.",
    },
    {
      "Usage": "Use this item to invade the world of a player who has 'sin', and more likely someone who is listed in the Book of the Guilty.",
      "Usage1": "Like the Red Eye Orb, this item has unlimited uses.",
      "Usage2": "Can invade BELOW the users' own level, to what limit is not confirmed, can invade above own level also.",
      "Usage3": "Can be used while either human or hollow, and does not drop a bloodstain.",
      "Usage4": "Note that it may be greyed out if too close to a bonfire or crossroad to multiple areas",
    },
    {
      "Usage": "A reusable online play item. Checklist of indicted players who have sinned.",
    },
    {
      "Usage": `Says "Hello" when it makes contact with a hard surface.`,
    },
    {
      "Usage": `Says "Help Me!" when it makes contact with a hard surface.`,
    },
    {
      "Usage": `Says "I'm Sorry" when it makes contact with a hard surface.`,
    },
    {
      "Usage": `Says "Thank You" when it makes contact with a hard surface.`,
    },
    {
      "Usage": `Says "Very Good!" when it makes contact with a hard surface.`,
    },
    {
      "Usage": `Adds 80 Fire Damage to your right hand weapon.`,
      "Usage": `Duration: 60 seconds.`,
      "Usage": `May only be used on weapons that are on the standard +1...+15 weapon path and which are not inherently magical (see Weapon Buffs).`,
    },
    {
      "Usage": `Can be sold to Kingseeker Frampt for 1.000 souls.`,
      
    },
    {
      "Usage": `This item will allow you to invade another player's world by force.`,
    },
    {
      "Usage": `Triggers upon death, sending player back to the last used bonfire. Souls and Humanity are lost, but can be regained by touching the bloodstain where death occured.`,
      "Usage2": `Can also be triggered by the player, to be sent back to the last used bonfire. All carried Souls and Humanity are lost, and cannot be retrieved.`,
    },
    {
      "Usage": `Will restore full Health and cure Bleed, Poison and Toxin, when consumed.`,
    },
    {
      "Usage": `Players who wish to summon you need to be human and alone in their world. Even when someone else just attempts to invade them, the sign will disappear.`,
    },
    {
      "Usage": `Turns your head into one of a dragon.`,
    },
    {
      "Usage": `Turns you completely into a Dragonoid.`,
    },
    {
      "Usage": `Resets the internal invasion timer. This way you can be invaded with greater frequency.`,
      "Usage2": `Dark Souls Remastered only: Unlocks summoning of up to 3 co-op partners, and allows invasions from up to 2 players at the same time. (Max online 6 players in one session)`,
    },
    {
      "Usage": `Thrown item. Inflicts Toxic status on enemies, but also on yourself.`,
      "Usage2": `Toxin build-up is 25 on you, and ?? on target.`,
      "Usage3": `Toxic Power is 420 (7 HP/s) for 60 seconds.`,
      "Usage4": `Trade one with Snuggly for a Demon Titanite.`,
      "Usage5": `Can be "sold" to Frampt for 200 souls.`,
    },
    {
      "Usage": `This item cures the egg head infection you may receive when grabbed by an Egg-Burdened, or when attacked by the parasites they bear. These parasites emerge in groups of 5 from the corpses of the Egg-Burdened. You can use it as prophylaxis before an egg head develops if you've been attacked by these enemies. You can also trade it with Snuggly for a Dragon Scale.`,
    },
    {
      "Usage": `Regenerates health for 30 seconds when consumed.`,
      "Usage2": `Grants 1,000 souls when fed to Kingseeker Frampt.`,
    },
    {
      "Usage": `Reusable item that replenishes health. Acquire Estus at Bonfires for HP recovery in the field.`,
    },
    {
      "Usage": `The Eyes of Death are used to level up in the Gravelord Servant Covenant.`,
      "Usage2": `They are also used to put signs on the ground, which will send Black Phantoms into 3 random players worlds. The players can then search for the sign and invade the gravelord. If the invaders are defeated, the gravelord gains additional Eyes of Death. Level range is +/- 10% of the host's level + 10 levels.`,
    },
    {
      "Usage": `This soul is used to reinforce Estus Flasks, to increase its healing powers.`,
      "Usage2": `To improve your Estus Flasks give the Fire Keeper Soul to one of the three Fire Keepers: Anastacia of Astora, the mute girl in the cell below Firelink Shrine, the Daughter of Chaos (Chaos Servant leader in Quelaag's Domain) or the Darkmoon Knightess, the brass armored Fire Keeper in Anor Londo.`,
      "Usage3": `If you wish to revive Anastacia of Astora, do NOT use or consume her soul! Only her own soul, obtained by invading and defeating Knight Lautrec, can be used to bring her back to life. To avoid confusion, go straight back to Firelink and revive her as soon as you obtain this item.`,
    },
    {
      "Usage": `Throwable item.`,
      "Usage2": `Deals fire damage. (Amount depends on the enemy's resistance to Fire.)`,
    },
    {
      "Usage": `Can be sold to Kingseeker Frampt for 5.000 souls.`,
    },
    {
      "Usage": `Applies 150 Lightning damage to the right-hand weapon.`,
    },
    {
      "Usage": `Increases Stamina recovery speed by 40 per second when consumed.`,
    },
    {
      "Usage": `Transports player to the last visited Bonfire, player loses neither souls nor humanity.`,
    },
    {
      "Usage": `Increases Humanity count by 1 when consumed.`,
      "Usage2": `Restores full health when consumed. (at least 2000+)`,
    },
    {
      "Usage": `When slain by an invading player, this item can be used to add that player's name to the Book of the Guilty. (Being indicted by another player online will give you +1 sin)`,
    },
    {
      "Usage": `Throw at an enemy to deny Estus recovery.`,
      "Usage2": `Can also be thrown at Mimic chests, to make them fall asleep and give up treasure. More info can be found here.`,
    },
    {
      "Usage": `Using the Orange Guidance Soapstone allows players to leave messages on the ground for other players in other worlds to see. It also allows players to rate other players' messages.`,
    },
    {
      "Usage": `Can be traded to Snuggly for a Souvenir of Reprisal.`,
    },
    {
      "Usage": `Throwing knife used as a consumable item, does (?) amount of poison buildup, and deals 7 poise damage.`,
    },
    {
      "Usage": `Used to make breadcrumb trails, or to mark areas already visited in confusing places.`,
      "Usage2": `Used to determine the height of a fall. Listen to the sound of the stone hitting the ground. If it's loud, the fall will be fatal.`,
      "Usage3": `Trade one to Snuggly for a Demon Titanite.`,
    },
    {
      "Usage": `Reduces curse build-up and breaks curse.`,
    },
    {
      "Usage": `Multiplayer item. Exit Battle of Stoicism.`,
    },
    {
      "Usage": `Reduces the accumulation of poison and cancels poisoned status.`,
      "Usage2": `One Purple Moss Clump per playthrough can be traded to Snuggly the Crow for a Twinkling Titanite.`,
    },
    {
      "Usage": `Unlike its cracked brethren, the item is not consumed upon use, and can be used infinitely`,
      "Usage2": `You can use the orb in any multiplayer-able area. Note that it may be greyed out if too close to a bonfire or a crossroad to multiple areas`,
    },
    {
      "Usage": `YPSILOM`,
    },
    {
      "Usage": `YPSILOM`,
    },
    {
      "Usage": `YPSILOM`,
    },
    {
      "Usage": `YPSILOM`,
    },
    {
      "Usage": `YPSILOM`,
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
      "Note":"",
    },
    {
      "Notes (Enemies affected)": ['Balder Knight', 'Berenike Knight', 'Blowdart Sniper', 'Butcher', 'Darkwraith', 'Fang Boar', 'Havel the Rock', 'Hollow', 'Hollow Soldier', 'Hollow Thief', 'Hollow Warrior', 'Infested Barbarian', 'Infested Ghoul', 'Kirk, Knight of Thorns', 'Knight Lautrec of Carim', 'Maneater Mildred', 'Necromancer', 'Nico of Thorolund', 'Petrus of Thorolund', 'Reah of Thorolund', 'Siegmeyer of Catarina', 'Undead Crystal Soldier', 'Vince of Thorolund'],
    },
    {
      "Note":"Equip the Hawk Ring to see even further.",
      "Note1":"Binoculars can also be used to aim a crossbow from outside of lock-on range.",
      "Note2":"Particularly useful when trying to aim spells or, of course, when in Princess Gwynevere's bed chamber.",
      "Note3":"Using the binoculars while talking to a NPC merchant, will result in a third person view of your character with binoculars.",
      "Note4":"Use them just before the NPC finishes their last spoken sentence, so the binoculars are equipped while the merchant menu is shown.",
    },
    {
      "Note":"A Black Eye Orb was also designated for Shiva of the East originally, but was removed before the final game was released. The cut Black Eye Orb is displayed as Black Eye Orb (Shiva) in the ingame inventory. This orb is only obtainable by modding or save editing and if used in the courtyard area of Painted World of Ariamis, you can invade Shiva as originally intended. Shiva will be accompanied by his bodyguard during the invasion event.",
    },
    {
      "Note":"",
    },
    {
      "Note":"",
    },
    {
      "Note":"One Bloodred Moss Clump per playthrough can be traded to Snuggly the Crow for a Twinkling Titanite.",
    },

    {
      "Note":"One Blooming Purple Moss Clump per playthrough can be traded to Snuggly the Crow for two Twinkling Titanites.",
    },

    {
      "Note":`Once in a blue moon you may come across with a bug that makes you invade as a red phantom instead of a blue spirit of vengeance. Killing the target in this form does not grant a souvenir of reprisal but instead gives humanity. Receiving 'sin' after a kill is unknown. You receive sin when the user you "invaded" gets killed by you`,
    },

    {
      "Note":`If looking at your own character, it will be the character you set "Join Leaderboard" to "ON" on.`,
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
      "Note":``,
    },
    {
      "Note":`You must be human to use this item.`,
      "Note2":`A successful invasion will consume the item`,
      "Note3":`A failed invasion will not consume the item. (patch 1.05)`,
      "Note4":`The invader will receive one Humanity if they successfully kill the host.`,
      "Note5":`The host will receive one Humanity via a Bloodstain if they are successful.`,
      "Note6":`The host may also report the invader, for an indictment upon death, if they have been invaded using this method.`,
      "Note7":`Note that it may be greyed out if too close to a bonfire or crossroad to multiple areas.`,
      "Note8":`The color of this eye orb is based on the Red Eye Stone, obtained by killing The Maiden in Black in Demon's Souls.`,
      "Note9":`Some believe Darkwraiths to be revolutionaries, defenders of the human race, but they might just be evil Humanity.`,
    },
    {
      "Note":`Unlike dying, a manual trigger will not hollow a player who are in human form.`,
      "Note2":`A manual trigger will also preserve your bloodstain from a previous death, even though you lose what you are currently holding.`,
    },
    {
      "Note":``,
    },
    {
      "Note":`However, a Hollow player can still place the sign and invade the summoner.`,
      "Note2":`Not compatible with password matchmaking.`,
      "Note3":`Having a Dragon Scale is not actually part of the matchmaking requirement.`,
      "Note4":`The area boss does not need to be alive in the host's world.`,
      "Note5":`The winner of the duel will be awarded a Dragon Scale.`,
      "Note6":`The defeated player will not lose any scales.`,
    },
    {
      "Note":`In order to use this successfully, no head armor must be equipped. The effect will last until you die. With a Dragon Head, your fire power increases.`,
    },
    {
      "Note":`Using the Dragon Stone will activate an ability similar to Miracle: Force, knocking back opponents.`,
      "Note2":`Using the Dragon Stone will activate an ability similar to Miracle: Force, knocking back opponents.`,
      "Note3":`Also for a few seconds, your attack strength will increase 25%.`,
      "Note4":`Like with the Dragon Head, the effect will last until you die.`,
      "Note5":`The plunging attack also differs from the norm when in dragon form, having both claws facing downward.`,
      "Note6":`Covenant related: Path of the Dragon`,
    },
    {
      "Note":`This internal timer is a fail safe so that people aren't constantly invaded.`,
      "Note2":`Can be used multiple times without consumption.`,
      "Note3":`Only one of this item can be held, leaving the player unable to pick it up in the next game cycle.`,
      "Note4":`Since this item is finger with "multiple knuckles" and is "shriveled but still slightly warm", it's possible that it was a piece of an Undead Dragon, a creature that died long ago but is kept alive (thus "warm") even if horribly rotten.`,
    },
    {
      "Note":``,
    },
    {
      "Note":``,
    },
    {
      "Note":`Regeneration rate is approximately 100 HP per second.`,
      "Note2":`Elizabeth's Mushroom is a Self Buff and interferes with other such buffs (i.e. Great Magic Barrier, Transient Curse, Power Within, etc.). As long as it's active it's not possible to cast other Self Buffs and vice versa.`,
    },
    {
      "Note":`Resting at Bonfires will recover your supply of Estus, up to the limit of that particular fire.`,
      "Note2":`The starting number of uses you recover from any normal Bonfire is 5.`,
      "Note3":`Use"Kindle" at a Bonfire, and spend one Humanity point, to increase the amount to 10 for that particular fire.`,
      "Note4":`The Bonfires with a Fire Keeper present are kindled by default, providing 10 flasks.`,
      "Note5":`After acquiring the Rite of Kindling the bonfires can be kindled to 15 and then to 20 Estus uses.`,
      "Note6":`Resting will always provide you with the maximum amount of Estus for that Bonfire.`,
      "Note7":`Drinking Estus will also heal summoned co-op players. This does not apply to summoned NPCs.`,
      "Note8":`Other online players Kindling their bonfires in the same area can grant you a bonus Estus use.`,
      "Note9":`If you have 20 full charges in your bottle already, the number of charges will not increase further.`,
      "Note10":`The Estus Flask can be upgraded with a Fire Keeper Soul, up to +7, to replenish more HP with each charge.`,
      "Note11":`To upgrade it, give Fire Keeper Souls to one of the three known Fire Keepers: Anastacia, the mute girl below Firelink Shrine, The Fair Lady, who resides in Quelaag's Domain, beyond the boss room, and behind an illusionary wall, and the Darkmoon Knightess, leaning against a wall in the room containing the first bonfire in Anor Londo.`,
      "Note12 (Values of heal)":[300,	400,	500,	600,	650,	700,	750,	800],
    },
    {
      "Note":`A black aura appears around the player, indicating the Eye of Death is active.`,
      "Note":`You can't fight any bosses while the Eye of Death is active, but you can walk between areas freely.`,
      "Note":`The effect is removed when you die, or quit and reload the game as well as being summoned, invading via cracked orbs or using homebound or homeward bones.`,
      "Note":`The player can only visit Nito if they have one or more Eye(s) of Death in their inventory.`,
    },
    {
      "Note":`Only one of each Fire Keeper Soul can be carried at a time, but one can also be stored in the Bottomless Box, making it possible to have a total of 14.`,
      "Note2 (Another Game Description)":`Soul of the Ash Maiden, Fire Keeper of Firelink Shrine.
      A Fire Keeper's soul is a draw for humanity, and held within their bosoms, below just a thin layer of skin, are swarms of humanity that writhe and squirm. Was the Ash Maiden locked in this dark prison for some transgression, or by her own will?`,
      "Note3 (Another Game Description)":`Soul of the Darkmoon Knightess, Fire Keeper of Anor Londo.
      A Fire Keeper's soul is a draw for humanity, and held within their bosoms, below just a thin layer of skin, are swarms of humanity that writhe and squirm. Her brass armor serves to disguise this ghastly form.`,
      "Note4 (Another Game Description)":`Soul of a Daughter of Chaos, Fire Keeper of Quelaag's Domain.
      A Fire Keeper's soul is a draw for humanity, and held within their bosoms, below just a thin layer of skin, are swarms of humanity that writhe and squirm. To her, the countless eggs which appeared were cradles for each tiny humanity.`,

    },
    {
      "Note":`Firebombs deal 21 poise damage.`,
      "Note":`Very low price (50 souls apiece) and good damage make them handy in many situations. You can kill the Undead Attack Dogs in Capra Demon's fight with a single bomb, making it much easier to run up the stairs without having to circle around the dogs. Firebombs are also good replacements for Fireorbs/Fireballs when the target is outside the range of these pyromancy spells.`,
    },
    {
      "Note":`Cannot be sold to Kingseeker Frampt if you either jump down the hole he is in or speak to Darkstalker Kaathe`,
    },
    {
      "Note":`Duration: 60 seconds.`,
      "Note2":`May only be used on weapons that are on the standard +1...+15 weapon path and which are not inherently magical.`,
    },
    {
      "Note":`Duration: 60 seconds.`,
      "Note":`Stacks with: Cloranthy Ring, Grass Crest Shield and Mask of the Child.`,
      "Note":`Green Blossom is a Self Buff and interferes with other such buffs (i.e. Great Magic Barrier, Transient Curse, Power Within, etc.). As long as it's active it's not possible to cast other Self Buffs and vice versa.`,
    },
    {
      "Note":`Same effect as the "Homeward" Miracle.`,
      "Note2":`Bonfires were originally used to burn the bones of slaughtered cattle, hence the name; bone-fire.`,
      "Note3":`Homeward Bone is obviously a play on words with the expression "Homeward Bound".`,
    },
    {
      "Note":`Can be traded to Snuggly for a Ring of Sacrifice.`,
      "Note2":`Can be sold to Kingseeker Frampt for 1,000 souls.`,
      "Note3":`The more Humanity one has in the counter by their health bar, the higher some resistances are. `,
      "Note4":`Humanity in the counter also increases Curse resistance to a high degree the more one has. `,
      "Note5":`Humanity also greatly increase Item Discovery hardcapping at 10 Humanity in the counter granting 210 Item Discovery. `,
      "Note6":`Humanity is the primary component of the Chaos upgrade path's power with the max damage bonus being received  at 10 Humanity held in the counter. `,
      "Note7":`A great tactic is to obtain the Dark Hand as soon as one can as NPCs that are Humanoid characters like Petrus hold a good amount of Humanity that can be absorbed.`,
      "Note8":`For characters that are encountered sitting, kicking them with cause  them to stand up. Using the Force Miracle works as well if one fears miss-clicking a kick and attacking said character.`,
      "Note9":`In addition to what is mentioned above, using the Kick maneuver or the Force Miracle deal no damage to said characters and does not incur a sin. Using the Dark Hand's Absorb grab-attack does not deal damage to targets either, however it does cause the NPCs to speak as if they were attacked. This is not a cause for alarm as no damage is being done and it does not incur a sin as long as the grab connects and animation plays.  Make sure to be on even ground and close to the target.`,
      "Note10":`Humanity can be conveniently farmed infinitely at the last bonfire at the end of the Artorias of the Abyss DLC in the final area leading up to Manus, Father of the Abyss. `,
    },
    {
      "Note":`Being indicted gives you +1 sin, and will leave you open to invasions from the Blade of the Dark Moon faction.`,
      "Note2":`If slain by a player in the Blade of the Dark Moon faction, you will get -1 sin, and be notified that the invading player cannot be indicted.`,
      "Note3":`Red phantoms summoned from their Red Sign Soapstone can not be indicted after killing the host.`,
      "Note4":`Forest Hunter and Path of the Dragon members can also be indicted while invading with their covenant item. They will not be added to the Book of the Guilty scoreboard, but will still be open to Darkmoon invasions.`,
      "Note5":`This item is not consumed upon use, so it only needs to be bought once.`,
      "Note6":`The "Indict ...?" prompt goes away if the indictment is discarded.`,
      "Note7":`A host can indict an invader even if killed by something else while the invader is present.`,
    },
    {
      "Note":`The visual effect of the Talisman lasts for 25 seconds. The actual effect lasts for approximately the same length.`,
      "Note2":`Lloyd's Talismans don't block healing from any source other than Estus Flasks, including miracles, Humanity and Divine Blessings.`,
      "Note4":`Throwing a Lloyd's Talisman at a Mimic causes it to go to sleep, allowing the player to collect its item without danger of being attacked.`,
      "Note5":`It is rumored that one can get it very rarely from Giant Clams. However, this is more likely to be related to the drift item mechanics, as it has been reported that dropped items were found on the floor in various areas, including the boss room in the Abyss.`,
    },
    {
      "Note":`The soapstone is not needed to read or rate messages, only to write them.`,
      "Note2":`A message will only be sent to other players while the author of the message is online and connected.`,
      "Note3":`Players can cast six messages at a time, per character.`,
      "Note4":`Cast the Seek Guidance Miracle to see more messages, as well as their ratings. This miracle will also show some helpful developer messages, visible both on- and offline (see seek guidance for details).`,
      "Note5":`There are also tutorial messages scattered around, mostly in the Undead Asylum. These messages can only be read, and are visible both on- and offline.`,
    },
    {
      "Note":`No other usage, from the director of Darks Souls: "When it comes to the pendant, I actually had a little bit of an intention to play a prank."`,
      "Note2":`Hidetaka Miyazaki, dark souls game director, suggested that the player should choose either the Pendant or Nothing as a starting gift. His suggestion set in motion all kinds of speculation on the Pendant's 'true' usage, but no additional effect or usage have yet been discovered.`,
      "Note3":`It is speculated that invaders in Darkroot Garden must have chosen the Pendant as a gift, or in their possession, to drop one upon death.`,
      "Note4":`Based on in-game dialogue (which one ?) the pendant may be an heirloom handed down from the Furtive Pygmy, one of the first to receive a flame. If this is true then both the player (if the item is taken as a starting gift) and/or Reah of Thorolund (her ownership is discovered after certain events) are possibly descendants of the Pygmy.      `,
      "Note4":`Supposedly the player is the descendant of the pygmy, who snuffed his flame in favor of the age of man. Meaning the "bad" ending is really the good ending. And when you consider that Gwynevere seems to be an illusion conjured by Gwyndolin, it seems like she is trying to trick you into disregarding your ancestor's wishes and prolonging the age of Gods, making the "good" ending the bad ending.`,
      "Note5":`Since it has been said that it is impossible to find its use in the first playthrough, maybe it's required to play multiple times with the same pendant on our inventory to unlock its effect. --- LautrecOfCarim`,
      "Note6":`Since it has been said that it is impossible to find its use in the first playthrough, maybe it's required to play multiple times with the same pendant on our inventory to unlock its effect. --- LautrecOfCarim`,
      "Note7":`There's a pendant in Shadow Tower: Abyss for the PS2 as well. Shadow Tower games are first-person action RPGs and just like King's Field, another RPG series by From, they are a sort of a precursor to Demon's Souls and Dark Souls. In one of the game's levels you find an item called "Onyx Pendant" (it's in a chest hidden behind a breakable wall). Its description says "Old-looking item with no obvious value". The pendant proceeds to sit in your inventory till the end of the game as there's absolutely nothing you can do with that thing. You find tons of weapons, equipment and other items throughout the game and every single one of them has a purpose but not the pendant.`,
      "Note8":`A pendant called 'Seath's Tear' can also be found by completing a sub-quest in King's Field (king's field 2 in japan). In that game the pendant actually has a purpose, as it will revive the wearer by offering a statue (idol) of Seath.`,
      "Note9":`Let's see what we know so far; The description says that "fond memories comfort travellers". Reah has one and you get them randomly from forest intruder kills. Reah does not have it on her when she's found praying in front of a statue in Undead Parish. The same statue is found near the Darkmoon Ring and the Sunlight Altar. You can trade it in to Snuggly for a Souvenir of Reprisal. Souvenirs of Reprisal are offerings in the Darkmoon covenant. The description of the pendant matches that of the sunlight medal (could be just a translation error). Please let me know if there are any other connections or clues about the pendant and I'll add it to the list. The only trail I seem to be finding is that it's pointing me in the direction of Gwyn's offsprings or towards "protectors" (Darkmoons and Forest Hunters). Someone pointed out that the pendant also looks dirty or covered in mud. I tried thinking of a way to "wash it off" and thought about dropping it in the Ash Lake. It didn't change anything about it so I decided to quit and reload ala snuggly trade. All that did was make the item disappear. So now I'm stuck with the pendant Reah dropped. I'll try and see if I can do anything special with it in Gwyn's tomb or Gwynevere's chamber.`,
    },
    {
      "Note":``,
    },
    {
      "Note (Prism Colors)":['Purple', 'Yellow', 'Green', 'White', 'Red/Orange', 'Light Cyan', 'Pink', 'Blue', 'Orange/Pink', 'Red', 'Slightly different green'],
    },
    {
      "Note":`Does not remove the Transient Curse effect.`,
    },
    {
      "Note":`The Purple Coward's Crystal has a somewhat long casting animation that can be interrupted by the opponent.`,
    },
    {
      "Note":`Siegmeyer of Catarina gifts a Pierce Shield to the player in Blighttown in exchange for three Purple Moss Clumps.`,
    },
    {
      "Note":`Can invade only players who have not killed the area boss yet.`,
      "Note2":`Can invade anyone with higher level than you or 10% lower level than you.`,
      "Note3":`Humanity is gained when you defeat a 'master of world'`,
      "Note4":`The color of this eye orb is based on the Red Eye Stone, obtained by killing The Maiden in Black in Demon's Souls.`,
      "Note5":`Some believe Darkwraiths to be revolutionaries, defenders of the human race, but they might just be evil Humanity.`,
    },
    {
      "Note":`DEIXA`,
    },
    {
      "Note":`DEIXA`,
    },
    {
      "Note":`DEIXA`,
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
      "Key to the giant door leading out from the uppermost floor of Archive Tower, which now serves as a prison. The key's design resembles not the key of a prison; indeed, the tower was once no prison at all, but a trove of precious tomes.",

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
      "Tool used to etch titanite into armor for reinforcement. Rest at a bonfire to make armor reinforcement possible.",

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
      "Opens the narrow passage leading below at the far face of the great bridge in the Undead Burg. The lower Undead Burg is a treacherous place. Do not turn your back on the wily thieves, or the wild dogs who serve the Capra Demon.",

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
      "Key to the inner door of the Undead Asylum main hall. Big key belonging to a chosen Undead pilgrim. But this chosen Undead knows not what this pilgrimage has in store.",

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
      "Key to Blighttown from the Depths of the Undead Burg. Swallowed by the Gaping Dragon. As its name suggests, Blighttown is a place of great pestilence. Even the polluted inhabitants of the Depths are aware of its dangers, and built this mighty door in hopes that they could remain safely separated.",

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
      " peculiar bottomless wooden box. Its origins are unknown. Some deride it as a symbol of unbrideled avarice. Any number of items can be deposited into the box, and items can be managed while resting at a Bonfire.",

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
      "Half of a broken stone pendant. The vine appears to originate from Oolacile. A powerful magic can be sensed from this ancient stone. Yet men of this time can neither manipulate nor sense its power, which has distinct air consisting of both reverence and nostalgia.",

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
      "Key to the hanging cage in Sen's Fortress. If a hapless adventurer becomes fatigued during an imprudent attempt to overcome the fortress, the serpent men will not kill him, but lock him up in a lonely cage. Eventually, unless they have forgotten, they drag the victim off to who-knows-where.",

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
      "Bent Crest Key. The grooves of the crest are enchanted, the door sealed with a powerful spell.",
      

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
      "This crest opens a door in the Darkroot Garden sealed by ancient magic. The door leads to the grave of Sir Artorias the Abysswalker. Many adventurers have left for the grave,but none have returned, for they make easy prey for local bandits. With such dangers, the crest can do more harm than good in the hands of the uninitiated.",
      

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
      "Key to the dungeon of the Undead Asylum to the North. A mysterious knight, without saying a word, shoved a corpse down into the cell, and on its person was this key. Who was this knight? And what was his purpose? There may be no answer, but one must still forge ahead.",
      

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
    "Key opening the door from the lower Undead Burg to the Depths. Those banished from the Undead Burg eke out their existence in the Depths, a damp lair with no trace of sunlight. Nearly half of the Depths form a perilous flooded labyrinth.",
      

    GeneralInformation: "The Key to Depths is a key in Dark Souls that allows access to the Depths.",

    Type: "Key",

    Availability: location[26],

    Usage: usage[26],

    Notes: notes[26],
  },
  {
    Name: "KEY TO NEW LONDO RUINS",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/c/c6/Key_to_New_Londo_Ruins.png/revision/latest?cb=20120901100800",

    InGameDescription:
      "Key to the iron bars separating the ruins of New Londo and Drake Valley. The ruins of New Londo were blocked off, for the cursed ghosts posed danger to life and spirit, and the legends speak of a terrible Dark that was sealed away.",
      

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
      "Key to the floodgates of New Londo, which seal away the Four Kings who fell to Dark. The Sealers flooded New Londo to banish the Darkwraiths and the Four Kings. The agonizing decision was made with the realization that countless lives, and the robust culture of the city, would be lost. The victims now roam the ruins as ghosts.",
      

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
      "This universal key opens any basic lock. Tool of the trade for thieves. But in the cursed land of the Undead, most doors are left unopened.",
      

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
      "The purpose of this key is unknown. Resembles a basic prison cell key.",
      

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
      "A strange doll in strange dress. There once was an abomination who had no place in this world. She clutched this doll tightly, and eventually was drawn into a cold and lonely painted world.",
      

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
      "Specialized mortar used to repair weapons and armor by grinding repair powder. Rest at a bonfire to make weapon and armor repair possible. Repair powder is fragile and cannot be taken along.",
      

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
      "Key to a residence in the Undead Burg. Simple, sturdy design of the locks in the Burg keep out unwanted visitors. But this is a standard key in these parts, and will open several residences.",
      

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
      "Key to the sewer chamber in the Depths. In any community, a few bad apples are sure to exhibit insatiable greed. If they were turned Undead, and banished to the Depths, would they reconsider their ways? Use this key to see for yourself.",
      

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
      "Key to the iron bars on the east side of the second floor of the North Undead Asylum. The Undead Asylum is a giant Undead prison, segmented by countless iron bars. Even if an Undead were to escape from a cell, passage to the outside world would not be gained easily.",
      

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
      "Key to the iron bars on the west side of the second floor of the North Undead Asylum. The Undead Asylum is a giant Undead prison, segmented by countless iron bars. But even if a hero found a key in Lordran to liberate this prison, would he have the means, or the heart, to ever come back?",
      

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
      "Key to the basement of the watchtower in the Undead Burg. The basement of the watchtower forms a stone cell. There are rumors of a hero turned Hollow who was locked away by a dear friend. For his own good, of course.",
      

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
      "Tools used to etch titanite into weapons for reinforcement. Rest at a bonfire to make weapon reinforcement possible.",
      

    GeneralInformation: "The Weapon Smithbox is a weapon modification tool in Dark Souls.",

    Type: "Key",

    Availability: location[38],

    Usage: usage[38],

    Notes: notes[38],
  },
  {
    Name: "AFFIDAVIT",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/3/35/Affidavit.png/revision/latest?cb=20200808010739",

    InGameDescription:
      "Slip sold by bishop of Velka, Goddess of Sin. Annul a covenant without committing sin. A covenant is a most sacred union, normally not subject to negotiation, but when circumstances require it, even Goddess Velka will make an exception.",
      

    GeneralInformation: "The Affidavit is an item that was originally intended to be in Dark Souls, but was removed from the final release.",

    Type: "Miscellaneous",

    Availability: location[39],

    Usage: usage[39],

    Notes: notes[39],
  },
  {
    Name: "ALLURING SKULL",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/b/b4/Alluring_Skull.png/revision/latest?cb=20200810114906",

    InGameDescription:
      "A skull with meekly lingering souls. Throw to shatter and spread souls to attract certain types of enemies. Souls are a concentration of life, and the life-starved Hollows are lured by its power. Not effective for all enemies.",
      

    GeneralInformation: "Alluring Skulls are offensive items in Dark Souls.",

    Type: "Projectil",

    Availability: location[40],

    Usage: usage[40],

    Notes: notes[40],
  },
  {
    Name: "BINOCULARS",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/c/cb/Item_Binoculars.png/revision/latest?cb=20120306113822",

    InGameDescription:
      "Binoculars made of brass. Use to peer at distant scenery. This advanced device was built by a famous craftsman of Astora. Its utility is singular, but its applications many. The value of these specs depends greatly on the imagination of their owner.",
      

    GeneralInformation: "The Binoculars are a possible starting gift and lootable item in Dark Souls.",

    Type: "Miscellaneous",

    Availability: location[41],

    Usage: usage[41],

    Notes: notes[41],
  },
  {
    Name: "BLACK EYE ORB",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/41/Black_Eye_Orb.png/revision/latest?cb=20121005182118",

    InGameDescription:
      "Mystical orb found on a Keeper's corpse. Invade the world of the murderer of a Fire Keeper, to defeat the perpetrator and reclaim the soul of the Fire Keeper.The Black Eye keeps constant watch on the city of the Gods, Anor Londo.",
      

    GeneralInformation: "The Black Eye Orb is a summon item in Dark Souls.",
    
    Type: "Miscellaneous",

    Availability: location[42],

    Usage: usage[42],

    Notes: notes[42],
  },
  {
    Name: "BLACK FIREBOMB",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/b/b6/Black_firebomb.png/revision/latest?cb=20121018140034",

    InGameDescription:
      "Black bisque urn filled with black powder. Explodes, inflicting fire damage. Powerful ranged weapon, especially in situations called for fire damage. A very precious item at low levels. Black Firebombs are especially destructive.",
      

    GeneralInformation: "Black Firebombs are offensive items in Dark Souls. They are projectile weapons and are more powerful variants of Firebombs.",

    Type: "Projectil",

    Availability: location[43],

    Usage: usage[43],

    Notes: notes[43],
  },

  {
    Name: "BLACK SEPARATION CRYSTAL",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/2/2b/Black_Separation_Crystal.jpg/revision/latest?cb=20121115005918",

    InGameDescription:
      "This black crystal, long a symbol of farewell, is granted to banished Undead. The crystal sends phantoms back to their homes, or sends you back to yours. Beware of fickle use of the item if you intend to nurture relations.",
      

    GeneralInformation: "The Black Separation Crystal is an online play item in Dark Souls.",

    Type: "Miscellaneous",

    Availability: location[44],

    Usage: usage[44],

    Notes: notes[44],
  },

  {
    Name: "BLOODRED MOSS CLUMP",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/0b/Bloodred_Moss_Clump.png/revision/latest?cb=20121023194615",

    InGameDescription:
      "Medicinal red moss clump. Reduces bleeding build-up. Bleeding builds up when attacked by sharp blades or spikes, and once triggered causes severe damage. Use this moss clump before it reaches this point.",
      

    GeneralInformation: "Bloodred Moss Clumps are restorative items in Dark Souls.",

    Type: "Consumables",

    Availability: location[45],

    Usage: usage[45],

    Notes: notes[45],
  },
  {
    Name: "BLOOMING PURPLE MOSS CLUMP",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/2/2c/Item_Blooming_Purple_Moss_Clump.png/revision/latest?cb=20120308063515",

    InGameDescription:
      "Potently medicinal moss clump with a flower. Reduces poison and toxin. Restores status. Toxin is a more vicious form of poison which quickly leads to death. Moss clumps without a flower are useless against toxin, and a lack of these moss clumps could lead to an early demise.",
      

    GeneralInformation: "Blooming Purple Moss Clumps are restorative items in Dark Souls.",

    Type: "Consumables",

    Availability: location[46],

    Usage: usage[46],

    Notes: notes[46],
  },
  {
    Name: "BLUE EYE ORB",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/06/Blue_Eye_Orb.png/revision/latest?cb=20121007212221",

    InGameDescription:
      "Online play item. Invade world of player in Book of the Guilty. Subdue player to acquire Souvenir of Reprisal. (Only Covenanter can use the item) These mystical orbs are granted to Blades of the Darkmoon, knights who serve the Dark Sun Gwyndolin, so that they may serve the Gods in meting out vengeance.",
      

    GeneralInformation: "The Blue Eye Orb is an online play item in Dark Souls.",

    Type: "Multiplayer Item",

    Availability: location[47],

    Usage: usage[47],

    Notes: notes[47],
  },
  {
    Name: "BOOK OF THE GUILTY",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/5/5f/2009.png/revision/latest?cb=20121008202844",

    InGameDescription:
      "Online play item. Check list of indicted players. The Goddess of Sin Velka oversees this list of the guilty, who have disrespected the Gods or their covenants, and shall one day face the wrath of the Blades of the Darkmoon.",
      

    GeneralInformation: "The Book of the Guilty is an online play item in Dark Souls.",

    Type: "Multiplayer Item",

    Availability: location[48],

    Usage: usage[48],

    Notes: notes[48],
  },
  {
    Name: "HELLO CARVING",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/43/Hello_Carving.png/revision/latest?cb=20200810123323",

    InGameDescription:
      `Head carved of archtrees by Gough in his imprisonment. Gough imparts an emotion to each and every completed carving, which helps him achieve personal enlightenment. When a head is disturbed, it speaks, reflecting the emotion conferred to it. This head says "Hello". Have another look. Do you sense the amicability in its eyes?`,
      

    GeneralInformation: "Carvings are a set of miscellaneous items in Dark Souls. They are only available in the Artorias of the Abyss DLC.",

    Type: "Carving",

    Availability: location[49],

    Usage: usage[49],

    Notes: notes[49],
  },
  {
    Name: "HELP ME! CARVING",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/5/54/Help_Me%21_Carving.png/revision/latest?cb=20121211053639",

    InGameDescription:
      `Head carved of archtrees by Gough in his imprisonment. Gough imparts an emotion to each and every completed carving, which helps him achieve personal enlightenment. When a head is disturbed, it speaks, reflecting the emotion conferred to it. This head says "Help me!". Look again. Can you hear the desperate plea?`,
      

    GeneralInformation: "Carvings are a set of miscellaneous items in Dark Souls. They are only available in the Artorias of the Abyss DLC.",

    Type: "Carving",

    Availability: location[50],

    Usage: usage[50],

    Notes: notes[50],
  },
  {
    Name: "I'M SORRY CARVING",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/ae/I%27m_Sorry_Carving.png/revision/latest?cb=20200810123321",

    InGameDescription:
      `Head carved of archtrees by Gough in his imprisonment. Gough imparts an emotion to each and every completed carving, which helps him achieve personal enlightenment. When a head is disturbed, it speaks, reflecting the emotion conferred to it. This head says "I'm Sorry". Have another look. Isn't that an expression of atonement?`,
      

    GeneralInformation: "Carvings are a set of miscellaneous items in Dark Souls. They are only available in the Artorias of the Abyss DLC.",

    Type: "Carving",

    Availability: location[51],

    Usage: usage[51],

    Notes: notes[51],
  },
  {
    Name: "THANK YOU CARVING",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/9/98/Thank_You_Carving.png/revision/latest?cb=20200810123320",

    InGameDescription:
      `Head carved of archtrees by Gough in his imprisonment. Gough imparts an emotion to each and every completed carving, which helps him achieve personal enlightenment. When a head is disturbed, it speaks, reflecting the emotion conferred to it. This head says "Thank you". Have another look. Is this not the face of gratitude?`,
      

    GeneralInformation: "Carvings are a set of miscellaneous items in Dark Souls. They are only available in the Artorias of the Abyss DLC.",

    Type: "Carving",

    Availability: location[52],

    Usage: usage[52],

    Notes: notes[52],
  },
  {
    Name: "VERY GOOD CARVING",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/e/ee/Very_Good%21_Carving.png/revision/latest?cb=20200810123322",

    InGameDescription:
      `Head carved of archtrees by Gough in his imprisonment. Gough imparts an emotion to each and every completed carving, which helps him achieve personal enlightenment. When a head is disturbed, it speaks, reflecting the emotion conferred to it. This head says "Very Good!". Have another look. Does it not appear quite jovial?`,
      
    GeneralInformation: "Carvings are a set of miscellaneous items in Dark Souls. They are only available in the Artorias of the Abyss DLC.",

    Type: "Carving",

    Availability: location[53],

    Usage: usage[53],

    Notes: notes[53],
  },
  {
    Name: "CHARCOAL PINE RESIN",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/1/1d/Charcoal_Pine_Resin.png/revision/latest?cb=20130407035224",

    InGameDescription:
      `Black charcoal-like pine resin. Applies fire to right-hand weapon.
      Affected weapon inflicts fire damage for a short time. Particularly effective against corporeal creatures and Undead, who have an instinctual fear of fire.`,
      

    GeneralInformation: `The Charcoal Pine Resin is an offensive item in Dark Souls.`,

    Type: "Consumables",

    Availability: location[54],

    Usage: usage[54],

    Notes: notes[54],
  },
  {
    Name: `COPPER COIN
    `,

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/0/05/Coppercoin.png/revision/latest?cb=20121002231620",

    InGameDescription:
      `Coin made of copper. Its face shows Old Man McLoyf, god of medicine and drink.
      Even coins of great value in the world often have little value in Lordran, where the accepted currency is souls.
      Those who dream of returning to the outside world are fond of carrying these around.`,
      

    GeneralInformation: `The Copper Coin is an item in Dark Souls.
    `,

    Type: "Miscellaneous",

    Availability: location[55],

    Usage: usage[55],

    Notes: notes[55],
  },
  {
    Name: `CRACKED RED EYE ORB
    `,

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/1/13/Item_Cracked_Red_Eye_Orb.png/revision/latest?cb=20120308063556",

    InGameDescription:
      `Online play item. Invade another world. (Hollows cannot use the item)
      Defeat the master of the world you have invaded to acquire humanity.
      The Cracked Red Eye Orb allows players to temporarily imitate this ability normally limited to the Darkwraiths of Kaathe.`,
      

    GeneralInformation: `Cracked Red Eye Orbs are online play items in Dark Souls.

    `,

    Type: "Multiplayer Item",

    Availability: location[56],

    Usage: usage[56],

    Notes: notes[56],
  },
  {
    Name: "DARKSIGN",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/4/4c/Darksign.png/revision/latest?cb=20121005093801",

    InGameDescription:
      `The Darksign signifies an accursed Undead. Those branded with it are reborn after death, but will one day lose their mind and go Hollow.
      Death triggers the Darksign, which returns its bearer to the last bonfire rested at, but at the cost of all humanity and souls.`,
      

    GeneralInformation: `The Darksign is an item in Dark Souls.`,

    Type: "Miscellaneous",

    Availability: location[57],

    Usage: usage[57],

    Notes: notes[57],
  },
  {
    Name: `DIVINE BLESSING
    `,

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/aa/Item_Divine_Blessing.png/revision/latest?cb=20120308064935",

    InGameDescription:
      `Holy Water from the Goddess Gwynevere. Fully restore HP and undo irregularities.
      The Goddess of Sunlight, Gwynevere, daughter of the great Lord of Sunlight Gwyn, is cherished by all as a symbol of bounty and fertility.`,
      

    GeneralInformation: `Divine Blessings are restorative items in Dark Souls.

    `,

    Type: "Consumable",

    Availability: location[58],

    Usage: usage[58],

    Notes: notes[58],
  },
  {
    Name: `DRAGON EYE
    `,

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/a/ab/Dragon_Eye.png/revision/latest?cb=20121211052302",

    InGameDescription:
      `Online play item. Find a player who has acquired a Dragon Scale and invade that player's world to pillage it. (Only Covenanter can use the item).
      An art of the transcendent apostles who pray to the ancient dragons. To be alive is to be vulnerable, and the fiery Gods are no exception. The apostles seek another plane of existence, which transcends life.`,
      

    GeneralInformation: `The Dragon Eye is an online play item in Dark Souls.

`,

    Type: "Multiplayer Item",

    Availability: location[59],

    Usage: usage[59],

    Notes: notes[59],
  },
  {
    Name: "DRAGON HEAD STONE",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/6/61/Dragon_Headstone.png/revision/latest?cb=20121005094308",

    InGameDescription:
      `Stone imbued with the power of the dragons. Rite of apostles of the ancient dragons. Gain head of dragon. Emit dragon breath.
      The dragon apostles seek transcendence of life itself, attainable by transformation into an ancient dragon. This rite is only one step, but it cannot be reversed until death.`,
      

    GeneralInformation: `The Dragon Head Stone is an offensive item in Dark Souls.`,

    Type: "Miscellaneous",

    Availability: location[60],

    Usage: usage[60],

    Notes: notes[60],
  },
  {
    Name: "DRAGON TORSO STONE",

    Image:
      "https://static.wikia.nocookie.net/darksouls/images/8/8c/Dragon_Torso_Stone.png/revision/latest?cb=20121005012648",

    InGameDescription:
      `Stone imbued with the power of the dragons. Rite of apostles of the ancient dragons. Gain torso of dragon. Roar like a dragon.
      The dragon apostles seek transcendence of life itself, attainable by transformation into an ancient dragon. This rite is only one step, but it cannot be reversed until death.`,
      

    GeneralInformation: `The Dragon Torso Stone is an offensive item in Dark Souls.`,

    Type: "Miscellaneous",

    Availability: location[61],

    Usage: usage[61],

    Notes: notes[61],
  },
  {
    Name: `DRIED FINGER
    `,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/2/27/Dried_Finger.png/revision/latest?cb=20111210230840`,

    InGameDescription:
      `Dried finger with multiple knuckles.
      Shriveled but still slightly warm. With this many knuckles, surely it cannot belong to anything human.`,
      

    GeneralInformation: `The Dried Finger is an online play item in Dark Souls.

    `,

    Type: `Multiplayer Item`,

    Availability: location[62],

    Usage: usage[62],

    Notes: notes[62],
  },
  {
    Name: `DUNG PIE
      `,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/5/58/Item_Dung_Pie.png/revision/latest?cb=20120308063730`,

    InGameDescription:
      `Atrocious fecal waste material. Throw at enemy to build up toxins, but also builds up your toxicity,
      Although the stench makes it difficult to carry on one's person, turning an enemy toxic inflicts high damage over a period of time.`,
      

    GeneralInformation: `Dung Pies are offensive items in Dark Souls.
    `,

    Type: `Projectiles`,

    Availability: location[63],

    Usage: usage[63],

    Notes: notes[63],
  },
  {
    Name: `EGG VERMIFUGE
    `,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/1/18/Egg_vermifuge.png/revision/latest?cb=20121023200115`,

    InGameDescription:
      `Bitter, sour chestnut. Removes parasitic egg from body.
      The egg-bearers have chosen to serve the Flame of Chaos, and the eggs symbolize this selfless choice.
      Naturally, these chestnuts are forbidden, but are allowed under certain circumstances.`,
      

    GeneralInformation: `Egg Vermifuges are restorative items in Dark Souls.
    `,

    Type: `Consumable`,

    Availability: location[64],

    Usage: usage[64],

    Notes: notes[64],
  },
  {
    Name: `ELIZABETH'S MUSHROOM`,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/b/b9/Elizabeth%27s_Mushroom.png/revision/latest?cb=20121211052518`,

    InGameDescription:
      `Large medicinal mushroom of Elizabeth, keeper of the sanctuary.
      Eating this mushroom invigorates the flesh, and greatly restores HP for a limited duration.
      Its dramatic effect can make the difference between a warrior's life and death.`,
      

    GeneralInformation: `Elizabeth's Mushrooms are restorative items in Dark Souls. They are only available in the AotA DLC.

    `,

    Type: `Consumable`,

    Availability: location[65],

    Usage: usage[65],

    Notes: notes[65],
  },
  {
    Name: `ESTUS FLASK (DARK SOULS)
    `,
    Image:
      `https://static.wikia.nocookie.net/darksouls/images/7/78/Item_Estus_Flask.png/revision/latest?cb=20120412071752`,
    InGameDescription:
      `The Undead treasure these dull green flasks. Fill with Estus at bonfire. Fills HP. The Estus Flasks are linked to the Fire Keepers. The Dark Tales also make reference:
      An emerald flask, from the Keeper's soul
      She lives to protect the flame,
      And dies to protect it further.`,
    GeneralInformation: `Estus Flasks are restorative items in Dark Souls.

    `,
    Type: `Consumable`,
    Availability: location[66],
    Usage: usage[66],
    Notes: notes[66],
  },
  {
    Name: `EYE OF DEATH`,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/9/9b/Eye_of_Death.png/revision/latest?cb=20121211052645`,

    InGameDescription:
      `Online play item. Lure phantoms from other worlds. (Only Covenanter can use the item while Hollows cannot)
      The dreadful Eyes of Death spread disaster across neighboring worlds. Phantoms lured to the host world may end up as victims, allowing the Eyes of Death to multiply, and leading to further proliferation of bane.`,
      

    GeneralInformation: `Eyes of Death are online play items in Dark Souls.`,

    Type: `Multiplayer Item`,

    Availability: location[67],

    Usage: usage[67],

    Notes: notes[67],
  },
  {
    Name: `FIRE KEEPER SOUL`,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/a/ac/2130.png/revision/latest?cb=20120124035945`,

    InGameDescription:
      `Soul of a long-lost Fire Keeper. Each Fire Keeper is a corporeal manifestation of her bonfire, and a draw for the humanity which is offered to her. Her soul is gnawed by infinite humanity, and can boost the power of the precious Estus Flask. Reinforced Estus Flasks capture denser Estus, allowing for increased restoration of HP.`,
      

    GeneralInformation: `Fire Keeper Souls are restorative items in Dark Souls.`,

    Type: `Consumable`,

    Availability: location[68],

    Usage: usage[68],

    Notes: notes[68],
  },
  {
    Name: `FIREBOMB
    `,

    Image:
      `https://static.wikia.nocookie.net/darksouls/images/b/b0/Firebomb.png/revision/latest?cb=20160526213656`,

    InGameDescription:
      `Bisque urn filled with black powder. Explodes, inflicting fire damage.
      Relatively powerful ranged weapon, especially in situations calling for fire damage. A very precious item for low levels.
      Many warriors use these to augment their strategic repertoire.`,
      

    GeneralInformation: `Firebombs are offensive items in Dark Souls. They are used for ranged attacks, and inflict fire damage.`,

    Type: `Projectiles`,

    Availability: location[69],

    Usage: usage[69],

    Notes: notes[69],
  },
  {
    Name: `GOLD COIN`,
    Image:`https://static.wikia.nocookie.net/darksouls/images/1/1f/Gold_Coin.png/revision/latest?cb=20120930091545`,
    InGameDescription: `Coin made of gold, with Allfather Lloyd and his white halo shown on its face. Even coins of great value in the world of men have little value in Lordran, where the accepted currency is souls. Those who dream of returning to the outside world are fond of carrying these around.`,
    GeneralInformation: `Gold Coins are items in Dark Souls.`,
    Type: `Miscellaneous`,
    Availability: location[70],
    Usage: usage[70],
    Notes: notes[70],
  },
  {
    Name: `GOLD PINE RESIN`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/4/40/Item_Gold_Pine_Resin.png/revision/latest?cb=20130407034540`,
    InGameDescription: `Rare pine which emits golden sparks. Applies lightning to right-hand weapon. Affected weapon inflicts rare lightning damage, making it effective against targets which are resilient to both magic and fire. Very effective against dragon family foes.`,
    GeneralInformation: `Gold Pine Resins are offensive items in Dark Souls.`,
    Type: `Consumable`,
    Availability: location[71],
    Usage: usage[71],
    Notes: notes[71],
  },
  {
    Name: `GREEN BLOSSOM`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/8/85/Green_blossom.png/revision/latest?cb=20121018125640`,
    InGameDescription: `Green weed, shaped like a flower. Temporary boost to stamina recovery speed. This uniquely bitter, biting herb is sometimes harvested in large quantities but normally it is an annual plant found near water.`,
    GeneralInformation: `The Green Blossom is a restorative item in Dark Souls.`,
    Type: `Consumable`,
    Availability: location[72],
    Usage: usage[72],
    Notes: notes[72],
  },
  {
    Name: `HOMEWARD BONE`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/a/ab/Homeward_Bone.png/revision/latest?cb=20121211053925`,
    InGameDescription: `Bone fragment reduced to white ash. Return to last bonfire used for resting. Bonfires are fueled by the bones of the Undead. In rare cases, the strong urge of their previous owner's [sic] to seek bonfires enchants their bones with a homeward instinct.`,
    GeneralInformation: `Homeward Bones are miscellaneous items in Dark Souls.`,
    Type: `Consumable`,  
    Availability: location[73],
    Usage: usage[73],
    Notes: notes[73],
  },
  {
    Name: `HUMANITY (ITEM)`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/8/89/Item_Humanity.png/revision/latest?cb=20120306111417`,
    InGameDescription: `Rare tiny black sprite found on corpses. Use to gain 1 humanity and restore a large amount of HP. This black sprite is called humanity, but little is known about its true nature. If the soul is the source of all life, then what distinguishes the humanity we hold within ourselves?`,
    GeneralInformation: `Humanity is a restorative item in Dark Souls. It is also commonly known as solid humanity, to distinguish it from its liquid form.`,
    Type: `Consumable`,
    Availability: location[74],
    Usage: usage[74],
    Notes: notes[74],
  },
  {
    Name: `INDICTMENT`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/8/8f/Indictment.png/revision/latest?cb=20200808011534`,
    InGameDescription: `Slip sold by bishop of Velka, Goddess of Sin. If you are killed by an invader, use this to report the crime of the trespasser. The indicted player will be added to a list of unfortunate souls who will one day face the wrath of the Blades of the Darkmoon.`,
    GeneralInformation: `Indictments are online play items in Dark Souls.`,
    Type: `Multiplayer Item`,
    Availability: location[75],
    Usage: usage[75],
    Notes: notes[75],
  },
  {
    Name: `LLOYD'S TALISMAN`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/5/54/Lloyds_Talisman.png/revision/latest?cb=20121002231505`,
    InGameDescription: `Talisman utilized by Allfather Lloyd's cleric knights to hunt down the Undead.
    Blocks Estus recovery within a limited area. In the outside world, the Undead are accursed creatures, and Lloyd's cleric knights are widely praised for their Undead hunts. This blessed talisman blocks Undead recovery, allowing the knights to fight with impunity.`,
    GeneralInformation: `Lloyd's Talismans are offensive items in Dark Souls.`,
    Type: `Projectiles`,
    Availability: location[76],
    Usage: usage[76],
    Notes: notes[76],
  },
  {
    Name: `ORANGE GUIDANCE SOAPSTONE`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/6/61/Guidance_Soapstone.png/revision/latest?cb=20121004033007`,
    InGameDescription: `Online play item. Write/view/rate message. Messages transmit to other worlds, where they are rated. Also, rate messages of others. In Lordran, the flow of time is distorted, and messages allow Undead to assist (or deceive) one another.`,
    GeneralInformation: `The Orange Guidance Soapstone is an online play item in Dark Souls.`,
    Type: `Multiplayer Item`,
    Availability: location[77],
    Usage: usage[77],
    Notes: notes[77],
  },
  {
    Name: `PENDANT`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/e/ee/Item_Pendant.png/revision/latest?cb=20120308064243`,
    InGameDescription: `A simple pendant with no effect. Even so, pleasant memories are crucial to survival on arduous journeys.`,
    GeneralInformation: `The Pendant is a miscellaneous item in Dark Souls. It is one of the starting gifts.`,
    Type: `Miscellaneous`,
    Availability: location[78],
    Usage: usage[78],
    Notes: notes[78],
  },
  {
    Name: `POISON THROWING KNIFE`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/f/f8/Poison_Throwing_Knife.png/revision/latest?cb=20121220011942`,
    InGameDescription: `Throwing knives have limited range and accuracy compared to arrows, but offer a quick-and-easy ranged attack. When a foe is poisoned, it will continually take damage over a period of time.`,
    GeneralInformation: `The Poison Throwing Knife is an offensive item in Dark Souls.`,
    Type: `Projectiles`,
    Availability: location[79],
    Usage: usage[79],
    Notes: notes[79],
  },
  {
    Name: `PRISM STONE (DARK SOULS)`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/0/01/Item_Prism_Stone.png/revision/latest?cb=20120308064409`,
    InGameDescription: `Warm pebble emitting a beautiful phasing aura of seven colors, with a very rare eighth. The rainbow stone does nothing special, but can serve as a path marker, and can be dropped off a cliff to judge height by the sound of descent. If a loud noise is heard upon its landing, then a fall off the ledge is surely lethal.`,
    GeneralInformation: `Prism Stones are miscellaneous items in Dark Souls.`,
    Type: `Consumable`,
    Availability: location[80],
    Usage: usage[80],
    Notes: notes[80],
  },
  {
    Name: `PURGING STONE`,
    Image: `https://darksouls.wiki.fextralife.com/file/Dark-Souls/2019.png`,
    InGameDescription: `Ash-colored stone encasing a skull. Secret treasure of Arstor, the Earl of Carim. Reduces curse build-up and breaks curse. Humans are helpless against curses, and can only redirect their influence. The Purging Stone does not dispel curses, but receives them as a surrogate. The stone itself was once a person or some other being.`,
    GeneralInformation: `Purging Stones are restorative items in Dark Souls.`,
    Type: `Consumable`,
    Availability: location[81],
    Usage: usage[81],
    Notes: notes[81],
  },
  {
    Name: `PURPLE COWARD'S CRYSTAL`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/7/7d/Purple_Coward%27s_Crystal.png/revision/latest?cb=20121211054955`,
    InGameDescription: `Online play item. Quit Battle of Stoicism. (Session ends if host leaves) Victory in this battle once led to ancient Anor Londo, but even in the absence of it's overseer, capitulation is a disgrace. In the name of a warrior's honor, do not quickly resort to the use of this crystal.`,
    GeneralInformation: `The Purple Coward's Crystal is an online play item in Dark Souls. It is exclusive to the Artorias of the Abyss DLC.`,
    Type: `Multiplayer Item`,
    Availability: location[82],
    Usage: usage[82],
    Notes: notes[82],
  },
  {
    Name: `PURPLE MOSS CLUMP`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/c/c4/Purple_moss_clump.png/revision/latest?cb=20121023194922`,
    InGameDescription: `Medicinal purple moss clump. Reduces poison build-up. Cures poison. Poison builds up in the body, and when it breaks out, it causes gradual damage over a period of time. Poison can be exasperating, so be certain to carry the needed quantity of these moss clumps when destined for an afflicted area.`,
    GeneralInformation: `Purple Moss Clumps are restorative items in Dark Souls.`,
    Type: `Consumable`,
    Availability: location[83],
    Usage: usage[83],
    Notes: notes[83],
  },
  {
    Name: `RED EYE ORB`,
    Image: `https://static.wikia.nocookie.net/darksouls/images/5/56/Red_Eye_Orb.png/revision/latest?cb=20160526213149`,
    InGameDescription: `Online play item. Invade another world. (Only Covenanter can use the item while Hollows cannot) Defeat the master of the world you have invaded to acquire humanity. The Darkwraiths of Kaathe use this orb to seek humanity and plunge further into dark. Perhaps they are more human than we?`,
    GeneralInformation: `The Red Eye Orb is an online play item in Dark Souls.`,
    Type: `Multiplayer Item`,
    Availability: location[84],
    Usage: usage[84],
    Notes: notes[84],
  },
  {
    Name: `aa`,
    Image: `aa`,
    InGameDescription: `aa`,
    GeneralInformation: `aa`,
    Type: `aa`,
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