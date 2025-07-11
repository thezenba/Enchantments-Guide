
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="text-center py-5 border-b border-b-[#404040]">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#e6e6e6] mb-2">
                Enchantment Guide
            </h1>
            <p className="text-lg text-[#b3b3b3]">
                An interactive tool for theorycrafting in <strong>No Rest for The Wicked</strong>
            </p>
        </header>
    );
};

export default Header;
