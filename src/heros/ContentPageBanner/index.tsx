import React from 'react'

import type { Page } from '@/payload-types'

import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { cn } from '@/utilities/cn'
import { Media } from '@/components/Media'

export const ContentPageBanner: React.FC<Page['hero']> = ({ media, topHeaderText }) => {
  return (
    <div className="hero-wrapper relative">
      <div className="container mx-auto">
        <div className="page-banner">
          <div className="grid grid-cols-2">
            <h1 className={cn('font-semibold col-span-2 text-white text-center')}>{topHeaderText}</h1>
          </div>
        </div>
      </div>

      {media && typeof media === 'object' && (
          <React.Fragment>
            <Media fill imgClassName="-z-10 object-cover" priority resource={media} />
            <div className="absolute pointer-events-none left-0 bottom-0 w-full h-1/2 bg-gradient-to-t from-black to-transparent" />
          </React.Fragment>
        )}
    </div>
  )
}
