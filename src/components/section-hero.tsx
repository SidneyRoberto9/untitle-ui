import Image from "next/image"

import CtaArea from "@/components/cta-area"
import GridContainer from "@/components/grid-container"
import TagFeature from "@/components/tag-feature"

const SectionHero = () => {
  return (
    <section>
      <GridContainer>
        <div className="pt-24 text-center">
          <TagFeature />
          <h1 className="mb-6 mt-4 text-6xl font-semibold text-gray-900">
            Beautiful analytics to grow smarter
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl/6 text-gray-600">
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
        />
        <hr className="border-gray-200" />
      </GridContainer>
    </section>
  )
}

export default SectionHero
