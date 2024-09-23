// @ts-nocheck

'use client'

import { useWindowSize, useLockBodyScroll } from "react-use";

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/Logo/Logo'
import { CMSLink } from '@/components/Link'
import styles from './styles.module.scss';
import { AnimatePresence, delay, motion } from "framer-motion"
import type { Header, Header as HeaderType } from '@/payload-types'
import { cn } from "@/utilities/cn";

type NavbarT = Pick<Header, 'navItems'>

const DesktopNavbar: React.FC<NavbarT> = ({ navItems }) => {
  const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0;
  const defaultItems = hasNavItems && navItems.filter((item) => item.appearance === 'default').map((item) => item);
  const ctaItems = hasNavItems && navItems.filter((item) => item.appearance === 'call-to-action').map((item) => item);

  return (
    <header>
      <div className="container relative py-8 flex justify-between">
        <nav className="flex items-center justify-between w-full">
          <Link href="/">
            <Logo />
          </Link>

          <ul className={cn("flex flex-nowrap items-center justify-start list-none m-0 p-0 gap-3", styles.navbar)}>
            {
              defaultItems && defaultItems.map((item, i) => (
                <CMSLink key={i} {...item.link} appearance={'link'} className={styles.navDefault} />
              ))
            }
          </ul>

          <ul>
            {ctaItems && ctaItems.map((item, i) => (
              <CMSLink key={i} {...item.link} appearance="link" className={styles.navButton} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

const MobileNavbar: React.FC<NavbarT> = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  useLockBodyScroll(isOpen);
  const hasNavItems = navItems && Array.isArray(navItems) && navItems.length > 0;
  const mobileMenuItems = hasNavItems && navItems.map((item) => item);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const opacityVars = {
    initial: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      opacity: 1,
      transition: {
        delay: 0.5,
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  const bottomVars = {
    initial: {
      y: "30vh",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.75,
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  }

  return (
    <header>
      <div className="container relative flex justify-between">
        <div className={cn("flex items-center justify-between w-full", styles.navMobileWrapper)}>
          <Link href="/"><Logo /></Link>
          <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Menu</div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className={cn("fixed", styles.navMobile)}
          >
            <div className={cn("absolute", styles.navMobileTop)}>
              <div className="container">
                <div className="overflow-hidden">
                  <div className={cn("flex justify-between overflow-hidden", styles.navMobileWrapper)}>
                    <motion.div
                      variants={opacityVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      <Logo />
                    </motion.div>

                    <motion.div
                      variants={opacityVars}
                      initial="initial"
                      animate="open"
                      exit="initial"
                    >
                      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>Close</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="container h-full"
            >
              <div className={cn("relative flex justify-center flex-col items-center h-full")}>
                {mobileMenuItems.map((item, i) => (
                  <div key={i} className="overflow-hidden">
                    <MobileNavLink link={item.link} />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

type NavLink = NonNullable<NavbarT['navItems']>[number];

const MobileNavLink: React.FC<NavLink> = ({ link }) => {
  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        ease: [0, 0.55, 0.45, 1],
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div variants={mobileLinkVars} className={cn(styles.navMobileLink)}>
      <Link href={link.url ?? ''}>
        {link.label}
      </Link>
    </motion.div>
  )
}

export const Navbar: React.FC<NavbarT> = ({ navItems }) => {
  const size = useWindowSize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  if (!isClient) return null;

  return size.width > 768 ? <DesktopNavbar navItems={navItems} /> : <MobileNavbar navItems={navItems} />
}

