import React from 'react';
interface Option {
    name: string;
    abbreviation: string;
}
interface SelectProps {
    options: Option[];
    defaultOptionText: string;
    onChange: (selectedOption: Option) => void;
}
/**
 * Renders a select dropdown component with the provided options and default option text.
 *
 * @param {SelectProps} options - The list of options to populate the select dropdown.
 * @param {string} defaultOptionText - The text to display for the default option.
 * @param {Function} onChange - The callback function to be executed when an option is changed.
 * @return {JSX.Element} The select dropdown component.
 */
export declare function Select({ options, defaultOptionText, onChange }: SelectProps): React.JSX.Element;
export {};
