---
title: Home
description: Notes for Call of the Mournland
---
![[_assets/media/drawings/landing.png]]
# Campaign Overview
<!-- QueryToSerialize: TABLE WITHOUT ID file.link as "No.", dateformat(date(date), "MM-dd") as "Date", description as "Synopsis" WHERE contains(lower(type),"session") AND file.name != "New Session Template" SORT date ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.link as "No.", dateformat(date(date), "MM-dd") as "Date", description as "Synopsis" WHERE contains(lower(type),"session") AND file.name != "New Session Template" SORT date ASC -->

| No.                      | Date  | Synopsis                                                                   |
| ------------------------ | ----- | -------------------------------------------------------------------------- |
| [[001]] | 03-17 | The group meets and takes on a job to find a family heirloom.              |
| [[002]] | 03-24 | Finding and exploring the sewers in search of the heirloom.                |
| [[003]] | 03-31 | Finding the heirloom and The Blades in the ruins beneath the sewer.        |
| [[004]] | 04-14 | Arguth identifies the artefact - a schema for giant mechanical clawed arm. |
| [[005]] | 04-21 | Lady d'Vown is told that The Blades made off with the schema - a lie!      |
| [[006]] | 05-05 | A magebred snake is stealing items aboard the lightning rail train.        |
| [[007]] | 05-19 | Conflicts on train, arrival at Sterngate, and joining Uvlar's mercenaries. |
| [[008]] | 06-02 | Five days with Uvlar's mercs, harpies, and payday. Finding Dwarven ruins.  |
| [[009]] | 06-09 | Clearing out magmins for Goblins in ruins to get a schema from a crown.    |
| [[010]] | 06-16 | Exploring Dwarven ruin tombs, where Kanxith falls to jug snakes.           |
| [[011]] | 06-30 | Kanxith is laid to rest. Bariac Cast-Ironfist is met.                      |
| [[012]] | 07-07 | Traveling through Darguun, shopping, and Dhakaani Ruins in Khraal.         |
| [[013]] | 07-14 | Traveling to Cepha's lair after discovering she raided the Dhakaani ruins. |
| [[014]] | 07-21 | Puzzling temple "trial" and first meeting with Cepha the green dragon.     |
| [[015]] | 07-28 | Cepha's schema, treasure, and an attack by a familiar, unmasked killer.    |
| [[016]] | 08-04 | Traveling, sharing history, and preparing to enter the Mournland.          |
| [[017]] | 08-18 | Through the dead-gray mist and into the horrors of the Mournland.          |
| [[018]] | 09-01 | Remains of a lightning rail station and a battlefield frozen in time.      |
<!-- SerializedQuery END -->

# The Party
---
<!-- QueryToSerialize: TABLE player as "Player", description as "Description" FROM "People/Player Characters" WHERE type = "person" AND !deceased SORT file.name ASC -->
<!-- SerializedQuery: TABLE player as "Player", description as "Description" FROM "People/Player Characters" WHERE type = "person" AND !deceased SORT file.name ASC -->

| File                                                                       | Player   | Description                               |
| -------------------------------------------------------------------------- | -------- | ----------------------------------------- |
| [[Aya Albata]]                     | Aly      | Human courier warlock from forgotten past |
| [[Bariac Cast-Ironfist]] | Montana  | Dwarven chef and cleric from Mror Holds   |
| [[Nakaya]]                             | Lizz     | White dragonborn ranger from Q'barra      |
| [[Petra]]                               | zorra    | Elven archaeologist wizard from Aerenal   |
| [[Rik Roper]]                       | Hooligan | Kobold investigator from Droaam           |
| [[Zinnia Rose]]                   | Spooky   | Glamorous tiefling bard from Cyre         |
<!-- SerializedQuery END -->

# Locations
<!-- QueryToSerialize: TABLE WITHOUT ID title as "Place", nation as "Nation", description as "Description" from "Places" WHERE !draft AND contains(lower(type),"place") SORT date ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID title as "Place", nation as "Nation", description as "Description" from "Places" WHERE !draft AND contains(lower(type),"place") SORT date ASC -->

| Place              | Nation     | Description                                                  |
| ------------------ | ---------- | ------------------------------------------------------------ |
| Aerenal            | Aerenal    | Isolationist Elven island continent to the south             |
| Sharn              | Breland    | The most populous city in all of Khorvaire                   |
| Metrol             | Mournland  | The former capital of Galifar and Cyre, now ruined           |
| Sterngate          | Breland    | Fortress at border between Breland and Darguun               |
| Flamekeep          | Thrane     | The largest city and religious/political heart of Thrane     |
| Trolanport         | Zilargo    | Capital city of Zilargo                                      |
| Rhukaan Draal      | Darguun    | A sprawling goblinoid metropolis and capital city of Darguun |
| Krona Peak         | Mror Holds | \-                                                           |
| Endworld Mountains | Q'barra    | \-                                                           |
<!-- SerializedQuery END -->

