---
title: Home
description: Notes for Call of the Mournland
---
![[_assets/media/drawings/landing.png]]
# Campaign Overview
<!-- QueryToSerialize: TABLE WITHOUT ID file.link as "No.", dateformat(date(date), "yy-MM-dd") as "Date", description as "Synopsis" WHERE contains(lower(type),"session") AND file.name != "New Session Template" SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.link as "No.", dateformat(date(date), "yy-MM-dd") as "Date", description as "Synopsis" WHERE contains(lower(type),"session") AND file.name != "New Session Template" SORT date DESC -->

| No.                      | Date     | Synopsis                                                                   |
| ------------------------ | -------- | -------------------------------------------------------------------------- |
| [[Sessions/015.md\|015]] | 24-07-28 | Cepha's schema, treasure, and an attack by Bonal Geldem's killer.          |
| [[Sessions/014.md\|014]] | 24-07-26 | Puzzling temple "trial" and first meeting with Cepha the green dragon.     |
| [[Sessions/013.md\|013]] | 24-07-14 | Traveling to Cepha's lair after discovering she raided the Dhakaani ruins. |
| [[Sessions/012.md\|012]] | 24-07-07 | Traveling through Darguun, shopping, and Dhakaani Ruins in Khraal.         |
| [[Sessions/011.md\|011]] | 24-06-30 | Kanxith is laid to rest. Bariac Cast-Ironfist is met.                      |
| [[Sessions/010.md\|010]] | 24-06-16 | Exploring Dwarven ruin tombs, where Kanxith falls to jug snakes.           |
| [[Sessions/009.md\|009]] | 24-06-09 | Clearing out magmins for Goblins in ruins to get a schema from a crown.    |
| [[Sessions/008.md\|008]] | 24-06-02 | Five days with Uvlar's mercs, harpies, and payday. Finding Dwarven ruins.  |
| [[Sessions/007.md\|007]] | 24-05-19 | Conflicts on train, arrival at Sterngate, and joining Uvlar's mercenaries. |
| [[Sessions/006.md\|006]] | 24-05-05 | A magebred snake is stealing items aboard the lightning rail train.        |
| [[Sessions/005.md\|005]] | 24-04-21 | Lady d'Vown is told that The Blades made off with the schema - a lie!      |
| [[Sessions/004.md\|004]] | 24-04-14 | Arguth identifies the artefact - a schema for giant mechanical clawed arm. |
| [[Sessions/003.md\|003]] | 24-03-31 | Finding the heirloom and The Blades in the ruins beneath the sewer.        |
| [[Sessions/002.md\|002]] | 24-03-24 | Finding and exploring the sewers in search of the heirloom.                |
| [[Sessions/001.md\|001]] | 24-03-17 | The group meets and takes on a job to find a family heirloom.              |
<!-- SerializedQuery END -->
# The Party
<!-- QueryToSerialize: TABLE player as "Player", description as "Description" FROM "People/Player Characters" WHERE type = "person" AND !deceased SORT file.name ASC -->
<!-- SerializedQuery: TABLE player as "Player", description as "Description" FROM "People/Player Characters" WHERE type = "person" AND !deceased SORT file.name ASC -->

| File                                                                       | Player   | Description                               |
| -------------------------------------------------------------------------- | -------- | ----------------------------------------- |
| [[People/Player Characters/Aya Albata.md\|Aya Albata]]                     | Aly      | Human courier warlock from forgotten past |
| [[People/Player Characters/Bariac Cast-Ironfist.md\|Bariac Cast-Ironfist]] | Montana  | Dwarven chef and cleric of Boldrei        |
| [[People/Player Characters/Nakaya.md\|Nakaya]]                             | Lizz     | White dragonborn ranger from Q'barra      |
| [[People/Player Characters/Petra.md\|Petra]]                               | zorra    | Elven archaeologist wizard from Aerenal   |
| [[People/Player Characters/Rik Roper.md\|Rik Roper]]                       | Hooligan | Kobold investigator from Droaam           |
| [[People/Player Characters/Zinnia Rose.md\|Zinnia Rose]]                   | Spooky   | Glamorous tiefling bard from Thrane       |
<!-- SerializedQuery END -->
# Locations
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Place", nation as "Nation", description as "Description" from "Places" WHERE contains(lower(type),"place") SORT date -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Place", nation as "Nation", description as "Description" from "Places" WHERE contains(lower(type),"place") SORT date -->

