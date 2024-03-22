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
export declare function Select({ id, options, defaultOptionText, value, onChange }: SelectProps): React.JSX.Element;
export {};
