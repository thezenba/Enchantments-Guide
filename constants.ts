
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

export const GROUP_TOOLTIPS: Record<string, string> = {
    "A": "Grouping A: Cannot be on the same item with other enchants from this group.",
    "B": "Grouping B: Cannot be on the same item with other enchants from this group.",
    "C": "Grouping C: Cannot be on the same item with other enchants from this group.",
    "D": "Grouping D: Cannot be on the same item with other enchants from this group.",
    "E": "Grouping E: Cannot be on the same item with other enchants from this group.",
    "H": "Grouping H: Cannot be on the same item with other enchants from this group.",
    "J": "Grouping J: Cannot be on the same item with other enchants from this group.",
    "K": "Grouping K: Cannot be on the same item with other enchants from this group.",
    "L": "Grouping L: Cannot be on the same item with other enchants from this group.",
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
