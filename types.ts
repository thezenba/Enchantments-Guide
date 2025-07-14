
export type EnchantmentType = 'magicalEnchantments' | 'plaguedEnchantments' | 'plaguedDownsides';

export type TabType = 'magical' | 'plagued';

export type EquipmentType = 'weapon' | 'shield' | 'bow' | 'helm' | 'armor' | 'pants' | 'gloves';

export interface ValueDetail {
  key: string;
  type: 'percentage' | 'flat';
  min?: number;
  max?: number;
  value?: number | string;
  stat: string;
}

export interface Enchantment {
  id: number;
  group: string;
  baseText: string;
  values: ValueDetail[];
  tags: string[];
}

export type EquipmentData = Record<EquipmentType, Enchantment[]>;

export type FullEnchantmentData = Record<EnchantmentType, EquipmentData>;
