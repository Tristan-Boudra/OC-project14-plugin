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

export function Select({
  id,
  options,
  defaultOptionText,
  value,
  onChange,
}: SelectProps) {
  if (!Array.isArray(options) || options.length === 0) {
    throw new Error("Options must be a non-empty array");
  }

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = options[selectedIndex - 1];
    onChange(selectedOption);
  };

  return (
    <select
      id={id}
      className="formSelect"
      value={value || ""}
      onChange={handleOptionChange}
      aria-label={defaultOptionText}
    >
      <option className="formSelectOption" value="">
        {defaultOptionText}
      </option>
      {options.map((option) => (
        <option
          className="formSelectOption"
          key={option.abbreviation}
          value={option.abbreviation}
          aria-label={option.name}
        >
          {option.name}
        </option>
      ))}
    </select>
  );
}
