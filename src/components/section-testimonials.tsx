import Image from "next/image"

import GridContainer from "@/components/grid-container"

const SectionTestimonials = () => {
  return (
    <div className="bg-gray-50 py-24">
      <GridContainer className="text-center">
        <Image
          src="/sisyphus.svg"
          width={140}
          height={40}
          alt="sisyphus"
          className="mx-auto"
        />
        <h2 className="-tracking-tighter-[0.96px] my-8 text-5xl/tight font-medium text-gray-900">
          We’ve been using Untitled to kick start every new project and can’t
          imagine working without it.
        </h2>

        <div>
          <Image
            src="/avatar-02.jpg"
            width={64}
            height={64}
            alt="Avatar"
            className="mx-auto mb-4"
          />
          <span className="block text-lg font-medium text-gray-900">
            Candice Wu
          </span>
          <small className="tex-base block text-gray-600">
            Product Manager, Sisyphus
          </small>
        </div>
      </GridContainer>
    </div>
  )
}

export default SectionTestimonials
