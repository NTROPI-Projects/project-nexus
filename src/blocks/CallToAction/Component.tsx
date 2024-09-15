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
> = ({ links, richText }) => {
  return (
    <div className="cta-banner container mx-auto">
      <div className="py-12">
        <div className='cta-content gap-10 flex flex-col justify-center items-center'>
          {richText && <RichText className="text-center flex flex-col gap-3 mb-0" content={richText} enableGutter={false} />}
          {(links || []).map(({ link }, i) => {
            return <CMSLink key={i} className='text-black bg-white hover:bg-black hover:text-white' size="lg" {...link} />
          })}
        </div>
      </div>
    </div>
  );
}
