---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/13
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend/demon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Chittr'k'k, Demon Lord of Rats
---
# [Chittr'k'k, Demon Lord of Rats](Mechanics\CLI\bestiary\fiend/chittrkk-demon-lord-of-rats-ccodex.md)
*Source: Creature Codex p. 76*  

*Puffing on his faintly screaming pipe, the foul creature seemed almost contemplative as he disemboweled the humans, one by one. The air around him was thick with plague, with nibbling decay, and with the greasy shine of hideous dreams.*

The demon lord is an upright and partly-humanoid large, redeyed rat. His grey-white fur is sometimes spattered with offal and flecked with blood; other times, he is groomed constantly by swarms of ordinary rats. Chittr'k'k's tail is tipped with a strange greenish fire. His front paws are long-fingered in the manner of rats, fully capable of holding and manipulating wands, scrolls, and other objects. He has long gold incisors, a short snout, and large ears (often ornamented with black or golden rings). He often smokes a magical pipe filled with mortal souls, drawing necrotic energy from this unhallowed vessel.

## Cunning and Malicious

Chittr'k'k finds human weakness amusing and delights in cruelty. While still given to unbridled destruction, he is sometimes more cunning than other demon lords. He is able to destroy a crop or a city with equal joy. He justifies this as "vengeance for my brethren"—for all rats are his worshippers and slaves.

## Devourer of Souls

Chittr'k'k's power comes in part from eating entire legions of mortal souls, and he dreams of attaining godhood through the devouring of demons. [Rattok demons](Mechanics/CLI/bestiary/fiend/rattok-ccodex.md) are said to be his creations.

## Lord of Shadows

Chittr'k'k keeps a vast network of spies in the mortal world. All red-eyed rats are his servants, chittering their knowledge of blood, sacrifice, and misery to their dark lord. Chittr'k'k uses this information to give his followers greater reach, to destroy granaries, to starve entire nations, and to spread disease and misery everywhere his long-fingered claws reach.

## Lord of Shadows

Chittr'k'k's lair is a vast realm of tunnels and dank caverns with thousands, if not millions, of rats, ratfolk, rattok demons and other horrors, a noisy place of constant squeals and skittering filled with the rank smells of blood, offal, and sweat. It is filled with snarling creatures preying on one another in its narrow, bone-strewn passages. Its only illumination comes from unholy sigils and territorial markings made in multi-colored, pale luminous ink.

```statblock
"name": "Chittr'k'k, Demon Lord of Rats (CCodex)"
"size": "Medium"
"type": "fiend"
"subtype": "demon"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"hp": !!int "172"
"hit_dice": "23d8 + 69"
"modifier": !!int "6"
"stats":
  - !!int "12"
  - !!int "22"
  - !!int "17"
  - !!int "21"
  - !!int "20"
  - !!int "10"
"speed": "30 ft., swim 20 ft."
"saves":
  - "dexterity": !!int "11"
  - "constitution": !!int "8"
  - "intelligence": !!int "10"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+10"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+10"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+11"
"damage_resistances": "cold, lightning"
"damage_immunities": "fire, necrotic, poison"
"condition_immunities": "[poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., [truesight](Mechanics/CLI/rules/senses.md#Truesight)\
  \ 60 ft., passive Perception 20"
"languages": "Common, Abyssal, telepathy 120 ft."
"cr": "13"
"traits":
  - "desc": "Whenever Chittr'k'k is subjected to fire or necrotic damage, he takes\
      \ no damage and instead is unaffected by spells and other magical effects that\
      \ would impede his movement. This trait works like the [freedom of movement](Mechanics/CLI/spells/freedom-of-movement-xphb.md)\
      \ spell, except it only lasts for 1 minute."
    "name": "Fire Dancer"
  - "desc": "As a bonus action, Chittr'k'k teleports, along with any equipment he\
      \ is wearing or carrying, up to 60 feet to an unoccupied space he can see."
    "name": "Quick Escape"
  - "desc": "If Chittr'k'k fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "Chittr'k'k makes two Soul Bite attacks or three Necrotic Flame attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +11 to hit, reach 5 ft., one target. *Hit:*\
      \ 15 (2d8 + 6) piercing damage plus 7 (2d6) necrotic damage."
    "name": "Soul Bite"
  - "desc": "Ranged Magic Attack. +10 to hit, 120 ft., one target. *Hit:* 13 (3d8)\
      \ necrotic damage."
    "name": "Necrotic Flame"
"reactions":
  - "desc": "When Chittr'k'k or a rattok demon within 120 feet of Chittr'k'k reduces\
      \ a creature to 0 hp, the demon lord devours that creature's soul. Chittr'k'k\
      \ gains 19 (3d12) temporary hp and the creature must succeed on a DC 18 Constitution\
      \ saving throw or suffer two failed death saving throws."
    "name": "Soul Devouring"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), Chittr'k'k can take\
      \ a lair action to cause one of the following effects; he can't use the same\
      \ effect two rounds in a row:\n\n- A cloud of filth and the smell of rotting\
      \ garbage fills the lair. Each creature within 60 feet of Chittr'k'k must succeed\
      \ on a DC 15 Constitution saving throw or be poisoned until initiative count\
      \ 20 on the next round.  \n- Rats swarm together into miniature boulders and\
      \ drop from the ceiling, striking up to three creatures beneath them that Chittr'k'k\
      \ can see within 120 feet of him. Chittr'k'k makes one ranged attack roll (+11\
      \ to hit) against each target. On a hit, the target takes 10 (3d6) bludgeoning\
      \ damage and has disadvantage on concentration checks until initiative count\
      \ 20 on the next round as the rats scamper down the target.  \n- A swarm of\
      \ ghostly rattok demons fills a 20-foot-radius sphere at a point Chittr'k'k\
      \ chooses within 120 feet. The swarm of ghosts spreads around corners and remains\
      \ until Chittr'k'k dismisses it as an action, uses this lair action again, or\
      \ dies. The swarm is lightly obscured, and its area is difficult terrain. A\
      \ creature in the swarm when it appears or that ends its turn in the swarm must\
      \ make a DC 18 Dexterity saving throw, taking 39 (6d12) necrotic damage on\
      \ a failed save, or half as much damage on a successful one.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the chittr'k'k can expend a use to take one of the following actions. The\
  \ chittr'k'k regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Chittr'k'k uses his soul bite attack."
    "name": "Soul Bite"
  - "desc": "Chittr'k'k commands a rat to dash under the feet of a creature within\
      \ 60 feet, causing it to stumble. The creature must succeed on a DC 15 Dexterity\
      \ saving throw or it drops whatever it is holding and falls [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Stumble"
  - "desc": "Chittr'k'k surrounds himself with hideous vapors from his pipe, a screeching,\
      \ pestilent mix of damned souls and poison gas. The gas spreads around corners,\
      \ and its area is lightly obscured. Each creature that starts its turn within\
      \ 10 feet of Chittr'k'k must make a DC 15 Constitution saving throw. On a failure,\
      \ the creature takes 16 (3d10) necrotic damage and is [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ On a success, the creature takes half the damage and is not [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned).\
      \ The gas lasts until Chittr'k'k uses this legendary action again or until Chittr'k'k\
      \ dies. Rats, rattok demons, wind demons, and Chittr'k'k are immune to the effects\
      \ of Plague Breath."
    "name": "Plague Breath (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/chittrkk-demon-lord-of-rats-ccodex.png"
```
^statblock

## Environment

planar