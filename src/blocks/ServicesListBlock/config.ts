import { backgroundColorField } from '@/fields/backgroundColor'
import type { Block } from 'payload'

export const ServicesListBlock: Block = {
  slug: 'servicesListBlock',
  interfaceName: 'ServicesListBlock',
  fields: [
    ...backgroundColorField(),
    {
        name: 'sectionTitle',
        type: 'text'
    },
    {
      name: 'selectedServices',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true
    }
  ],
}
