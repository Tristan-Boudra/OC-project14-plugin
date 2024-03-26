import React from "react";
export function Select({ id, options, defaultOptionText, value, onChange, }) {
    if (!Array.isArray(options) || options.length === 0) {
        throw new Error("Options must be a non-empty array");
    }
    const handleOptionChange = (event) => {
        const selectedIndex = event.target.selectedIndex;
        const selectedOption = options[selectedIndex - 1];
        onChange(selectedOption);
    };
    return (React.createElement("select", { id: id, className: "formSelect", value: value || "", onChange: handleOptionChange, "aria-label": defaultOptionText },
        React.createElement("option", { className: "formSelectOption", value: "" }, defaultOptionText),
        options.map((option) => (React.createElement("option", { className: "formSelectOption", key: option.abbreviation, value: option.abbreviation, "aria-label": option.name }, option.name)))));
}
