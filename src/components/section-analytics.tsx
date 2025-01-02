import { FiZap, FiMail, FiBarChart2 } from 'react-icons/fi';
import Image from 'next/image';

import ItemFeature from '@/components/item-feature';
import GridContainer from '@/components/grid-container';

const features = [
  {
    icon: FiMail,
    title: "Share team inboxes",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
    hasBtn: true,
  },
  {
    icon: FiZap,
    title: "Deliver instant answers",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
    hasBtn: true,
  },
  {
    icon: FiBarChart2,
    title: "Manage your team with reports",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drillDown on the data in a couple clicks.",
    hasBtn: true,
  },
]

const SectionAnalytics = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <GridContainer>
        <div className="mb-12 text-center lg:mb-16">
          <span className="inline-block rounded-2xl bg-brand-50 px-3 py-1 text-sm/snug font-medium text-brand-700">
            Features
          </span>
          <h2 className="mb-6 mt-4 text-3xl font-semibold text-gray-900 lg:text-4xl">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="mx-auto max-w-3xl text-lg/relaxed text-gray-600 lg:text-xl/normal">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="relative mx-auto mb-12 h-auto w-full max-w-full lg:mb-24 lg:h-[35.0625rem] lg:max-w-[55.5rem]">
          <Image
            src="/screen-macbook.png"
            alt="Mockup MacBook"
            width={768}
            height={512}
            className="absolute -right-[1.125rem] -top-[0.9375rem] hidden lg:block"
          />
          <Image
            src="/iphone.png"
            alt="Mockup Iphone"
            width={244}
            height={497}
            className="relative bottom-0 left-0 mx-auto lg:absolute"
          />
        </div>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-start lg:gap-0">
          {features.map((props, index) => (
            <ItemFeature key={index} {...props} />
          ))}
        </div>
        <hr className="mt-16 border-gray-200 lg:mt-24" />
      </GridContainer>
    </div>
  )
}

export default SectionAnalytics
