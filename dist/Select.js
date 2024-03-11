import React, { useState } from 'react';
export function Select({ options, defaultOptionText }) {
    const [selectedValue, setSelectedValue] = useState('');
    const handleOptionChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
    };
    return (React.createElement("select", { className: "formSelect", value: selectedValue, onChange: handleOptionChange },
        React.createElement("option", { className: "formSelectOption", value: "" }, defaultOptionText),
        options.map(option => (React.createElement("option", { className: "formSelectOption", key: option.abbreviation, value: option.abbreviation }, option.name)))));
}
;
