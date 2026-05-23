---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/6
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Song
---
# [Song](Mechanics\CLI\bestiary\celestial/song-ccodex.md)
*Source: Creature Codex p. 20*  

*A golden-skinned woman sings a sublime melody that cascades over the charging soldiers. As she sings, music notes etch themselves onto her skin.*

## Kind, yet Discerning

Song angels are archetypal altruists, delivering unprovoked acts of kindness upon people in need. When a song angel interacts with mortal nobility, it prefers to take an unassuming form such as a dirty urchin or crone to test its charges' integrity. If spurned by a callous or haughty individual, the song angel unveils its true, radiant splendor.

## Keepers of Music

When a song angel plays or sings a verse, the notes it performed appear on its body. If the angel is destroyed, all the music it ever created rings out in glorious harmony; its heavenly elegy audible for miles.

## Lead through Inspiration

While a song angel's mission is to comfort and safeguard its mortal charges, it is meant to lead, not to serve. These angels often command soldiers on the front line, inspiring all those who hear its songs.

## Immortal Nature

The song angel doesn't require food, drink, or sleep.

```statblock
"name": "Song (CCodex)"
"size": "Large"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "15"
"ac_class": "natural armor"
"hp": !!int "76"
"hit_dice": "9d10 + 27"
"modifier": !!int "3"
"stats":
  - !!int "12"
  - !!int "16"
  - !!int "16"
  - !!int "18"
  - !!int "18"
  - !!int "21"
"speed": "30 ft., fly 60 ft."
"saves":
  - "wisdom": !!int "7"
  - "charisma": !!int "8"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Performance](Mechanics/CLI/rules/skills.md#Performance)"
    "desc": "+11"
"damage_resistances": "radiant; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 14"
"languages": "All, telepathy 120 ft."
"cr": "6"
"traits":
  - "desc": "The song's innate spellcasting ability is Charisma (spell save DC 16).\
      \ It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [alter self](Mechanics/CLI/spells/alter-self-xphb.md), [calm\
      \ emotions](Mechanics/CLI/spells/calm-emotions-xphb.md), [charm person](Mechanics/CLI/spells/charm-person-xphb.md),\
      \ [create food and water](Mechanics/CLI/spells/create-food-and-water-xphb.md),\
      \ [detect evil and good](Mechanics/CLI/spells/detect-evil-and-good-xphb.md)\n\
      \n**3/day each:** [enthrall](Mechanics/CLI/spells/enthrall-xphb.md), [silence](Mechanics/CLI/spells/silence-xphb.md),\
      \ [zone of truth](Mechanics/CLI/spells/zone-of-truth-xphb.md)\n\n**1/day each:**\
      \ [irresistible dance](Mechanics/CLI/spells/ottos-irresistible-dance-xphb.md),\
      \ [mass cure wounds](Mechanics/CLI/spells/mass-cure-wounds-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The song angel's weapon attacks are magical. When the song angel hits\
      \ with any weapon, the weapon deals an extra 4d8 radiant damage (included\
      \ in the attack)."
    "name": "Angelic Weapons"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (2d6 + 3) slashing damage plus 18 (4d8) radiant damage."
    "name": "Scimitar"
  - "desc": "The song angel blows on its ram's horn, emitting a thunderous blast in\
      \ a 30-foot cone that is audible 600 feet away. Each creature in the cone must\
      \ make a DC 15 Constitution saving throw. On a failure, a creature takes 17\
      \ (5d6) thunder damage and is [deafened](Mechanics/CLI/rules/conditions.md#Deafened)\
      \ for 1 minute. On a success, a creature takes half the damage but isn't [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \ Creatures and objects made of glass or crystal have disadvantage on the saving\
      \ throw and take 35 (10d6) thunder damage instead."
    "name": "Horn of Blasting (Recharge 5-6)"
  - "desc": "The song angel blows on its brass horn, calling forth 10 (3d4 + 3)\
      \ warrior spirits. These spirits appear within 60 feet of the angel and use\
      \ [tribal warrior](Mechanics/CLI/bestiary/humanoid/warrior-infantry-xmm.md)\
      \ statistics. When the spirits are summoned, one of them is always an ancient\
      \ champion that uses [berserker](Mechanics/CLI/bestiary/humanoid/berserker-xmm.md)\
      \ statistics. They disappear after 1 hour or when they are reduced to 0 hp.\
      \ These spirits follow the angel's commands."
    "name": "Horn of Spirits (Recharges after a Long Rest)"
  - "desc": "The angel magically polymorphs into a humanoid that has a challenge rating\
      \ equal to or less than its own, or back into its true form. It reverts to its\
      \ true form if it dies. Any equipment it is wearing or carrying is absorbed\
      \ or borne by the new form (the angel's choice).\n\nIn the new form, the angel\
      \ retains its game statistics and the ability to speak, but its AC, movement\
      \ modes, Strength, Dexterity, and special senses are replaced by those of the\
      \ new form, and it gains any statistics and capabilities (except class features,\
      \ legendary actions, and lair actions) that the new form has but that it lacks."
    "name": "Change Shape"
"reactions":
  - "desc": "When a creature the song angel can see fails an ability check or saving\
      \ throw or misses with a weapon attack, the angel can sing a verse of divine\
      \ music. If the creature hears this song, it can reroll the failed check, save,\
      \ or attack roll with advantage."
    "name": "Heavenly Inspiration"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/song-ccodex.png"
```
^statblock

## Environment

planar