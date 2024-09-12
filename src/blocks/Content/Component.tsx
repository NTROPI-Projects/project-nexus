import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { Page } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

export const ContentBlock: React.FC<
  {
    id?: string
  } & Props
> = (props) => {
  const { columns } = props

  const colsSpanClasses = {
    full: '12',
    half: '6',
    oneThird: '4',
    twoThirds: '8',
    media: '12',
  }

  // Calculate total columns used
  const usedColumns = columns?.reduce((acc, col) => {
    if (col.size === 'media') return acc
    return acc + parseInt(colsSpanClasses[col.size!])
  }, 0) || 0

  // Calculate remaining columns for media
  const remainingColumns = 12 - (usedColumns % 12)

  return (
    <div className="container">
      <div className="grid grid-cols-4 lg:grid-cols-12 gap-y-8 gap-x-16">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size, media } = col

            if (size === 'media' && media) {
              return (
                <div
                  className={`col-span-4 lg:col-span-${remainingColumns}`}
                  key={index}
                >
                  <Media resource={media} />
                </div>
              )
            }

            return (
              <div
                className={cn(`col-span-4 lg:col-span-${colsSpanClasses[size!]}`, {
                  'md:col-span-2': size !== 'full',
                })}
                key={index}
              >
                {richText && <RichText className='flex flex-col gap-4' content={richText} />}
                {enableLink && <CMSLink {...link} />}
              </div>
            )
          })}
      </div>
    </div>
  )
}