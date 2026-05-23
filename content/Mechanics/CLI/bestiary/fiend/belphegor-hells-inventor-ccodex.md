---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/22
- ttrpg-cli/monster/environment/planar
- ttrpg-cli/monster/size/huge
- ttrpg-cli/monster/type/fiend/devil
statblock: inline
statblock-link: "#^statblock"
aliases:
- Belphegor, Hell's Inventor
---
# [Belphegor, Hell's Inventor](Mechanics\CLI\bestiary\fiend/belphegor-hells-inventor-ccodex.md)
*Source: Creature Codex p. 100*  

*A whirring clatter of gears, bone, and tormented cries speeds across the skies of hell.*

Once, a lesser-devil named Belphegor ruled a spit of Hell known as the Plane of Openings. There, the devil oversaw great chasms that appeared each morning in the thick blood-clay; chasms filled daily with the excrement of the denizens of Hell. Belphegor and his minions sealed the chasms at day's end, and thusly were the bodily wastes of Hell returned to its unhallowed ground. Though he did as was commanded by the Lords of Hell, the stooped and wretched devil desired power and rank. He began to conceive of ways to reduce the labor of his task. He built a great contraption from the bones of the damned to perform his toilsome task in his stead and named it Prime. Belphegor hoped it would impress his master, who might deliver him from his menial work.

Before he could share his invention, Belphegor became entranced by Prime. Lost in its gears of bone, the devil soon forgot the original purpose of the invention. He continued building intricate parts that seemed like strokes of genius but, in reality, performed no useful function. The Plane of Openings overran with the bilious excrement of the planes of Hell, and soon the stench sank to the lowest pits, befouling the nose of his master. When he arrived to rend the delinquent devil into pieces as punishment for abandoning the task, the Arch-Devil saw Belphegor's machine and smiled wickedly. Through the busywork of self-indulgent invention, Belphegor had managed to produce nothing on a never-before seen scale. Belphegor was immediately made a lieutenant and given domain over tempting brilliant mortals into fruitless ingenuity and invention. He rides upon Prime as his infernal mount, its endless complexities whirring as he passes.

In Hell, Belphegor is a massive, bent humanoid. His face is covered in small, horned protrusions, and his eyes are two endless spiralling voids. In combat, he wields a great flail whose head is held in place by a chain of damned humanoids. The sides of Prime are decorated with the useless inventions of mortals he has corrupted. On the Material Plane, he appears as a wizened, old man who carries a pack filled with tinkerer's tools. His symbol is a laborer's hammer with a shattered head.

## Corruptor of Invention

Belphegor spreads Hell's corruption by tempting mortal ingenuity into endless complexities and fruitless obsessions. A brilliant alchemist attempting to concoct an epic healing draught might be tempted to pursue increasingly rare ingredients—until the draught is forgotten, and the hunt for ingredients takes precedence. An engineer building a massive and glorious span might find herself suddenly obsessed with cladding the bridge in an overly complex way; construction grinds to a halt as the builders iterate endlessly. Wherever ingenuity threatens to make progress, there is Belphegor, steering it towards wasteful tinkering.

## Wasted Gifts

Belphegor delights in good-hearted mortals ignoring their own gifts and pursuing goals that are beneath their abilities. He revels in social, religious, and political systems that prevent beings from fulfilling their destinies. Self-pitying paralysis is one of the devil's strongest powers; Belphegor longs to watch a hero wallow in drink and doubt while their town is pillaged around them.

