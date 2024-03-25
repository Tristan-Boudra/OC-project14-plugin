import React from 'react';
interface CustomOption {
    name: string;
    abbreviation: string;
}
interface SelectProps {
    id: string;
    options: CustomOption[];
    defaultOptionText: string;
    value: string | null;
    onChange: (selectedOption: CustomOption) => void;
}
/**
 * Renders a select element with options and handles the change event.
 *
 * @param {SelectProps} props - The props object containing the following properties:
 *   - id: The id of the select element.
 *   - options: An array of options for the select element.
 *   - defaultOptionText: The text to display as the default option.
 *   - value: The currently selected value.
 *   - onChange: A callback function to be called when the select value changes.
 * @return {JSX.Element} The rendered select element.
 */
export declare function Select({ id, options, defaultOptionText, value, onChange }: SelectProps): React.JSX.Element;
export {};
