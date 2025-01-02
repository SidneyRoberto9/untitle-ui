import {
  FiBarChart2,
  FiCommand,
  FiMail,
  FiMessageCircle,
  FiSmile,
  FiZap,
} from "react-icons/fi"

import GridContainer from "@/components/grid-container"
import ItemFeature from "@/components/item-feature"

const features = [
  {
    icon: FiMail,
    title: "Share team inboxes",
    text: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: FiZap,
    title: "Deliver instant answers",
    text: "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: FiBarChart2,
    title: "Manage your team with reports",
    text: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
  {
    icon: FiSmile,
    title: "Connect with customers",
    text: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion.",
  },
  {
    icon: FiCommand,
    title: "Connect the tools you already use",
    text: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools.",
  },
  {
    icon: FiMessageCircle,
    title: "Our people make the difference",
    text: "We’re an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help.",
  },
]

const SectionFeatures = () => {
  return (
    <div className="py-24">
      <GridContainer>
        <div className="mb-16 text-center">
          <small className="text-brand-700 mb-3 block text-base font-semibold">
            Features
          </small>
          <h2 className="-tracking-tighter-[-0.72px] mb-5 text-center text-4xl font-semibold text-gray-900">
            Analytics that feels like it’s from the future
          </h2>
          <p className="mx-auto max-w-3xl text-xl/6 text-gray-600">
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-x-8 gap-y-16">
          {features.map((props, index) => (
            <ItemFeature key={index} {...props} />
          ))}
        </div>
      </GridContainer>
    </div>
  )
}

export default SectionFeatures
