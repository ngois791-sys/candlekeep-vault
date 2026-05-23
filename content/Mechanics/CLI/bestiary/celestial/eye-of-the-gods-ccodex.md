---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/small
- ttrpg-cli/monster/type/celestial/as-its-creator-deity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Eye of the Gods
---
# [Eye of the Gods](Mechanics\CLI\bestiary\celestial/eye-of-the-gods-ccodex.md)
*Source: Creature Codex p. 16*  

*Wings of roiling golden flame surround a single, burning eye that is larger than a human head. Its gaze never settles on one object for long, and it seems to be drinking in every detail of its surroundings.*

The omniscience of the gods is a matter of some liturgical debate. Only a scant few gods, typically deities of knowledge and secrets, truly possess the power to know all things. Other divine beings must rely on their mortal followers to relay the secrets of the mortal world unto them through prayer and confession. When secondhand knowledge of the mortal world is insufficient or when gods engage in divine espionage, they create an angel with one function: to see all.

## Divine Form

Eyes of the gods typically take the form of a blazing eye the size of a human child. Two radiant wings extend from behind its angelic form, though it need not beat them to fly. Despite awe-inspiring appearance, not all gods wish to make their holy observers so conspicuous. Gods of shadow and trickery often make their eyes burn with flames pale as the moon or black as the space between the stars.

## Dutiful Servant

Most eyes of the gods are little more than celestial automata, following their creator's commands, or the commands of their deity's high priest, without question. Obedient eyes tend to watch cities silently from within church spires or inspire crusading warriors from the back lines. However, some eyes of the gods take a more active role in creating history. Such eyes might goad a paladin into accepting a grand quest so it can tag along as a chronicler, or encourage a brash and unstable ruler into declaring a world-shaking war. Lawful deities tend to recall these unpredictable servants to unmake them for their disobedience, but more capricious gods relish such willfulness.

## Immortal Nature

The eye of the gods angel doesn't require food, drink, or sleep.

```statblock
"name": "Eye of the Gods (CCodex)"
"size": "Small"
"type": "celestial"
"subtype": "as its creator deity"
"alignment": "Any alignment"
"ac": !!int "14"
"hp": !!int "36"
"hit_dice": "8d6 + 8"
"modifier": !!int "4"
"stats":
  - !!int "8"
  - !!int "18"
  - !!int "12"
  - !!int "13"
  - !!int "20"
  - !!int "16"
"speed": "0 ft., fly 50 ft. (hover)"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+9"
"damage_resistances": "fire; radiant; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"damage_immunities": "necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 19"
"languages": "All, telepathy 60 ft."
"cr": "1"
"traits":
  - "desc": "A hostile creature that touches the eye of the gods or hits it with a\
      \ melee attack while within 5 feet of it takes 3 (1d6) radiant (good or neutral\
      \ eyes) or necrotic (evil eyes) damage."
    "name": "Blazing Nimbus"
  - "desc": "Allies within 10 feet of the eye of the gods have truesight of 20 feet."
    "name": "Corona of Truth"
  - "desc": "The deity that created the eye of the gods can see everything the eye\
      \ sees and can instantly recall the eye to its side at any time."
    "name": "Divine Conduit"
  - "desc": "As a bonus action, the eye of the gods can magically shift from the Material\
      \ Plane to the Ethereal Plane, or vice versa."
    "name": "Ethereal Jaunt"
"actions":
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d6 + 4) radiant (good or neutral eyes) or necrotic (evil eyes) damage."
    "name": "Slam"
  - "desc": "The eye of the gods inspires all allies within 10 feet. For 1 minute,\
      \ all inspired creatures have advantage on saving throws against being [frightened](Mechanics/CLI/rules/conditions.md#Frightened)."
    "name": "Divine Inspiration (Recharge 5-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/eye-of-the-gods-ccodex.png"
```
^statblock

## Environment

planar