---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/1-2
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid
statblock: inline
statblock-link: "#^statblock"
aliases:
- Woodwose
---
# [Woodwose](Mechanics\CLI\bestiary\humanoid/woodwose-ccodex.md)
*Source: Creature Codex p. 383*  

*Broad-chested and muscular, this feral-looking man's torso is covered in a coat of thick, dark hair. His eyes are deep-set and black, and his beard is matted and tangled with bits of twig. His only clothes are a headdress and a loin cloth woven from ivy leaves.*

Woodwoses are hairy, near-naked wild humans of the woods who live close to nature, deep in the ancient forests where the boundary between the Material Plane and the lands of the fey becomes blurred.

## Hairy Climbers

Woodwoses are very hairy. Their bodies are covered in a thick coat apart from the faces, hands, and feet. Despite their heavy physiques, woodwoses are able climbers, allowing them to use the tallest trees of the wood as vantage points.

## Friends of the Fey

Bands of woodwoses can often be found following a [green knight of the woods](Mechanics/CLI/bestiary/fey/green-knight-of-the-woods-ccodex.md) (see page 209) or other powerful fey, and they are usually on friendly terms with forest-dwelling elves. Stealthy hunters capable of casting druidic magic, woodwoses remain vigilant against orcs, forest marauders (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 205), over-zealous foresters, and any others who seek to harm the animals, trees, and plants of the woodlands. Their jet black eyes glow emerald green when they are angered. 

## Mysterious Origins

Woodwoses have lived in the remotest parts of the world's forests for centuries and are only remembered by most civilised societies in fireside tales. One far-fetched story says that the first wild men of the woods were human children who fled into the forest to escape a band of savage raiders and were raised by wolves or other wild animals. Another says they were normal men who were cursed with their hairy bodies and somewhat warped physiques by the Queen of Witches (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json], p. 194) for spying on her while she bathed beneath a woodland waterfall.

```statblock
"name": "Woodwose (CCodex)"
"size": "Medium"
"type": "humanoid"
"alignment": "Chaotic Neutral"
"ac": !!int "13"
"ac_class": "natural armor"
"hp": !!int "27"
"hit_dice": "6d6"
"modifier": !!int "1"
"stats":
  - !!int "16"
  - !!int "12"
  - !!int "11"
  - !!int "10"
  - !!int "14"
  - !!int "8"
"speed": "30 ft., climb 20 ft."
"skillsaves":
  - "name": "[Nature](Mechanics/CLI/rules/skills.md#Nature)"
    "desc": "+2"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+4"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+3"
  - "name": "[Survival](Mechanics/CLI/rules/skills.md#Survival)"
    "desc": "+4"
"senses": "passive Perception 14"
"languages": "Common, Elvish, Sylvan"
"cr": "1/2"
"traits":
  - "desc": "The woodwose's innate spellcasting ability is Wisdom (spell save DC 12).\
      \ It can innately cast the following spells, requiring no material components:\n\
      \n**At will:** [shillelagh](Mechanics/CLI/spells/shillelagh-xphb.md)\n\n**3/day\
      \ each:** [pass without trace](Mechanics/CLI/spells/pass-without-trace-xphb.md)\n\
      \n**1/day each:** [entangle](Mechanics/CLI/spells/entangle-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The woodwose has advantage on saving throws against being [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
      \ and magic can't put the woodwose to sleep."
    "name": "Fey Touched"
  - "desc": "The woodwose can communicate with beasts and plants as if they shared\
      \ a language."
    "name": "Speak with Beasts and Plants"
"actions":
  - "desc": "*Melee Weapon Attack:* +5 to hit, reach 5 ft., one target. *Hit:* 5\
      \ (1d4 + 3) bludgeoning damage, or 7 (1d8 + 3) bludgeoning damage with shillelagh."
    "name": "Club"
  - "desc": "*Ranged Weapon Attack:* +3 to hit, range 80/320 ft., one target. *Hit:*\
      \ 4 (1d6 + 1) piercing damage plus 5 (2d4) poison damage."
    "name": "Shortbow"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/humanoid/token/woodwose-ccodex.png"
```
^statblock

## Environment

forest