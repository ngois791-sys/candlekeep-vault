---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/21
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/dragon
statblock: inline
statblock-link: "#^statblock"
aliases:
- Ankou Soul Herald
---
# [Ankou Soul Herald](Mechanics\CLI\bestiary\dragon/ankou-soul-herald-ccodex.md)
*Source: Creature Codex p. 37*  

*A cloak of inky shadows flutters around the bleached-white bones of a dragon. The skeletal dragon moves slowly and methodically, as if searching for something..*

Ankou are servitors of the gods of death. The first dragon to die each century is reborn as an ankou under the death god's auspices and is charged with living a second life as an apparition that ushers the souls of the dead to their final resting places.

## Creatures of Many Forms

Ankou are made from the spirits of dragons, and their natural form is that of a shadowy wyrm. However, ankou rarely manifest before mortals in their natural form for fear of sowing chaos throughout the mortal world. Many humanoid cultures tell legends of the ankou's baleful visage, claiming that the sight of an ankou in its true form is enough to drive a sane human mad and a dead human's spirit to becoming a howling specter. An ankou can adopt the form of any creature it has seen in its life or unlife, but tell‑tale signs of its true nature always leak through to the new form, such as a hollow voice that does not echo or wispy hair, fur, or feathers that move by an unfelt wind. The most popular forms for ankou to assume are humanoid skeletons, ravens, kindly elders, or young children.

## Charged with Grim Duty

The role of the ankou is a necessary one, but one which few dragons would willingly accept. Some dragons go to extreme lengths to avoid being the first to die in a new century with some even going so far as to accept lichdom before accepting the duty of the ankou. The gods of death are loathe to share such deep secrets with mortals, but it is known that the dragons that become ankou serve for eternity. All ankou obey the gods of death unquestioningly, greeting the souls of the deceased at the moment of their death and escorting them across the planes to their final resting place. A single soul herald ankou serves directly beneath the gods of death, commanding the ranks of ankou soul seekers. Typically, a single seeker claims and transports a soul to the herald residing in an extraplanar retreat, who then offers it personally to the gods of death.

## Enforcers of Fate

Though they can live until the end of time, ankou can be killed. Likewise, though ankou have grown wise through eons of life and unlife, they can still be fooled by canny mortals. While creatures that cheat death through cunning and their own wit are often treated with grudging respect by the ushers of souls, the ankou are still duty-bound to send the creatures to the realms of death. Mortals who cheat death by killing ankou gain no such admiration. While a skilled warrior or a powerful dragon can best a single ankou, the slaughter of one of their own sends the ankou into a rage. The ankou soul herald hunts down the transgressor personally in order to cast the creature's soul into the Hells to suffer for its transgression.

## Death God's Servant

The ankou doesn't require air, food, drink, or sleep.

## An Ankou's Lair

Ankou are rarely granted a chance to rest, constantly traveling the planes to usher spirits to their final resting places. When an ankou has a moment of respite, it often returns to the lair it kept in life. This sometimes creates awkward situations for the dragon's family if they still reside in this lair; even dragons have some apprehensions about sharing a home with a relativeturned-reaper. When residing alone, an ankou often decorates its lair with mementos that recall its slowly fading memories of its former life, such as portraits of mortal friends long dead, electrum coins minted by a friend from a now-destroyed kingdom, or the spellbooks of a fallen comrade.

All ankou lairs have a pile of bleached bones somewhere within. These death spirits find that they sleep best when nestled on a bed of bones.

