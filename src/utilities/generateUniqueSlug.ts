import { getPayloadHMR } from "@payloadcms/next/utilities"
import configPromise from '@payload-config'
import { CollectionSlug } from "payload"

export const generateUniqueSlug = async (baseSlug: string, collection: CollectionSlug = 'pages'): Promise<string> => {
    const payload = await getPayloadHMR({ config: configPromise })

    let slug = baseSlug
    let counter = 1
    let isUnique = false

    while (!isUnique) {
        const existingDoc = await payload.find({
            collection: collection || 'pages',
            where: { slug: { equals: slug } },
        })

        if (existingDoc.totalDocs === 0) {
            isUnique = true
        } else {
            slug = `${baseSlug}-copy-${counter}`
            counter++
        }
    }

    return slug
}