
import { Enchantment } from '../types';
import { ATTRIBUTE_KEYWORDS } from '../constants';

export const getDisplayText = (enchantment: Enchantment): string => {
    let constructedText = enchantment.baseText;
    if (enchantment.values && enchantment.values.length > 0) {
        enchantment.values.forEach(val => {
            let valueString = (val.min !== undefined && val.max !== undefined) ? `${val.min}-${val.max}` : val.value;
            if (val.type === 'percentage') {
                valueString += '%';
            }
            constructedText = constructedText.replace(val.key, String(valueString));
        });
    }
    return constructedText;
};

// A utility function to escape regex special characters
const escapeRegex = (str: string) => {
    return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
};

export const highlightText = (text: string, searchTerm: string): string => {
    let highlightedText = text;

    // Apply attribute keyword highlighting first
    for (const className in ATTRIBUTE_KEYWORDS) {
        ATTRIBUTE_KEYWORDS[className].forEach(regex => {
            highlightedText = highlightedText.replace(regex, `<span class="${className}">$&</span>`);
        });
    }

    // Apply search term highlighting
    const searchKeywords = searchTerm.split(',').map(k => k.trim()).filter(k => k !== '');
    if (searchKeywords.length > 0) {
        searchKeywords.forEach(keyword => {
            if (keyword) {
                const searchRegex = new RegExp(`\b${escapeRegex(keyword)}\b`, 'gi');
                highlightedText = highlightedText.replace(searchRegex, (match) => `<span class="bg-[#fbbc04] text-black rounded-sm">${match}</span>`);
            }
        });
    }

    return highlightedText;
};
