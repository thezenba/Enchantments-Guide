
import React, { useState, useRef } from 'react';
import { GROUP_BADGE_COLORS, groupTitles, groupSummaries } from '../constants';
import { highlightText } from '../utils/textUtils';

// Evento customizado para fechar tooltips
const TOOLTIP_EVENT = 'close-group-badge-tooltips';

interface GroupBadgeProps {
  group: string;
}

const GroupBadge: React.FC<GroupBadgeProps> = ({ group }) => {
  if (group === 'None') {
    return null;
  }

  const badgeColor = GROUP_BADGE_COLORS[group] || 'bg-gray-400';
  const badgeTitle = groupTitles[group] || group;
  const tooltipText = groupSummaries[group] || `Este item pertence ao Grupo ${group}.`;

  const [showTooltip, setShowTooltip] = useState(false);
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleBadgeClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!showTooltip) {
      window.dispatchEvent(new CustomEvent(TOOLTIP_EVENT));
    }
    setShowTooltip((prev) => !prev);
    clearCloseTimer();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target as HTMLElement).closest('.group-badge-clickable')) {
      clearCloseTimer();
      closeTimer.current = setTimeout(() => setShowTooltip(false), 2000);
    }
  };

  const handleMouseLeave = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setShowTooltip(false), 2000);
  };

  const handleMouseEnter = () => {
    clearCloseTimer();
  };

  React.useEffect(() => {
    const closeTooltip = () => setShowTooltip(false);
    window.addEventListener(TOOLTIP_EVENT, closeTooltip);
    if (showTooltip) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      window.removeEventListener(TOOLTIP_EVENT, closeTooltip);
      document.removeEventListener('mousedown', handleClickOutside);
      clearCloseTimer();
    };
  }, [showTooltip]);

  return (
    <div className="relative flex items-center">
      <span
        ref={badgeRef}
        className={`group-badge-clickable transition-all duration-150 text-xs font-bold text-black py-0.5 px-2 rounded-full cursor-pointer select-none ${badgeColor} hover:scale-110 hover:shadow-lg hover:text-[#4a90e2] active:scale-105`}
        onClick={handleBadgeClick}
        tabIndex={0}
        onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleBadgeClick(e as any); }}
        aria-label={`Mostrar explicação do grupo ${badgeTitle}`}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        {badgeTitle}
      </span>
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 p-2 bg-black text-white text-center rounded-md text-sm z-10 shadow-lg border border-[#404040] animate-fade-in">
          <span dangerouslySetInnerHTML={{ __html: highlightText(tooltipText, '') }} />
        </div>
      )}
    </div>
  );
};

export default GroupBadge;
