import { backgroundColorField } from "@/fields/backgroundColor";
import { Select } from "@radix-ui/react-select";
import { Block } from "payload";

export const ContactUsBlock: Block = {
    slug: 'contactUsBlock',
    interfaceName: 'ContactUsBlock',
    fields: [
        ...backgroundColorField(),
        {
            name: 'form',
            type: 'relationship',
            relationTo: 'forms',
            required: true
        },
        {
            type: 'group',
            name: 'phone',
            label: 'Phone / Mobile Information',
            fields: [
                {
                    name: 'sectionTitle',
                    type: 'text',
                },
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'phone',
                    type: 'text',
                }
            ],
        },
        {
            name: 'email',
            type: 'group',
            label: 'Email Information',
            fields: [
                {
                    name: 'sectionTitle',
                    type: 'text',
                },
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'email',
                    type: 'email'
                }
            ],
        },
        {
            name: 'location',
            label: 'Location Information',
            type: 'group',
            fields: [
                {
                    name: 'sectionTitle',
                    type: 'text',
                },
                {
                    name: 'title',
                    type: 'text',
                },
                {
                    name: 'address',
                    type: 'textarea'
                },               
            ],
        },
        {
            name: 'coordinates',
            label: 'Map Configuration',
            type: 'group',
            fields: [
                {
                    name: 'lon',
                    label: 'Longitude Coordinates',
                    type: 'text'
                },
                {
                    name: 'lat',
                    label: 'Latitude Coordinates',
                    type: 'text'
                },
            ]
        },
        {
            name: 'socialLinks',
            type: 'select',
            hasMany: true,
            options: [
                {
                    label: 'Facebook',
                    value: 'facebook',
                },
                {
                    label: 'Instagram',
                    value: 'instagram',
                },
                {
                    label: 'LinkedIn',
                    value: 'linkedin',
                },
            ]
        },

    ]
}