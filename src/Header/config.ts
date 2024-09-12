import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'

export const Header: GlobalConfig = {
  slug: 'header',
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
        {
          name: 'appearance',
          type: 'select',         
          options: [           
            {
              label: 'Default',
              value: 'default',
            },
            {
              label: 'Call to Action',
              value: 'call-to-action',
            },
          ],
        },
      ],
      maxRows: 6,
    },
  ],
  hooks: {
    afterChange: [revalidateHeader],
  },
}
