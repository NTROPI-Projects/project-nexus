'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/cn'

export const LandingPageBanner: React.FC<Page['hero']> = ({ media, topHeaderText, bottomHeaderText, content }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="hero-wrapper">
      <div className="container mx-auto">
        <div className="hero-banner">
          <div className="grid grid-cols-2">
            <h1 className={cn('font-semibold col-span-2')}>{topHeaderText}</h1>
            {media && typeof media === 'object' && (
              <div className="relative h-96 my-5 lg:my-10 col-span-2 rounded-[9.6px] overflow-hidden">
                <Media fill imgClassName='object-cover object-top' priority resource={media} />
              </div>
            )}
            <h1 className={cn('font-semibold lg:text-right col-span-2')}>{bottomHeaderText}</h1>
            <p className="mt-5 font-poppins col-span-2 lg:col-span-1 lg:col-start-2">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}