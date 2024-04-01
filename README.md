# Convert plugin dropdown from jQuery to React

This project aims to create a plugin dropdown component in React, serving as a modern alternative to traditional jQuery-based dropdowns.

## Overview

This React plugin dropdown is designed to provide a more efficient and flexible solution compared to the conventional jQuery dropdowns. By leveraging React's component-based architecture, it offers improved scalability, reusability, and maintainability.

## Features

- **Modernity**: Utilizes modern React syntax and best practices for enhanced development experience.
- **Component-based**: Built as a reusable React component, facilitating integration into various React applications.
- **Customization**: Provides options for customization, such as default option text, value, and event handling.
- **Accessibility**: Designed with accessibility in mind, ensuring compliance with web accessibility standards.

## Installation

1. [Download the npm package](https://www.npmjs.com/package/hrnet_plugin_boudra_tristan).
2. Follow the usage instructions below.

## Usage

```tsx
<Select
  id="selectState"
  options={states}
  defaultOptionText="Select State"
  value={selectedStateOption ? selectedStateOption.abbreviation : ""}
  onChange={handleStateChange}
/>
```

### Props

- `id`: Identifier for the dropdown select element.
- `options`: Array of objects representing the options for the dropdown.
- `defaultOptionText`: Text to display as the default option.
- `value`: Value of the currently selected option.
- `onChange`: Callback function triggered when the selected option changes.

## Author

Boudra Tristan

Feel free to contribute or provide feedback to enhance this plugin further.
