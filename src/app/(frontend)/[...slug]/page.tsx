import type { Metadata } from 'next'

import { PayloadRedirects } from '@/components/PayloadRedirects'
import configPromise from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import React from 'react'

import type { Page, Page as PageType } from '@/payload-types'

import { RenderBlocks } from '@/blocks/RenderBlocks'
import { RenderHero } from '@/heros/RenderHero'
import { generateMeta } from '@/utilities/generateMeta'
import { notFound } from 'next/navigation'
import { queryPageBySlug } from '@/utilities/getPageBySlug'

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
  const url = '/' + (Array.isArray(slug) ? slug.join('/') : slug)
  let page: PageType | null

  page = await queryPageBySlug(slug);

  if (!page) {
    return <PayloadRedirects url={url} />
  }

  const { hero, layout } = page

  return (
    <article>
      <PayloadRedirects url={url} disableNotFound />
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