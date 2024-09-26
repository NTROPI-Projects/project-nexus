import { CaseStudy, CaseStudy as CaseStudyPageType } from '@/payload-types'
import { getPayloadHMR } from '@payloadcms/next/utilities'
import { draftMode } from 'next/headers'
import { notFound } from 'next/navigation'
import { cache } from 'react'
import configPromise from '@payload-config'
import { RenderHero } from '@/heros/RenderHero'
import { RenderBlocks } from '@/blocks/RenderBlocks'

export default async function SingleCaseStudyPage({ params: { slug } }) {
  if (slug === 'tag') notFound()
  let page: CaseStudyPageType | null

  page = await queryCaseStudyPageBySlug(slug)

  if (!page) return notFound()

  const { hero, layout } = page

  return (
    <article>
      <RenderHero {...hero} />
      <RenderBlocks blocks={layout} />
    </article>
  )
}

const queryCaseStudyPageBySlug = cache(async (slug?: string[]): Promise<CaseStudy | null> => {
  const { isEnabled: draft } = draftMode()

  const payload = await getPayloadHMR({ config: configPromise })

  const result = await payload.find({
    collection: 'case-studies',
    draft,
    limit: 1,
    overrideAccess: true,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})