| Place         | Nation  | Description                                                   |
| ------------- | ------- | ------------------------------------------------------------- |
| Metrol        | Cyre    | The former capital of Galifar and Cyre, now ruined.           |
| Sharn         | Breland | The most populous city in all of Khorvaire                    |
| Sterngate     | Breland | Fortress at border between Sharn and Darguun                  |
| Rhukaan Draal | Darguun | A sprawling goblinoid metropolis and capital city of Darguun. |
<!-- SerializedQuery END -->
# People
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Name", location as "Location", description as "Description" from "People" WHERE type = "npc" SORT date DESC LIMIT 6 -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Name", location as "Location", description as "Description" from "People" WHERE type = "npc" SORT date DESC LIMIT 6 -->

| Name               | Location  | Description                                              |
| ------------------ | --------- | -------------------------------------------------------- |
| Uvlar              | Sterngate | Bugbear mercenary band captain                           |
| Edrin              | Thrane    | Human cleric of the Church of the Silver Flame           |
| Felicia Bladefall  | \-        | Human merchant from Lightning Rail Train                 |
| Galin Springbranch | Zilagro   | Inquisitive gnome that gifted party bronze dragon scales |
| Victor d'Vadalis   | \-        | Snake handler of House Vadalis from Lightning Rail Train |
| Chester            | Sharn     | Dramatic daelkyr jester stalking Aya in Sharn            |
<!-- SerializedQuery END -->

# Treasure
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Item", owner as "Owner", description as "Description" from "Treasure" WHERE contains(lower(type),"treasure") SORT date DESC LIMIT 6 -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Item", owner as "Owner", description as "Description" from "Treasure" WHERE contains(lower(type),"treasure") SORT date DESC LIMIT 6 -->

| Item                            | Owner | Description                                             |
| ------------------------------- | ----- | ------------------------------------------------------- |
| Ancient Map                     | \-    | Old map discovered in House Cannith ruins beneath Sharn |
| Arcane Corruption Device        | \-    | \-                                                      |
| Bonal's Journal and Signet Ring | \-    | \-                                                      |
| Boots of Elvenkind              | \-    | \-                                                      |
| Brass Dragon Scale              | \-    | \-                                                      |
| Helm of Telepathy               | \-    | \-                                                      |
<!-- SerializedQuery END -->

# Compendium
<!-- QueryToSerialize: TABLE WITHOUT ID file.name as "Creature", location as "Location", description as "Description" from "Compendium" WHERE contains(lower(type),"compendium") SORT date DESC -->
<!-- SerializedQuery: TABLE WITHOUT ID file.name as "Creature", location as "Location", description as "Description" from "Compendium" WHERE contains(lower(type),"compendium") SORT date DESC -->

| Creature          | Location | Description                                                  |
| ----------------- | -------- | ------------------------------------------------------------ |
| Chwinga           | \-       | \-                                                           |
| Clockwork Leech   | \-       | \-                                                           |
| Dolgrim           | \-       | \-                                                           |
| Gibbering Mouther | Khraal   | \-                                                           |
| Kobold            | \-       | \-                                                           |
| Mechanical Dog    | Sharn    | Metallic construct that resembles a canine.                  |
| Ankheg            | \-       | \-                                                           |
| Daelkyr           | \-       | \-                                                           |
| Harpy             | Darguun  | Monstrous humanoid known for its entrancing voice and wings. |
| Manticore         | Darguun  | Large monstrosity with vaguely human face.                   |
| Shifter           | \-       | Humanoids with a bestial aspect                              |
| Warforged         | Sharn    | Humanoid created through artifice                            |
<!-- SerializedQuery END -->
