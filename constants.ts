
import { EquipmentType } from './types';

export const EQUIPMENT_NAME_MAP: Record<EquipmentType, string> = {
    weapon: 'Weapon',
    shield: 'Shield',
    bow: 'Bow',
    helm: 'Helm',
    armor: 'Armor',
    pants: 'Pants',
    gloves: 'Gloves'
};

export const ATTRIBUTE_KEYWORDS: Record<string, RegExp[]> = {
    'text-[#fbbc04]': [/focus/gi],
    'text-[#ea9999]': [/health/gi, /healing/gi, /regainable/gi],
    'text-[#b6d7a8]': [/stamina/gi, /dodge/gi],
    'text-[#b4a7d6]': [/armor/gi, /resistance/gi, /poise/gi, /damage taken/gi, /block/gi, /parry/gi],
    'text-[#c28464]': [/durability/gi, /indestructible/gi, /unrepairable/gi],
    'text-[#f1d8ba]': [/movement speed/gi, /sprinting/gi, /roll/gi, /speed/gi],
    'text-[#cccccc]': [/weight/gi, /equip load/gi]
};

export const GROUP_BADGE_COLORS: Record<string, string> = {
    "A": "bg-[#b9d3ff]", "B": "bg-[#fbbc04]", "C": "bg-[#b6d7a8]",
    "D": "bg-[#b4a7d6]", "E": "bg-[#ec92ff]", "H": "bg-[#ea9999]",
    "J": "bg-[#f1d8ba]", "K": "bg-[#c28464]", "L": "bg-[#d13167]",
    "None": "bg-[#777] text-white"
};

export const groupTitles: Record<string, string> = {
  A: "Damage",
  B: "Focus",
  C: "Stamina",
  D: "Durability",
  E: "Resistance",
  H: "Health",
  J: "Move Speed",
  K: "Weight",
  L: "Armor"
};

export const groupExplanations: Record<string, string> = {
  A: "Damage - This group is predominantly focused on increasing damage in various ways. It includes direct damage bonuses, damage based on certain conditions (like durability or high focus), elemental damage, and effects that are triggered by performing offensive actions like killing or staggering.",
  B: "Focus - Enchantments in this group are consistently related to the manipulation of 'Focus.' This includes increasing focus gain, reducing the focus cost of abilities, and gaining focus under specific conditions, such as parrying or blocking.",
  C: "Stamina - This group concentrates on stamina-related improvements. It includes reducing the stamina cost for various actions (attacking, dodging), increasing stamina recovery, and gaining stamina in certain combat situations.",
  D: "Durability - The enchantments here are all about item durability. They increase an item's maximum durability or provide a chance not to consume durability upon use. The 'Plagued' version of this group can even make an item indestructible.",
  E: "Resistance - This group offers defensive enhancements, primarily focused on increasing resistances to various types of elemental damage (fire, ice, lightning, plague) and increasing stagger resistance.",
  H: "Health - Enchantments in this group are related to health and survival. They include increasing maximum health, improving healing effectiveness, regenerating health, and gaining life through various actions (lifesteal).",
  J: "Move Speed - This group is entirely dedicated to improvements in movement speed, offering persistent or conditional movement speed bonuses.",
  K: "Weight - This group has a singular utility focus: reducing the item's weight, which can help with overall equipment load management.",
  L: "Armor - This group is focused on reducing incoming damage. It includes enchantments that increase armor and decrease damage taken based on various conditions, such as durability, low health, or the number of nearby enemies."
};

export const groupSummaries: Record<string, string> = {
  A: "Increases damage in various ways.",
  B: "Focus manipulation and gain.",
  C: "Stamina and recovery improvements.",
  D: "Increases or protects the item's durability.",
  E: "Increases resistances and defense.",
  H: "Increases health, healing, or lifesteal.",
  J: "Increases movement speed.",
  K: "Reduces item weight.",
  L: "Increases armor or reduces damage taken."
};