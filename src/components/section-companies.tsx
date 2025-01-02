import Image from "next/image"

import GridContainer from "@/components/grid-container"

const SectionCompanies = () => {
  return (
    <section className="pt-24">
      <GridContainer>
        <p className="mb-8 text-center font-medium text-gray-600">
          Join 4,000+ startups using Untitled UI
        </p>
        <div className="flex items-center justify-between">
          <Image src="/layers.svg" width={146} height={48} alt="layers" />
          <Image src="/sisyphus.svg" width={169} height={48} alt="sisyphus" />
          <Image src="/circooles.svg" width={183} height={44} alt="circooles" />
          <Image src="/catalog.svg" width={160} height={48} alt="catalog" />
          <Image src="/quotient.svg" width={187} height={44} alt="quotient" />
        </div>
        <hr className="mt-24 border-gray-200" />
      </GridContainer>
    </section>
  )
}

export default SectionCompanies
