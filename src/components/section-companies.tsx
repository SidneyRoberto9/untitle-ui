import Image from 'next/image';

import GridContainer from '@/components/grid-container';

const SectionCompanies = () => {
  return (
    <section className="pt-24">
      <GridContainer className="flex flex-col items-center justify-center">
        <p className="mb-8 text-center font-medium text-gray-600">
          Join 4,000+ startups using Untitled UI
        </p>
        <div className="grid grid-cols-2 items-center justify-between gap-x-10 gap-y-4 lg:flex lg:w-full lg:gap-x-0 lg:gap-y-0">
          <Image src="/layers.svg" width={146} height={48} alt="layers" />
          <Image src="/sisyphus.svg" width={169} height={48} alt="sisyphus" />
          <Image src="/circooles.svg" width={183} height={44} alt="circooles" />
          <Image src="/catalog.svg" width={160} height={48} alt="catalog" />
          <Image src="/quotient.svg" width={187} height={44} alt="quotient" />
          <Image src="/hourglass.svg" width={187} height={48} alt="hourglass" />
        </div>
        <hr className="mt-16 w-full border-gray-200 lg:mt-24" />
      </GridContainer>
    </section>
  )
}

export default SectionCompanies
