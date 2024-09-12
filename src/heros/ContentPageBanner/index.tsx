import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'

export const ContentPageBanner: React.FC<Page['hero']> = ({ links, media, richText }) => {
  return (
    <div className="w-full content-page-banner">
      <div className="container mx-auto h-full">
        <div className="flex gap-8 justify-center flex-col w-full md:w-3/5 h-full">
          {richText && <RichText className="flex gap-4 flex-col" content={richText} enableGutter={false} />}
          {Array.isArray(links) && links.length > 0 && (
            <ul className="flex gap-4">
              {links.map(({ link }, i) => {
                return (
                  <li className="list-none" key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}
