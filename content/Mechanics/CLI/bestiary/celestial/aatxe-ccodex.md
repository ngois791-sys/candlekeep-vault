---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/environment/farmland
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/large
- ttrpg-cli/monster/type/celestial/shapechanger
statblock: inline
statblock-link: "#^statblock"
aliases:
- Aatxe
---
# [Aatxe](Mechanics\CLI\bestiary\celestial/aatxe-ccodex.md)
*Source: Creature Codex p. 7*  

*A fierce, crimson bull trots across the grass, tossing its curved horns and snorting with anger.*

## Earthbound Celestial Guardians

Aatxes serve as protective agents of benevolent deities, sent to watch over pious communities and provide them with a measure of protection from harm.

## Walks Among the People

Though its true form is that of a great red bull, an aatxe can take on the form of a male humanoid to walk among the people it is tasked to protect—the better to uncover threats to their safety. An aatxe so disguised rarely takes on the appearance of anyone familiar to those it protects and avoids unnecessary communication and attachment, attempting to pass itself off as an uninteresting traveler.

## An Aatxe's Lair

Aatxes prefer to make their homes in caverns or other secluded locations, though they will forego that preference in favor of ruins or shelters which provide a view of the regions they protect.

```statblock
"name": "Aatxe (CCodex)"
"size": "Large"
"type": "celestial"
"subtype": "shapechanger"
"alignment": "Lawful Good"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "105"
"hit_dice": "10d10 + 50"
"modifier": !!int "1"
"stats":
  - !!int "22"
  - !!int "12"
  - !!int "20"
  - !!int "10"
  - !!int "14"
  - !!int "14"
"speed": "50 ft."
"skillsaves":
  - "name": "[Athletics](Mechanics/CLI/rules/skills.md#Athletics)"
    "desc": "+9"
  - "name": "[Intimidation](Mechanics/CLI/rules/skills.md#Intimidation)"
    "desc": "+5"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "passive Perception 12"
"languages": "understands all but can't speak"
"cr": "5"
"traits":
  - "desc": "If the aatxe moves at least 20 feet straight toward a target and then\
      \ hits it with a gore attack on the same turn, the target takes an extra 9 (2d8)\
      \ piercing damage. If the target is a creature, it must succeed on a DC 15 Strength\
      \ saving throw or be knocked [prone](Mechanics/CLI/rules/conditions.md#Prone)."
    "name": "Charge"
  - "desc": "The aatxe can use an action to read the surface thoughts of one creature\
      \ within 30 feet. This works like the detect thoughts spell, except it can only\
      \ read surface thoughts and there is no limit to the duration. It can end this\
      \ effect as a bonus action or by using an action to change the target."
    "name": "Know Thoughts"
  - "desc": "The aatxe can verbally communicate only simple ideas and phrases, though\
      \ it can understand and follow a conversation without issue."
    "name": "Limited Speech (Humanoid Form Only)"
  - "desc": "The aatxe has advantage on saving throws against spells and other magical\
      \ effects."
    "name": "Magic Resistance"
  - "desc": "The aatxe can use its action to polymorph into a Medium male humanoid\
      \ it has seen, or back into its true form. Its statistics, other than its size,\
      \ are the same in each form. Any equipment it is wearing or carrying isn't transformed.\
      \ It reverts to its true form if it dies."
    "name": "Shapechanger"
"actions":
  - "desc": "*Melee Weapon Attack:* +9 to hit, reach 5 ft., one target. *Hit:* 19\
      \ (3d8 + 6) piercing damage."
    "name": "Gore"
  - "desc": "The aatxe lowers its horns and paws at the ground with its hooves. Each\
      \ creature within 30 feet of the aatxe must succeed on a DC 15 Wisdom saving\
      \ throw or be [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for\
      \ 1 minute. A creature can repeat the saving throw at the end of each of its\
      \ turns, ending the effect on itself on a success. If a creature's saving throw\
      \ is successful or the effect ends for it, the creature is immune to the aatxe's\
      \ Paw the Earth for the next 24 hours."
    "name": "Paw the Earth"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the aatxe takes a lair\
      \ action to cause one of the following magical effects:\n\n- The ground bubbles\
      \ into a sticky muck in a 20-foot radius centered on a point that the aatxe\
      \ can see within 120 feet of it. That area becomes difficult terrain, and each\
      \ creature in that area must succeed on a DC 15 Dexterity saving throw or be\
      \ restrained by the muck. A creature can take its action to free itself or another\
      \ stuck creature from the muck by succeeding on a DC 15 Strength check. The\
      \ muck hardens back into earth when the aatxe uses this lair action again or\
      \ when it dies.  \n- The aatxe targets one creature it can see within 30 feet\
      \ of it. A glowing beam of red light tethers the aatxe to the target. An unwilling\
      \ target must succeed on a DC 15 Wisdom saving throw to resist the tether. Each\
      \ time the target takes damage, the damage is split evenly between the target\
      \ and the aatxe, transferring along the red beam. While tethered, the aatxe\
      \ has resistance to all damage, except for damage transferred along the beam.\
      \ This tether lasts until the tethered target dies, the aatxe uses this lair\
      \ action again, or the aatxe dies.  \n- Motes of celestial light dance around\
      \ the aatxe. Each hostile creature within 20 feet of the aatxe must succeed\
      \ on a DC 15 Dexterity saving throw or be covered in the motes of light. A creature\
      \ covered in motes of light sheds dim light in a 10-foot radius and can't benefit\
      \ from being invisible. Any attack roll against a creature covered in motes\
      \ of light has advantage if the attacker can see the creature. The motes of\
      \ light last until initiative count 20 on the next round.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing an aatxe's lair is changed by its celestial presence,\
      \ which creates one or more of the following effects:\n\n- Nonmagical light\
      \ illuminates an additional 10 feet within 3 miles of an aatxe's lair.  \n-\
      \ From sunset to sunrise, birds within 5 miles of an aatxe's lair do their best\
      \ to draw attention to those lying in wait to ambush or stalking victims for\
      \ nefarious purposes. A separate DC 15 Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ check must be made to avoid the attention of birds in the area while stalking\
      \ or preparing to ambush an intelligent being. If the creature engaged in such\
      \ activity is a fiend or undead, the birds will race to alert the aatxe to its\
      \ presence.  \n- Predatory beasts within 5 miles of an aatxe's lair find intelligent\
      \ beings unpalatable.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the aatxe can expend a use to take one of the following actions. The aatxe\
  \ regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The aatxe makes a Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ check."
    "name": "Detect"
  - "desc": "The aatxe makes one gore attack."
    "name": "Gore (Costs 2 Actions)"
  - "desc": "The aatxe flares crimson with celestial power, protecting those nearby.\
      \ The next attack that would hit an ally within 5 feet of the aatxe hits the\
      \ aatxe instead."
    "name": "Bulwark (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/corrupted-aatxe-ccodex.png"
```
^statblock

## Environment

farmland, urban