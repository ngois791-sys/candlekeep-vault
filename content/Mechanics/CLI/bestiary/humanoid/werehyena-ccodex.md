---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/grassland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/gnoll
- ttrpg-cli/monster/type/humanoid/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Werehyena
---
# [Werehyena](Mechanics\CLI\bestiary\humanoid/werehyena-ccodex.md)
*Source: Creature Codex p. 259*  

*The hyena's form shifts into that of a gnoll and then to something in between. In all three forms, blood drips from its filthy muzzle.*

## A Blessed Curse

Across worlds and in all their cultures, the gnolls have always revered the hyena. Those who suffer the curse of lycanthropy also exhibit it in the same way: the form of a werehyena. This is considered a rare and wonderful gift, as most gnolls who suffer this curse die the first time they change. Those who survive, however, are honored in their culture.

## A Demonic Affliction

In truth, the lycanthropy that werehyenas suffer is a demonic possession. The souls of these creatures have been forfeited to a demon lord. Only gnolls are able to survive this intact. If they spread this disease to a non-gnoll, the victim survives until the first full moon, after which it dies and turns into a demon gnoll under the demon lord's sway. The only way to save the victim is to cure the disease before the first transformation.

## A Terrible Cure

Normally a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) removes lycanthropy from a victim, but slightly more stringent efforts are needed to cleanse a werehyena's bite. While the [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md) spell is being cast, a demonic creature must be killed in the vicinity of the victim, and the victim must drink the demon's ichor. Only then is the lycanthropy removed permanently. Finding such a creature can be difficult and often means making deals with dark forces.

```statblock
"name": "Werehyena (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "gnoll, shapechanger"
"alignment": "Chaotic Evil"
"ac": !!int "13"
"ac_class": "14 from natural armor in hyena or hybrid form"
"hp": !!int "58"
"hit_dice": "9d8 + 18"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "14"
  - !!int "10"
  - !!int "11"
  - !!int "10"
"speed": "30 ft."
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+2"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+5"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "passive Perception 12"
"languages": "Gnoll"
"cr": "3"
"traits":
  - "desc": "The werehyena has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on hearing or smell."
    "name": "Keen Hearing and Smell"
  - "desc": "The werehyena can use its action to polymorph into a hyena-gnoll hybrid\
      \ or into a hyena, or back into its true gnoll form. Its statistics, other than\
      \ AC, are the same in each form. Any equipment it is wearing or carrying isn't\
      \ transformed. It reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "The werehyena makes two attacks. one with its bite and one with its claws\
      \ or scimitar."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage. If the target is humanoid, it must succeed on\
      \ a DC 12 Constitution saving throw or be cursed with werehyena lycanthropy."
    "name": "Bite (Hyena or Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 8\
      \ (2d4 + 3) slashing damage."
    "name": "Claws (Hybrid Form Only)"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) slashing damage."
    "name": "Scimitar (Gnoll or Hybrid Form Only)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/werehyena-ccodex.png"
```
^statblock

## Environment

farmland, grassland, urban