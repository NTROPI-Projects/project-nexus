import { SelectField } from "payload";

export const backgroundColorField = () => {
    const backgroundColorField: SelectField = {
        name: 'backgroundColor',
        type: 'select',
        label: 'Background Color',
        options: [
            {
                label: 'White',
                value: 'white',
            },
            {
                label: 'Dark Blue',
                value: 'darkblue',
            },
            {
                label: 'Turquoise',
                value: 'turquoise',
            },
        ],
        defaultValue: 'white',
        admin: {
            description: 'Select the background color for this element',
        }
    }

    return [backgroundColorField]
};