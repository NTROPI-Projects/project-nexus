import { Page } from "@/payload-types";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { draftMode } from "next/headers";
import { cache } from "react";
import configPromise from '@payload-config'

export const queryPageBySlug = cache(async (
    incomingSlugSegments?: string[]
  ): Promise<Page | null> => {
    const slugSegments = incomingSlugSegments || ['home'];
    const slug = slugSegments.at(-1);
  
    const { isEnabled: draft } = draftMode();
  
    const payload = await getPayloadHMR({ config: configPromise });
  
    const result = await payload.find({
      collection: 'pages',
      draft,
      limit: 1,
      overrideAccess: true,
      where: {
        slug: {
          equals: slug
        }
      }
    })
  
    return result.docs?.[0] || null
  })