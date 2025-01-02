import Image from "next/image"
import { FiBarChart2, FiMail, FiZap } from "react-icons/fi"

import GridContainer from "@/components/grid-container"
import ItemFeature from "@/components/item-feature"

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
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
    hasBtn: true,
  },
]

const SectionAnalytics = () => {
  return (
    <div className="pt-24">
      <GridContainer>
        <div className="mb-16 text-center">
          <span className="bg-brand-50 text-brand-700 inline-block rounded-2xl px-3 py-1 text-sm/snug font-medium">
            Features
          </span>
          <h2 className="mb-6 mt-4 text-4xl font-semibold text-gray-900">
            Cutting-edge features for advanced analytics
          </h2>
          <p className="mx-auto max-w-3xl text-xl/normal text-gray-600">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>

        <div className="relative mx-auto mb-24 h-[35.0625rem] w-full max-w-[55.5rem]">
          <Image
            src="/screen-macbook.png"
            alt="Mockup MacBook"
            width={768}
            height={512}
            className="absolute -right-[1.125rem] -top-[0.9375rem]"
          />
          <Image
            src="/iphone.png"
            alt="Mockup Iphone"
            width={244}
            height={497}
            className="absolute bottom-0 left-0"
          />
        </div>

        <div className="flex items-start justify-between">
          {features.map((props, index) => (
            <ItemFeature key={index} {...props} />
          ))}
        </div>
        <hr className="mt-24 border-gray-200" />
      </GridContainer>
    </div>
  )
}

export default SectionAnalytics
