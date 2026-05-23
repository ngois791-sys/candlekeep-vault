---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/3
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Kinnara
---
# [Kinnara](Mechanics\CLI\bestiary\celestial/kinnara-ccodex.md)
*Source: Creature Codex p. 17*  

*This celestial has the head, arms, and torso of a beautiful human, the gleaming eyes of an angel and the lower body of a pure white swan. Magnificent wings grow from its back, and its body is adorned with fine jewelery. It plays a calming melody on a stringed musical instrument. A near-identical angelic being stands close by its side.*

Kinnara are half-human, half-bird angels who serve the gods of love, music, and wisdom. They are always encountered in pairs.

## Inseparable Lovers

As mortals, each pair of kinnara were devoted lovers who lived virtuous lives dedicated entirely to each other and to the pursuit of wisdom and enlightened accomplishments. Upon their deaths, they became closely‑bonded celestials in the service of the gods.

## Celestial Musicians

Kinnara are highly skilled singers, musicians, and dancers, performing beautifully as a duo in perfect harmony with one another. Kinnara see it as their duty to instruct humanity in the arts, and their patron gods will sometimes send pairs of the angels to the Material Plane to teach the performing arts in temples and monasteries. Many of the world's greatest bards have traveled to one of these temples to study under a pair of kinnara.

## Sacred Guardians

Kinnara can often be found protecting holy sites and other centers of wisdom located in remote locations. Those kinnara dwelling on the Material Plane will watch over the well-being of mortals—particularly musicians and lovers—and may sometimes intervene to protect such mortals in times of danger. A cleric can summon a pair of kinnara with a conjure celestial spell cast using a 9th-level spell slot.

## Immortal Nature

The kinnara angel doesn't require food, drink, or sleep.

```statblock
"name": "Kinnara (CCodex)"
"size": "Medium"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"modifier": !!int "2"
"stats":
  - !!int "12"
  - !!int "15"
  - !!int "14"
  - !!int "13"
  - !!int "16"
  - !!int "19"
"speed": "30 ft., fly 50 ft."
"saves":
  - "wisdom": !!int "5"
  - "charisma": !!int "6"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+5"
  - "name": "[Performance](Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+8"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "All, telepathy 60 ft."
"cr": "3"
"traits":
  - "desc": "The kinnara's innate spellcasting ability is Charisma (spell save DC\
      \ 14). It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [detect good and evil](Mechanics/CLI/spells/detect-evil-and-good-xphb.md),\
      \ [guidance](Mechanics/CLI/spells/guidance-xphb.md), [light](Mechanics/CLI/spells/light-xphb.md),\
      \ [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n**3/day\
      \ each:** [charm person](Mechanics/CLI/spells/charm-person-xphb.md), [sleep](Mechanics/CLI/spells/sleep-xphb.md),\
      \ [healing word](Mechanics/CLI/spells/healing-word-xphb.md)\n\n**1/day each:**\
      \ [calm emotions](Mechanics/CLI/spells/calm-emotions-xphb.md), [enthrall](Mechanics/CLI/spells/enthrall-xphb.md),\
      \ [hold person](Mechanics/CLI/spells/hold-person-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The kinnara's weapon attacks are magical. When the kinnara hits with\
      \ any weapon, the weapon deals an extra 2d8 radiant damage (included in the\
      \ attack)."
    "name": "Angelic Weapons"
  - "desc": "The kinnara shares a powerful bond with its partner and can't be turned\
      \ against its partner by magical or non-magical means."
    "name": "Eternal Lovers"
"actions":
  - "desc": "*Melee Weapon Attack:* +4 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d6 + 2) piercing damage plus 9 (2d8) radiant damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +4 to hit, range 80/320 ft., one target. *Hit:*\
      \ 5 (1d6 + 2) piercing damage plus 9 (2d8) radiant damage."
    "name": "Shortbow"
  - "desc": "The kinnara plays a series of jarring notes on its musical instrument.\
      \ Each non-celestial creature within 60 feet who can hear the sound must make\
      \ a DC 14 Wisdom saving throw. On a failure, a creature takes 18 (4d8) psychic\
      \ damage and is [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for\
      \ 1 minute. On a success, a creature takes half the damage but isn't [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ A [frightened](Mechanics/CLI/rules/conditions.md#Frightened) creature can\
      \ repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Discordant Refrain (Recharge 5-6)"
"reactions":
  - "desc": "When the kinnara's partner is hit with a melee or ranged attack, the\
      \ kinnara can teleport to an unoccupied space within 5 feet of its partner.\
      \ The damage caused by the attack is divided evenly between the two kinnara."
    "name": "Share the Pain"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/kinnara-ccodex.png"
```
^statblock

## Environment

any