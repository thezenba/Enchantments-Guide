
import React, { useMemo } from 'react';
import { Enchantment } from '../types';
import GroupBadge from './GroupBadge';
import { getDisplayText, highlightText } from '../utils/textUtils';

interface EnchantmentListItemProps {
  enchantment: Enchantment;
  searchTerm: string;
}

const EnchantmentListItem: React.FC<EnchantmentListItemProps> = ({ enchantment, searchTerm }) => {
  const displayText = useMemo(() => getDisplayText(enchantment), [enchantment]);
  
  const highlightedHtml = useMemo(() => highlightText(displayText, searchTerm), [displayText, searchTerm]);

  return (
    <li className="flex items-center justify-between py-3 px-5 border-b border-[#2c2f33] last:border-0 text-sm">
      <span
        className="flex-grow text-[#b3b3b3] font-medium"
        dangerouslySetInnerHTML={{ __html: highlightedHtml }}
      />
      <div className="ml-4 flex-shrink-0">
        <GroupBadge group={enchantment.group} />
      </div>
    </li>
  );
};

export default EnchantmentListItem;
