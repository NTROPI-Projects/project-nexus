import { authenticated } from "@/access/authenticated";
import { authenticatedOrPublished } from "@/access/authenticatedOrPublished";
import { slugField } from "@/fields/slug";
import { generatePreviewPath } from "@/utilities/generatePreviewPath";
import { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
    slug: 'services',
    access: {
        create: authenticated,
        delete: authenticated,
        read: authenticatedOrPublished,
        update: authenticated,
    },
    admin: {
        useAsTitle: 'title',
        livePreview: {
            url: ({ data }) => {
                const path = generatePreviewPath({
                    path: `/${typeof data?.slug === 'string' ? data.slug : ''}`,
                })
                return `${process.env.NEXT_PUBLIC_SERVER_URL}${path}`
            },
        },
        preview: (doc) =>
            generatePreviewPath({ path: `/${typeof doc?.slug === 'string' ? doc.slug : ''}` }),
        defaultColumns: ['title', 'slug', 'updatedAt'],
    },
    fields: [
        ...slugField(),
    ],
    versions: {
        drafts: {
            autosave: {
                interval: 100,
            },
        },
        maxPerDoc: 50,
    }
}