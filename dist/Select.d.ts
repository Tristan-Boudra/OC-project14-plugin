import React from 'react';
interface Option {
    name: string;
    abbreviation: string;
}
interface SelectProps {
    options: Option[];
    defaultOptionText: string;
}
export declare function Select({ options, defaultOptionText }: SelectProps): React.JSX.Element;
export {};
