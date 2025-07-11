
import React from 'react';
import { GROUP_BADGE_COLORS, GROUP_TOOLTIPS } from '../constants';

interface GroupBadgeProps {
  group: string;
}

const GroupBadge: React.FC<GroupBadgeProps> = ({ group }) => {
  if (group === 'None') {
    return null;
  }

  const badgeColor = GROUP_BADGE_COLORS[group] || 'bg-gray-400';
  const tooltipText = GROUP_TOOLTIPS[group] || `This item belongs to Group ${group}.`;

  return (
    <div className="relative group flex items-center">
      <span className={`text-xs font-bold text-black py-0.5 px-2 rounded-full cursor-help ${badgeColor}`}>
        {group}
      </span>
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-black text-white text-center rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10 shadow-lg">
        {tooltipText}
      </div>
    </div>
  );
};

export default GroupBadge;
