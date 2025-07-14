
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
};

const EquipmentCard: React.FC<EquipmentCardProps> = ({ equipmentType, enchantments, tab, searchTerm, isMultiColumn }) => {
  if (enchantments.length === 0) {
    return null;
  }

  // Separar downsides dos positivos apenas na aba plagued
  let positives = enchantments;
  let downsides: Enchantment[] = [];
  if (tab === 'plagued') {
    positives = enchantments.filter(e => !(e as any).isDownside);
    downsides = enchantments.filter(e => (e as any).isDownside);
  }

  return (
    <div className={`bg-[#23272a] rounded-lg border border-[#404040] break-inside-avoid ${isMultiColumn ? 'col-span-full' : ''}`}>
      <div className={`py-3 px-5 text-lg font-semibold border-b border-[#404040] ${tabStyles[tab]}`}>
        {EQUIPMENT_NAME_MAP[equipmentType]}
      </div>
      <ul className={`list-none p-0 ${isMultiColumn ? 'lg:columns-3 md:columns-2 columns-1 column-gap-6 p-4' : ''}`}>
        {positives.map((enchant) => (
          <EnchantmentListItem key={enchant.id} enchantment={enchant} searchTerm={searchTerm} />
        ))}
      </ul>
      {tab === 'plagued' && downsides.length > 0 && (
        <div className="mt-2 rounded-lg bg-[rgba(208,2,27,0.08)] p-2">
          <div className="relative group inline-block mb-1">
            <span
              className="text-[#d0021b] font-semibold text-sm cursor-help"
              style={{ textShadow: '0 0 2px #fff, 0 0 2px #fff, 0 0 2px #fff' }}
            >
              Downsides
            </span>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-2 bg-black text-white text-center rounded-md text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg border border-[#404040]">
              Each 'plagued' item must have a 'cursed' enchantment (Downside)
            </div>
          </div>
          <ul className={`list-none p-0 ${isMultiColumn ? 'lg:columns-3 md:columns-2 columns-1 column-gap-6' : ''}`}>
            {downsides.map((enchant) => (
              <EnchantmentListItem key={enchant.id} enchantment={enchant} searchTerm={searchTerm} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EquipmentCard;
