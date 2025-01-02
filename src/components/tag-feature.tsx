import { FiArrowRight } from "react-icons/fi"

const TagFeature = () => {
  return (
    <div className="bg-brand-50 inline-flex items-center gap-3 rounded-2xl p-1 pr-[0.625rem]">
      <span className="text-brand-700 inline-block h-6 rounded-2xl bg-white px-[0.625rem] text-sm/6 font-medium">
        New feature
      </span>
      <a
        href="/"
        className="text-brand-700 flex items-center gap-1 text-sm/6 font-medium transition-opacity hover:opacity-50"
      >
        Check out the team dashboard <FiArrowRight />
      </a>
    </div>
  )
}

export default TagFeature
