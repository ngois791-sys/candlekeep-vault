---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/16
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Infernal Knight
---
# [Infernal Knight](Mechanics\CLI\bestiary\fiend/infernal-knight-ccodex.md)
*Source: Creature Codex p. 104*  

*The edges of the figure's black armor plates glow red hot with the glare of hellfire leaking from them. The figure's eyes, glowing with that same hellfire, gleam from within its helmet as it swings its mighty sword.*

Few devil souls hold the necessary dedication and temperament to become an infernal knight. The knight is a trusted advisor and servant to a powerful pit fiend or arch-devil.

## Soul Stealer

An infernal knight's most terrifying aspect is its ability to steal the souls of its victims. The devil draws these souls into its dark blade and carries them back to its infernal master.

## Tireless Pursuer

Powerful beings who make contracts with devils sometimes think they can avoid the worst consequences of infernal bargains. Infernal knights exist primarily to prove them wrong. A knight dispatched to reclaim an indebted soul stalks tirelessly across the multiverse in search of its quarry.

## Relentless Nature

An infernal knight doesn't require food, drink, or sleep.

```statblock
"name": "Infernal Knight (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "[plate armor](Mechanics/CLI/items/plate-armor-xphb.md)"
"hp": !!int "247"
"hit_dice": "26d8 + 130"
"modifier": !!int "2"
"stats":
  - !!int "24"
  - !!int "14"
  - !!int "20"
  - !!int "17"
  - !!int "21"
  - !!int "20"
"speed": "30 ft., fly 60 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "10"
  - "wisdom": !!int "10"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+12"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 20"
"languages": "Infernal, telepathy 120 ft."
"cr": "16"
"traits":
  - "desc": "If the infernal knight is given a quarry by its lord, the knight knows\
      \ the direction and distance to its quarry as long as the two of them are on\
      \ the same plane of existence."
    "name": "Faultless Tracker"
  - "desc": "The infernal knight has advantage on saving throws against spells and\
      \ other magical effects."
    "name": "Magic Resistance"
  - "desc": "The infernal knight's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "The infernal knight regains 10 hp at the start of its turn if it has\
      \ at least 1 hp."
    "name": "Regeneration"
"actions":
  - "desc": "The infernal knight makes two melee attacks or uses its Hellfire Bolt\
      \ twice. It can replace one attack with Reave Soul."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 5 ft., one target. *Hit:*\
      \ 14 (2d6 + 7) slashing damage plus 17 (5d6) necrotic damage. A creature\
      \ hit by the sword must succeed on a DC 18 Constitution saving throw or suffer\
      \ disadvantage on attack rolls and ability checks based on Strength or Dexterity\
      \ until the end of its next turn."
    "name": "Greatsword"
  - "desc": "*Ranged Spell Attack:* +10 to hit, range 120 ft., one target. *Hit:*\
      \ 10 (3d6) fire damage plus 17 (5d6) necrotic damage. A creature hit must\
      \ succeed on a DC 18 Constitution saving throw or its hp maximum is reduced\
      \ by an amount equal to the necrotic damage taken. This reduction lasts until\
      \ the target finishes a long rest. The target dies if this effect reduces its\
      \ hp maximum to 0."
    "name": "Hellfire Bolt"
  - "desc": "The infernal knight targets a creature with 0 hp that it can see within\
      \ 60 feet of it. If the creature is alive, it must succeed on a DC 18 Constitution\
      \ saving throw or die and have its soul drawn into the infernal knight's greatsword.\
      \ If the creature is dead and has been dead for less than 1 minute, its soul\
      \ is automatically captured. When the infernal knight captures a soul, it regains\
      \ 30 hp, and Reave Soul recharges at the start of its next turn. While a creature's\
      \ soul is trapped, that creature can't be returned to life by any means short\
      \ of a [wish](Mechanics/CLI/spells/wish-xphb.md) spell.\n\nA [banishment](Mechanics/CLI/spells/banishment-xphb.md)\
      \ spell targeted at the greatsword forces the infernal knight to make a Charisma\
      \ saving throw against the spell. On a failed save, any souls trapped in the\
      \ blade are released instead of the spell's normal effect. Trapped souls are\
      \ also released when the infernal knight dies."
    "name": "Reave Soul (Recharge 5-6)"
  - "desc": "The infernal knight magically tears a rift in the fabric of the multiverse.\
      \ The rift is a portal to a plane of the infernal knight's choice. The portal\
      \ remains open for 1 hour, during which time any creature can pass through it,\
      \ moving from one plane to the other. A [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\
      \ spell targeting the rift can destroy it if the caster succeeds on a DC 18\
      \ spellcasting ability check."
    "name": "Planar Rift (1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/infernal-knight-ccodex.png"
```
^statblock

## Environment

any