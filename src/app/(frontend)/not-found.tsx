import Link from 'next/link';
import { Button } from '@/components/ui/button';
import RadialGradiant from '@/components/RadialGradiant';

export default function NotFound() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="absolute inset-0 -z-10 blur-[100px]" aria-hidden="true">
        <RadialGradiant size={400} />
      </div>

      <div className="absolute right-0 bottom-0 -z-10 blur-[100px]" aria-hidden="true">
        <RadialGradiant size={400} />
      </div>

      <div className="container min-w-full min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl w-full">
          <div className="text-center md:text-left">
            <span className="text-lg">404</span>
            <h1 className="mt-2 text-4xl">Page not found</h1>
            <p className="mt-4">
              Oops! It looks like you&apos;ve encountered a digital detour. Our mission is to guide you through
              technology&apos;s twists and turns, but it seems we hit a bump in the road. We apologize for the inconvenience.
            </p>
            <div className="mt-6 space-x-4">
              <Button asChild variant="default">
                <Link href="javascript:history.back()">Go back</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/">Go to homepage</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}