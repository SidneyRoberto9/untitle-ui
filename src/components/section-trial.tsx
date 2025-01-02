import GridContainer from '@/components/grid-container';

const SectionTrial = () => {
  return (
    <div className="bg-gray-50 py-24">
      <GridContainer className="text-center">
        <h2 className="mb-5 text-4xl font-semibold text-gray-900">
          Start your free trial
        </h2>
        <p className="mb-10 text-xl/6 text-gray-600">
          Join over 4,000+ startups already growing with Untitled.
        </p>
        <div className="flex justify-center gap-3">
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
