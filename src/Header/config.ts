import type { GlobalConfig } from 'payload'

import { link } from '@/fields/link'
import { revalidateHeader } from './hooks/revalidateHeader'
import { authenticated } from '@/access/authenticated'
import { anyone } from '@/access/anyone'

export const Header: GlobalConfig = {
  slug: 'header',
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
