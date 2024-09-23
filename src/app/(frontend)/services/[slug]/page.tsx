import type { Service, Service as ServicePageType } from "@/payload-types";
import configPromise from '@payload-config'
import { draftMode } from "next/headers";
import { getPayloadHMR } from "@payloadcms/next/utilities";
import { cache } from "react";
import { notFound } from "next/navigation";

export default async function SingleServicesPage({ params: { slug } }) {
    const url = '/' + slug
    let page: ServicePageType | null

    page = await queryServicePageBySlug(slug);

    if(!page) return notFound();

    return (
        <h1>{slug}</h1>
    )
}


const queryServicePageBySlug = cache(async (
    slug?: string[]
  ): Promise<Service | null> => {  
    const { isEnabled: draft } = draftMode();
  
    const payload = await getPayloadHMR({ config: configPromise });
  
    const result = await payload.find({
      collection: 'services',
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