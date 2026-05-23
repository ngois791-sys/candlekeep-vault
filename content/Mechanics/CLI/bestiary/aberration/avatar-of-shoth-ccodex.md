---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/aberration/shoth
statblock: inline
statblock-link: "#^statblock"
aliases:
- Avatar of Shoth
---
# [Avatar of Shoth](Mechanics\CLI\bestiary\aberration/avatar-of-shoth-ccodex.md)
*Source: Creature Codex p. 332*  

The avatar of Shoth is a gargantuan, oozing pile connected to two droths by viscous appendages. A massive pulsing zom sits in the center of its body, and it is from there that the laws and edicts of Shoth emanate. The avatar's zom is a powerful magical artifact, which stores, creates, and disseminates the rules and tenets of the shoth across the planes of existence. Through this zom, the avatar can communicate telepathically with any shoth over any distance and across any plane. The zom magically returns to Shoth if the avatar is slain.

## Abandon or Persist

The avatar of Shoth is often called to worlds where the shoth have been unsuccessful in convincing a populace to dissolve with them. Though the shoth possess infinite patience, in certain circumstances Shoth determines it is no longer necessary to pursue a certain form of life. Alternatively, Shoth may decide to take extreme measures to encourage willingness to step into a zolv. On numerous occasions, Shoth has sent its avatar to destroy all other life on a world to force the reluctant race's hand.

## the Avatar of shoth's lair

The Dripping Place is an enormous vessel that houses the avatar of Shoth itself. The massive ship is made from slime-exuding metal plates and is powered by mysterious, magical energy. The avatar pilots the ship from its central chamber. The Dripping Palace only arrives on worlds where the shoth have met extreme opposition. Wherever the palace goes, a force of oth paladins goes with it.

