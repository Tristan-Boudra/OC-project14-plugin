import React, { useState } from 'react';

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
export function Select({ options, defaultOptionText, onChange }: SelectProps) {
    const [selectedValue, setSelectedValue] = useState<string>('');

    /**
     * Handles the change event of the select element and updates the selected value.
     *
     * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event object.
     * @return {void} This function does not return anything.
     */
    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = options[selectedIndex - 1];
        setSelectedValue(selectedOption.abbreviation);
        onChange(selectedOption);
    };

    return (
        <select className="formSelect" value={selectedValue} onChange={handleOptionChange}>
            <option className="formSelectOption" value="">{defaultOptionText}</option>
            {options.map(option => (
                <option className="formSelectOption" key={option.abbreviation} value={option.abbreviation}>
                    {option.name}
                </option>
            ))}
        </select>
    );
};
