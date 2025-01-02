import Image from 'next/image';

import Question from '@/components/question';
import GridContainer from '@/components/grid-container';

const questions = [
  {
    title: "Is there a free trial available?",
    response:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
    isOpen: true,
  },
  {
    title: "Can I change my plan later?",
    response:
      "Yes! You can change or cancel your plan anytime through your account settings. No commitment, no fees or hidden charges.",
  },
  {
    title: "What is your cancellation policy?",
    response:
      "If you cancel your subscription, access to the service will be immediately stopped. No commitment. You can always sign up for a new plan at any time.",
  },
  {
    title: "Can other info be added to an invoice?",
    response:
      "Yes! You can add any other information you need, such as client details or a custom note. You can also add any other information you need, such as client details or a custom note.",
  },
  {
    title: "How does billing work?",
    response:
      "You can manage your billing information, including payment methods and billing address, through your account settings. We accept a variety of payment methods, including credit card, PayPal, and ACH.",
  },
  {
    title: "How do I change my account email?",
    response:
      "You can manage your billing information, including payment methods and billing address, through your account settings. We accept a variety of payment methods, including credit card, PayPal, and ACH.",
  },
]

const SectionQuestions = () => {
  return (
    <div className="pt-16 lg:pt-24">
      <GridContainer>
        <div className="mb-12 space-y-5 text-center lg:mb-16">
          <h2 className="text-3xl font-semibold -tracking-[0.72px] text-gray-900 lg:text-4xl">
            Frequently asked questions
          </h2>
          <p className="text-lg/relaxed text-gray-600 lg:text-xl/6">
            Everything you need to know about the product and billing.
          </p>
        </div>

        <div className="mx-auto w-full max-w-3xl divide-y divide-gray-200">
          {questions.map((question, index) => (
            <Question key={index} {...question} />
          ))}
        </div>

        <div className="mt-16 rounded-2xl bg-gray-50 p-8 text-center">
          <Image
            src="/users.png"
            alt="Users"
            width={120}
            height={56}
            className="mx-auto"
          />
          <h4 className="mb-2 mt-8 text-xl font-medium text-gray-900">
            Still have questions?
          </h4>
          <p className="mb-8 text-xl text-gray-600">
            Can’t find the answer you’re looking for? Please chat to our
            friendly team.
          </p>
          <button className="rounded-lg bg-brand-600 px-5 py-3 font-semibold leading-normal text-white transition-colors hover:bg-brand-700">
            Get in touch
          </button>
        </div>

        <hr className="mt-16 border-gray-200 lg:mt-24" />
      </GridContainer>
    </div>
  )
}

export default SectionQuestions
