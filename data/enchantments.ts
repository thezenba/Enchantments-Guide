import { FullEnchantmentData } from '../types';

export const enchantmentData: FullEnchantmentData = {
    magicalEnchantments: {
        weapon: [
            // --- Group: None ---
            { id: 101, group: "None", baseText: "Damage increased by {val1} for 30s after Backstab", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_backstab", "conditional"] },
            { id: 102, group: "None", baseText: "Stagger Damage increased by {val1} for 30s after Backstab", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "on_backstab", "conditional"] },
            { id: 103, group: "None", baseText: "Stagger Damage increased by {val1} for 20s after Kill", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "on_kill", "conditional"] },

            // --- Group: A ---
            { id: 104, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent"] },
            { id: 105, group: "A", baseText: "Deal {val1} Explosion Damage on Kill", values: [{ key: "{val1}", type: "percentage", min: 25, max: 50, stat: "explosion_damage" }], tags: ["damage", "offensive", "on_kill", "aoe"] },
            { id: 106, group: "A", baseText: "Deal {val1} Damage on Staggering an Enemy", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "damage" }], tags: ["damage", "offensive", "on_stagger"] },
            { id: 107, group: "A", baseText: "Attack Stamina Cost decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "persistent"] },
            { id: 108, group: "A", baseText: "Attack Speed increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "attack_speed" }], tags: ["speed", "offensive", "durability_scaling", "persistent"] },
            { id: 109, group: "A", baseText: "Damage increased by {val1} when at High Focus", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "damage" }], tags: ["damage", "offensive", "focus_scaling", "conditional"] },
            { id: 110, group: "A", baseText: "Attack Stamina Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "low_health", "conditional"] },
            { id: 111, group: "A", baseText: "Damage increased by {val1} for each Nearby Enemy", values: [{ key: "{val1}", type: "percentage", min: 2, max: 5, stat: "damage" }], tags: ["damage", "offensive", "aoe", "conditional"] },
            { id: 112, group: "A", baseText: "Stagger Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "persistent"] },
            { id: 113, group: "A", baseText: "Stagger Damage increased by {val1} for 4s after Charged Attack", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "on_charged_attack", "conditional"] },
            { id: 114, group: "A", baseText: "Deal {val1} Explosion Damage on Rune Attack with 10% chance", values: [{ key: "{val1}", type: "percentage", min: 15, max: 50, stat: "explosion_damage" }], tags: ["damage", "offensive", "on_rune_attack", "proc", "aoe"] },
            { id: 115, group: "A", baseText: "Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "damage" }], tags: ["damage", "offensive", "persistent"] },
            { id: 116, group: "A", baseText: "Rune Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "rune_damage" }], tags: ["rune", "damage", "offensive", "persistent"] },
            { id: 117, group: "A", baseText: "Heat Damage Infusion", values: [], tags: ["infusion", "elemental", "heat"] },
            { id: 118, group: "A", baseText: "Cold Damage Infusion", values: [], tags: ["infusion", "elemental", "cold"] },
            { id: 119, group: "A", baseText: "Lightning Damage Infusion", values: [], tags: ["infusion", "elemental", "lightning"] },
            { id: 120, group: "A", baseText: "Plague Damage Infusion", values: [], tags: ["infusion", "elemental", "plague"] },
            { id: 121, group: "A", baseText: "Attack damage increased by {val1} for 10s after Rune Attack", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "damage" }], tags: ["damage", "offensive", "on_rune_attack", "conditional"] },
            { id: 122, group: "A", baseText: "Normal attack damage increased by {val1} for 4s after Charged Attack", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_charged_attack", "conditional"] },

            // --- Group: C ---
            { id: 123, group: "C", baseText: "Stamina Recovery increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent"] },
            { id: 124, group: "C", baseText: "Attack Stamina Cost decreased by {val1} after Backstab", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_backstab", "conditional"] },

            // --- Group: D ---
            { id: 125, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: H ---
            { id: 126, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },
            
            // --- Group: K ---
            { id: 127, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] },
            // --- Group: B ---
            { id: 128, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
        ],
        shield: [
            // --- Group: A ---
            { id: 201, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent"] },
            { id: 202, group: "A", baseText: "Deal {val1} Damage on Parry", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "damage" }], tags: ["damage", "offensive", "on_parry"] },
            { id: 203, group: "A", baseText: "Damage increased by {val1} for 5s after Block", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage" }], tags: ["damage", "offensive", "on_block", "conditional"] },
            { id: 204, group: "A", baseText: "Damage increased by {val1} for 5s after Parry", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "conditional"] },
            { id: 205, group: "A", baseText: "Deal {val1} Damage on Block", values: [{ key: "{val1}", type: "percentage", min: 5, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_block"] },

            // --- Group: B ---
            { id: 206, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
            { id: 207, group: "B", baseText: "Gain {val1} Focus on Block", values: [{ key: "{val1}", type: "flat", min: 2, max: 5, stat: "focus_gain" }], tags: ["focus", "utility", "on_block"] },
            { id: 208, group: "B", baseText: "Gain {val1} Focus on Parry", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_parry"] },

            // --- Group: C ---
            { id: 209, group: "C", baseText: "Stamina Recovery increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent"] },
            { id: 210, group: "C", baseText: "Gain {val1} Stamina on Blocked Attacks", values: [{ key: "{val1}", type: "flat", min: 2, max: 5, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_block"] },
            { id: 211, group: "C", baseText: "Gain {val1} Stamina on Parry", values: [{ key: "{val1}", type: "flat", min: 9, max: 30, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_parry"] },
            { id: 212, group: "C", baseText: "Attack Stamina Cost decreased by {val1} for 5s after Parry", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_parry", "conditional"] },

            // --- Group: D ---
            { id: 213, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: H ---
            { id: 214, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },
            
            // --- Group: K ---
            { id: 215, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] }
        ],
        bow: [
            // --- Group: A ---
            { id: 301, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent"] },
            { id: 302, group: "A", baseText: "Heat Damage Infusion", values: [], tags: ["infusion", "elemental", "heat"] },
            { id: 303, group: "A", baseText: "Cold Damage Infusion", values: [], tags: ["infusion", "elemental", "cold"] },
            { id: 304, group: "A", baseText: "Lightning Damage Infusion", values: [], tags: ["infusion", "elemental", "lightning"] },
            { id: 305, group: "A", baseText: "Plague Damage Infusion", values: [], tags: ["infusion", "elemental", "plague"] },
            { id: 306, group: "A", baseText: "Damage increased by {val1} if no Enemies nearby", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "conditional", "ranged"] },
            { id: 307, group: "A", baseText: "Damage increased by {val1} for 5s after Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "conditional"] },
            { id: 308, group: "A", baseText: "Deal {val1} Damage on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge"] },
            
            // --- Group: B ---
            { id: 309, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
            { id: 310, group: "B", baseText: "Gain {val1} Focus on Damage Dodged", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_dodge"] },

            // --- Group: C ---
            { id: 311, group: "C", baseText: "Stamina Recovery increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent"] },
            { id: 312, group: "C", baseText: "Dodge Stamina Cost decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_dodge", "persistent"] },
            { id: 313, group: "C", baseText: "Gain {val1} Stamina on Damage Dodged", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_dodge"] },

            // --- Group: D ---
            { id: 314, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: H ---
            { id: 315, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },
            
            // --- Group: K ---
            { id: 316, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] }
        ],
        helm: [
            // --- Group: None ---
            { id: 401, group: "None", baseText: "Poise Defense increased by {val1}", values: [{ key: "{val1}", type: "flat", min: 1, max: 3, stat: "poise_defense" }], tags: ["defense", "poise", "persistent"] },

            // --- Group: A ---
            { id: 402, group: "A", baseText: "Heat Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "heat_damage" }], tags: ["damage", "elemental", "heat", "offensive", "persistent"] },
            { id: 403, group: "A", baseText: "Cold Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "cold_damage" }], tags: ["damage", "elemental", "cold", "offensive", "persistent"] },
            { id: 404, group: "A", baseText: "Lightning Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "lightning_damage" }], tags: ["damage", "elemental", "lightning", "offensive", "persistent"] },
            { id: 405, group: "A", baseText: "Plague Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "plague_damage" }], tags: ["damage", "elemental", "plague", "offensive", "persistent"] },

            // --- Group: B ---
            { id: 406, group: "B", baseText: "Focus Gain increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "persistent"] },
            { id: 407, group: "B", baseText: "Focus Cost decreased by {val1} at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "focus_cost_reduction" }], tags: ["focus", "utility", "full_focus", "conditional"] },
            { id: 408, group: "B", baseText: "Focus Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 6, max: 25, stat: "focus_cost_reduction" }], tags: ["focus", "utility", "low_health", "conditional"] },
            { id: 409, group: "B", baseText: "Gain {val1} Focus on inflicting Any Buildup", values: [{ key: "{val1}", type: "flat", min: 3, max: 10, stat: "focus_gain" }], tags: ["focus", "utility", "on_buildup"] },
            { id: 410, group: "B", baseText: "Max Focus increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "max_focus" }], tags: ["focus", "utility", "persistent"] },
            { id: 411, group: "B", baseText: "Focus Cost decreased by {val1} for 6s after Rune Attack", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "focus_cost_reduction" }], tags: ["focus", "utility", "on_rune_attack", "conditional"] },
            { id: 412, group: "B", baseText: "Regenerate Focus in Combat", values: [], tags: ["focus", "utility", "regeneration", "persistent"] },

            // --- Group: C ---
            { id: 413, group: "C", baseText: "Stamina Recovery increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent"] },

            // --- Group: D ---
            { id: 414, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },
            { id: 415, group: "D", baseText: "Chance to ignore Durability Loss increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "durability_loss_ignore" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: E ---
            { id: 416, group: "E", baseText: "Cold Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "cold_resistance" }], tags: ["defense", "elemental", "cold", "resistance", "persistent"] },
            { id: 417, group: "E", baseText: "Heat Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "heat_resistance" }], tags: ["defense", "elemental", "heat", "resistance", "persistent"] },
            { id: 418, group: "E", baseText: "Lightning Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "lightning_resistance" }], tags: ["defense", "elemental", "lightning", "resistance", "persistent"] },
            { id: 419, group: "E", baseText: "Plague Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "plague_resistance" }], tags: ["defense", "elemental", "plague", "resistance", "persistent"] },
            { id: 420, group: "E", baseText: "Stagger Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "stagger_resistance" }], tags: ["defense", "stagger", "persistent"] },

            // --- Group: H ---
            { id: 421, group: "H", baseText: "Regainable health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "regainable_health" }], tags: ["health", "healing", "defensive", "persistent"] },
            { id: 422, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },

            // --- Group: K ---
            { id: 423, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] },

            // --- Group: L ---
            { id: 424, group: "L", baseText: "Damage Taken decreased up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent"] },
            { id: 425, group: "L", baseText: "Armor increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "armor" }], tags: ["defense", "armor", "persistent"] }
        ],
        armor: [
            // --- Group: None ---
            { id: 501, group: "None", baseText: "Poise Defense increased by {val1}", values: [{ key: "{val1}", type: "flat", min: 1, max: 3, stat: "poise_defense" }], tags: ["defense", "poise", "persistent"] },
            
            // --- Group: B ---
            { id: 502, group: "B", baseText: "Gain {val1} Focus on Staggering an Enemy", values: [{ key: "{val1}", type: "flat", min: 3, max: 10, stat: "focus_gain" }], tags: ["focus", "utility", "on_stagger"] },
            { id: 503, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
            
            // --- Group: D ---
            { id: 504, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },
            { id: 505, group: "D", baseText: "Chance to ignore Durability Loss increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "durability_loss_ignore" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: E ---
            { id: 506, group: "E", baseText: "Cold Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "cold_resistance" }], tags: ["defense", "elemental", "cold", "resistance", "persistent"] },
            { id: 507, group: "E", baseText: "Heat Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "heat_resistance" }], tags: ["defense", "elemental", "heat", "resistance", "persistent"] },
            { id: 508, group: "E", baseText: "Lightning Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "lightning_resistance" }], tags: ["defense", "elemental", "lightning", "resistance", "persistent"] },
            { id: 509, group: "E", baseText: "Plague Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "plague_resistance" }], tags: ["defense", "elemental", "plague", "resistance", "persistent"] },
            { id: 510, group: "E", baseText: "Stagger Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "stagger_resistance" }], tags: ["defense", "stagger", "persistent"] },

            // --- Group: H ---
            { id: 511, group: "H", baseText: "Max Health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "max_health" }], tags: ["health", "defensive", "persistent"] },
            { id: 512, group: "H", baseText: "Regainable health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "regainable_health" }], tags: ["health", "healing", "defensive", "persistent"] },
            { id: 513, group: "H", baseText: "Health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "max_health" }], tags: ["health", "defensive", "persistent"] },
            { id: 514, group: "H", baseText: "Healing increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "persistent"] },

            // --- Group: K ---
            { id: 515, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] },

            // --- Group: L ---
            { id: 516, group: "L", baseText: "Damage Taken decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "damage_reduction" }], tags: ["defense", "low_health", "conditional"] },
            { id: 517, group: "L", baseText: "Damage taken decreased by {val1} for each Nearby Enemy", values: [{ key: "{val1}", type: "percentage", min: 2, max: 5, stat: "damage_reduction" }], tags: ["defense", "aoe", "conditional"] },
            { id: 518, group: "L", baseText: "Damage Taken reduced by {val1} at Max Stamina", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "damage_reduction" }], tags: ["defense", "max_stamina", "conditional"] },
            { id: 519, group: "L", baseText: "Damage Taken reduced by {val1} per nearby enemy (up to 5% max)", values: [{ key: "{val1}", type: "percentage", min: 2, max: 5, stat: "damage_reduction" }], tags: ["defense", "aoe", "conditional"] },
            { id: 520, group: "L", baseText: "Damage Taken decreased up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent"] },
            { id: 521, group: "L", baseText: "Armor increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "armor" }], tags: ["defense", "armor", "persistent"] }
        ],
        pants: [
            // --- Group: None ---
            { id: 601, group: "None", baseText: "Poise Defense increased by {val1}", values: [{ key: "{val1}", type: "flat", min: 1, max: 3, stat: "poise_defense" }], tags: ["defense", "poise", "persistent"] },

            // --- Group: A ---
            { id: 602, group: "A", baseText: "Damage increased by {val1} for 5s after Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "conditional"] },
            { id: 603, group: "A", baseText: "Deal {val1} Damage on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge"] },
            
            // --- Group: B ---
            { id: 604, group: "B", baseText: "Gain {val1} Focus on Damage Dodged", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_dodge"] },
            { id: 605, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
            
            // --- Group: C ---
            { id: 606, group: "C", baseText: "Stamina Cost decreased by {val1} at Full Health", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "full_health", "conditional"] },
            { id: 607, group: "C", baseText: "Stamina Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "low_health", "conditional"] },
            { id: 608, group: "C", baseText: "Stamina Recovery increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "persistent"] },
            { id: 609, group: "C", baseText: "Stamina Cost decreased by {val1} at High Focus", values: [{ key: "{val1}", type: "percentage", min: 8, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "high_focus", "conditional"] },
            { id: 610, group: "C", baseText: "Gain {val1} Stamina on Damage Dodged", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_dodge"] },
            { id: 611, group: "C", baseText: "Dodge Stamina Cost decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_dodge", "persistent"] },

            // --- Group: D ---
            { id: 612, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },
            { id: 613, group: "D", baseText: "Chance to ignore Durability Loss increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "durability_loss_ignore" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: E ---
            { id: 614, group: "E", baseText: "Cold Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "cold_resistance" }], tags: ["defense", "elemental", "cold", "resistance", "persistent"] },
            { id: 615, group: "E", baseText: "Heat Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "heat_resistance" }], tags: ["defense", "elemental", "heat", "resistance", "persistent"] },
            { id: 616, group: "E", baseText: "Lightning Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "lightning_resistance" }], tags: ["defense", "elemental", "lightning", "resistance", "persistent"] },
            { id: 617, group: "E", baseText: "Plague Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "plague_resistance" }], tags: ["defense", "elemental", "plague", "resistance", "persistent"] },
            { id: 618, group: "E", baseText: "Stagger Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "stagger_resistance" }], tags: ["defense", "stagger", "persistent"] },

            // --- Group: H ---
            { id: 619, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },
            { id: 620, group: "H", baseText: "Regainable health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "regainable_health" }], tags: ["health", "healing", "defensive", "persistent"] },

            // --- Group: J ---
            { id: 621, group: "J", baseText: "Movement Speed increased by {val1} for 10s after Kill", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "movement_speed" }], tags: ["movement", "speed", "on_kill", "conditional"] },
            { id: 622, group: "J", baseText: "Movement Speed increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "movement_speed" }], tags: ["movement", "speed", "persistent"] },

            // --- Group: K ---
            { id: 623, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] },

            // --- Group: L ---
            { id: 624, group: "L", baseText: "Damage Taken decreased up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent"] },
            { id: 625, group: "L", baseText: "Armor increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "armor" }], tags: ["defense", "armor", "persistent"] }
        ],
        gloves: [
            // --- Group: None ---
            { id: 701, group: "None", baseText: "Poise Defense increased by {val1}", values: [{ key: "{val1}", type: "flat", min: 1, max: 3, stat: "poise_defense" }], tags: ["defense", "poise", "persistent"] },

            // --- Group: A ---
            { id: 702, group: "A", baseText: "Physical Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "physical_damage" }], tags: ["damage", "physical", "offensive", "persistent"] },
            { id: 703, group: "A", baseText: "Burn Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "burn_buildup" }], tags: ["buildup", "elemental", "heat", "offensive", "persistent"] },
            { id: 704, group: "A", baseText: "Shock Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "shock_buildup" }], tags: ["buildup", "elemental", "lightning", "offensive", "persistent"] },
            { id: 705, group: "A", baseText: "Freeze Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "freeze_buildup" }], tags: ["buildup", "elemental", "cold", "offensive", "persistent"] },
            { id: 706, group: "A", baseText: "Infect Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "infect_buildup" }], tags: ["buildup", "elemental", "plague", "offensive", "persistent"] },
            { id: 707, group: "A", baseText: "On Parry, deal {val1} of Weapon Damage", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "damage" }], tags: ["damage", "offensive", "on_parry"] },
            { id: 708, group: "A", baseText: "Damage increased by {val1} for 5s after Parry", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "conditional"] },
            { id: 709, group: "A", baseText: "Damage increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent"] },

            // --- Group: B ---
            { id: 710, group: "B", baseText: "Focus Gain increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent"] },
            { id: 711, group: "B", baseText: "Gain {val1} Focus on Parry", values: [{ key: "{val1}", type: "flat", min: 5, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_parry"] },

            // --- Group: C ---
            { id: 712, group: "C", baseText: "Stamina Recovery increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent"] },
            { id: 713, group: "C", baseText: "Gain {val1} Stamina on Parry", values: [{ key: "{val1}", type: "flat", min: 9, max: 30, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_parry"] },

            // --- Group: D ---
            { id: 714, group: "D", baseText: "Durability increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 30, max: 100, stat: "durability" }], tags: ["durability", "utility", "persistent"] },
            { id: 715, group: "D", baseText: "Chance to ignore Durability Loss increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "durability_loss_ignore" }], tags: ["durability", "utility", "persistent"] },

            // --- Group: E ---
            { id: 716, group: "E", baseText: "Heat Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "heat_resistance" }], tags: ["defense", "elemental", "heat", "resistance", "persistent"] },
            { id: 717, group: "E", baseText: "Cold Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "cold_resistance" }], tags: ["defense", "elemental", "cold", "resistance", "persistent"] },
            { id: 718, group: "E", baseText: "Lightning Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "lightning_resistance" }], tags: ["defense", "elemental", "lightning", "resistance", "persistent"] },
            { id: 719, group: "E", baseText: "Plague Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "plague_resistance" }], tags: ["defense", "elemental", "plague", "resistance", "persistent"] },
            { id: 720, group: "E", baseText: "Stagger Resistance increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "stagger_resistance" }], tags: ["defense", "stagger", "persistent"] },

            // --- Group: H ---
            { id: 721, group: "H", baseText: "Healing increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent"] },
            { id: 722, group: "H", baseText: "Regainable health increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "regainable_health" }], tags: ["health", "healing", "defensive", "persistent"] },
            { id: 723, group: "H", baseText: "Gain {val1} Health on Kill", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_kill"] },

            // --- Group: K ---
            { id: 724, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent"] },

            // --- Group: L ---
            { id: 725, group: "L", baseText: "Damage Taken decreased up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent"] },
            { id: 726, group: "L", baseText: "Armor increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "armor" }], tags: ["defense", "armor", "persistent"] }
        ]
    },
    plaguedEnchantments: {
        weapon: [
            // --- Group: None ---
            { id: 801, group: "None", baseText: "Gain {val1} Focus on backstab", values: [{ key: "{val1}", type: "flat", min: 5, max: 10, stat: "focus_gain" }], tags: ["focus", "utility", "on_backstab"] },
            { id: 802, group: "None", baseText: "Gain {val1} Health on Backstab", values: [{ key: "{val1}", type: "percentage", min: 3, max: 5, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_backstab"] },
            
            // --- Group: A ---
            { id: 803, group: "A", baseText: "Heat Infusion", values: [], tags: ["infusion", "elemental", "heat", "plagued"] },
            { id: 804, group: "A", baseText: "Cold Infusion", values: [], tags: ["infusion", "elemental", "cold", "plagued"] },
            { id: 805, group: "A", baseText: "Lightning Infusion", values: [], tags: ["infusion", "elemental", "lightning", "plagued"] },
            { id: 806, group: "A", baseText: "Plague Infusion", values: [], tags: ["infusion", "elemental", "plague", "plagued"] },
            { id: 807, group: "A", baseText: "Attack Speed increased by {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 10, stat: "attack_speed" }], tags: ["speed", "offensive", "durability_scaling", "persistent", "plagued"] },
            { id: 808, group: "A", baseText: "Rune Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "rune_damage" }], tags: ["rune", "damage", "offensive", "persistent", "plagued"] },
            { id: 809, group: "A", baseText: "Damage increased by {val1} at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "damage" }], tags: ["damage", "offensive", "full_focus", "conditional", "plagued"] },
            { id: 810, group: "A", baseText: "Damage increased by {val1} while at Low Health", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "low_health", "conditional", "plagued"] },
            { id: 811, group: "A", baseText: "Damage increased by {val1} while at Full Health", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "full_health", "conditional", "plagued"] },
            { id: 812, group: "A", baseText: "Damage vs Large Enemies increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "conditional", "plagued"] },
            { id: 813, group: "A", baseText: "Damage increased by {val1} for 20s after Fatality", values: [{ key: "{val1}", type: "percentage", min: 20, max: 40, stat: "damage" }], tags: ["damage", "offensive", "on_fatality", "conditional", "plagued"] },
            { id: 814, group: "A", baseText: "Damage increased by {val1} for 30s after Backstab", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_backstab", "conditional", "plagued"] },
            { id: 815, group: "A", baseText: "Charged Attack Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "charged_attack_damage" }], tags: ["damage", "offensive", "persistent", "plagued"] },
            { id: 816, group: "A", baseText: "Normal attack damage increased by {val1} for 5s after Charged Attack", values: [{ key: "{val1}", type: "percentage", min: 12, max: 25, stat: "damage" }], tags: ["damage", "offensive", "on_charged_attack", "conditional", "plagued"] },
            { id: 817, group: "A", baseText: "Attack damage increased by {val1} for 6s after Rune Attack", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_rune_attack", "conditional", "plagued"] },
            { id: 818, group: "A", baseText: "Deal {val1} Damage on Staggering an Enemy", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_stagger", "plagued"] },
            { id: 819, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent", "plagued"] },
            { id: 820, group: "A", baseText: "Stagger Damage increased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 12, max: 25, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "low_health", "conditional", "plagued"] },
            { id: 821, group: "A", baseText: "Stagger Damage increased by {val1} for 20s after Fatality", values: [{ key: "{val1}", type: "percentage", min: 20, max: 40, stat: "stagger_damage" }], tags: ["stagger", "damage", "offensive", "on_fatality", "conditional", "plagued"] },
            
            // --- Group: B ---
            { id: 822, group: "B", baseText: "Gain {val1} Focus on Fatality", values: [{ key: "{val1}", type: "flat", min: 12, max: 25, stat: "focus_gain" }], tags: ["focus", "utility", "on_fatality", "plagued"] },
            { id: 823, group: "B", baseText: "Gain {val1} Focus on Kill", values: [{ key: "{val1}", type: "flat", min: 8, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_kill", "plagued"] },
            
            // --- Group: C ---
            { id: 824, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },
            { id: 825, group: "C", baseText: "Attack Stamina Cost decreased by {val1} for 6s after parry", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_parry", "conditional", "plagued"] },
            { id: 826, group: "C", baseText: "Stamina Cost decreased by {val1} for 20s after Fatality", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_fatality", "conditional", "plagued"] },
            
            // --- Group: D ---
            { id: 827, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },
            
            // --- Group: H ---
            { id: 828, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 5, max: 15, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },
            { id: 829, group: "H", baseText: "Gain {val1} Health on Kill", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_kill", "plagued"] },
            { id: 830, group: "H", baseText: "Gain {val1} Health on Staggering an Enemy", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_stagger", "plagued"] },
            { id: 831, group: "H", baseText: "Gain {val1} Health on Charged Attack", values: [{ key: "{val1}", type: "percentage", min: 2, max: 4, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_charged_attack", "plagued"] },
            { id: 832, group: "H", baseText: "Gain {val1} Health on Fatality", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_fatality", "plagued"] },
            { id: 835, group: "H", baseText: "Gain {val1} Health on Damage Dealt against Frozen Enemies", values: [{ key: "{val1}", type: "percentage", min: 1, max: 2, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_damage", "conditional", "cold", "plagued"] },
            
            // --- Group: J ---
            { id: 833, group: "J", baseText: "Movement Speed increased by {val1} for 5s after Rune Attack", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "movement_speed" }], tags: ["movement", "speed", "on_rune_attack", "conditional", "plagued"] },
            
            // --- Group: K ---
            { id: 834, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 3, max: 10, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },
        ],
        shield: [
            // --- Group: None ---
            { id: 901, group: "None", baseText: "Poise Defense increased by {val1} while Blocking", values: [{ key: "{val1}", type: "flat", min: 5, max: 10, stat: "poise_defense" }], tags: ["defense", "poise", "on_block", "conditional", "plagued"] },

            // --- Group: A ---
            { id: 902, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent", "plagued"] },
            { id: 903, group: "A", baseText: "Damage increased by {val1} for 6s after Block", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "damage" }], tags: ["damage", "offensive", "on_block", "conditional", "plagued"] },
            { id: 904, group: "A", baseText: "Damage increased by {val1} for 6s after Parry", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "conditional", "plagued"] },
            { id: 905, group: "A", baseText: "Deal {val1} Damage on Block", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "damage" }], tags: ["damage", "offensive", "on_block", "plagued"] },
            { id: 906, group: "A", baseText: "Deal {val1} Damage on Parry", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "plagued"] },

            // --- Group: C ---
            { id: 907, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },

            // --- Group: D ---
            { id: 908, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },

            // --- Group: H ---
            { id: 909, group: "H", baseText: "Gain {val1} Health on Parry", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_parry", "plagued"] },
            { id: 910, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },

            // --- Group: K ---
            { id: 911, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },

            // --- Group: L ---
            { id: 912, group: "L", baseText: "Damage Taken decreased by {val1} while Blocking", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "damage_reduction" }], tags: ["defense", "on_block", "conditional", "plagued"] }
        ],
        bow: [
            // --- Group: A ---
            { id: 1001, group: "A", baseText: "Damage increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "damage" }], tags: ["damage", "offensive", "durability_scaling", "persistent", "plagued"] },
            { id: 1002, group: "A", baseText: "Damage increased by {val1} if no Enemies nearby", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "damage" }], tags: ["damage", "offensive", "conditional", "ranged", "plagued"] },
            { id: 1003, group: "A", baseText: "Heat Infusion", values: [], tags: ["infusion", "elemental", "heat", "plagued"] },
            { id: 1004, group: "A", baseText: "Cold Infusion", values: [], tags: ["infusion", "elemental", "cold", "plagued"] },
            { id: 1005, group: "A", baseText: "Lightning Infusion", values: [], tags: ["infusion", "elemental", "lightning", "plagued"] },
            { id: 1006, group: "A", baseText: "Plague Infusion", values: [], tags: ["infusion", "elemental", "plague", "plagued"] },
            { id: 1007, group: "A", baseText: "Deal {val1} Damage on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "plagued"] },
            { id: 1008, group: "A", baseText: "Damage increased by {val1} for 6s after Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "conditional", "plagued"] },

            // --- Group: C ---
            { id: 1009, group: "C", baseText: "Dodge Stamina Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 20, max: 40, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_dodge", "low_health", "conditional", "plagued"] },
            { id: 1010, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },

            // --- Group: D ---
            { id: 1011, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },

            // --- Group: H ---
            { id: 1012, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },
            { id: 1013, group: "H", baseText: "Gain {val1} Health on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 3, max: 5, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_dodge", "plagued"] },

            // --- Group: K ---
            { id: 1014, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] }
        ],
        helm: [
            // --- Group: None ---
            { id: 1101, group: "None", baseText: "Bomb not consumed with {val1} chance", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "item_save" }], tags: ["utility", "item", "plagued"] },

            // --- Group: A ---
            { id: 1102, group: "A", baseText: "Heat Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "heat_damage" }], tags: ["damage", "elemental", "heat", "offensive", "persistent", "plagued"] },
            { id: 1103, group: "A", baseText: "Cold Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "cold_damage" }], tags: ["damage", "elemental", "cold", "offensive", "persistent", "plagued"] },
            { id: 1104, group: "A", baseText: "Lightning Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "lightning_damage" }], tags: ["damage", "elemental", "lightning", "offensive", "persistent", "plagued"] },
            { id: 1105, group: "A", baseText: "Plague Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "plague_damage" }], tags: ["damage", "elemental", "plague", "offensive", "persistent", "plagued"] },

            // --- Group: B ---
            { id: 1106, group: "B", baseText: "Gain {val1} Focus on any Buildup", values: [{ key: "{val1}", type: "flat", min: 8, max: 15, stat: "focus_gain" }], tags: ["focus", "utility", "on_buildup", "plagued"] },
            { id: 1107, group: "B", baseText: "Focus Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "focus_cost_reduction" }], tags: ["focus", "utility", "low_health", "conditional", "plagued"] },

            // --- Group: C ---
            { id: 1108, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },

            // --- Group: D ---
            { id: 1109, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },

            // --- Group: H ---
            { id: 1110, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },
            { id: 1111, group: "H", baseText: "Gain {val1} Health once per Rune Attack", values: [{ key: "{val1}", type: "percentage", min: 3, max: 6, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_rune_attack", "plagued"] },
            { id: 1112, group: "H", baseText: "Healing increased by {val1} at Low Focus", values: [{ key: "{val1}", type: "percentage", min: 9, max: 30, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "low_focus", "conditional", "plagued"] },

            // --- Group: K ---
            { id: 1113, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },

            // --- Group: L ---
            { id: 1114, group: "L", baseText: "Damage Taken decreased by {val1} at Low Focus", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "damage_reduction" }], tags: ["defense", "low_focus", "conditional", "plagued"] },
            { id: 1115, group: "L", baseText: "Damage Taken decreased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent", "plagued"] }
        ],
        armor: [
            // --- Group: None ---
            { id: 1201, group: "None", baseText: "Poise Defense increased by {val1} while Charging", values: [{ key: "{val1}", type: "flat", min: 5, max: 10, stat: "poise_defense" }], tags: ["defense", "poise", "conditional", "plagued"] },
            
            // --- Group: A ---
            { id: 1202, group: "A", baseText: "Frozen Enemy Armor decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 25, max: 50, stat: "armor_reduction" }], tags: ["debuff", "offensive", "cold", "conditional", "plagued"] },
            { id: 1203, group: "A", baseText: "Deal {val1} Damage on Damage Taken", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "thorns_damage" }], tags: ["damage", "thorns", "on_damage_taken", "plagued"] },
            { id: 1204, group: "A", baseText: "Damage increased by {val1} for 6s after Stagger", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_stagger", "conditional", "plagued"] },
            { id: 1205, group: "A", baseText: "Burn Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 25, max: 50, stat: "burn_damage" }], tags: ["damage", "elemental", "heat", "offensive", "persistent", "plagued"] },
            { id: 1206, group: "A", baseText: "Infected Enemy Stagger Resistance decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stagger_resistance_reduction" }], tags: ["debuff", "offensive", "plague", "conditional", "plagued"] },
            
            // --- Group: B ---
            { id: 1207, group: "B", baseText: "Focus Gain increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 10, max: 25, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent", "plagued"] },
            { id: 1208, group: "B", baseText: "Focus Cost decreased by {val1} for 5s after Stagger", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "focus_cost_reduction" }], tags: ["focus", "utility", "on_stagger", "conditional", "plagued"] },
            
            // --- Group: C ---
            { id: 1209, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },
            
            // --- Group: D ---
            { id: 1210, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },
            
            // --- Group: H ---
            { id: 1211, group: "H", baseText: "Max Health increased by {val1} of Max Focus", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "max_health" }], tags: ["health", "defensive", "focus_scaling", "persistent", "plagued"] },
            { id: 1212, group: "H", baseText: "Regenerate Health in Combat Periodically", values: [], tags: ["health", "healing", "regeneration", "persistent", "plagued"] },
            { id: 1213, group: "H", baseText: "Hunger Limit increased by 1", values: [], tags: ["utility", "food", "persistent", "plagued"] },
            
            // --- Group: J ---
            { id: 1214, group: "J", baseText: "Overall Speed increased by {val1} for 6s after Shock Buildup", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "movement_speed" }], tags: ["movement", "speed", "on_buildup", "lightning", "conditional", "plagued"] },
            
            // --- Group: K ---
            { id: 1215, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },
            
            // --- Group: L ---
            { id: 1216, group: "L", baseText: "Damage Taken decreased by {val1} for 6s after any buildup taken", values: [{ key: "{val1}", type: "percentage", min: 25, max: 50, stat: "damage_reduction" }], tags: ["defense", "on_buildup_taken", "conditional", "plagued"] },
            { id: 1217, group: "L", baseText: "Damage Taken decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 12, max: 25, stat: "damage_reduction" }], tags: ["defense", "low_health", "conditional", "plagued"] },
            { id: 1218, group: "L", baseText: "Damage Taken decreased by {val1} at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 12, max: 25, stat: "damage_reduction" }], tags: ["defense", "full_focus", "conditional", "plagued"] },
            { id: 1219, group: "L", baseText: "Damage Taken decreased by {val1} while Charging", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "damage_reduction" }], tags: ["defense", "conditional", "plagued"] },
            { id: 1220, group: "L", baseText: "Damage Taken decreased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent", "plagued"] }
        ],
        pants: [
            // --- Group: None ---
            { id: 1301, group: "None", baseText: "Poise Defense increased by {val1} while Charging", values: [{ key: "{val1}", type: "flat", min: 5, max: 10, stat: "poise_defense" }], tags: ["defense", "poise", "conditional", "plagued"] },
            
            // --- Group: A ---
            { id: 1302, group: "A", baseText: "Deal {val1} Damage on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 4, max: 15, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "plagued"] },
            { id: 1303, group: "A", baseText: "Damage increased by {val1} after Sprinting for 2s", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage" }], tags: ["damage", "offensive", "on_sprint", "conditional", "plagued"] },
            { id: 1304, group: "A", baseText: "Damage increased by {val1} for 6s after Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_dodge", "conditional", "plagued"] },
            
            // --- Group: B ---
            { id: 1305, group: "B", baseText: "Focus Gain increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 10, max: 25, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent", "plagued"] },
            
            // --- Group: C ---
            { id: 1306, group: "C", baseText: "Stamina Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "low_health", "conditional", "plagued"] },
            { id: 1307, group: "C", baseText: "Dodge Stamina Cost decreased by {val1} at Low Health", values: [{ key: "{val1}", type: "percentage", min: 18, max: 35, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "on_dodge", "low_health", "conditional", "plagued"] },
            { id: 1308, group: "C", baseText: "Stamina Cost decreased by {val1} at Low Focus", values: [{ key: "{val1}", type: "percentage", min: 10, max: 20, stat: "stamina_cost_reduction" }], tags: ["stamina", "utility", "low_focus", "conditional", "plagued"] },
            
            // --- Group: D ---
            { id: 1309, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },
            
            // --- Group: H ---
            { id: 1310, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },
            { id: 1311, group: "H", baseText: "Gain {val1} Health on Damage Dodged", values: [{ key: "{val1}", type: "percentage", min: 3, max: 5, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_dodge", "plagued"] },
            { id: 1312, group: "H", baseText: "Max Stamina increased by {val1} of Max Focus", values: [{ key: "{val1}", type: "percentage", min: 3, max: 5, stat: "max_stamina" }], tags: ["stamina", "utility", "focus_scaling", "persistent", "plagued"] },
            
            // --- Group: J ---
            { id: 1313, group: "J", baseText: "Movement Speed increased by {val1} for 6s after Charged Attack", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "movement_speed" }], tags: ["movement", "speed", "on_charged_attack", "conditional", "plagued"] },
            
            // --- Group: K ---
            { id: 1314, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },
            
            // --- Group: L ---
            { id: 1315, group: "L", baseText: "Damage Taken decreased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent", "plagued"] }
        ],
        gloves: [
            // --- Group: None ---
            { id: 1401, group: "None", baseText: "Bomb Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "item_damage" }], tags: ["utility", "item", "damage", "plagued"] },

            // --- Group: A ---
            { id: 1402, group: "A", baseText: "Deal {val1} Damage on Parry", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "plagued"] },
            { id: 1403, group: "A", baseText: "Damage increased by {val1} for 6s after Parry", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "damage" }], tags: ["damage", "offensive", "on_parry", "conditional", "plagued"] },
            { id: 1404, group: "A", baseText: "Burn Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "burn_buildup" }], tags: ["buildup", "elemental", "heat", "offensive", "persistent", "plagued"] },
            { id: 1405, group: "A", baseText: "Shock Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "shock_buildup" }], tags: ["buildup", "elemental", "lightning", "offensive", "persistent", "plagued"] },
            { id: 1406, group: "A", baseText: "Freeze Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "freeze_buildup" }], tags: ["buildup", "elemental", "cold", "offensive", "persistent", "plagued"] },
            { id: 1407, group: "A", baseText: "Infect Buildup increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 15, max: 30, stat: "infect_buildup" }], tags: ["buildup", "elemental", "plague", "offensive", "persistent", "plagued"] },
            { id: 1408, group: "A", baseText: "Physical Damage increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "physical_damage" }], tags: ["damage", "physical", "offensive", "persistent", "plagued"] },

            // --- Group: B ---
            { id: 1409, group: "B", baseText: "Focus Gain increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 10, max: 25, stat: "focus_gain" }], tags: ["focus", "utility", "durability_scaling", "persistent", "plagued"] },

            // --- Group: C ---
            { id: 1410, group: "C", baseText: "Stamina Recovery increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "stamina_recovery" }], tags: ["stamina", "utility", "durability_scaling", "persistent", "plagued"] },
            { id: 1411, group: "C", baseText: "Instantly restore {val1} Stamina on Stagger", values: [{ key: "{val1}", type: "flat", min: 25, max: 40, stat: "stamina_gain" }], tags: ["stamina", "utility", "on_stagger", "plagued"] },

            // --- Group: D ---
            { id: 1412, group: "D", baseText: "Indestructible", values: [], tags: ["durability", "utility", "persistent", "plagued"] },

            // --- Group: H ---
            { id: 1413, group: "H", baseText: "Gain {val1} Health on Parry", values: [{ key: "{val1}", type: "percentage", min: 2, max: 6, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_parry", "plagued"] },
            { id: 1414, group: "H", baseText: "Healing increased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 6, max: 20, stat: "healing_effectiveness" }], tags: ["health", "healing", "defensive", "durability_scaling", "persistent", "plagued"] },
            { id: 1415, group: "H", baseText: "Gain {val1} Health on Kill", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_kill", "plagued"] },
            { id: 1416, group: "H", baseText: "Gain {val1} Health on Staggering an Enemy", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "lifesteal" }], tags: ["health", "healing", "defensive", "on_stagger", "plagued"] },

            // --- Group: K ---
            { id: 1417, group: "K", baseText: "Item Weight decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 15, stat: "weight_reduction" }], tags: ["weight", "utility", "persistent", "plagued"] },

            // --- Group: L ---
            { id: 1418, group: "L", baseText: "Damage Taken decreased by up to {val1} based on Durability", values: [{ key: "{val1}", type: "percentage", min: 5, max: 10, stat: "damage_reduction" }], tags: ["defense", "durability_scaling", "persistent", "plagued"] }
        ]
    },
    plaguedDownsides: {
        weapon: [
            { id: 2001, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2002, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2003, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2004, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2005, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2006, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2007, group: "None", baseText: "Healing decreased by {val1} for each Nearby Enemy", values: [{ key: "{val1}", type: "percentage", min: 9, max: 14, stat: "healing_reduction" }], tags: ["downside", "healing", "aoe"] },
            { id: 2008, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2009, group: "None", baseText: "Attack Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "stamina_cost_increase" }], tags: ["downside", "stamina"] }
        ],
        shield: [
            { id: 2101, group: "None", baseText: "Block disabled", values: [], tags: ["downside", "block", "functionality"] },
            { id: 2102, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2103, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2104, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2105, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2106, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2107, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2108, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] }
        ],
        bow: [
            { id: 2201, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2202, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2203, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2204, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2205, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2206, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2207, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2208, group: "None", baseText: "Dodge Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stamina_cost_increase" }], tags: ["downside", "stamina", "on_dodge"] }
        ],
        helm: [
            { id: 2301, group: "None", baseText: "Armor Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "armor_reduction" }], tags: ["downside", "defense", "armor"] },
            { id: 2302, group: "None", baseText: "Damage Taken Increased by {val1} for 6s After Damage Taken", values: [{ key: "{val1}", type: "percentage", min: 21, max: 30, stat: "damage_taken_increase" }], tags: ["downside", "defense", "on_damage_taken"] },
            { id: 2303, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2304, group: "None", baseText: "Damage Taken Increased by {val1} If Not at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "damage_taken_increase" }], tags: ["downside", "defense", "not_full_focus"] },
            { id: 2305, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2306, group: "None", baseText: "Max focus decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 18, max: 25, stat: "max_focus_reduction" }], tags: ["downside", "focus"] },
            { id: 2307, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2308, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2309, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2310, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2311, group: "None", baseText: "Focus gain decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 32, max: 50, stat: "focus_gain_reduction" }], tags: ["downside", "focus"] },
            { id: 2312, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2313, group: "None", baseText: "Max Health decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_health_reduction" }], tags: ["downside", "health"] },
            { id: 2314, group: "None", baseText: "Max Stamina decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_stamina_reduction" }], tags: ["downside", "stamina"] },
            { id: 2315, group: "None", baseText: "Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 13, max: 20, stat: "stamina_cost_increase" }], tags: ["downside", "stamina"] },
            { id: 2316, group: "None", baseText: "Stagger Resistance decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stagger_resistance_reduction" }], tags: ["downside", "defense", "stagger"] }
        ],
        armor: [
            { id: 2401, group: "None", baseText: "Armor Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "armor_reduction" }], tags: ["downside", "defense", "armor"] },
            { id: 2402, group: "None", baseText: "Max Equip Load Decreased", values: [], tags: ["downside", "weight"] },
            { id: 2403, group: "None", baseText: "Damage Taken Increased by {val1} for 6s After Damage Taken", values: [{ key: "{val1}", type: "percentage", min: 21, max: 30, stat: "damage_taken_increase" }], tags: ["downside", "defense", "on_damage_taken"] },
            { id: 2404, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2405, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2406, group: "None", baseText: "Damage Taken Increased by {val1} If Not at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "damage_taken_increase" }], tags: ["downside", "defense", "not_full_focus"] },
            { id: 2407, group: "None", baseText: "Max focus decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 18, max: 25, stat: "max_focus_reduction" }], tags: ["downside", "focus"] },
            { id: 2408, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2409, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2410, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2411, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2412, group: "None", baseText: "Healing decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "healing_reduction" }], tags: ["downside", "healing"] },
            { id: 2413, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2414, group: "None", baseText: "Max Health decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_health_reduction" }], tags: ["downside", "health"] },
            { id: 2415, group: "None", baseText: "Max Stamina decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_stamina_reduction" }], tags: ["downside", "stamina"] },
            { id: 2416, group: "None", baseText: "Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 13, max: 20, stat: "stamina_cost_increase" }], tags: ["downside", "stamina"] },
            { id: 2417, group: "None", baseText: "Stagger Resistance decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stagger_resistance_reduction" }], tags: ["downside", "defense", "stagger"] }
        ],
        pants: [
            { id: 2501, group: "None", baseText: "Armor Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "armor_reduction" }], tags: ["downside", "defense", "armor"] },
            { id: 2502, group: "None", baseText: "Damage Taken Increased by {val1} for 6s After Damage Taken", values: [{ key: "{val1}", type: "percentage", min: 21, max: 30, stat: "damage_taken_increase" }], tags: ["downside", "defense", "on_damage_taken"] },
            { id: 2503, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2504, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2505, group: "None", baseText: "Damage Taken Increased by {val1} If Not at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "damage_taken_increase" }], tags: ["downside", "defense", "not_full_focus"] },
            { id: 2506, group: "None", baseText: "Max focus decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 18, max: 25, stat: "max_focus_reduction" }], tags: ["downside", "focus"] },
            { id: 2507, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2508, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2509, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2510, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2511, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2512, group: "None", baseText: "Max Health decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_health_reduction" }], tags: ["downside", "health"] },
            { id: 2513, group: "None", baseText: "Max Stamina decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_stamina_reduction" }], tags: ["downside", "stamina"] },
            { id: 2514, group: "None", baseText: "Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 13, max: 20, stat: "stamina_cost_increase" }], tags: ["downside", "stamina"] },
            { id: 2515, group: "None", baseText: "Dodge Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stamina_cost_increase" }], tags: ["downside", "stamina", "on_dodge"] },
            { id: 2516, group: "None", baseText: "Movement Speed decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 7, max: 25, stat: "movement_speed_reduction" }], tags: ["downside", "movement", "speed"] },
            { id: 2517, group: "None", baseText: "Heavy Roll only", values: [], tags: ["downside", "movement", "roll"] },
            { id: 2518, group: "None", baseText: "Stagger Resistance decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stagger_resistance_reduction" }], tags: ["downside", "defense", "stagger"] }
                ],
                gloves: [
            { id: 2601, group: "None", baseText: "Armor Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "armor_reduction" }], tags: ["downside", "defense", "armor"] },
            { id: 2602, group: "None", baseText: "Parry disabled", values: [], tags: ["downside", "parry", "functionality"] },
            { id: 2603, group: "None", baseText: "Damage Taken Increased by {val1} for 6s After Damage Taken", values: [{ key: "{val1}", type: "percentage", min: 21, max: 30, stat: "damage_taken_increase" }], tags: ["downside", "defense", "on_damage_taken"] },
            { id: 2604, group: "None", baseText: "Unrepairable", values: [], tags: ["downside", "durability"] },
            { id: 2605, group: "None", baseText: "Equip Load Decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "equip_load_reduction" }], tags: ["downside", "weight"] },
            { id: 2606, group: "None", baseText: "Damage Taken Increased by {val1} If Not at Full Focus", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "damage_taken_increase" }], tags: ["downside", "defense", "not_full_focus"] },
            { id: 2607, group: "None", baseText: "Max focus decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 18, max: 25, stat: "max_focus_reduction" }], tags: ["downside", "focus"] },
            { id: 2608, group: "None", baseText: "Drain Focus in Combat", values: [], tags: ["downside", "focus", "regeneration"] },
            { id: 2609, group: "None", baseText: "Focus Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "focus_cost_increase" }], tags: ["downside", "focus"] },
            { id: 2610, group: "None", baseText: "Lose {val1} Focus each time you take Damage", values: [{ key: "{val1}", type: "flat", min: 10, max: 15, stat: "focus_loss" }], tags: ["downside", "focus", "on_damage_taken"] },
            { id: 2611, group: "None", baseText: "Take {val1} Damage on Focus Use", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "self_damage" }], tags: ["downside", "health", "on_focus_use"] },
            { id: 2612, group: "None", baseText: "Lose Health in Combat periodically", values: [], tags: ["downside", "health", "regeneration"] },
            { id: 2613, group: "None", baseText: "Max Health decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_health_reduction" }], tags: ["downside", "health"] },
            { id: 2614, group: "None", baseText: "Max Stamina decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 14, max: 20, stat: "max_stamina_reduction" }], tags: ["downside", "stamina"] },
            { id: 2615, group: "None", baseText: "Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 13, max: 20, stat: "stamina_cost_increase" }], tags: ["downside", "stamina"] },
            { id: 2616, group: "None", baseText: "Attack Stamina Cost increased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 20, max: 30, stat: "stamina_cost_increase" }], tags: ["downside", "stamina", "attack"] },
            { id: 2617, group: "None", baseText: "Stagger Resistance decreased by {val1}", values: [{ key: "{val1}", type: "percentage", min: 26, max: 40, stat: "stagger_resistance_reduction" }], tags: ["downside", "defense", "stagger"] }
        ]
    }
};
