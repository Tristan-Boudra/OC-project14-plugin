import React, { useState } from 'react';

interface Option {
    name: string;
    abbreviation: string;
}

interface SelectProps {
    options: Option[];
    defaultOptionText: string;
    onChange: (selectedValue: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, defaultOptionText, onChange }) => {
    const [selectedValue, setSelectedValue] = useState<string>('');

    const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedValue(selectedValue);
        onChange(selectedValue);
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

export default Select;
