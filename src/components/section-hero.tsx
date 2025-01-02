import Image from 'next/image';

import TagFeature from '@/components/tag-feature';
import GridContainer from '@/components/grid-container';
import CtaArea from '@/components/cta-area';

const SectionHero = () => {
  return (
    <section>
      <GridContainer>
        <div className="py-16 text-center lg:pb-0 lg:pt-24">
          <TagFeature />
          <h1 className="mb-6 mt-4 text-4xl font-semibold text-gray-900 lg:text-6xl">
            Beautiful analytics to grow smarter
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-lg/relaxed text-gray-600 lg:text-xl/6">
            Powerful, self-serve product and growth analytics to help you
            convert,engage, and retain more users, Trusted by over 4,000
            startups.
          </p>
          <CtaArea />
        </div>

        <Image
          src="/macbook.svg"
          width={1216}
          height={480}
          alt="Mockup MacBook"
          className="mx-auto hidden lg:block"
        />
        <Image
          src="/macbook-mobile.png"
          width={343}
          height={200}
          alt="Mockup MacBook Mobile"
          className="mx-auto block lg:hidden"
        />
        <hr className="hidden border-gray-200 lg:block" />
      </GridContainer>
    </section>
  )
}

export default SectionHero
