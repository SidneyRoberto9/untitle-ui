import Image from 'next/image';

import ItemLaunch from '@/components/item-launch';
import GridContainer from '@/components/grid-container';

const itensLaunch = [
  {
    number: "4,000+",
    title: "Global customers",
    text: "We’ve helped over 4,000 amazing global companies.",
  },
  {
    number: "600%",
    title: "Return on investment",
    text: "Our customers have reported an average of ~600% ROI.",
  },
  {
    number: "10k",
    title: "Global downloads",
    text: "Our app has been downloaded over 10k times.",
  },
  {
    number: "200+",
    title: "5-star reviews",
    text: "We’re proud of our 5-star rating with over 200 reviews.",
  },
]

const SectionLaunch = () => {
  return (
    <div className="py-16 lg:py-24">
      <GridContainer>
        <div className="mb-16 w-full max-w-3xl">
          <span className="mb-3 block font-semibold text-brand-700">
            Launch faster
          </span>
          <h2 className="mb-5 text-3xl font-semibold -tracking-[0.045rem] text-gray-900 lg:text-4xl">
            Build something great
          </h2>
          <p className="text-lg/relaxed text-gray-600 lg:text-xl/6">
            We’ve done all the heavy lifting so you don´t have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>

        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
          <div className="grid w-full max-w-xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:gap-y-16">
            {itensLaunch.map((item, index) => (
              <ItemLaunch key={index} {...item} />
            ))}
          </div>
          <div>
            <Image
              src="/img-launch.jpg"
              width={560}
              height={560}
              alt="Image Launch"
              className="max-h-60 lg:max-h-[35rem]"
            />
          </div>
        </div>
      </GridContainer>
    </div>
  )
}

export default SectionLaunch
