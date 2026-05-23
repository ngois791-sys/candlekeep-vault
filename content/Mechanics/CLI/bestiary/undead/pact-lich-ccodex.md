---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/15
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/undead
statblock: inline
statblock-link: "#^statblock"
aliases:
- Pact Lich
---
# [Pact Lich](Mechanics\CLI\bestiary\undead/pact-lich-ccodex.md)
*Source: Creature Codex p. 253*  

*Despite its frail appearance, the rotting, fiendish creature commands considerable arcane power.*

The first pact lich was a warlock whose patron was a demon lord of undeath. In a moment of whimsy, the demon granted the warlock's petition to become a powerful undead.

## Soul Devourer

A pact lich must feed souls to its patron weekly to retain its lich status. It does this by reducing a creature to 0 hp within 120 feet of a diamond. Diamonds act as conduits for pact liches to send souls to their patrons, but only fist-sized or larger diamonds will do. A lich that forgets or refuses to sacrifice souls begins to physically fall apart, enduring incredible pain.

## Rebirth by Patron's Mercy

When a pact lich's body is destroyed, the will and mind of the lich drains from it and returns to its patron. The patron decides whether to keep the pact lich or allow it to return to the Material Plane. Patrons are fickle beings and may decide to keep the lich for weeks or even centuries as punishment for its failure or may choose to never allow the lich to return. If the lich is allowed to return to the Material Plane, its body reforms in its lair next to a diamond it has used to send souls to its patron. Because the destruction of such diamonds means the possibility of eternal death, a pact lich usually hides many of these diamonds within its lair.

## Undead Nature

A pact lich does not require air, food, drink, or sleep.

> [!note] A Pact of a Different Color
> 
> The pact lich represented here is based on the Fiend patron. Not all patrons, especially not those of good or neutral alignment, would allow their warlocks to take the steps needed to become a pact lich. Those who revel in undeath, however, take special glee in unleashing such a destructive force on the world and reaping the souls the pact lich harvests. If you want to bring a pact lich into play from a different patron, some changes should be considered. Damage resistances, immunities, and actions like Hurl Through Hell can all be changed to reflect a different pact, like resistance to all weapons not made with cold iron for a pact lich whose patron is one of the Fey Lords or Ladies or hurtling a creature through the kaleidoscopic unknown of the Elemental Planes for a pact lich whose patron is a Genie Lord.
^a-pact-of-a-different-color

