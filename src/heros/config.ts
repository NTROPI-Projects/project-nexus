import type { Field } from 'payload'

export const hero: Field = {
  name: 'hero',
  type: 'group',
  fields: [
    {
      name: 'type',
      type: 'select',
      defaultValue: 'contentPageBanner',
      label: 'Type',
      options: [
        {
          label: 'No Banner',
          value: 'none',
        },
        {
          label: 'Landing Page Banner', // Normally used for Landing Pages 
          value: 'landingPageBanner',
        },
        {
          label: 'Content Page Banner', // Normally used for inner pages
          value: 'contentPageBanner',
        },
      ],
      required: true,
    },
    {
      name: 'topHeaderText',
      type: 'text',
    },
    {
      name: 'bottomHeaderText',
      type: 'text',
      admin: {
        condition: (_, { type } = {}) => ['landingPageBanner'].includes(type),
      }
    },
    {
      name: 'content',
      type: 'textarea',
      admin: {
        condition: (_, { type } = {}) => ['landingPageBanner'].includes(type),
      }
    },
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
  ],
  label: false,
}
