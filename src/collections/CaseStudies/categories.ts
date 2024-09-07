import { slugField } from "@/fields/slug";
import { CollectionConfig } from "payload";

export const CaseStudyCategories: CollectionConfig = {
    slug: 'case-study-categories',
    admin: {
        useAsTitle: 'name',
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        ...slugField('name'),
    ]
    
}