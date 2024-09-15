import { Media } from "@/components/Media";
import { Page } from "@/payload-types";
import Link from "next/link";
import React from "react";

type Props = Extract<Page['layout'][0], { blockType: 'servicesListBlock' }>

export const servicesListBlock: React.FC<Props> = ({ sectionTitle, selectedServices }) => {
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedServices && selectedServices.map((service) => (
            typeof service === 'object' && (
              <Link className="service-card relative" key={service.id} href={`/services/${service.slug}`}>
                <div className="service-card__content z-10">
                  <div className="service-card__header">
                    {typeof service.icon === 'object' && (
                      <Media className="service-card__icon" priority resource={service.icon} />
                    )}
                  </div>
                  <div className="service-card__body">
                    <h4 className="text-white tracking-normal">{service.title}</h4>
                    <p className="text-white">{service.description}</p>

                    <div className="service-card__footer">
                      <button className="service-card__button">Read More</button>
                    </div>
                  </div>
                </div>

                {typeof service.hero.media === 'object' && (
                  <React.Fragment>
                    <Media fill className="service-card__background" imgClassName="object-cover" priority resource={service.hero.media} />
                    <div className="absolute pointer-events-none left-0 bottom-0 w-full h-full bg-gradient-to-t from-[#0A2540] to-transparent" />
                  </React.Fragment>
                )}
              </Link>
            )
          ))}
        </div>
      </div>
    </div>
  )
}
