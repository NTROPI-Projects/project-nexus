import Link from 'next/link';
import { Button } from '@/components/ui/button';
import  RadialGradiant from '@/components/RadialGradiant';

export default function NotFound() {
  return (
    <div className="container min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-center md:text-left">
          <span className="text-lg">404</span>
          <h1 className="mt-2 text-4xl">Page not found</h1>
          <p className="mt-4">
            Oops! It looks like you've encountered a digital detour. Our mission is to guide you through
            technology's twists and turns, but it seems we hit a bump in the road. Return to our
            homepage and explore how we can help with your technology needs.
          </p>
          <Button asChild variant="default" className="mt-6">
            <Link href="/">Go home</Link>
          </Button>
        </div>
      </div>

      <div className="absolute inset-0 -z-10 blur-[100px]" aria-hidden="true">
        <RadialGradiant size={400} />
      </div>

      <div className="absolute right-0 bottom-0 -z-10 blur-[100px]" aria-hidden="true">
        <RadialGradiant size={400} />
      </div>

    </div>
  )
}