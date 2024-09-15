import { ExternalLinkIcon } from "@/components/Icons/externalLink";
import { Media } from "@/components/Media";
import { Page } from "@/payload-types";
import { cn } from "@/utilities/cn";
import Link from "next/link";
import React from "react";

type Props = Extract<Page['layout'][0], { blockType: 'workShowcaseBlock' }>

export const WorkShowcaseBlock: React.FC<Props> = ({ sectionTitle, selectedCaseStudies }) => {
    return (
        <div className="relative">
            <div className="container mx-auto">
                <div className="lg:w-2/3 mx-auto">
                    <h2 className="text-center text-balance mb-10 lg:mb-16">
                        {sectionTitle}
                    </h2>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCaseStudies && selectedCaseStudies.map((work, index) => (
                        typeof work === 'object' && (
                            <Link
                                className={cn(
                                    "work-card p-10 relative overflow-hidden flex flex-col group rounded-[9.6px]",
                                    (index + 1) % 3 === 0 ? 'md:col-span-2 md:aspect-video aspect-square' : 'aspect-square',
                                )}
                                key={work.id}
                                href={`/case-studies/${work.slug}`}
                            >
                                <div className="work-card__content flex justify-between items-end h-full z-10 gap-4">
                                    <h3 className="text-white m-0 leading-none">{work.title}</h3>
                                    <span className="flex gap-4 underline underline-offset-4 text-white text-nowrap">
                                        {(index + 1) % 3 === 0 && <span className="hidden md:block">View Project</span>}
                                        <ExternalLinkIcon color="white" />
                                    </span>
                                </div>

                                {work.hero.media && typeof work.hero.media !== 'string' && (
                                    <div className="absolute inset-0 overflow-hidden">
                                        <Media
                                            fill
                                            imgClassName="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-110"
                                            resource={work.hero.media}
                                        />
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540] to-transparent pointer-events-none" />
                            </Link>
                        )
                    ))}
                </div>
            </div>
        </div>
    )
}