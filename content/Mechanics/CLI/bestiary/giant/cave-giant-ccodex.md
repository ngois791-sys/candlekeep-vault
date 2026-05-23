---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/10
- ttrpg-cli/monster/environment/underground
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/giant
statblock: inline
statblock-link: "#^statblock"
aliases:
- Cave Giant
---
# [Cave Giant](Mechanics\CLI\bestiary\giant/cave-giant-ccodex.md)
*Source: Creature Codex p. 182*  

*This towering hulk stinks of rot and smoke. Its already pale skin is smeared with white ash and daubed with crude designs in old blood. The foul, untanned hide of a cave bear serves as its loincloth. Hunched and long-armed, the giant carries two stone-headed axes, and two massive tusks jut up from its protruding jaw.*

Cave giants are primitive brutes who keep a tribal society built around grisly shamanistic beliefs. They are exclusively carnivores and prefer the flesh of humanoids and other giants above all others. While they can subsist on animal flesh, they consider it disgusting and bad luck, to be undertaken only if absolutely necessary for survival.

## Dwellers in the Deep

Cave giants shun sunlight and fear its touch. The sun's glare slowly turns cave giants to stone. They lurk in tunnels and caves beneath the earth and deep in the hearts of mountains. The brutes make forays into the lands of surface-dwellers that extend beneath the surface, such as dwarven strongholds, in search of meat and sacrifices.

## Brutish and Primal

Cave giants are deeply superstitious and see their shamans as messengers and tools of the spirits. Thus, a charismatic shaman will dominate any given group of cave giants. The giants believe that eating another creature allows them to consume its spirit as well as its flesh and seek to devour as many sentient creatures as possible, especially spellcasters whose power they believe they can steal.

```statblock
"name": "Cave Giant (CCodex)"
"size": "Huge"
"type": "giant"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "natural armor"
"hp": !!int "200"
"hit_dice": "16d12 + 96"
"modifier": !!int "0"
"stats":
  - !!int "27"
  - !!int "10"
  - !!int "22"
  - !!int "8"
  - !!int "13"
  - !!int "6"
"speed": "40 ft."
"saves":
  - "dexterity": !!int "4"
  - "constitution": !!int "10"
  - "wisdom": !!int "5"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+5"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+5"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 15"
"languages": "Giant"
"cr": "10"
"traits":
  - "desc": "If the giant starts its turn in sunlight, it takes 20 radiant damage.\
      \ While in sunlight, it moves at half speed and has disadvantage on attack rolls\
      \ and ability checks. If the giant is reduced to 0 hp while in sunlight, it\
      \ is [petrified](Mechanics/CLI/rules/conditions.md#Petrified)."
    "name": "Sunlight Petrification"
"actions":
  - "desc": "The giant makes three attacks. two with its handaxe and one with its\
      \ tusks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft. or range 20/60 ft.,\
      \ one target. *Hit:* 18 (3d6 + 8) slashing damage."
    "name": "Handaxe"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:*\
      \ 22 (4d6 + 8) slashing damage, and if the target is a Large or smaller creature\
      \ it must succeed on a DC 20 Strength saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Tusks"
  - "desc": "*Ranged Weapon Attack:* +12 to hit, range 60/240 ft., one target. *Hit:*\
      \ 30 (4d10 + 8) bludgeoning damage."
    "name": "Rock"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/giant/token/cave-giant-ccodex.png"
```
^statblock

## Environment

underground