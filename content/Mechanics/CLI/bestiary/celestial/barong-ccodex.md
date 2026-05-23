---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/17
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial
statblock: inline
statblock-link: "#^statblock"
aliases:
- Barong
---
# [Barong](Mechanics\CLI\bestiary\celestial/barong-ccodex.md)
*Source: Creature Codex p. 49*  

*The king of spirits and leader of a host of celestials, Barong manifests as a large lion with thick, white fur. He wears a red mask and his body is adorned with gilded armor, polished to a mirror finish.*

## Sworn Enemies

Barong has sworn his life to the defeat of his former lover, Rangda, the demon queen of witches. Though he works to spread harmony throughout existence, much of his time is spent countering Rangda's schemes.

## Celestial Allies

Barong is rarely without an entourage of like-minded celestials ready to aid him at a moment's notice. Good-aligned ghosts and wraiths flock to him, particularly those wronged by loved ones or who fell victim to Rangda and the machinations of her worshippers.

```statblock
"name": "Barong (CCodex)"
"size": "Large"
"type": "celestial"
"alignment": "Lawful Good"
"ac": !!int "20"
"ac_class": "natural armor"
"hp": !!int "225"
"hit_dice": "18d10 + 126"
"modifier": !!int "5"
"stats":
  - !!int "25"
  - !!int "20"
  - !!int "25"
  - !!int "18"
  - !!int "23"
  - !!int "22"
"speed": "60 ft., fly 60 ft."
"saves":
  - "constitution": !!int "13"
  - "wisdom": !!int "12"
  - "charisma": !!int "12"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+12"
"damage_resistances": "bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "radiant"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 22"
"languages": "All, telepathy 120 ft."
"cr": "17"
"traits":
  - "desc": "All allies within 30 feet of Barong gain a +6 bonus to saving throws\
      \ as long as Barong is conscious."
    "name": "Aura of Protection"
  - "desc": "Barong's weapon attacks are magical. When he hits with any weapon, the\
      \ weapon deals an extra 18 (4d8) radiant damage (already included below)."
    "name": "Divine Weapons"
  - "desc": "Barong has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Barong has advantage on attack rolls against a creature if at least one\
      \ of his allies is within 5 feet of the creature and the ally isn't [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)."
    "name": "Pack Tactics"
"actions":
  - "desc": "Barong makes two attacks. one with his bite and one with his claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +0 to hit, reach 0 ft., plus 18 (4d8 + 0)\
      \ radiant damage.Melee Weapon Attack: +0 to hit, reach 0 ft., Melee Weapon\
      \ Attack: +13 to hit, reach 5 ft., one target. Hit.11 (1d8 + 7) piercing\
      \ damage"
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +13 to hit, reach 5 ft., one target. *Hit:*\
      \ 10 (1d6 + 7) slashing damage plus 18 (4d8) radiant damage."
    "name": "Claws"
  - "desc": "Barong can summon any combination of 2d4 good-aligned [ghosts](Mechanics/CLI/bestiary/undead/ghost-xmm.md),\
      \ uraeuses  (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p.\
      \ 392), or [couatls](Mechanics/CLI/bestiary/celestial/couatl-xmm.md); 1d4\
      \ temple dogs (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json],\
      \ p. 378), [unicorns](Mechanics/CLI/bestiary/celestial/unicorn-xmm.md), or good-aligned\
      \ [wraiths](Mechanics/CLI/bestiary/undead/wraith-xmm.md); or one buraq (Tome\
      \ of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 48) or [deva](Mechanics/CLI/bestiary/celestial/deva-xmm.md).\
      \ The spirits and celestials appear in unoccupied spaces within 60 feet of Barong\
      \ and act as his allies. They remain for 1 minute or until Barong dismisses\
      \ them as an action."
    "name": "Summon Spirit (1/Day)"
"reactions":
  - "desc": "When a creature makes an attack against Barong or one of his allies within\
      \ 30 feet, Barong grants the target of the attack a +5 bonus to its AC until\
      \ the start of his next turn."
    "name": "Divine Protection"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the barong can expend a use to take one of the following actions. The barong\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Barong makes one claw attack."
    "name": "Claw"
  - "desc": "Each creature he chooses within 30 feet of him can immediately repeat\
      \ a saving throw to end one condition currently affecting it."
    "name": "Enlightening Roar"
  - "desc": "Barong roars a command at one allied undead or celestial within 30 feet\
      \ of him. It can move up to its speed and make one attack as a reaction. The\
      \ creature doesn't provoke an opportunity attack from this movement."
    "name": "Divine Command (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/barong-ccodex.png"
```
^statblock

## Environment

planar