```statblock
"name": "Pact Lich (CCodex)"
"size": "Medium"
"type": "undead"
"alignment": "Any Evil alignment"
"ac": !!int "17"
"ac_class": "natural armor"
"hp": !!int "195"
"hit_dice": "26d8 + 78"
"modifier": !!int "3"
"stats":
  - !!int "11"
  - !!int "16"
  - !!int "16"
  - !!int "16"
  - !!int "14"
  - !!int "20"
"speed": "30 ft."
"saves":
  - "dexterity": !!int "8"
  - "intelligence": !!int "8"
"skillsaves":
  - "name": "[Deception](Mechanics/CLI/rules/skills.md#Deception)"
    "desc": "+10"
  - "name": "[Persuasion](Mechanics/CLI/rules/skills.md#Persuasion)"
    "desc": "+10"
"damage_resistances": "cold, fire, necrotic"
"damage_immunities": "poison; bludgeoning, piercing, slashing from nonmagical weapons"
"condition_immunities": "[charmed](Mechanics/CLI/rules/conditions.md#Charmed), [frightened](Mechanics/CLI/rules/conditions.md#Frightened),\
  \ [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed), [poisoned](Mechanics/CLI/rules/conditions.md#Poisoned)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 120 ft., passive Perception\
  \ 12"
"languages": "The languages it knew in life"
"cr": "15"
"traits":
  - "desc": "The pact lich's innate spellcasting ability is Charisma (spell save DC\
      \ 18, +10 to hit with spell attacks). It can innately cast the following spells,\
      \ requiring only verbal components:\n\n**At will:** [chill touch](Mechanics/CLI/spells/chill-touch-xphb.md),\
      \ [detect magic](Mechanics/CLI/spells/detect-magic-xphb.md), [levitate](Mechanics/CLI/spells/levitate-xphb.md),\
      \ [mage hand](Mechanics/CLI/spells/mage-hand-xphb.md), [prestidigitation](Mechanics/CLI/spells/prestidigitation-xphb.md),\
      \ [speak with dead](Mechanics/CLI/spells/speak-with-dead-xphb.md), [true strike](Mechanics/CLI/spells/true-strike-xphb.md)\n\
      \n**1/day each:** [banishment](Mechanics/CLI/spells/banishment-xphb.md), [bestow\
      \ curse](Mechanics/CLI/spells/bestow-curse-xphb.md), [compulsion](Mechanics/CLI/spells/compulsion-xphb.md),\
      \ [confusion](Mechanics/CLI/spells/confusion-xphb.md), [conjure elemental](Mechanics/CLI/spells/conjure-elemental-xphb.md),\
      \ [dominate monster](Mechanics/CLI/spells/dominate-monster-xphb.md), [eyebite](Mechanics/CLI/spells/eyebite-xphb.md),\
      \ [finger of death](Mechanics/CLI/spells/finger-of-death-xphb.md), [fly](Mechanics/CLI/spells/fly-xphb.md),\
      \ [hellish rebuke](Mechanics/CLI/spells/hellish-rebuke-xphb.md) (5d10), [hold\
      \ monster](Mechanics/CLI/spells/hold-monster-xphb.md), [slow](Mechanics/CLI/spells/slow-xphb.md)"
    "name": "Innate Spellcasting"
  - "desc": "If the pact lich fails a saving throw, it can choose to succeed instead."
    "name": "Legendary Resistance (3/Day)"
  - "desc": "As a bonus action when in an area of dim light or darkness, the pact\
      \ lich can become [invisible](Mechanics/CLI/rules/conditions.md#Invisible) until\
      \ it moves or takes an action or reaction."
    "name": "One with Shadows"
  - "desc": "When the pact lich reduces a target to 0 hp, the lich gains 25 temporary\
      \ hp."
    "name": "Patron's Blessing"
  - "desc": "If a fist-sized or larger diamond is within its lair, a destroyed pact\
      \ lich usually gains a new body in 3d10 days, but its return to the Material\
      \ Plane is ultimately dictated by its patron."
    "name": "Pact Rejuvenation"
"actions":
  - "desc": "The pact lich makes four enhanced eldritch blast attacks."
    "name": "Multiattack"
  - "desc": "*Melee Spell Attack:* +10 to hit, reach 5 ft., one target. *Hit:* 10\
      \ (3d6) necrotic damage. The target must succeed on a DC 18 Charisma saving\
      \ throw or have vivid hallucinations for 1 minute. During this time, the target\
      \ is [blinded](Mechanics/CLI/rules/conditions.md#Blinded), [stunned](Mechanics/CLI/rules/conditions.md#Stunned),\
      \ and [deafened](Mechanics/CLI/rules/conditions.md#Deafened), sensing only the\
      \ hallucinatory terrain and events. The hallucinations play on aspects of the\
      \ creature's deepest fears. The target can repeat the saving throw at the end\
      \ of each of its turns, ending the effect on itself on a success."
    "name": "Maddening Touch"
  - "desc": "*Ranged Spell Attack:* +10 to hit, range 300 ft., one target. *Hit:*\
      \ 10 (1d10 + 5) force damage. On a successful hit, the pact lich can push\
      \ the target 10 feet away from it in a straight line."
    "name": "Enhanced Eldritch Blast"
  - "desc": "The pact lich targets one creature it can see within 60 feet of it. The\
      \ target must make a DC 18 Wisdom saving throw. On a failure, the target disappears\
      \ and is [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed) as it is hurtled\
      \ through the nightmare landscape of the lower planes. At the end of the pact\
      \ lich's next turn, the target returns to the space it previously occupied,\
      \ or the nearest unoccupied space, and is no longer [paralyzed](Mechanics/CLI/rules/conditions.md#Paralyzed).\
      \ If the target is not a fiend, it takes 55 (10d10) psychic damage when it\
      \ returns. The target must succeed on another DC 18 Wisdom saving throw or be\
      \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened) until the end of\
      \ the lich's next turn as the target reels from its horrific experience."
    "name": "Hurl Through Hell (1/Day)"
"lair_actions":
  - "desc": "On initiative count 20 (losing initiative ties), the pact lich can take\
      \ a lair action to cause one of the following effects; the lich can't use the\
      \ same effect two rounds in a row:\n\n- All creatures within 30 feet of the\
      \ pact lich magically and randomly swap places. In addition, all of the creatures\
      \ (including the lich) look and sound like one of the creatures that was affected.\
      \ Creatures with truesight are able to see through this illusion. On initiative\
      \ count 20 on the next round, the illusion fades, but the translocated creatures\
      \ are not returned to their original places.  \n- The pact lich calls on its\
      \ patron to smite a creature that the lich can see within 60 feet of it. The\
      \ target must succeed on a DC 18 Constitution saving throw, taking 17 (5d6)\
      \ necrotic and 17 (5d6) force damage on a failed save, or half as much damage\
      \ on a successful one. If the target fails, it is stunned until initiative count\
      \ 20 on the next round.  \n- Channeling its patron's energy, the pact lich raises\
      \ up to five dead creatures as a skeleton or zombie like the animate dead spell.\
      \  "
    "name": ""
"regional_effects":
  - "desc": "The region containing a pact lich's lair is warped by its magic, which\
      \ creates one or more of the following effects:\n\n- Roads within 20 miles of\
      \ the lair become strangely mazelike and confusing. Creatures must succeed on\
      \ a DC 18 Wisdom ([Survival](Mechanics/CLI/rules/skills.md#Survival)) check\
      \ while traveling or become lost within the area. Lost creatures can repeat\
      \ the check every subsequent hour and regain their bearings on a success.  \n\
      - Scrying and all other divination and detection spells within 1 mile of the\
      \ lair fail unless the caster succeeds on a DC 16 Intelligence ([Arcana](Mechanics/CLI/rules/skills.md#Arcana))\
      \ check. A failed check means that the spell is still expended, but without\
      \ any positive result.  \n- The pact lich and all other undead have advantage\
      \ on saving throws against effects that turn undead when within 1 mile of the\
      \ lair.  \n\nIf the pact lich dies, these effects fade over the course of 1d10\
      \ days."
    "name": ""
"legendary_description": "Legendary Action Uses: 3. Immediately after another creature's\
  \ turn, the pact lich can expend a use to take one of the following actions. The\
  \ pact lich regains all expended uses at the start of each of its turns."
"legendary_actions":
  - "desc": "The lich casts a spell it can cast at will."
    "name": "At Will Spell"
  - "desc": "The pact lich chooses one damage type, gaining resistance to that damage\
      \ type until it chooses a different one with this feature. Damage from magical\
      \ weapons or silver weapons ignores this resistance."
    "name": "Fiendish Resilience"
  - "desc": "The pact lich uses its Maddening Touch."
    "name": "Maddening Touch (Costs 2 Actions)"
  - "desc": "The lich entreats its patron for aid, regaining all expended spells."
    "name": "Eldritch Master (Costs 3 Actions, 1/Day)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/undead/token/pact-lich-ccodex.png"
```
^statblock

## Environment

any