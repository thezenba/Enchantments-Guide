
import React from 'react';
import { Enchantment, EquipmentType, TabType } from '../types';
import { EQUIPMENT_NAME_MAP } from '../constants';
import EnchantmentListItem from './EnchantmentListItem';

interface EquipmentCardProps {
  equipmentType: EquipmentType;
  enchantments: Enchantment[];
  tab: TabType;
  searchTerm: string;
  isMultiColumn: boolean;
}

const tabStyles: Record<TabType, string> = {
  magical: 'bg-[rgba(74,144,226,0.1)] text-[#4a90e2]',
  plagued: 'bg-[rgba(142,124,195,0.1)] text-[#8e7cc3]',
  downsides: 'bg-[rgba(208,2,27,0.1)] text-white',
};

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipmentType, enchantments, tab, searchTerm, isMultiColumn }) => {
  if (enchantments.length === 0) {
    return null;
  }

  return (
    <div className={`bg-[#23272a] rounded-lg border border-[#404040] break-inside-avoid ${isMultiColumn ? 'col-span-full' : ''}`}>
      <div className={`py-3 px-5 text-lg font-semibold border-b border-[#404040] ${tabStyles[tab]}`}>
        {EQUIPMENT_NAME_MAP[equipmentType]}
      </div>
      <ul className={`list-none p-0 ${isMultiColumn ? 'lg:columns-3 md:columns-2 columns-1 column-gap-6 p-4' : ''}`}>
        {enchantments.map((enchant) => (
          <EnchantmentListItem key={enchant.id} enchantment={enchant} searchTerm={searchTerm} />
        ))}
      </ul>
    </div>
  );
};

export default EquipmentCard;
