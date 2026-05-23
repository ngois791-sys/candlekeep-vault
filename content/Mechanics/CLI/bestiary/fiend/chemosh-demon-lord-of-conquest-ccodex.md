---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/19
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chemosh, Demon Lord of Conquest
---
# [Chemosh, Demon Lord of Conquest](Mechanics\CLI\bestiary\fiend/chemosh-demon-lord-of-conquest-ccodex.md)
*Source: Creature Codex p. 75*  

*Chemosh is a 30-foot-tall, shark-headed human covered in red scales. People with hatred or ambition in their hearts hear his whispers as they look across the sea, goading them towards slaughter and tyranny.*

As Lord of Conquest, Chemosh longs for perpetual war, a world that knows no peace anywhere.

## Architect of Destruction

Despite his savage appearance, the Lord of Conquest is not a brutish beast. He possesses a cunning intellect and an instinctive understanding of military tactics that he shares with mortal generals in dreams. But the greatest of his powers is his knowledge of military engineering. Chemosh's formidable mind is incessantly dreaming new ways to kill more efficiently, more indiscriminately, and more painfully. Whenever the Lord of Conquest dreams up a new weapon, he sends it to the mind of an evoker, an engineer, or a trapsmith, who he then trusts to test, perfect, and iterate upon it.

## Leviathan of Legend

Chemosh rarely meddles directly, preferring to prey on mortals' lust for power. When Chemosh does appear on the Material Plane, it is usually because he was called by his most powerful cultists—human warlords, sahuagin barons, and druids who wish to see the civilizations of the world razed and nature reborn anew. Chemosh may one day come to the mortal world of his own accord, because he fears his dream of endless war will be permanently quashed if he does not. On the Material Plane, he might choose to disguise himself as a kraken or other monstrous leviathan to prevent the gods from learning of his involvement and destroying him.

## Marshal of the Bloodstained Sea

Chemosh lurks in the Bloodstained Sea, a layer of the Abyss containing a jet-black ocean which extends infinitely in all directions. Above its inky waters hangs a blood-red moon in a perpetual lunar eclipse. The souls of warmongers and cruel soldiers war forever beneath the surface of the sea, and Chemosh, the secret leader of all armies, plants jealousy and suspicions of conspiracy in the minds of the soldiers to pit themselves against each other for all eternity.

## Chemosh's Lair

Chemosh resides in a palace of iron at the bottom of the Bloodstained Sea in the Abyss. The palace is shaped like a massive hermit crab and slowly plods across the ocean floor, surveying the endless war of damned spirits that fills the Bloodstained Sea.

