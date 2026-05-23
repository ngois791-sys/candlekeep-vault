---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/0
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Zoog
---
# [Zoog](Mechanics\CLI\bestiary\aberration/zoog-ccodex.md)
*Source: Creature Codex p. 396*  

*Small, rat-like creatures with wide, startled eyes and a ring of tendrils around their mouths, zoogs travel the world in close-knit family groups, stealing food and pilfering treasures at every opportunity.*

## Intelligent Rodents

While zoogs seem little more than a pest to some, they possess a devious intelligence and a willingness to scheme to their advantage. Their ability to plot and communicate makes them much more dangerous than ordinary rodents. They are willing servants of Chittr'k'k, Demon Lord of Rats (see page 76), and Vardesain, Lord of Ghouls. They are prone to serving dark gods of the Void and Outer Darkness and are very willing to steal, spy, and nibble away ancient bonds and seals as directed by evil wizards, clerics, or monsters.

## Opportunistic Omnivores

Feeding themselves on subterranean flora, they will hunt for meat, particularly from intelligent creatures when they detect it, though their natural cowardice keeps this from happening often. 

## Cat's Bane

Zoogs are mortal enemies of cats, feeding on kittens at any opportunity, and they themselves are stalked by grown cats in turn. Lions, tigers, housecats, [leonino](Mechanics/CLI/bestiary/beast/leonino-ccodex.md) (see page 250) , and sphinxes all take any opportunity to hunt and kill a zoog; they find the creatures' mere presence completely intolerable.

## Great Vault of the Zoog

The chittering of demons sometimes claims that the zoog steal with great purpose, taking all their coppers, single earrings, and snapped necklaces to fill a vault deep within the earth with bright metal in service to a Great Zoog. What the Great Zoog might want with this wealth is a matter of some speculation, but the entire tale may be little more than a shabby stack of copper or a treasury that demons plunder with regularity.

> [!note] Zoog Service to the Void
> 
> The zoog are cowardly and small, but they pave a trail for the dark gods and they know secrets of lost treasures, discarded corpses, and forbidden tomes. Most will willingly share blasphemous and obscene knowledge with those they believe are receptive to the exterminating message of the Void and its cultists. At the same time, they take every scrap of information about lost tomes and ancient evil to their allies, including ToB (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 138), ccodex (see page 409), and the like.
^zoog-service-to-the-void

```statblock
"name": "Zoog (CCodex)"
"size": "Tiny"
"type": "aberration"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"hp": !!int "3"
"hit_dice": "1d4 + 1"
"modifier": !!int "3"
"stats":
  - !!int "3"
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "8"
"speed": "30 ft., climb 30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 12"
"languages": "Deep Speech"
"cr": "0"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 1\
      \ piercing damage."
    "name": "Bite"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/zoog-ccodex.png"
```
^statblock

## Environment

underground, urban