```statblock
"name": "Ankou Soul Herald (CCodex)"
"size": "Gargantuan"
"type": "dragon"
"alignment": "Neutral"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "407"
"hit_dice": "22d20 + 176"
"modifier": !!int "0"
"stats":
  - !!int "25"
  - !!int "10"
  - !!int "27"
  - !!int "17"
  - !!int "18"
  - !!int "19"
"speed": "40 ft., fly 80 ft."
"saves":
  - "dexterity": !!int "7"
  - "constitution": !!int "15"
  - "wisdom": !!int "11"
  - "charisma": !!int "11"
"skillsaves":
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+18"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+11"
  - "name": "[Stealth](Mechanics/CLI/rules/skills.md#Stealth)"
    "desc": "+7"
"damage_immunities": "cold, necrotic, poison"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 28"
"languages": "All"
"cr": "21"
"traits":
  - "desc": "Necromancy spells can't be cast within 120 feet of the ankou. When an\
      \ undead creature starts its turn within 30 feet of the ankou, it must make\
      \ a DC 22 Constitution saving throw, taking 21 (6d6) radiant damage on a failed\
      \ save, or half as much damage on a successful one."
    "name": "Aura of Necromancy's Bane"
  - "desc": "As a bonus action while in dim light or darkness, the ankou becomes [invisible](Mechanics/CLI/rules/conditions.md#Invisible).\
      \ While [invisible](Mechanics/CLI/rules/conditions.md#Invisible), the ankou\
      \ has advantage on Dexterity ([Stealth](Mechanics/CLI/rules/skills.md#Stealth))\
      \ checks and gains the following.\n\n- Resistance to acid, cold, fire, lighting,\
      \ thunder; bludgeoning, piercing and slashing damage from nonmagical attacks.\
      \  \n- Immunity to the [grappled](Mechanics/CLI/rules/conditions.md#Grappled),\
      \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [petrified](Mechanics/CLI/rules/conditions.md#Petrified),\
      \ [prone](Mechanics/CLI/rules/conditions.md#Prone), and [restrained](Mechanics/CLI/rules/conditions.md#Restrained)\
      \ conditions.  \n- The ankou can move through other creatures and objects as\
      \ if they were difficult terrain. It takes 5 (1d10) force damage if it ends\
      \ its turn inside an object.  \n\nThe cloak of ghostly shadows ends when the\
      \ ankou chooses to end it as a bonus action, when the ankou dies, or if the\
      \ ankou ends its turn in bright light."
    "name": "Cloak of Ghostly Shadows"
  - "desc": "The ankou has the celestial type in addition to the dragon type and its\
      \ weapon attacks are magical."
    "name": "Death's Apotheosis"
  - "desc": "If the ankou fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
"actions":
  - "desc": "The ankou can use its Horrifying Presence. It then makes three attacks.\
      \ one with its bite and two with its claws."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 15 ft., one target. *Hit:*\
      \ 18 (2d10 + 7) piercing damage plus 11 (2d10) cold damage."
    "name": "Bite"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 10 ft., one target. *Hit:*\
      \ 14 (2d6 + 7) slashing damage."
    "name": "Claw"
  - "desc": "*Melee Weapon Attack:* +14 to hit, reach 20 ft., one target. *Hit:*\
      \ 16 (2d8 + 7) bludgeoning damage"
    "name": "Tail"
  - "desc": "Each creature of the ankou's choice that is within 120 feet of it must\
      \ make a DC 19 Wisdom saving throw. On a failure, its speed is reduced to 0\
      \ for 1 minute. If the save fails by 5 or more, the creature is instead [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed)\
      \ for 1 minute. A creature can repeat the saving throw at the end of each of\
      \ its turns, ending the effect on itself on a success. If a creature's saving\
      \ throw is successful or the effect ends for it, the creature is immune to the\
      \ ankou's Horrifying Presence for the next 24 hours."
    "name": "Horrifying Presence"
  - "desc": "The ankou exhales cold fire in a 120-foot line that is 10 feet wide.\
      \ Each creature in that area must make a DC 22 Dexterity saving throw, taking\
      \ 66 (12d10) cold damage on a failed save, or half as much damage on a successful\
      \ one. Undead creatures automatically fail the saving throw and treat all damage\
      \ dealt by this breath weapon as radiant instead of cold."
    "name": "Reaper's Breath (Recharge 5-6)"
  - "desc": "The ankou magically polymorphs into any beast, humanoid, or undead creature\
      \ it has seen before that has a challenge rating no higher than its own, or\
      \ back into its true form. It reverts to its true form if it dies. Any equipment\
      \ it is wearing or carrying is absorbed or borne by the new form (the ankou's\
      \ choice). Its statistics, other than its size, are the same in each form and\
      \ it doesn't gain any class features or legendary actions of the new form."
    "name": "Change Shape"
  - "desc": "The ankou can transport itself and up to eight creatures in contact with\
      \ it to another plane of existence. This works like the plane shift spell, except\
      \ dead or incorporeal creatures can be transported and don't have to be willing.\
      \ The ankou can't use this ability to banish an unwilling creature."
    "name": "Usher of Souls"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the ankou takes a lair\
      \ action to cause one of the following effects; it can't use the same action\
      \ two rounds in a row.\n\n- Shrouds of shadow break off of the ankou and animate\
      \ 2d4 [skeletons](Mechanics/CLI/bestiary/undead/skeleton-xmm.md) from its\
      \ pile of bones. These [skeletons](Mechanics/CLI/bestiary/undead/skeleton-xmm.md)\
      \ are immune to the ankou's Aura of Necromancy's Bane. All previously created\
      \ [skeletons](Mechanics/CLI/bestiary/undead/skeleton-xmm.md) are destroyed when\
      \ the ankou dies or when it uses this lair action again.  \n- The ankou chooses\
      \ a living creature it can see within 120 feet of it. That creature must succeed\
      \ on a DC 15 Charisma saving throw or its spirit is forced from its body and\
      \ appears in a random location up to 60 feet away. Without a spirit, the creature's\
      \ body falls unconscious, but only starts dying if it takes damage while unconscious.\
      \ A spirit can reenter its body if it touches the body as an action. A creature's\
      \ spirit retains its statistics; however, it can't attack or cast spells, it\
      \ has a fly speed of 40 feet, it is immune to all damage except force damage,\
      \ and it can move through other creatures and objects as if they were difficult\
      \ terrain. It takes 5 (1d10) force damage if it ends its turn inside an object.\
      \ If a spirit is reduced to 0 hp, it instantly dies.  \n- Skeletal hands burst\
      \ from a point on the ground the ankou can see within 120 feet of it. Each creature\
      \ that enters or starts its turn within a 20-foot radius centered on that point\
      \ must succeed on a DC 15 Strength saving throw or take 5 (1d10) necrotic\
      \ damage and be restrained. A creature can be freed if it or another creature\
      \ takes an action to make a DC 15 Strength check and succeeds. These hands are\
      \ destroyed when the ankou dies or when it uses this lair action again.  "
    "name": ""
"regional_effects":
  - "desc": "The region containing an ankou's lair is warped by its magic, which creates\
      \ one or more of the following effects:\n\n- People see apparitions out of the\
      \ corner of their eye and begin to doubt their own senses. Paranoia grows common.\
      \  \n- Shadows grow unusually long while the sun is high. The stars seem darker\
      \ than usual when night blankets the world.  \n- Undead within 6 miles of the\
      \ lair burn under sunlight and moonlight, taking 1d6 radiant damage at the\
      \ start of each of their turns.  \n\nIf the ankou dies, these supernatural effects\
      \ disappear after 1d10 days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the ankou soul herald can expend a use to take one of the following actions.\
  \ The ankou soul herald regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The ankou learns the location of all living creatures within 120 feet.\
      \ Alternatively, it can learn the location of all undead creatures or creatures\
      \ that have been dead no longer than 1 hour within 1 mile."
    "name": "Detect"
  - "desc": "The ankou makes a tail attack."
    "name": "Tail Attack"
  - "desc": "The ankou moves up to half its speed without provoking opportunity attacks.\
      \ Any creature whose space it moves through must make a DC 22 Dexterity saving\
      \ throw, taking 21 (6d6) necrotic damage on a failed save, or half as much\
      \ damage on a successful one."
    "name": "Envelope in Shadow (Costs 2 Actions)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/dragon/token/ankou-soul-herald-ccodex.png"
```
^statblock

## Environment

any