import React from 'react'

import type { Page } from '@/payload-types'

import RichText from '@/components/RichText'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/cn'
import { Media } from '@/components/Media'

type Props = Extract<Page['layout'][0], { blockType: 'cta' }>

export const CallToActionBlock: React.FC<
  Props & {
    id?: string
  }
> = ({ links, richText, backgroundImage }) => {
  return (
    <div className="container">
      <div className="relative rounded overflow-hidden">
        {backgroundImage && typeof backgroundImage === 'object' && (
          <div className="absolute inset-0">
            <Media fill imgClassName="object-cover w-full h-full" priority resource={backgroundImage} />
          </div>
        )}
        <div className={cn('relative z-10 p-10 lg:p-24 flex flex-col gap-8 md:flex-row md:justify-between md:items-center')}>
          <div className="max-w-[40rem] flex items-start flex-col gap-8">
            {richText && <RichText className="mb-0 text-white" content={richText} enableGutter={false} />}

            {(links || []).map(({ link }, i) => {
              return <CMSLink key={i} className='text-black bg-white' size="lg" {...link} />
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
