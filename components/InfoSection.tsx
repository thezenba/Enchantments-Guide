
import React from 'react';

const InfoSection: React.FC = () => {
  return (
    <div className="bg-[#2c2f33] p-4 rounded-lg my-6 border-l-4 border-[#4a90e2]">
      <h3 className="text-xl font-bold mb-3 text-[#e6e6e6]">Key Information</h3>
      <ul className="list-none space-y-2 text-sm text-[#b3b3b3]">
        <li><strong className="text-[#e6e6e6]">Grouping:</strong> An enchantment that shares a grouping with another cannot be found on the same item.</li>
        <li><strong className="text-[#e6e6e6]">Fatality:</strong> Kill an enemy with a charged attack or a rune attack.</li>
        <li><strong className="text-[#e6e6e6]">Gems:</strong> Do not impact groupings. You can have a Quartz (Electric infusion) gem and still roll any "A" grouping enchantment.</li>
        <li><strong className="text-[#e6e6e6]">Infusion:</strong> Overwrites the physical damage of a weapon, making it deal elemental damage instead. These are 4x rarer than other enchantments.</li>
        <li><strong className="text-[#e6e6e6]">Regainable Health:</strong> Gives a window to regain lost health by hitting an enemy.</li>
      </ul>
    </div>
  );
};

export default InfoSection;
