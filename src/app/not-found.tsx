import { FiArrowLeft } from 'react-icons/fi';
import Link from 'next/link';
import Image from 'next/image';

import GridContainer from '@/components/grid-container';

export default function Page() {
  return (
    <div className="py-16 lg:mb-24">
      <GridContainer>
        <div className="flex flex-col items-center justify-center gap-16 lg:flex-row lg:gap-8">
          <div>
            <span className="text-sm font-semibold text-brand-700">
              404 error
            </span>
            <h1 className="mt-3 text-3xl font-semibold text-gray-900 lg:text-4xl">
              Page not found
            </h1>
            <p className="mt-4 text-lg/relaxed text-gray-600 lg:mt-3 lg:text-xl/6">
              Sorry, the page you are looking for doesn't exist.Here are some
              helpful links:
            </p>

            <div className="mt-16 flex flex-col items-start justify-start gap-3 lg:mt-8 lg:flex-row">
              <Link
                href="/"
                className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-5 py-3 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100 lg:w-auto"
              >
                <FiArrowLeft size={24} className="text-gray-700" />
                Go Back
              </Link>
              <Link
                href="/"
                className="flex w-full items-center justify-center rounded-lg bg-brand-600 px-5 py-3 text-lg font-semibold text-white transition-colors hover:bg-brand-700 lg:w-auto"
              >
                Take me home
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="/not-found.png"
              width={592}
              height={720}
              alt="Not Found Mountain"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </GridContainer>
    </div>
  )
}
