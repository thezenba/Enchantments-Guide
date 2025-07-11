
import React from 'react';
import { TabType } from '../types';

interface Option {
    value: string;
    label: string;
}

interface ControlsProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    searchTerm: string;
    setSearchTerm: (term: string) => void;
    selectedEquipment: string;
    setSelectedEquipment: (eq: string) => void;
    selectedGroup: string;
    setSelectedGroup: (group: string) => void;
    selectedTag: string;
    setSelectedTag: (tag: string) => void;
    equipmentOptions: Option[];
    groupOptions: Option[];
    tagOptions: Option[];
}

const tabConfig: { id: TabType; label: string; activeClass: string }[] = [
    { id: 'magical', label: 'Magical (Blue)', activeClass: 'bg-[#4a90e2] border-[#4a90e2] text-white' },
    { id: 'plagued', label: 'Plagued', activeClass: 'bg-[#8e7cc3] border-[#8e7cc3] text-white' },
    { id: 'downsides', label: 'Downsides', activeClass: 'bg-[#d0021b] border-[#d0021b] text-white' },
];

const Controls: React.FC<ControlsProps> = (props) => {
    const {
        activeTab, setActiveTab, searchTerm, setSearchTerm,
        selectedEquipment, setSelectedEquipment, selectedGroup, setSelectedGroup,
        selectedTag, setSelectedTag, equipmentOptions, groupOptions, tagOptions
    } = props;

    const filterSelectClasses = "w-full md:w-auto md:min-w-[150px] p-2.5 border rounded-md bg-[#1a1a1d] border-[#404040] text-[#e6e6e6] focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] text-sm";

    return (
        <div className="bg-[#2c2f33] p-4 rounded-lg my-6 shadow-lg flex flex-col gap-4">
            {/* Tabs */}
            <div className="flex flex-col sm:flex-row gap-2">
                {tabConfig.map(({ id, label, activeClass }) => (
                    <button
                        key={id}
                        onClick={() => setActiveTab(id)}
                        className={`py-2 px-4 font-bold text-sm cursor-pointer border-2 border-transparent rounded-md transition-all duration-300 ${activeTab === id ? activeClass : 'bg-[#23272a] text-[#b3b3b3] hover:text-white hover:bg-[#3a3e42]'}`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row flex-wrap gap-4 items-center">
                <div className="relative group flex-grow w-full md:w-auto">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search 'damage, parry'..."
                        className="w-full p-2.5 rounded-md border bg-[#1a1a1d] border-[#404040] text-[#e6e6e6] placeholder-gray-500 focus:ring-2 focus:ring-[#4a90e2] focus:border-[#4a90e2] text-sm"
                    />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-auto max-w-md p-3 bg-black text-white text-center rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
                        Use comma-separated keywords to find items with all specified tags. Example: <span className="text-cyan-400 font-bold">"focus, gain, durability."</span>
                        <br />
                        Also note that you can write incomplete words.
                        Example: <span className="text-cyan-400 font-bold">"Hea, dam"</span> to find everything related to <span className="text-orange-400 font-bold">"Heat Damage."</span>
                        <br />
                        Even a single letter works.
                    </div>
                </div>
                <select value={selectedEquipment} onChange={(e) => setSelectedEquipment(e.target.value)} className={filterSelectClasses}>
                    {equipmentOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} className={filterSelectClasses}>
                    {groupOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
                <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)} className={filterSelectClasses}>
                    {tagOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                </select>
            </div>
        </div>
    );
};

export default Controls;
