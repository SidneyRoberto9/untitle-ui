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
    <div className="py-24">
      <GridContainer>
        <div className="mb-16 w-full max-w-3xl">
          <span className="mb-3 block font-semibold text-brand-700">
            Launch faster
          </span>
          <h2 className="mb-5 text-4xl font-semibold -tracking-[0.045rem] text-gray-900">
            Build something great
          </h2>
          <p className="text-xl/6 text-gray-600">
            We’ve done all the heavy lifting so you don´t have to — get all the
            data you need to launch and grow your business faster.
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="grid w-full max-w-xl grid-cols-2 gap-x-8 gap-y-16">
            {itensLaunch.map((item, index) => (
              <ItemLaunch key={index} {...item} />
            ))}
          </div>
          <div>
            <Image
              src="/img-lauch.jpg"
              width={560}
              height={560}
              alt="Image Launch"
            />
          </div>
        </div>
      </GridContainer>
    </div>
  )
}

export default SectionLaunch
