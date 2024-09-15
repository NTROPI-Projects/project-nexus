import { backgroundColorField } from "@/fields/backgroundColor";
import type { Block } from 'payload'

export const WorkShowcaseBlock: Block = {
    slug: 'workShowcaseBlock',
    interfaceName: 'WorkShowcaseBlock',
    fields: [
        ...backgroundColorField(),
        {
            name: 'sectionTitle',
            type: 'text'
        },
        {
            name: 'selectedCaseStudies',
            type: 'relationship',
            relationTo: 'case-studies',
            hasMany: true,
            minRows: 3
        }
    ]
}