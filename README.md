# Convert plugin dropdown JQuery to react

This project aims to create a plugin dropwdown in React.

## Instruction download

1. [Download this package](https://www.npmjs.com/package/hrnet_plugin_boudra_tristan)
2. For use it, follow the code bellow.

```tsx
    <Select
        id="selectState"
        options={states}
        defaultOptionText="Select State"
        value={ selectedStateOption ? selectedStateOption.abbreviation : ""}
        onChange={handleStateChange}
    />
```
```bash
    id: id of select
    options: Array of states
    defaultOPtionText: Default option display
    value: Value of select
    onChange: function to change state
```

## Auteur

Boudra Tristan
