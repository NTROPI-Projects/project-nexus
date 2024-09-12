import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateFooter } from './hooks/revalidateFooter'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'navItems',
      type: 'array',
      fields: [
        link({
          appearances: false,
        }),
      ],
      maxRows: 6,
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
    {
      name: 'copyright',
      type: 'text',
      label: 'Copyright Text',
    },
  ],
  hooks: {
    afterChange: [revalidateFooter],
  },
}
