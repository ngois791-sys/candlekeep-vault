---
obsidianUIMode: preview
cssclasses:
- json5e-monster
tags:
- ttrpg-cli/compendium/src/5e/ccodex
- ttrpg-cli/monster/cr/8
- ttrpg-cli/monster/environment/any
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/celestial/angel
statblock: inline
statblock-link: "#^statblock"
aliases:
- Zoryas
---
# [Zoryas](Mechanics\CLI\bestiary\celestial/zoryas-ccodex.md)
*Source: Creature Codex p. 21*  

*The beautiful, winged woman dressed in voluminous, yellow robes bears a morningstar in one hand and a large, elaborately-crafted, lantern in the other.*

## Brilliant Halos

Zoryas angels are the bringers and enders of light. Appearing at dawn, they ensure that the sun's rays penetrate dark places. At dusk, they hasten light's retreat, allowing darkness its portion. Zoryas angels are bathed in bright white and yellow light. Their brows are adorned with a shining halo consisting of small rotating orbs, leading many to sometimes mistake them for a sunrise when seeing them on the horizon.

## Ushers and Key Holders

They are known to escort the avatars of gods onto and away from the mortal plane. The angels may open and close doors between the celestial plane and the mortal one. Doing so is taxing, and they must rest for several days afterwards. It is said that the brave and the foolish have stolen a zoryas' interplanar keys while the angel recuperated. These stories invariably end poorly for the thieves, who are immolated by the angered angel's wrath.

## Immortal Nature

The zoryas angel doesn't require food, drink, or sleep.

```statblock
"name": "Zoryas (CCodex)"
"size": "Medium"
"type": "celestial"
"subtype": "angel"
"alignment": "Lawful Good"
"ac": !!int "14"
"ac_class": "natural armor"
"hp": !!int "104"
"hit_dice": "16d8 + 32"
"modifier": !!int "0"
"stats":
  - !!int "16"
  - !!int "10"
  - !!int "14"
  - !!int "10"
  - !!int "18"
  - !!int "18"
"speed": "30 ft., fly 40 ft."
"saves":
  - "charisma": !!int "7"
"skillsaves":
  - "name": "[Insight](Mechanics/CLI/rules/skills.md#Insight)"
    "desc": "+7"
  - "name": "[Perception](Mechanics/CLI/rules/skills.md#Perception)"
    "desc": "+7"
"damage_resistances": "fire, radiant, bludgeoning, piercing, slashing"
"condition_immunities": "[blinded](Mechanics/CLI/rules/conditions.md#Blinded), [charmed](Mechanics/CLI/rules/conditions.md#Charmed),\
  \ [deafened](Mechanics/CLI/rules/conditions.md#Deafened), [exhaustion](Mechanics/CLI/rules/conditions.md#Exhaustion),\
  \ [frightened](Mechanics/CLI/rules/conditions.md#Frightened)"
"senses": "[truesight](Mechanics/CLI/rules/senses.md#Truesight) 60 ft., passive Perception\
  \ 17"
"languages": "All, telepathy 120 ft."
"cr": "8"
"traits":
  - "desc": "The zoryas' weapon attacks are magical. When the zoryas hits with any\
      \ weapon, the weapon deals an extra 3d8 radiant or fire damage (included in\
      \ the attack). The zoryas chooses whether its attack does radiant or fire damage\
      \ before making the attack roll."
    "name": "Fire and Light"
  - "desc": "As an action, the zoryas opens a gateway to the celestial plane. The\
      \ gate appears as a shimmering circle that sheds bright light in a 15-foot radius\
      \ and dim light for an additional 15 feet and is framed by twisting, golden\
      \ strands. The gate lasts 1 hour; though, the zoryas can choose to close it\
      \ at any time as a bonus action. Once the gate closes, the zoryas is reduced\
      \ to 0 hp and remains [unconscious](Mechanics/CLI/rules/conditions.md#Unconscious)\
      \ for six days, awakening, fully restored, at sunrise on the seventh day. The\
      \ zoryas can't pass through its own gate."
    "name": "Open Celestial Gate"
  - "desc": "The zoryas regains 10 hp at the start of its turn. If the zoryas takes\
      \ necrotic damage, this trait doesn't function at the start of the zoryas' next\
      \ turn. The zoryas' body is destroyed only if it starts its turn with 0 hp and\
      \ doesn't regenerate."
    "name": "Regeneration"
  - "desc": "The zoryas has advantage on melee attack rolls until the end of its next\
      \ turn."
    "name": "Sun's Guidance (3/Day)"
"actions":
  - "desc": "The angel makes two morningstar attacks."
    "name": "Multiattack"
  - "desc": "*Melee Weapon Attack:* +6 to hit, reach 5 ft., one target. *Hit:* 7\
      \ (1d8 + 3) piercing damage plus 13 (3d8) radiant or fire damage."
    "name": "Morningstar"
  - "desc": "The zoryas' lantern brightens, bathing its environs in brilliant light.\
      \ Each creature within 30 feet of the zoryas must succeed on a DC 16 Wisdom\
      \ saving throw or be [blinded](Mechanics/CLI/rules/conditions.md#Blinded) for\
      \ 1d4 rounds. An undead creature who fails this save also takes 13 (3d8)\
      \ fire damage. The light dispels up to three spells or other magical effects\
      \ of 3rd level or lower like the [dispel magic](Mechanics/CLI/spells/dispel-magic-xphb.md)\
      \ spell within the area."
    "name": "Light of Dawn (Recharges after a Long Rest)"
  - "desc": "The zoryas' lantern darkens, snuffing out nearby natural and magical\
      \ sources of light. Each creature within 30 feet of the zoryas must make a DC\
      \ 16 Constitution saving throw, taking 18 (4d8) cold damage on a failed save,\
      \ or half as much damage on a successful one. The area is bathed in darkness\
      \ like the darkness spell until the end of the zoryas' next turn."
    "name": "Dusk's Arrival (Recharges after a Long Rest)"
"source":
  - "CCodex"
"image": "Mechanics/CLI/bestiary/celestial/token/zoryas-ccodex.png"
```
^statblock

## Environment

any