```statblock
"name": "Belphegor, Hell's Inventor (CCodex)"
"size": "Huge"
"type": "fiend"
"subtype": "devil"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "402"
"hit_dice": "35d12 + 178"
"modifier": !!int "3"
"stats":
  - !!int "20"
  - !!int "16"
  - !!int "20"
  - !!int "22"
  - !!int "18"
  - !!int "14"
"speed": "30 ft., fly 60 ft."
"saves":
  - "constitution": !!int "12"
  - "intelligence": !!int "13"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+11"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+11"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+9"
"damage_resistances": "cold; bludgeoning, piercing, slashing from nonmagical weapons\
  \ that aren't silvered"
"damage_immunities": "fire, poison"
"condition_immunities": "[frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 120 ft., passive\
  \ Perception 21"
"languages": ""
"cr": "22"
"traits":
  - "desc": "During a long rest, Belphegor can create three flesh golems or three\
      \ gorgons. The creatures are made from various fleshy and metal parts stored\
      \ on Prime. The constructs obey his commands until they are slain or disassemble\
      \ into pieces after 24 hours."
    "name": "Builder of Hell"
  - "desc": "If Belphegor fails a saving throw, he can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "Belphegor retains his humble roots. Creatures in his presence find they\
      \ don't have full control of their body's orifices. A creature that starts its\
      \ turn within 20 feet of Belphegor must succeed on a DC 20 Constitution saving\
      \ throw or suffer one of the following effects until the end of its next turn\
      \ (rolled randomly or chosen by the GM).\n\n- **Tears.** The creature's eyes\
      \ swell with tears, causing the creature to become [blinded](Mechanics/CLI/rules/conditions.md#Blinded).\
      \  \n- **Vomit.** The creature vomits uncontrollably and is considered [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)\
      \ and can't speak.  \n- **Defecation.** The creature's insides cramp as it voids\
      \ its bowels, becoming [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ in the process.  \n- **Discharge of Wax.** A thick wax fills the creature's\
      \ ears, causing the creature to become [deafened](Mechanics/CLI/rules/conditions.md#Deafened).\
      \  "
    "name": "Lord of Openings"
  - "desc": "Belphegor's weapon attacks are magical."
    "name": "Magic Weapons"
  - "desc": "Mist swirls in the depths of Belphegor's pit-like eyes. Creatures who\
      \ look upon Belphegor lose all benefits from their next long rest as they struggle\
      \ to expel the devil's hollow gaze from their minds."
    "name": "Pitted Sockets"
  - "desc": "Belphegor rides a grand, floating palanquin named Prime. This overly\
      \ complex device-turned-vehicle is immune to damage and can't be the target\
      \ of spells or effects. It provides the demon lord partial cover from ranged\
      \ attacks. Belphegor doesn't provoke an opportunity attack when he flies out\
      \ of an enemy's reach while on Prime. If Belphegor is knocked [prone](Mechanics/CLI/rules/conditions.md#Prone),\
      \ [stunned](Mechanics/CLI/rules/conditions.md#Stunned), or [incapacitated](Mechanics/CLI/rules/conditions.md#Incapacitated)\
      \ while flying on Prime, it will gently set him on the ground and disappear\
      \ for 1 hour."
    "name": "Prime"
"actions":
  - "desc": "Belphegor makes three soul flail attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +12 to hit, reach 10 ft., one target. *Hit:*\
      \ 32 (5d10 + 5) bludgeoning damage and 14 (4d6) fire damage. Each creature\
      \ trapped in his flail by Form the Chain must succeed on a DC 20 Constitution\
      \ saving throw or take 10 (3d6) psychic damage."
    "name": "Soul Flail"
  - "desc": "Belphegor activates the many complexities built atop Prime. All creatures\
      \ who can see Belphegor must succeed on a DC 19 Wisdom saving throw or be [stunned](Mechanics/CLI/rules/conditions.md#Stunned)\
      \ for 1d4 rounds as fruitless comprehension takes hold of their minds. A creature\
      \ affected by this ability feels compelled to tinker, conceive, or otherwise\
      \ invent an overly complex object related to its class and background. Any downtime\
      \ taken during the next seven days after failing this saving throw is spent\
      \ toiling on this object until ultimately, nothing comes of it."
    "name": "Endless Complexity (1/Day)"
"reactions":
  - "desc": "When Belphegor is hit by an attacker he hit with his soul flail in the\
      \ past minute, the attacker must succeed on a DC 19 Wisdom saving throw or the\
      \ attack does no damage and the attacker takes the place of a damned soul, teleporting\
      \ to its location on the flail instantly. The attacker is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ and experiences tremendous psychic suffering as it helps to hold the head\
      \ of the flail to the handle. At the end of its next turn, it returns to the\
      \ space it previously occupied or to the nearest unoccupied space. If a creature's\
      \ saving throw is successful or the effect ends for it, the creature can't be\
      \ affected by Belphegor's Form the Chain again until Belphegor hits it with\
      \ another Soul Flail attack."
    "name": "Form the Chain"
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the belphegor can expend a use to take one of the following actions. The\
  \ belphegor regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "Belphegor moves up to half his speed."
    "name": "Move"
  - "desc": "Belphegor makes one soul flail attack."
    "name": "Soul Flail"
  - "desc": "Belphegor uses his Endless Complexity if it is available."
    "name": "Endless Complexity (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/belphegor-hells-inventor-ccodex.png"
```
^statblock

## Environment

planar