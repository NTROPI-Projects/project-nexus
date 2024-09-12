import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import React, { cache } from 'react'
import { homeStatic } from '@/endpoints/seed/home-static'

import type { Page, Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const payload = await getPayloadHMR({ config: configPromise })
  const pages = await payload.find({
    collection: 'pages',
    draft: false,
    limit: 1000,
    overrideAccess: false,
  })

  return pages.docs
    ?.filter((doc) => {
      return doc.slug !== 'home'
    })
    .map(({ slug }) => slug)
}

export default async function Page({ params: { slug } }) {
  const url = '/' + slug
  let page: PageType | null

  page = await queryPageBySlug(slug);

  // Remove this code once your website is seeded
  if (!page) {
    page = homeStatic
  }

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      {/* Allows redirects for valid pages too */}
      <PayloadRedirects disableNotFound url={url} />

      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

export async function generateMetadata({ params: { slug } }): Promise<Metadata> {
  const page = await queryPageBySlug(slug);

  if (!page) return notFound();

  return generateMeta({ doc: page })
}
 
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