---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Boot Grabber
---
# [Boot Grabber](Mechanics\CLI\bestiary\aberration/boot-grabber-ccodex.md)
*Source: Creature Codex p. 56*  

*A pair of powerful hands made from a weird transparent substance springs forth from the puddle lying on the cavern floor.*

Boot grabbers are ooze-like aberrant creatures that lie in wait for approaching prey on the floors of dank dungeons, overgrown ruins, and dark caverns.

## Deadly Ambushers

Its transparent, amorphous body means a boot grabber is easily mistaken for a puddle or patch of wet rock, allowing the creature to strike with surprise and grab hold of its victim's legs or feet with its strong hand-shaped appendages. The boot grabber can lure a creature that is reluctant to approach by emitting an unearthly, high-frequency sound. Once it has seized its target, the boot grabber secretes a strong adhesive to stop the hapless creature from pulling free and continues to crush its foe's lower limbs. When the victim finally ceases struggling, the boot grabber flows over the helpless victim's body to start consuming it.

## Creations of Warped Sorcery

Boot grabbers are believed to have been created centuries ago in twisted experiments conducted by deranged arcanists seeking new weapons to use against their rivals. Willing to wield fell sorceries that tapped into the alien power of the Void, these mages carried out all manner of blasphemous research. By melding alien protoplasm harvested from shoggoths (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]) with the dismembered bodies of human captives from a rival magocracy, the wizards created the boot grabber and other foul creatures, before ultimately spawning the first gibbering mouther.

## Shadow Dwellers

Boot grabbers are usually encountered in underground locations on the Material Plane, but they also inhabit the Plane of Shadow, where they are sometimes used by shadow fey nobles as guardians in the tunnels beneath their castles. On both planes, boot grabbers can often be found working in tandem with the alien-looking darkmantles, hunting together and sharing the spoils. These partnerships prove very effective-the darkmantle's darkness aura conceals both creatures' presence, and a target held fast by the boot grabber can readily be engulfed by the darkmantle.

```statblock
"name": "Boot Grabber (CCodex)"
"size": "Small"
"type": "aberration"
"alignment": "Neutral"
"ac": !!int "11"
"hp": !!int "22"
"hit_dice": "4d6 + 8"
"modifier": !!int "1"
"stats":
  - !!int "17"
  - !!int "12"
  - !!int "14"
  - !!int "4"
  - !!int "12"
  - !!int "2"
"speed": "20 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
"damage_resistances": "acid"
"condition_immunities": "[prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft. (blind beyond\
  \ this radius), tremorsense 60 ft., passive Perception 13"
"languages": "Understands but can't speak"
"cr": "1/2"
"traits":
  - "desc": "The boot grabber adheres to anything that touches it. A Large or smaller\
      \ creature adhered to the boot grabber is also [grappled](Mechanics/CLI/rules/conditions.md#Grappled)\
      \ by it (escape DC 13). Ability checks made to escape this grapple have disadvantage."
    "name": "Adhesive"
  - "desc": "The boot grabber can move through a space as narrow as 1 inch wide without\
      \ squeezing."
    "name": "Amorphous"
  - "desc": "While the boot grabber remains motionless, it is indistinguishable from\
      \ a dirty puddle of water."
    "name": "False Appearance"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) bludgeoning damage and the target is subjected to its Adhesive\
      \ trait. Until this grapple ends, the target is [restrained](Mechanics/CLI/rules/conditions.md#Restrained),\
      \ and the boot grabber can't make adhesive hands attacks against other targets."
    "name": "Adhesive Hands"
  - "desc": "The boot grabber targets one creature it can see within 60 feet of it.\
      \ It emits a high frequency humming noise which can only be heard by the target.\
      \ The target must succeed on a DC 11 Wisdom saving throw or move toward the\
      \ boot grabber on its turn by the shortest and most direct route, ending its\
      \ turn when it comes within 5 feet of the boot grabber."
    "name": "Unearthly Hum"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/boot-grabber-ccodex.png"
```
^statblock

## Environment

underground