```statblock
"name": "Avatar of Shoth (CCodex)"
"size": "Gargantuan"
"type": "aberration"
"subtype": "shoth"
"alignment": "Lawful Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "341"
"hit_dice": "22d20 + 110"
"modifier": !!int "-1"
"stats":
  - !!int "20"
  - !!int "9"
  - !!int "20"
  - !!int "18"
  - !!int "20"
  - !!int "22"
"speed": "30 ft., climb 30 ft."
"saves":
  - "constitution": !!int "12"
  - "wisdom": !!int "12"
  - "charisma": !!int "13"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+12"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+13"
"damage_immunities": "acid, cold, fire"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [prone](Mechanics/CLI/rules/conditions.md#Prone)"
"senses": "[blindsight](Mechanics/CLI/rules/senses.md#Blindsight) 60 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 22"
"languages": "All, telepathy 120 ft."
"cr": "21"
"traits":
  - "desc": "The avatar of shoth's innate spellcasting ability is Charisma (spell\
      \ save DC 21, +13 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [acid splash](Mechanics/CLI/spells/acid-splash-xphb.md)\
      \ (4d6), [light](Mechanics/CLI/spells/light-xphb.md), [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md),\
      \ [true strike](Mechanics/CLI/spells/true-strike-xphb.md)\n\n**3/day each:**\
      \ [bless](Mechanics/CLI/spells/bless-xphb.md), [blur](Mechanics/CLI/spells/blur-xphb.md),\
      \ [command](Mechanics/CLI/spells/command-xphb.md), [darkness](Mechanics/CLI/spells/darkness-xphb.md),\
      \ [enthrall](Mechanics/CLI/spells/enthrall-xphb.md), [shield](Mechanics/CLI/spells/shield-xphb.md)\n\
      \n**2/day each:** [counterspell](Mechanics/CLI/spells/counterspell-xphb.md),\
      \ [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\n\n**1/day each:**\
      \ [black tentacles](Mechanics/CLI/spells/evards-black-tentacles-xphb.md), [confusion](Mechanics/CLI/spells/confusion-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "When the avatar damages a creature, it absorbs a portion of that creature's\
      \ knowledge and power. As a bonus action, it can recreate any action available\
      \ to a creature it damaged within the last minute. This includes spells and\
      \ actions with limited uses or with a recharge. This recreated action is resolved\
      \ using the avatar's statistics where applicable."
    "name": "Absorbent"
  - "desc": "The avatar, including its equipment, can move through a space as narrow\
      \ as 1 inch wide without squeezing."
    "name": "Amorphous"
  - "desc": "If the avatar fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Any creature hostile to the avatar that starts its turn within 30 feet\
      \ of the avatar must succeed on a DC 20 Wisdom saving throw or have disadvantage\
      \ on all attack rolls until the end of its next turn. Creatures with Intelligence\
      \ 3 or lower automatically fail the saving throw."
    "name": "Soothing Aura"
"actions":
  - "desc": "The avatar makes three oozing tentacle attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 15 ft., one target. *Hit:*\
      \ 31 (4d12 + 5) bludgeoning damage and 14 (4d6) acid damage."
    "name": "Oozing Tentacle"
  - "desc": "A shoth with less than half its maximum hp can merge with any other shoth\
      \ creature within 10 feet, adding its remaining hp to that creature's. The hp\
      \ gained this way can exceed the normal maximum of that creature. The avatar\
      \ can accept any number of such mergers."
    "name": "Legendary Merge"
  - "desc": "The avatar rises up and crashes down, releasing a 20-foot radius wave\
      \ of acidic ooze. Each creature in the area must make a DC 20 Dexterity saving\
      \ throw. On a failure, a creature takes 67 (15d8) acid damage and is knocked\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone). On a success, a creature\
      \ takes half the damage and isn't knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Acid Wave (Recharge 5-6)"
  - "desc": "The avatar uses its action to consult its weighty zom for insight. The\
      \ zom flashes brilliant crimson-and-white light. Each creature within 120 feet\
      \ who can see the avatar must succeed on a DC 20 Constitution saving throw or\
      \ be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) until the end of its\
      \ next turn. Each creature of the avatar's choice within 120 feet that speaks\
      \ a language must succeed on a DC 20 Charisma saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn as the avatar telepathically utters a short\
      \ expression that is particularly meaningful to that creature."
    "name": "Consult the Zom (1/Day)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the avatar takes a lair\
      \ action to cause one of the following effects; the avatar can't use the same\
      \ effect two rounds in a row:\n\n- The avatar melts into the ooze of its lair,\
      \ becoming invisible and teleporting to an unoccupied space within 100 feet\
      \ of it. The invisibility lasts until the end of the avatar's next turn.  \n\
      - The ooze covering the floor within 60 feet of the avatar ripples and forms\
      \ into dozens of grasping pseudopods. Each non‑shoth creature that starts its\
      \ turn in the area must succeed on a DC 15 Strength saving throw or be grappled\
      \ and restrained by the pseudopods. A creature, including the target, can take\
      \ its action to remove the pseudopod from the target by succeeding on a DC 15\
      \ Strength check. The pseudopods dissolve when the avatar uses this lair action\
      \ again or when the avatar dies.  \n- The avatar telepathically communicates\
      \ with any creature with 0 hp within 120 feet of the avatar. That creature sees\
      \ an indescribably beautiful unfolding pattern of stars and is immediately restored\
      \ to 1 hp. A creature restored this way is charmed by the avatar until the end\
      \ of its next turn. While charmed by the avatar, that creature is incapacitated\
      \ and must move up to its speed toward the avatar on its turn.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the avatar of shoth can expend a use to take one of the following actions.\
  \ The avatar of shoth regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The avatar casts one at will spell."
    "name": "At Will Spell"
  - "desc": "The avatar makes one oozing tentacle attack."
    "name": "Oozing Tentacle"
  - "desc": "The avatar uses Acid Wave, if it is available."
    "name": "Acid Wave (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/aberration/token/avatar-of-shoth-ccodex.png"
```
^statblock

## Environment

planar