# People
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Name", location as "Location", description as "Description" from "People" WHERE type = "npc" SORT date ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Name", location as "Location", description as "Description" from "People" WHERE type = "npc" SORT date ASC -->

| Name                 | Location      | Description                                              |
| -------------------- | ------------- | -------------------------------------------------------- |
| Bonal Geldem         | Sharn         | Human provost of Morgrave University studying history    |
| Lady Elaydren d'Vown | Sharn         | Human noblewoman of House Cannith in Sharn               |
| Mystery Killer       | Sharn         | Killed Bonal Geldem while wearing a warforged mask       |
| Mandy                | Sharn         | Impatient bugbear Daask member                           |
| Nibbur               | Sharn         | Goblin tailor and informant for Rik Roper in Sharn       |
| Skakan               | Sharn         | Goblin "merchant" running a Rat Market in Sharn          |
| Arguth               | Sharn         | Orc artificer and nut salesman in Sharn                  |
| Sergeant Dolom       | Sharn         | Sergeant in Sharn                                        |
| Chester              | Sharn         | Dramatic daelkyr jester stalking Aya in Sharn            |
| Tumrek d'Cannith     | Sharn         | Jolly dwarven artificer, friend of Kanxith's from Sharn  |
| Edrin                | Flamekeep     | Human cleric of the Church of the Silver Flame           |
| Felicia Bladefall    | \-            | Human merchant from Lightning Rail Train                 |
| Galin Springbranch   | Trolanport    | Inquisitive gnome that gifted party bronze dragon scales |
| Victor d'Vadalis     | \-            | Snake handler of House Vadalis from Lightning Rail Train |
| Uvlar                | Sterngate     | Bugbear mercenary band captain                           |
| Haruuc Shaarat'kor   | Rhukaan Draal | Ruler of Darguun                                         |
| Cepha                | Khraal        | Green dragon known as The Scourge of Khraal              |
| Hathar               | Darguun       | Dwarven wayfinder guide into Mournland                   |
| Dal'erna             | Mournland     | Medusa hiker that helped Zinnia after the Mourning       |
| Daneel Thornwaist    | Mournland     | Deceased gnome lightning rail worker from Zilargo.       |
<!-- SerializedQuery END -->

# Treasure
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Item", owner as "Owner", description as "Description" from "Treasure" WHERE contains(lower(type),"treasure") SORT date ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Item", owner as "Owner", description as "Description" from "Treasure" WHERE contains(lower(type),"treasure") SORT date ASC -->

| Item                            | Owner  | Description                                                    |
| ------------------------------- | ------ | -------------------------------------------------------------- |
| Ancient Map                     | Party  | Old map from House Cannith ruins beneath Sharn                 |
| Arcane Corruption Device        | Petra  | Broken arcane device corrupting warforged                      |
| Cannith Journal and Signet Ring | Petra  | Cannith journal and ring taken from Bonal Geldem               |
| Schema                          | Party  | Adamantine artefacts storing ancient artifice schemas          |
| Brass Dragon Scale              | Party  | Gifts from Galin Springbranch                                  |
| Candleflame Bow                 | Nakaya | Longbow with magical candle                                    |
| Bag of Holding                  | Nakaya | Storage bag with magically increased capacity                  |
| Boots of Elvenkind              | Rik    | Boots that magically silence footsteps                         |
| Helm of Telepathy               | Rik    | Cast Detect Thoughts/Suggestion once a day                     |
| Potion of Cloud Giant Strength  | Bariac | Potion that increases Strength to 27 for an hour               |
| Pocketwatch of Time and Place   | Bariac | Pocketwatch that tells time and points north on Material Plane |
<!-- SerializedQuery END -->
# Compendium
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Creature", location as "Location", description as "Description" from "Compendium" WHERE contains(lower(type),"compendium") SORT date ASC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Creature", location as "Location", description as "Description" from "Compendium" WHERE contains(lower(type),"compendium") SORT date ASC -->

| Creature          | Location | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| Warforged         | Sharn    | Humanoid created through artifice                            |
| Harpy             | Darguun  | Monstrous humanoid known for its entrancing voice and wings  |
| Shifter           | Sharn    | Humanoids with a bestial aspect                              |
| Manticore         | Darguun  | Large monstrosity with vaguely human face                    |
| Ankheg            | Darguun  | Large burrowing insectoid creatures                          |
| Daelkyr           | Xoriat   | Extraplanar creatures who appear unnaturally beautiful       |
| Chwinga           | Darguun  | Small, shy spirits found in remote locations                 |
| Clockwork leech   | Darguun  | Clockwork construction with the appearance of enormous leech |
| Dolgrim           | Darguun  | Aberration created by merging two goblin bodies              |
| Gibbering mouther | Darguun  | Incoherent amorphous mounds of flesh and orifices            |
| Kobold            | Darguun  | Small-sized reptilian humanoids                              |
| Mechanical dog    | Sharn    | Metallic construct that resembles a canine                   |
<!-- SerializedQuery END -->
