import { notFound } from 'next/navigation'
import PageTemplate, { generateMetadata } from './[...slug]/page'
import { PayloadRedirects } from '@/components/PayloadRedirects'
import { queryPageBySlug } from '@/utilities/getPageBySlug'

export default async function HomePage() {
  const homePage = await queryPageBySlug(['home'])
  
  if (!homePage) {
    return <PayloadRedirects url="/" />
  }

  return <PageTemplate params={{ slug: ['home'] }} />
}

export { generateMetadata }
