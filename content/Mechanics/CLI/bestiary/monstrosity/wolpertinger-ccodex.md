---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-4
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/tiny
- ttrpg-cli/monster/type/monstrosity
statblock: inline
statblock-link: "#^statblock"
aliases:
- Wolpertinger
---
# [Wolpertinger](Mechanics\CLI\bestiary\monstrosity/wolpertinger-ccodex.md)
*Source: Creature Codex p. 382*  

*A strange amalgam of creatures, the antlered rabbit hops on the stump, spreading its wings and releasing a high-pitched shriek from behind its fangs.*

## Mischievous Beasts

The wolpertinger possesses a talent for mischief and petty theft involving food but otherwise does little harm if unprovoked. An angry wolpertinger, on the other hand, makes for a frightening enemy, dropping from the sky, antlers first, on the object of its ire.

## Desired by Fey

Some fey develop unusual compulsions around wolpertingers, describing them as divinely adorable, delightful, and utterly charming. While wolpertingers are certainly unusual, the fey often become obsessed enough to pay large sums for a live animal. Bearfolk consider them reliable guides through forests, claiming they can speak. No other humanoids have reported wolpertinger speech, and it seems likely that the bearfolk may be teasing their fey and gnomish friends.

## Gnome Friends

Wolpertingers have a fondness for gnomes and dwell in forests near gnomish settlements. Gnomes often raise wolpertingers as companions and many gnomish wizards have wolpertinger familiars.

> [!note] Wolpertinger Familiars
> 
> Some wolpertingers are willing to serve spellcasters as a familiar. Such wolpertingers have the following trait.
> 
> **Familiar.** The wolpertinger can serve another creature as a familiar, forming a magic, telepathic bond with that willing companion. While the two are bonded, the companion can sense what the wolpertinger senses as long as they are within 1 mile of each other. While the wolpertinger is within 10 feet of its companion, the companion shares the wolpertinger's Standing Leap trait. At any time and for any reason, the wolpertinger can end its service as a familiar, ending the telepathic bond.
^wolpertinger-familiars

```statblock
"name": "Wolpertinger (CCodex)"
"size": "Tiny"
"type": "monstrosity"
"alignment": "Unaligned"
"ac": !!int "13"
"hp": !!int "9"
"hit_dice": "2d4 + 4"
"modifier": !!int "3"
"stats":
  - !!int "6"
  - !!int "16"
  - !!int "14"
  - !!int "5"
  - !!int "12"
  - !!int "6"
"speed": "30 ft., burrow 10 ft., fly 30 ft."
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 11"
"languages": ""
"cr": "1/4"
"traits":
  - "desc": "If the wolpertinger moves at least 10 feet straight toward a target and\
      \ then hits it with a gore attack on the same turn, the target takes an extra\
      \ 2 (1d4) piercing damage."
    "name": "Charge"
  - "desc": "The wolpertinger doesn't provoke an opportunity attack when it flies\
      \ out of an enemy's reach."
    "name": "Flyby"
  - "desc": "The wolpertinger's long jump is up to 20 feet and its high jump is up\
      \ to 10 feet, with or without a running start."
    "name": "Standing Leap"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) piercing damage."
    "name": "Gore"
  - "desc": "The wolpertinger emits a piercing shriek. Each creature within 30 feet\
      \ that can hear the wolpertinger must succeed on a DC 13 Constitution saving\
      \ throw or be [deafened](Mechanics/CLI/rules/conditions.md#Deafened) for 1 minute.\
      \ A beast with an Intelligence of 4 or lower that is in the area must also succeed\
      \ on a DC 13 Wisdom saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ until the beginning of its next turn."
    "name": "Keening (Recharge 6-6)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/monstrosity/token/wolpertinger-ccodex.png"
```
^statblock

## Environment

forest