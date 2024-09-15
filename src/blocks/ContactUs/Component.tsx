'use client'

import { Page } from "@/payload-types"
import { FormBlock, FormBlockType } from "../Form/Component"

// import type { Form as FormType } from '@payloadcms/plugin-form-builder/types';

// import { useRouter } from 'next/navigation';
// import React, { useCallback, useState } from 'react';

type Props = Extract<Page['layout'][0], { blockType: 'contactUsBlock' }>

export const ContactUsBlock: React.FC<Props> = ({ form, coordinates, email, location, phone, socialLinks, id }) => {

    const isValidForm = (form: any): form is FormBlockType['form'] => {
        return typeof form === 'object' && form !== null && 'fields' in form
    }

    return (
        <div className="container mx-auto" key={id}>
            <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
                <div className="lg:order-last">
                    { isValidForm(form) && <FormBlock form={form} /> }
                </div>

                <div>
                    <div>
                        <h2 className="text-xl font-semibold text-neutral-950">{phone?.sectionTitle}</h2>
                        <span className="mt-6 block font-semibold text-neutral-950">{phone?.title}</span>
                        <div className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">{phone?.phone}</div>
                    </div>
                    <div className="mt-8 pt-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <h2 className="text-xl font-semibold text-neutral-950">{email?.sectionTitle}</h2>
                        <span className="mt-6 block font-semibold text-neutral-950">{email?.title}</span>
                        <div className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">{email?.email}</div>
                    </div>
                    <div className="mt-8 pt-8 relative before:absolute after:absolute before:bg-neutral-950 after:bg-neutral-950/10 before:left-0 before:top-0 before:h-px before:w-6 after:left-8 after:right-0 after:top-0 after:h-px">
                        <h2 className="text-xl font-semibold text-neutral-950">{location?.sectionTitle}</h2>
                        <span className="mt-6 block font-semibold text-neutral-950">{location?.title}</span>
                        <div className="mt-2 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">{location?.address}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}