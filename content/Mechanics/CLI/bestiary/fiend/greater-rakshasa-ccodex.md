---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/urban
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/fiend
statblock: inline
statblock-link: "#^statblock"
aliases:
- Greater Rakshasa
---
# [Greater Rakshasa](Mechanics\CLI\bestiary\fiend/greater-rakshasa-ccodex.md)
*Source: Creature Codex p. 312*  

*This fiendish mastermind appears as a sleek, white tiger-headed humanoid with bright blue eyes, striking markings and impressive whiskers. Dressed in fine silk robes woven with golden patterns, he lounges indolently on a low seat, smoking a hookah held in his backward paw.*

Greater rakshasas are more powerful cousins of standard rakshasas. When a truly wicked rakshasa is reincarnated after several lifetimes of treachery and depravity, it will return to the Material Plane from the Hells as a member of a higher caste.

## Master Manipulators

Greater rakshasas are driven by a lust for power, keeping their true natures hidden as they maneuver themselves into the highest echelons of society. Some rule duchies, baronies, or even whole kingdoms, while others are content to be the power behind the throne, pulling the strings as the king's vizier or first minister. No scheme is ever too complicated for them, and they are willing to employ a variety of techniques to achieve their aims, including eloquence, deception, bribery, blackmail, and intimidation. Greater rakshasas are adept at assuming multiple identities to carry out their plots, sometimes whispering in the same person's ear from different guises to sway them.

## Wickedly Decadent

A greater rakshasa seeks to live a life of luxury and vice. Like its lesser cousin, it takes pleasure in toying with mortals as it carries out its evil schemes, manipulating and corrupting foolish creatures, then feeding on their flesh when tiring of them. A greater rakshasa usually has several rakshasas in its service, as well as a number of charmed humanoid guards and retainers. Although it is a capable melee fighter, a greater rakshasa considers hand-to-hand combat beneath it, preferring to use magical domination and fear whenever possible.