```statblock
"name": "Chemosh, Demon Lord of Conquest (CCodex)"
"size": "Huge"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "175"
"hit_dice": "14d12 + 84"
"modifier": !!int "0"
"stats":
  - !!int "26"
  - !!int "11"
  - !!int "23"
  - !!int "23"
  - !!int "16"
  - !!int "21"
"speed": "50 ft., swim 100 ft."
"saves":
  - "strength": !!int "14"
  - "intelligence": !!int "12"
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+14"
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+17"
  - "name": "[History](Mechanics/CLI/rules/skills.md#History)"
    "desc": "+12"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+11"
"damage_immunities": "cold; poison; bludgeoning, piercing, slashing from nonmagical\
  \ weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 13"
"languages": "All, telepathy 120 ft."
"cr": "19"
"traits":
  - "desc": "The chemosh, demon lord of conquest's innate spellcasting ability is\
      \ Charisma (spell save DC 19, +11 to hit with spell attacks). It can innately\
      \ cast the following spells, requiring no material components:\n\n**At will:**\
      \ [alter self](Mechanics/CLI/spells/alter-self-xphb.md), [create or destroy\
      \ water](Mechanics/CLI/spells/create-or-destroy-water-xphb.md)\n\n**3/day each:**\
      \ [crown of madness](Mechanics/CLI/spells/crown-of-madness-xphb.md), [fear](Mechanics/CLI/spells/fear-xphb.md)\n\
      \n**1/day each:** [greater invisibility](Mechanics/CLI/spells/greater-invisibility-xphb.md),\
      \ [teleport](Mechanics/CLI/spells/teleport-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Chemosh can breathe air and water."
    "name": "Amphibious"
  - "desc": "The calm emotion spell instantly fails when cast within 60 feet of Chemosh.\
      \ In addition, any creature that starts its turn within 30 feet of Chemosh must\
      \ succeed on a DC 19 Wisdom saving throw or enter a mad rage, attacking the\
      \ nearest creature it can see until the start of its next turn. At the start\
      \ of his turn, Chemosh can decide whether this aura is active."
    "name": "Aura of Fury"
  - "desc": "If Chemosh fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Chemosh has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "Chemosh's weapon attacks are magical."
    "name": "Magic Weapons"
"actions":
  - "desc": "Chemosh makes three longsword attacks and one shortsword attack, or three\
      \ longbow attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:*\
      \ 21 (3d8 + 8) slashing damage or 24 (3d10 + 8) slashing damage if used\
      \ with two hands."
    "name": "Longsword"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 5 ft., one target. *Hit:*\
      \ 18 (3d6 + 8) piercing damage."
    "name": "Shortsword"
  - "desc": "*Ranged Weapon Attack:* +6 to hit, range 150/600 ft., one target. *Hit:*\
      \ 13 (3d8) piercing damage. The range and accuracy of Chemosh's arrows are\
      \ not affected by water."
    "name": "Longbow"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Chemosh can take a lair\
      \ action to cause one of the following effects; he can't use the same effect\
      \ two rounds in a row.\n\n- A raging whirlpool appears. Each creature within\
      \ 60 feet of a point Chemosh can see within 120 feet of him must succeed on\
      \ a DC 19 Strength saving throw or be pulled to the center of the whirlpool.\
      \ If a creature starts its turn within 30 feet of the center of the whirlpool,\
      \ it must succeed on a DC 19 Strength saving throw or be pulled to the center\
      \ of the whirlpool. A creature in the center of the whirlpool can move out of\
      \ the center by succeeding on a DC 19 Strength check. This whirlpool lasts until\
      \ initiative count 20 on the next round.  \n- A 60-foot radius sphere of water\
      \ Chemosh can see within 120 feet of him becomes poisonous. Each creature within\
      \ the sphere must make a DC 19 Constitution saving throw, taking 22 (4d10)\
      \ poison damage on a failed save, or half as much damage on a successful one.\
      \ This poison lasts until initiative count 20 on the next round.  \n- A vertical\
      \ wall of whirling, razor-sharp blades of magical energy appears at a point\
      \ Chemosh chooses within 90 feet. The wall can be a straight wall up to 100\
      \ feet long, 20 feet high, and 5 feet thick, or a ringed wall up to 60 feet\
      \ in diameter, 20 feet high, and 5 feet thick. The first time a creature enters\
      \ the wall on a turn or starts its turn there, the creature must make a DC 19\
      \ Dexterity saving throw, taking 44 (8d10) slashing damage on a failed save,\
      \ or half as much damage on a successful one. The wall provides three-quarters\
      \ cover to creatures behind it, and its space is difficult terrain. Chemosh\
      \ can choose to concentrate on maintaining this wall as if it were a spell for\
      \ up to 10 minutes, if he chooses not to take another lair action while concentrating.\
      \ If not, the wall disappears when Chemosh takes another lair action.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing Chemosh's lair is warped by his magic, which creates\
      \ one or more of the following effects:\n\n- Within 1 mile of the lair, the\
      \ swim speed of creatures that have gained a swim speed through magic is reduced\
      \ by half.  \n- All creatures within the Bloodstained Sea gain the ability to\
      \ breathe water.  \n- No creature on the Bloodstained Sea can willingly retreat\
      \ or call a truce. A creature that wishes to spare an unconscious target's life\
      \ must make a DC 19 Wisdom saving throw. On a failure, the creature is compelled\
      \ to kill its target.  \n\nIf Chemosh dies, these supernatural effects disappear\
      \ after 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the chemosh can expend a use to take one of the following actions. The chemosh\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Chemosh makes one longsword attack."
    "name": "Longsword"
  - "desc": "Chemosh summons a [vrock](Mechanics/CLI/bestiary/fiend/vrock-xmm.md)\
      \ at a point within 60 feet of him. The [vrock](Mechanics/CLI/bestiary/fiend/vrock-xmm.md)\
      \ has a swim speed equal to its fly speed. It remains for 1 minute, until it\
      \ or Chemosh dies, or until Chemosh dismisses it as an action. Chemosh can summon\
      \ up to three [vrocks](Mechanics/CLI/bestiary/fiend/vrock-xmm.md) per day."
    "name": "Call Carrion-Eater (Costs 2 Actions)"
  - "desc": "Chemosh swims up to his swim speed without provoking opportunity attacks."
    "name": "Swim"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/chemosh-demon-lord-of-conquest-ccodex.png"
```
^statblock

## Environment

planar