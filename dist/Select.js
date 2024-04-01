import React from "react";
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
export function Select({ id, options, defaultOptionText, value, onChange, }) {
    if (!Array.isArray(options) || options.length === 0) {
        throw new Error("Options must be a non-empty array");
    }
    /**
     * Handles the change event of the select element and updates the selected option.
     *
     * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event object.
     * @return {void} This function does not return anything.
     */
    const handleOptionChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = options[selectedIndex - 1];
        onChange(selectedOption);
    };
    return (React.createElement("select", { id: id, className: "formSelect", value: value || "", onChange: handleOptionChange, "aria-label": defaultOptionText },
        React.createElement("option", { className: "formSelectOption", value: "" }, defaultOptionText),
        options.map((option) => (React.createElement("option", { className: "formSelectOption", key: option.abbreviation, value: option.abbreviation, "aria-label": option.name }, option.name)))));
}
