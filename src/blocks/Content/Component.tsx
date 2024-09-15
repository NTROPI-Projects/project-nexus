import { cn } from 'src/utilities/cn'
import React from 'react'
import RichText from '@/components/RichText'

import type { Page } from '@/payload-types'

import { CMSLink } from '../../components/Link'
import { Media } from '@/components/Media'

type Props = Extract<Page['layout'][0], { blockType: 'content' }>

type ColSize = 'full' | 'half' | 'oneThird' | 'twoThirds' | 'media';

export const ContentBlock: React.FC<Props & { id?: string }> = (props) => {
  const { columns } = props;

  const colsSpanClasses: Record<ColSize, string> = {
    full: 'col-span-4 md:col-span-12',
    half: 'col-span-4 md:col-span-6',
    oneThird: 'col-span-4 md:col-span-4',
    twoThirds: 'col-span-4 md:col-span-8',
    media: 'col-span-4 md:col-span-12',
  };

  let hasMedia = columns?.some(({size}) => size === 'media');

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-4 md:grid-cols-12 gap-y-8 gap-x-4 md:gap-x-8">
        {columns &&
          columns.length > 0 &&
          columns.map((col, index) => {
            const { enableLink, link, richText, size = 'full', media } = col;

            if (size === 'media' && media) {
              return (
                <div
                  className={cn(
                    colsSpanClasses['half'],
                    'h-full rounded-[9.6px] overflow-hidden'
                  )}
                  key={index}
                >
                  <div className="h-full rounded-[9.6px] overflow-hidden">
                    <Media className="h-full" resource={media} imgClassName="object-cover w-full h-full" />
                  </div>
                </div>
              );
            }

            return (
              <div className={colsSpanClasses[size ?? 'full']} key={index}>
                {richText && (
                  <RichText
                    className={cn('h-full flex flex-col gap-4', { 'justify-center': hasMedia })}
                    content={richText}
                  />
                )}
                {enableLink && <CMSLink {...link} />}
              </div>
            );
          })}
      </div>
    </div>
  );
};