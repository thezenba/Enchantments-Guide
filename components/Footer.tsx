import React from 'react';

const Footer: React.FC = () => (
  <footer className="w-full mt-8 py-4 border-t border-[#404040] text-center text-sm text-[#b3b3b3] bg-[#23272a]">
    <span>
      Code available on&nbsp;
      <a
        href="https://github.com/thezenba/Enchantments-Guide"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#4a90e2] hover:underline"
      >
        GitHub
      </a>
      .
    </span>
  </footer>
);

export default Footer; 