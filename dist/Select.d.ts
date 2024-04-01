import React from "react";
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
 * Renders a select input element with the provided options and handles the change event.
 *
 * @param {SelectProps} id - The unique identifier for the select element
 * @param {SelectProps} options - The array of options to be rendered in the select element
 * @param {SelectProps} defaultOptionText - The default text to be displayed as the first option
 * @param {SelectProps} value - The currently selected value
 * @param {SelectProps} onChange - The function to be called when the value changes
 * @return {JSX.Element} The select input element
 */
export declare function Select({ id, options, defaultOptionText, value, onChange, }: SelectProps): React.JSX.Element;
export {};
