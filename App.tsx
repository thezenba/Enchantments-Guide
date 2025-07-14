
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import InfoSection from './components/InfoSection';
import Controls from './components/Controls';
import EnchantmentGrid from './components/EnchantmentGrid';
import { enchantmentData } from './data/enchantments';
import { EQUIPMENT_NAME_MAP } from './constants';
import { TabType, EnchantmentType, EquipmentData, EquipmentType, Enchantment } from './types';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('magical');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState('all');
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');

  const { equipmentOptions, groupOptions, tagOptions } = useMemo(() => {
    const allEnchantments = Object.values(enchantmentData).flatMap(type => Object.values(type).flat());

    const equipment = [{ value: 'all', label: 'All Equipment' }, ...Object.keys(EQUIPMENT_NAME_MAP).map(key => ({ value: key, label: EQUIPMENT_NAME_MAP[key as EquipmentType] }))];
    
    const groups = new Set<string>();
    allEnchantments.forEach(e => { if(e.group !== 'None') groups.add(e.group) });
    const groupOpts = [{ value: 'all', label: 'All Groupings' }, ...Array.from(groups).sort().map(g => ({ value: g, label: g }))];
    
    const tags = new Set<string>();
    allEnchantments.forEach(e => e.tags.forEach(t => tags.add(t)));
    const tagOpts = [{ value: 'all', label: 'All Tags' }, ...Array.from(tags).sort().map(t => ({ value: t, label: t.charAt(0).toUpperCase() + t.slice(1).replace(/_/g, ' ') }))];

    return { equipmentOptions: equipment, groupOptions: groupOpts, tagOptions: tagOpts };
  }, []);

  const tabToDataTypeMap: Record<TabType, EnchantmentType> = {
    magical: 'magicalEnchantments',
    plagued: 'plaguedEnchantments',
  };

  const filteredData = useMemo<EquipmentData>(() => {
    if (activeTab === 'plagued') {
      // Juntar plaguedEnchantments e plaguedDownsides
      const plagued = enchantmentData['plaguedEnchantments'];
      const downsides = enchantmentData['plaguedDownsides'];
      const searchKeywords = searchTerm.toLowerCase().split(',').map(k => k.trim()).filter(Boolean);

      const equipmentTypes = selectedEquipment === 'all'
        ? Object.keys(plagued)
        : [selectedEquipment];

      const result: EquipmentData = {} as EquipmentData;

      for (const eqType of equipmentTypes) {
        const key = eqType as EquipmentType;
        const plaguedEnchants = plagued[key] || [];
        const plaguedDowns = downsides[key] || [];
        // Filtrar positivos
        const filteredPlagued = plaguedEnchants.filter((enchant: Enchantment) => {
          const text = enchant.baseText.toLowerCase();
          const textMatch = searchKeywords.length === 0 || searchKeywords.every(keyword => text.includes(keyword));
          const groupMatch = selectedGroup === 'all' || enchant.group === selectedGroup;
          const tagMatch = selectedTag === 'all' || enchant.tags.includes(selectedTag);
          return textMatch && groupMatch && tagMatch;
        });
        // Filtrar downsides
        const filteredDowns = plaguedDowns.filter((enchant: Enchantment) => {
          const text = enchant.baseText.toLowerCase();
          const textMatch = searchKeywords.length === 0 || searchKeywords.every(keyword => text.includes(keyword));
          const groupMatch = selectedGroup === 'all' || enchant.group === selectedGroup;
          const tagMatch = selectedTag === 'all' || enchant.tags.includes(selectedTag);
          return textMatch && groupMatch && tagMatch;
        });
        // Juntar, downsides ao final
        if (filteredPlagued.length > 0 || filteredDowns.length > 0) {
          result[key] = [...filteredPlagued, ...filteredDowns.map(d => ({ ...d, isDownside: true }))];
        }
      }
      return result;
    } else {
      // Lógica original para magical
      const dataType = tabToDataTypeMap[activeTab];
      const currentData = enchantmentData[dataType];
      const searchKeywords = searchTerm.toLowerCase().split(',').map(k => k.trim()).filter(Boolean);

      const dataToFilter = selectedEquipment === 'all'
        ? currentData
        : { [selectedEquipment]: currentData[selectedEquipment as EquipmentType] };
      
      const result: EquipmentData = {} as EquipmentData;

      for (const eqType in dataToFilter) {
          const key = eqType as EquipmentType;
          if (Object.prototype.hasOwnProperty.call(dataToFilter, key) && dataToFilter[key]) {
              const enchantments = dataToFilter[key];
              const filteredEnchantments = enchantments.filter((enchant: Enchantment) => {
                  const text = enchant.baseText.toLowerCase();
                  const textMatch = searchKeywords.length === 0 || searchKeywords.every(keyword => text.includes(keyword));
                  const groupMatch = selectedGroup === 'all' || enchant.group === selectedGroup;
                  const tagMatch = selectedTag === 'all' || enchant.tags.includes(selectedTag);
                  return textMatch && groupMatch && tagMatch;
              });

              if (filteredEnchantments.length > 0) {
                  result[key] = filteredEnchantments;
              }
          }
      }
      return result;
    }
  }, [activeTab, searchTerm, selectedEquipment, selectedGroup, selectedTag]);

  return (
    <div className="min-h-screen text-[#e6e6e6] font-sans antialiased">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <Header />
        <InfoSection />
        <Controls
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            selectedEquipment={selectedEquipment}
            setSelectedEquipment={setSelectedEquipment}
            selectedGroup={selectedGroup}
            setSelectedGroup={setSelectedGroup}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
            equipmentOptions={equipmentOptions}
            groupOptions={groupOptions}
            tagOptions={tagOptions}
        />
        <main>
            <EnchantmentGrid 
                data={filteredData} 
                tab={activeTab} 
                searchTerm={searchTerm} 
                selectedEquipment={selectedEquipment} 
            />
        </main>
      </div>
    </div>
  );
};

export default App;
