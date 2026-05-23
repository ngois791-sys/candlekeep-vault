---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/20
- ttrpg-cli/monster/environment/forest
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fey
statblock: inline
statblock-link: "#^statblock"
aliases:
- Baba Yaga
---
# [Baba Yaga](Mechanics\CLI\bestiary\fey/baba-yaga-ccodex.md)
*Source: Creature Codex p. 46*  

*The stars keep her secrets, the stone her memory-Grandmother, Grandmother! Her kindness akin to treachery.*

Baba Yaga is a renowned witch and appears as a stooped, old woman with an impossibly long nose and wild white hair. Her milky yellow eyes stare, unblinking, at no fixed spot. She has no teeth, instead wearing a set of sentient, magical, iron dentures. Her teeth are often off pursuing their own agenda, and the two bicker constantly. She wears frayed burlap robes and, occasionally, a black silk scarf over her escaping locks. Her skin has a bark-like quality, and she smells of lightning and pine. While perfectly able to walk, the witch is most often seen flying about the world in her enormous mortar and pestle, the latter of which she uses as a rudder in flight.

## Collector of Secrets

Few planes or places are free from Baba Yaga's madness and meddling. She desires knowledge above all things and greatly enjoys knowing the secrets of others. Many queens and kings have been extorted by the Old Witch, who records their secrets on parchment stored in a chest made from a giant emerald. She has a weakness for enchanted baubles, and her home, a wooden hut that travels on huge chicken legs and whose interior defies natural law, is stuffed full of magical bric-a-brac.

## Nightmare and Nurturer

Those who've bargained with Baba Yaga successfully claim she is a fair and honest person with a fondness for animals and wild things. She actively seeks strong adventurers to pursue dangerous quests for her, usually to acquire either a great secret or a powerful artifact. However, she is also a pitiless murderer, who slips through the shadows in the moonlight to feed on sleeping innocents with her wretched iron teeth. She holds grudges and does not forget the smallest slight.

## Master of Many

She collects servants as she does trinkets and takes great pleasure in adding to her soul horde. The Three Horsemen (Black Night (Tome of Beasts ^[creature/Kobold Press; Tome of Beasts.json]), Bright Day, and Red Sun) draw their power from her and do her bidding. At various times, she has held the soul of Koschei and forced him to perform legendary feats on her behalf.

The Old Witch is known to appear in several places at once. Some scholars believe Baba Yaga is actually three identical sisters, each with her own personality and preoccupations.

