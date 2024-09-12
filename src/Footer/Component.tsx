import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'

import type { Footer } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import { cn } from '@/utilities/cn'
import { FacebookIcon } from '@/components/Icons/facebook'
import { InstagramIcon } from '@/components/Icons/instagram'
import { LinkedinIcon } from '@/components/Icons/linkedin'

const Icons = {
  "facebook": FacebookIcon,
  "instagram": InstagramIcon,
  "linkedin": LinkedinIcon
}

export async function Footer() {
  const footer: Footer = await getCachedGlobal('footer', 1)()

  const navItems = footer?.navItems || [];
  const currentYear = new Date().getFullYear().toString();
  const copyright = footer.copyright?.replace('{{year}}', currentYear);

  const socialLinks = footer?.socialLinks || [];

  return (
    <footer className="text-white">
      <div className="container py-8 gap-8 flex flex-col md:flex-row md:justify-between items-start">
        <Link className="flex items-center" href="/">
          <picture>
            <img
              alt="Payload Logo"
              className="max-w-[6rem] invert-0"
              src="https://raw.githubusercontent.com/payloadcms/payload/main/packages/payload/src/admin/assets/images/payload-logo-light.svg"
            />
          </picture>
        </Link>

        <div className="flex flex-col md:items-end gap-5">
          <div className="flex flex-col items-start md:flex-row gap-4 md:items-center">
            {navItems.map(({ link }, i) => {
              return <CMSLink className="text-white" key={i} {...link} />
            })}
          </div>
          <div className="flex gap-2">
            {socialLinks.map((item) => {
              return (
                <Link href="/">
                  <span className={cn(`cuspora_${item}`)}>{Icons.item}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="container flex md:flex-row flex-col md:gap-0 gap-4 justify-between border-t py-10">
        <div>
          {copyright}
        </div>

        <div>
          Designed and Developed by Cuspora
        </div>
      </div>
    </footer>
  )
}


