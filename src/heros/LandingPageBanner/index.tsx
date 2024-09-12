'use client'

import { useHeaderTheme } from '@/providers/HeaderTheme'
import React, { useEffect } from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import { Media } from '@/components/Media'
import RichText from '@/components/RichText'

export const LandingPageBanner: React.FC<Page['hero']> = ({ links, media, richText }) => {
  const { setHeaderTheme } = useHeaderTheme()

  useEffect(() => {
    setHeaderTheme('dark')
  })

  return (
    <div className="w-full landing-page-banner">
      <div className="container mx-auto h-full">
        <div className="flex gap-4 justify-center flex-col w-full md:w-1/2 h-full">
          {richText && <RichText className="flex gap-4 flex-col" content={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4 p-0">
              {links.map(({ link }, i) => {
                return (
                  <li className="list-none" key={i}>
                    <CMSLink {...link} size={'lg'} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>

      {/* <div className="min-h-[80vh] select-none">
        {media && typeof media === 'object' && (
          <React.Fragment>
            <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
            <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
          </React.Fragment>
        )}
      </div> */}
    </div >
  )
}
