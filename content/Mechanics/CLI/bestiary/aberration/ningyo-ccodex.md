---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/7
- ttrpg-cli/monster/environment/underwater
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/aberration
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ningyo
---
# [Ningyo](Mechanics\CLI\bestiary\aberration/ningyo-ccodex.md)
*Source: Creature Codex p. 278*  

*A small fish bursts from the water and looks frantically about. Wet hair sprays droplets in all directions as it shakes its head to and fro, revealing a human face beneath its oily hair. Eight squirming tentacles writhe where whiskers would be.*

## Curse of the Open Sea

Fishermen scream in horror and release their lines when they pull a ningyo from the sea, not only because of its frightful visage, but also because legend holds that ningyo are harbingers of destruction and ill fortune. A fisherman who takes home a ningyo is cursed with bad luck, and a village which sees one dead upon its shores is marked for doom.

## Flesh of Eternal Youth

Legend tells that anyone who consumes the raw flesh of a ningyo will live forever. The tale goes that a man caught a ningyo and served it as sashimi to his fellow fisherman without realizing what it was. One man noticed that it was a ningyo and, not wishing to offend his host, told his friends to secretly dispose of their meal. One man, drunk on sake, forgot that he put his ningyo sashimi in his pocket and gave it to his adult daughter when he returned home. The daughter ate it and lived with eternal youth, marrying many lovers and watching them die while she remained young. After 800 years, she returned to her hometown and took her own life.

```statblock
"name": "Ningyo (CCodex)"
"size": "Small"
"type": "aberration"
"alignment": "Neutral Evil"
"ac": !!int "15"
"hp": !!int "77"
"hit_dice": "14d6 + 28"
"modifier": !!int "5"
"stats":
  - !!int "8"
  - !!int "21"
  - !!int "15"
  - !!int "14"
  - !!int "11"
  - !!int "7"
"speed": "0 ft., fly 60 ft., swim 60 ft."
"saves":
  - "strength": !!int "2"
  - "dexterity": !!int "8"
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+1"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+3"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+3"
"damage_resistances": "acid, cold, fire, necrotic, poison"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 13"
"languages": "Common, Deep Speech, Aquan"
"cr": "7"
"traits":
  - "desc": "The ningyo can breathe only underwater and can hold its breath for 1\
      \ hour."
    "name": "Aquatic"
  - "desc": "When a creature that the ningyo can see attacks the ningyo and misses,\
      \ the attack is automatically redirected against another creature within 5 feet\
      \ of the ningyo or the attacker. This attack uses the same attack roll."
    "name": "Curse of Ill Fortune"
"actions":
  - "desc": "The ningyo makes four barbed tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +8 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (1d6 + 5) piercing damage plus 5 (1d10) poison damage."
    "name": "Barbed Tentacle"
"reactions":
  - "desc": "When the ningyo takes damage, it can choose to take half the damage instead.\
      \ The ningyo then chooses a creature within 60 feet. The target must succeed\
      \ on a DC 15 Constitution saving throw or have disadvantage until the end of\
      \ its next turn as it is wracked with the pain of the attack."
    "name": "Share Pain"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/ningyo-ccodex.png"
```
^statblock

## Environment

underwater