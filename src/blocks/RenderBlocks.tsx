import { cn } from 'src/utilities/cn'
import React, { Fragment } from 'react'

import type { Page } from '@/payload-types'

import { ArchiveBlock } from '@/blocks/ArchiveBlock/Component'
import { CallToActionBlock } from '@/blocks/CallToAction/Component'
import { ContentBlock } from '@/blocks/Content/Component'
import { FormBlock } from '@/blocks/Form/Component'
import { MediaBlock } from '@/blocks/MediaBlock/Component'
import { ContactUsBlock } from './ContactUs/Component'
import { servicesListBlock } from './ServicesListBlock/Component'
import { WorkShowcaseBlock } from './WorkShowcaseBlock/Component'

const blockComponents = {
  archive: ArchiveBlock,
  content: ContentBlock,
  cta: CallToActionBlock,
  formBlock: FormBlock,
  mediaBlock: MediaBlock,
  contactUsBlock: ContactUsBlock,
  servicesListBlock: servicesListBlock,
  workShowcaseBlock: WorkShowcaseBlock,
}

export const RenderBlocks: React.FC<{
  blocks: Page['layout'][0][]
}> = (props) => {
  const { blocks } = props;

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0;

  if (hasBlocks) {
    let currentBackgroundColor: string | undefined | null;
    let currentSection: React.ReactNode[] = [];
    const sections: React.ReactNode[] = [];

    blocks.forEach((block, index) => {
      const { blockType, backgroundColor } = block;

      if (backgroundColor !== currentBackgroundColor) {
        if (currentSection.length > 0) {
          sections.push(
            <section
              key={`section-${sections.length}`}
              className={currentBackgroundColor ? `section-bg-${currentBackgroundColor}` : undefined
              }
            >
              {currentSection}
            </section>
          );
          currentSection = [];
        }
        currentBackgroundColor = backgroundColor;
      }

      if (blockType && blockType in blockComponents) {
        const Block = blockComponents[blockType];

        if (Block) {
          currentSection.push(
            <div key={index}>
              {/* @ts-expect-error */}
              <Block {...block} />
            </div>
          );
        }
      }
    });

    // Add the last section
    if (currentSection.length > 0) {
      sections.push(
        <section
          key={`section-${sections.length}`}
          className={currentBackgroundColor ? `section-bg-${currentBackgroundColor}` : undefined}
        >
          {currentSection}
        </section>
      );
    }

    return <Fragment>{sections}</Fragment>;
  }

  return null;
};
