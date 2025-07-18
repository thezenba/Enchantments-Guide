
import React, { useState, useRef, useEffect } from 'react';
import { groupTitles, groupExplanations } from '../constants';

const InfoSection: React.FC = () => {
  const [showGuide, setShowGuide] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Fechar ao pressionar ESC
  useEffect(() => {
    if (!showGuide) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowGuide(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showGuide]);

  // Fechar ao clicar fora do modal
  useEffect(() => {
    if (!showGuide) return;
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        setShowGuide(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [showGuide]);

  return (
    <div className="bg-[#2c2f33] p-4 rounded-lg my-6 border-l-4 border-[#4a90e2]">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xl font-bold text-[#e6e6e6]">Key Information</h3>
        <button
          className="ml-4 px-3 py-1 bg-[#4a90e2] text-white rounded hover:bg-[#357ab8] text-sm font-semibold shadow"
          onClick={() => setShowGuide(true)}
        >
          Group Guide
        </button>
      </div>
      <ul className="list-none space-y-2 text-sm text-[#b3b3b3]">
        <li><strong className="inline-block bg-[#8e7cc3] text-white rounded-full px-2 py-0.5 text-xs align-middle font-bold mr-2">Grouping:</strong>An enchantment that shares a grouping with another cannot be found on the same item.</li>
        <li><strong className="text-[#e6e6e6]">Fatality:</strong> Kill an enemy with a charged attack or a rune attack.</li>
        <li><strong className="text-[#e6e6e6]">Gems:</strong> Do not impact groupings. You can have a Quartz (Electric infusion) gem and still roll any "A" grouping enchantment.</li>
        <li><strong className="text-[#e6e6e6]">Infusion:</strong> Overwrites the physical damage of a weapon, making it deal elemental damage instead. These are 4x rarer than other enchantments.</li>
        <li><strong className="text-[#ea9999]">Regainable Health:</strong> Gives a window to regain lost health by hitting an enemy.</li>
      </ul>

      {/* Modal do Guia dos Grupos */}
      {showGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div
            ref={modalRef}
            className="bg-[#23272a] rounded-lg p-4 sm:p-6 w-full max-w-md sm:max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl border border-[#404040] relative focus:outline-none"
            tabIndex={-1}
          >
            <button
              className="absolute top-2 right-2 text-[#e6e6e6] hover:text-[#4a90e2] text-2xl font-bold"
              onClick={() => setShowGuide(false)}
              aria-label="Close"
            >
              ×
            </button>
            <h4 className="text-2xl font-bold mb-4 text-[#4a90e2] text-center">Group Guide</h4>
            <ul className="space-y-6">
              {Object.keys(groupTitles).map((key) => (
                <li key={key} className="border-b border-[#404040] pb-3 last:border-0 last:pb-0">
                  <span className="block font-bold text-lg text-[#e6e6e6] mb-1">{groupTitles[key]}</span>
                  <span className="block text-[#b3b3b3] text-sm">{groupExplanations[key]}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoSection;