```statblock
"name": "Baba Yaga (CCodex)"
"size": "Medium"
"type": "fey"
"alignment": "Chaotic Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "399"
"hit_dice": "47d8 + 188"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "18"
  - !!int "16"
  - !!int "1"
  - !!int "1"
"speed": "40 ft., fly 30 ft."
"saves":
  - "constitution": !!int "10"
  - "wisdom": !!int "12"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Arcana](Mechanics/CLI/rules/skills.md#Arcana)"
    "desc": "+15"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+12"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+11"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons"
"damage_immunities": "necrotic"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 22"
"languages": "All"
"cr": "20"
"traits":
  - "desc": "The baba yaga's innate spellcasting ability is Wisdom (spell save DC\
      \ 20, +12 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring only verbal components:\n\n**At will:** [eldritch blast](Mechanics/CLI/spells/eldritch-blast-xphb.md)\
      \ (2d10), [message](Mechanics/CLI/spells/message-xphb.md), [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md),\
      \ [spare the dying](Mechanics/CLI/spells/spare-the-dying-xphb.md)\n\n**5/day\
      \ each:** [command](Mechanics/CLI/spells/command-xphb.md), [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md),\
      \ [hideous laughter](Mechanics/CLI/spells/tashas-hideous-laughter-xphb.md)\n\
      \n**4/day each:** [blindness/deafness](Mechanics/CLI/spells/blindness-deafness-xphb.md),\
      \ [darkness](Mechanics/CLI/spells/darkness-xphb.md), [enthrall](Mechanics/CLI/spells/enthrall-xphb.md)\n\
      \n**3/day each:** [clairvoyance](Mechanics/CLI/spells/clairvoyance-xphb.md),\
      \ [counterspell](Mechanics/CLI/spells/counterspell-xphb.md), [lightning bolt](Mechanics/CLI/spells/lightning-bolt-xphb.md)\n\
      \n**2/day each:** [banishment](Mechanics/CLI/spells/banishment-xphb.md), [blight](Mechanics/CLI/spells/blight-xphb.md),\
      \ [polymorph](Mechanics/CLI/spells/polymorph-xphb.md)\n\n**1/day each:** [animate\
      \ objects](Mechanics/CLI/spells/animate-objects-xphb.md), [insect plague](Mechanics/CLI/spells/insect-plague-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "Baba Yaga has advantage on Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks that rely on sight. As an action, she can observe a target and magically\
      \ know its current emotional state. If the target fails a DC 19 Charisma saving\
      \ throw, she also knows the creature's alignment and discovers a hidden secret\
      \ about the target."
    "name": "Cronesight"
  - "desc": "Creatures with Intelligence 3 or lower obey Baba Yaga unquestioningly.\
      \ Her utterances are often captured as engravings on nearby stone and wood surfaces.\
      \ These magical reproductions of her words are made in the Common tongue and\
      \ fade after several days."
    "name": "Cronespeech"
  - "desc": "The iron teeth of Baba Yaga are sentient, magical, and airborne dentures\
      \ that sometimes work at cross-purposes to the Old Witch. If the teeth and Baba\
      \ Yaga are getting along, the teeth reside inside her mouth, providing her with\
      \ a bite attack and access to its spell list. Baba Yaga can cast a spell from\
      \ the teeth's innate spell list as a bonus action, using her spellcasting ability.\
      \ Spells cast in this way are removed from the teeth's spells per day total.\
      \ If the witch and her teeth are not getting along, the teeth will fly around\
      \ casting its spells as it wishes (often to the benefit of Baba Yaga's enemies)."
    "name": "Grandmother's Teeth"
  - "desc": "If Baba Yaga fails a saving throw, she can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Baba Yaga flies in a large mortar and pestle, which is immune to damage\
      \ and can't be the target of spells or effects. It provides the witch partial\
      \ cover from ranged attacks. Baba Yaga doesn't provoke an opportunity attack\
      \ when she flies out of an enemy's reach. If Baba Yaga is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), or [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ while flying in the mortar, it will gently set her on the ground and disappear\
      \ for 1 hour. The pestle remains with the witch."
    "name": "Mortar and Pestle"
"actions":
  - "desc": "Baba Yaga makes two pestle slap attacks and one bite attack, or three\
      \ pestle slap attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 10 ft., one target. *Hit:*\
      \ 31 (6d8 + 4) bludgeoning damage. The target must succeed on a DC 20 Constitution\
      \ saving throw or have disadvantage on concentration checks until the end of\
      \ its next turn."
    "name": "Pestle Slap"
  - "desc": "*Melee Weapon Attack:* +10 to hit, reach 5 ft., one target. *Hit:*\
      \ 37 (6d10 + 4) piercing damage and the target must succeed on a DC 20 Wisdom\
      \ saving throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened)\
      \ of Baba Yaga until the end of its next turn."
    "name": "Bite (if iron teeth are equipped)"
  - "desc": "Calling on her elemental powers and her mastery of crone-magic, Baba\
      \ Yaga exhales a great wind in a 40-foot cone that smells of fetid mires and\
      \ sausages. Creatures caught in that area must make a DC 18 Constitution saving\
      \ throw. On a failure, a target takes 45 (10d8) necrotic damage and is affected\
      \ by the bestow curse spell for 1 minute. On a success, a target takes half\
      \ the necrotic damage but is not cursed. In addition, a creature damaged by\
      \ the wind releases a stinking cloud (DC 18 Constitution saving throw against\
      \ the cloud's poison) centered on it at the beginning of its next turn. The\
      \ cloud dissipates after 1d4 rounds."
    "name": "Breath of the Bone Mother (Recharge 5-6)"
"reactions":
  - "desc": "When Baba Yaga's turn ends, she can take an additional turn. A creature\
      \ able to see Baba Yaga dance through time has its understanding of the universe\
      \ challenged and must succeed on a DC 18 Intelligence saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ until the end of its next turn."
    "name": "Dance of the Time Taunter (1/Day)"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the baba yaga can expend a use to take one of the following actions. The\
  \ baba yaga regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Baba Yaga casts one at will spell from her list or from her iron teeth's\
      \ list if it is equipped."
    "name": "At Will Spell"
  - "desc": "Baba Yaga makes one pestle slap attack."
    "name": "Pestle Slap"
  - "desc": "Baba Yaga uses Breath of the Bone Mother, if it is available."
    "name": "Breath of the Bone Mother (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fey/token/baba-yaga-ccodex.png"
```
^statblock

## Environment

forest