import GridContainer from '@/components/grid-container';

const SectionTrial = () => {
  return (
    <div className="bg-gray-50 py-16 lg:py-24">
      <GridContainer className="text-center">
        <h2 className="mb-5 text-3xl font-semibold text-gray-900 lg:text-4xl">
          Start your free trial
        </h2>
        <p className="mb-10 text-lg/relaxed text-gray-600 lg:text-xl/6">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex w-full flex-col justify-center gap-3 lg:w-auto lg:flex-row">
          <button className="rounded-lg border border-gray-300 bg-white px-5 py-3 font-semibold leading-normal text-gray-700 transition-colors hover:bg-gray-100">
            Learn more
          </button>
          <button className="rounded-lg bg-brand-600 px-5 py-3 font-semibold leading-normal text-white transition-colors hover:bg-brand-700">
            Get started
          </button>
        </div>
      </GridContainer>
    </div>
  )
}

export default SectionTrial