```statblock
"name": "Greater Rakshasa (CCodex)"
"size": "Medium"
"type": "fiend"
"alignment": "Lawful Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "144"
"hit_dice": "17d8 + 68"
"modifier": !!int "4"
"stats":
  - !!int "14"
  - !!int "18"
  - !!int "18"
  - !!int "15"
  - !!int "16"
  - !!int "20"
"speed": "40 ft."
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+8"
"damage_vulnerabilities": "piercing"
"damage_immunities": "bludgeoning, piercing, slashing from nonmagical weapons"
"senses": "[darkvision](Mechanics/CLI/rules/senses.md#Darkvision) 60 ft., passive\
  \ Perception 13"
"languages": "Common, Infernal"
"cr": "15"
"traits":
  - "desc": "The greater rakshasa's innate spellcasting ability is Charisma (spell\
      \ save DC 18, +10 to hit with spell attacks). It can innately cast the following\
      \ spells, requiring no material components:\n\n**At will:** [detect thoughts](Mechanics/CLI/spells/detect-thoughts-xphb.md),\
      \ [disguise self](Mechanics/CLI/spells/disguise-self-xphb.md), [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md),\
      \ [minor illusion](Mechanics/CLI/spells/minor-illusion-xphb.md)\n\n**3/day each:**\
      \ [charm person](Mechanics/CLI/spells/charm-person-xphb.md), [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md),\
      \ [invisibility](Mechanics/CLI/spells/invisibility-xphb.md), [major image](Mechanics/CLI/spells/major-image-xphb.md),\
      \ [suggestion](Mechanics/CLI/spells/suggestion-xphb.md)\n\n**1/day each:** [dominate\
      \ person](Mechanics/CLI/spells/dominate-person-xphb.md), [fly](Mechanics/CLI/spells/fly-xphb.md),\
      \ [plane shift](Mechanics/CLI/spells/plane-shift-xphb.md), [true seeing](Mechanics/CLI/spells/true-seeing-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "The greater rakshasa can't be affected or detected by spells of 7th level\
      \ or lower unless it wishes to be. It has advantage on saving throws against\
      \ all other spells and magical effects."
    "name": "Limited Magic Immunity"
  - "desc": "When the greater rakshasa casts the charm person spell, it can target\
      \ up to five creatures. When it casts the dominate person spell, the spell's\
      \ duration is concentration, up to 8 hours."
    "name": "Puppet Master"
"actions":
  - "desc": "The greater rakshasa makes two claw attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +7 to hit, reach 5 ft., one target. *Hit:* 9\
      \ (2d6 + 2) slashing damage, and the target is cursed if it is a creature.\
      \ The magical curse takes effect whenever the target takes a short or long rest,\
      \ filling the target's thoughts with horrible images and dreams. The cursed\
      \ target gains no benefit from finishing a short or long rest. The curse lasts\
      \ until it is lifted by a [remove curse](Mechanics/CLI/spells/remove-curse-xphb.md)\
      \ spell or similar magic."
    "name": "Claw"
  - "desc": "The greater rakshasa chooses a point it can see within 60 feet, conjuring\
      \ a terrifying manifestation of its enemies' worst fears in a 30-foot-radius\
      \ around the point. Each non-rakshasa in the area must make a DC 18 Wisdom saving\
      \ throw. On a failed save, a creature takes 66 (12d10) psychic damage and\
      \ becomes [frightened](Mechanics/CLI/rules/conditions.md#Frightened) for 1 minute.\
      \ On a success, the target takes half the damage and isn't [frightened](Mechanics/CLI/rules/conditions.md#Frightened).\
      \ A [frightened](Mechanics/CLI/rules/conditions.md#Frightened) creature can\
      \ repeat the saving throw at the end of each of its turns, ending the effect\
      \ on itself on a success."
    "name": "Harrowing Visions (Recharge 5-6)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the greater rakshasa\
      \ can take a lair action to cause one of the following magical effects; the\
      \ rakshasa can't use the same effect two rounds in a row:\n\n- A sweetly scented\
      \ invisible vapor fills the halls of the lair. Each humanoid creature in the\
      \ lair must succeed on a DC 18 Wisdom saving throw or have disadvantage on saving\
      \ throws against enchantment spells until initiative count 20 on the next round.\
      \  \n- A psychedelic, twisting pattern of colored shapes appears in the air\
      \ at a point the greater rakshasa can see within 120 feet of it. Each creature,\
      \ other than the greater rakshasa, that can see the pattern must succeed on\
      \ a DC 18 Wisdom saving throw or become incapacitated with a speed of 0 until\
      \ initiative count 20 on the next round.  \n- Four quasi-real Medium swarms\
      \ of burning monkeys (use swarm of rats statistics) appear in spaces that the\
      \ greater rakshasa can see within 60 feet; these spaces can be occupied. The\
      \ monkeys act immediately. A creature starting its turn in a space occupied\
      \ by burning monkeys takes 3 (1d6) fire damage and must make a DC 18 Wisdom\
      \ saving throw or become confused. This works like the confusion spell, except\
      \ it only lasts 1 round. The burning monkeys disappear on initiative count 20\
      \ on the next round.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a greater rakshasa's lair is warped by the fiend's\
      \ magic, which creates one or more of the following effects:\n\n- A creature\
      \ hostile to the greater rakshasa can't recover from exhaustion after a long\
      \ rest while within 1 mile of the rakshasa's lair as its sleep is haunted by\
      \ strange dreams.  \n- The greater rakshasa cloaks the traps protecting its\
      \ lair with clever illusions. Wisdom ([Perception](Mechanics/CLI/rules/skills.md#Perception))\
      \ checks to detect traps within the lair are made with disadvantage.  "
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the greater rakshasa can expend a use to take one of the following actions.\
  \ The greater rakshasa regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The greater rakshasa makes one claw attack."
    "name": "Claw Attack"
  - "desc": "The greater rakshasa becomes [invisible](Mechanics/CLI/rules/conditions.md#Invisible)\
      \ at the same time that an illusory double of itself appears where it is standing.\
      \ This switch is indiscernible to others. After the double appears, the greater\
      \ rakshasa can move up to its speed. Both effects last until the start of the\
      \ greater rakshasa's next turn, but the invisibility ends if the greater rakshasa\
      \ makes an attack or casts a spell before then."
    "name": "Misleading Escape (Costs 2 Actions)"
  - "desc": "The greater rakshasa casts a spell from its list of innate spells, consuming\
      \ a use of the spell as normal."
    "name": "Cast a Spell (Costs 3 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/fiend/token/greater-rakshasa-ccodex.png"
```
^statblock

## Environment

urban