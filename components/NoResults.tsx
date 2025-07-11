
import React from 'react';

const NoResults: React.FC = () => {
    return (
        <div className="col-span-full text-center py-16 px-4">
            <p className="text-xl text-[#b3b3b3]">No enchantments found.</p>
            <p className="text-md text-gray-500">Try adjusting your search or filter settings.</p>
        </div>
    );
};

export default NoResults;
