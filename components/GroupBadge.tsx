
import React, { useState, useRef, useCallback } from 'react';
import { GROUP_BADGE_COLORS, groupTitles, groupSummaries } from '../constants';
import { highlightText } from '../utils/textUtils';
import * as Tooltip from '@radix-ui/react-tooltip';

// Hook simples para detectar se a tela é pequena
function useIsSmallScreen() {
  const [isSmall, setIsSmall] = React.useState(() => window.innerWidth < 640);
  React.useEffect(() => {
    const handler = () => setIsSmall(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isSmall;
}

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

  const isSmallScreen = useIsSmallScreen();
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const badgeRef = useRef<HTMLSpanElement>(null);

  const handleBadgeClick = useCallback((e: React.MouseEvent) => {
    if (isSmallScreen) {
      e.stopPropagation();
      setTooltipOpen((open) => !open);
    }
  }, [isSmallScreen]);

  const handleTooltipOpenChange = useCallback((open: boolean) => {
    if (!isSmallScreen) setTooltipOpen(open);
  }, [isSmallScreen]);

  // Fecha o tooltip ao clicar fora em telas pequenas
  React.useEffect(() => {
    if (!isSmallScreen || !tooltipOpen) return;
    function handleClickOutside(e: MouseEvent) {
      if (badgeRef.current && !badgeRef.current.contains(e.target as Node)) {
        setTooltipOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSmallScreen, tooltipOpen]);

  return (
    <Tooltip.Root open={isSmallScreen ? tooltipOpen : undefined} onOpenChange={handleTooltipOpenChange}>
      <Tooltip.Trigger asChild>
        <span
          ref={badgeRef}
          className={`group-badge-clickable transition-all duration-150 text-xs font-bold text-black py-0.5 px-2 rounded-full cursor-pointer select-none ${badgeColor} hover:scale-110 hover:shadow-lg hover:text-[#4a90e2] active:scale-105`}
          onClick={handleBadgeClick}
          tabIndex={0}
          onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') handleBadgeClick(e as any); }}
          aria-label={`Mostrar explicação do grupo ${badgeTitle}`}
        >
          {badgeTitle}
        </span>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content side="top" align="center" sideOffset={8} className="px-2 py-1 bg-black text-white text-center rounded-md text-sm z-10 shadow-lg border border-[#404040] break-words animate-fade-in">
          <span dangerouslySetInnerHTML={{ __html: highlightText(tooltipText, '') }} />
          <Tooltip.Arrow className="fill-black" />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
};

export default GroupBadge;
