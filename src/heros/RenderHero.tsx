import React from 'react'

import type { Page } from '@/payload-types'

import { LandingPageBanner } from '@/heros/LandingPageBanner'
import { ContentPageBanner } from '@/heros/ContentPageBanner'

const heroes = {
  landingPageBanner: LandingPageBanner,
  contentPageBanner: ContentPageBanner,
}

export const RenderHero: React.FC<Page['hero']> = (props) => {
  const { type } = props || {}

  if (!type || type === 'none') return null

  const HeroToRender = heroes[type]

  if (!HeroToRender) return null

  return <HeroToRender {...props} />
}
