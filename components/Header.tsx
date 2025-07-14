
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center py-5 border-b border-b-[#404040]">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#e6e6e6] mb-2">
              <a
                href="https://github.com/thezenba/Enchantments-Guide"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all duration-150 hover:text-[#4a90e2] hover:underline focus:text-[#4a90e2] focus:underline outline-none cursor-pointer rounded"
                title="Ver projeto no GitHub"
              >
                Enchantment Guide
              </a>
            </h1>
            <p className="text-lg text-[#b3b3b3]">
                An interactive tool for theorycrafting in <strong>No Rest for The Wicked</strong>
            </p>
        </header>
    );
};

export default Header;
