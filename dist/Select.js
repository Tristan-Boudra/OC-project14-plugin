import React from 'react';
export function Select({ id, options, defaultOptionText, value, onChange }) {
    /**
     * Handles the change event of the select element and calls the onChange callback.
     *
     * @param {React.ChangeEvent<HTMLSelectElement>} event - The change event object.
     */
    const handleOptionChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = options[selectedIndex - 1];
        onChange(selectedOption);
    };
    return (React.createElement("select", { id: id, className: "formSelect", value: value || '', onChange: handleOptionChange },
        React.createElement("option", { className: "formSelectOption", value: defaultOptionText }, defaultOptionText),
        options.map(option => (React.createElement("option", { className: "formSelectOption", key: option.abbreviation, value: option.abbreviation }, option.name || value)))));
}
;
