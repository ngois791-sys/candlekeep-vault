---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/environment/mountain
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/yakirian
statblock: inline
statblock-link: "#^statblock"
aliases:
- Yakirian
---
# [Yakirian](Mechanics\CLI\bestiary\humanoid/yakirian-ccodex.md)
*Source: Creature Codex p. 390*  

*The chain armor and ritual knife of this burly yak man are stained with old blood, and its long horns are etched with intricate patterns.*

## Isolated Mountain Dwellers

Yakirians stand 7 feet tall and are covered in shaggy fur with two horns growing from their yak-like heads. Yakirians live in an isolated caste society that promotes efficiency and cooperation.

## Resilient Enlightenment

Yakirians are a spiritual people, following the teachings of Brother Ox (see page 24). Through his example, they maintain a balance between mind, body, and spirit.

## Heart Eaters

Yakirian ritually consume the hearts of humanoids and giants to absorb the creature's knowledge and strength, and to bolster their battle prowess. They also perform this as a funeral rite as the most respectful way to honor and preserve the knowledge and strength of the departed.

## Nemesis of Leng

While most of their population is nomadic, the heart of yakirian society lies on the remote plateau of Leng. Yakirians are a bulwark against the twisted creatures of Leng, and believe their primary purpose is to prevent the spread of that dark influence.

> [!danger] Schism Yakirian
> Yakirian culture is split. One side holds to the oath of enlightenment, while the other encourages devouring the souls of their enemies. This affords the yakirian greater power but destroys the victim's soul in the process. The different yakirian groups still work together other to oppose the remnants of Leng.
> 
> A yakirian who follows the divergent philosophy gains the following trait.
> 
> **Soul Consumption.** When a schism yakirian consumes a creature's heart, it also consumes the soul. The duration of the benefits increases to 8 hours. In addition, the yakirian gains advantage on all attack rolls, ability checks, and saving throws, and all attack rolls made against the yakirian have disadvantage. The soul is trapped within the yakirian for 24 hours, after which it is destroyed. If the yakirian dies before that time, the soul is released. While the soul is trapped, any magic used to revive the dead creature fails unless the caster succeeds on a DC 15 spellcasting ability check. Once the soul is destroyed, only a [wish](Mechanics/CLI/spells/wish-xphb.md) spell can bring it back.
> 
> A schism yakirian has a challenge rating of 3 (700 XP).

```statblock
"name": "Yakirian (CCodex)"
"size": "Medium"
"type": "humanoid"
"subtype": "yakirian"
"alignment": "Lawful Neutral"
"ac": !!int "13"
"ac_class": "[chain shirt](Mechanics/CLI/items/chain-shirt-xphb.md)"
"hp": !!int "67"
"hit_dice": "9d8 + 27"
"modifier": !!int "0"
"stats":
  - !!int "17"
  - !!int "11"
  - !!int "16"
  - !!int "10"
  - !!int "12"
  - !!int "8"
"speed": "40 ft."
"saves":
  - "wisdom": !!int "3"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+4"
"damage_resistances": "cold"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": "Common"
"cr": "2"
"traits":
  - "desc": "The yakirian has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), or confused, as\
      \ well as against any effect that causes corruption or madness."
    "name": "Resilient Soul"
"actions":
  - "desc": "The yakirian makes two attacks. one with its gore and one with its ritual\
      \ knife."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage."
    "name": "Gore"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 6\
      \ (1d6 + 3) piercing damage."
    "name": "Ritual Knife"
  - "desc": "The yakiran consumes the heart of a dead humanoid or giant within 5 feet.\
      \ If the creature also less than 1 minute ago, the yakirian gains the following\
      \ benefits:\n\n- The yakirian absorbs the dead creature's knowledge and asks\
      \ two questions. If the dead creature knew the answers in life, the yakirian\
      \ learns them instantly.  \n- The yakirian's maximum and current hp increase\
      \ by 10 for 1 hour.  \n- The yakirian has advantage on Strength-based attack\
      \ rolls and ability checks, as well as on all saving throws for 1 hour.  "
    "name": "Consume Heart"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/yakirian-ccodex.png"
```
^statblock

## Environment

mountain