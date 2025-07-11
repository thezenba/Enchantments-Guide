
import React from 'react';
import { EquipmentData, EquipmentType, TabType } from '../types';
import EquipmentCard from './EquipmentCard';
import NoResults from './NoResults';

interface EnchantmentGridProps {
  data: EquipmentData;
  tab: TabType;
  searchTerm: string;
  selectedEquipment: string;
}

const EnchantmentGrid: React.FC<EnchantmentGridProps> = ({ data, tab, searchTerm, selectedEquipment }) => {
  const equipmentTypes = Object.keys(data) as EquipmentType[];
  const isMultiColumn = selectedEquipment !== 'all';
  const hasResults = equipmentTypes.some(type => data[type].length > 0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {hasResults ? (
        equipmentTypes.map((type) => (
          <EquipmentCard
            key={type}
            equipmentType={type}
            enchantments={data[type]}
            tab={tab}
            searchTerm={searchTerm}
            isMultiColumn={isMultiColumn}
          />
        ))
      ) : (
        <NoResults />
      )}
    </div>
  );
};

export default EnchantmentGrid;
