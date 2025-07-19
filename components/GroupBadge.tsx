
import React, { useState, useRef } from 'react';
import { GROUP_BADGE_COLORS, groupTitles, groupExplanations } from '../constants';

interface GroupBadgeProps {
  group: string;
}

const GroupBadge: React.FC<GroupBadgeProps> = ({ group }) => {
  if (group === 'None') {
    return null;
  }

  const badgeColor = GROUP_BADGE_COLORS[group] || 'bg-gray-400';
  const badgeTitle = groupTitles[group] || group;
  const tooltipText = groupExplanations[group] || `This item belongs to Group ${group}.`;

  const [showTooltip, setShowTooltip] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timerRef.current = setTimeout(() => {
      setShowTooltip(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setShowTooltip(false);
  };

  return (
    <div className="relative flex items-center">
      <span
        className={`text-xs font-bold text-black py-0.5 px-2 rounded-full cursor-help ${badgeColor}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {badgeTitle}
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-black text-white text-center rounded-md text-sm z-10 shadow-lg border border-[#404040]">
          {tooltipText}
        </div>
      )}
    </div>
  );
};

export default GroupBadge;
