import { FiArrowRight } from 'react-icons/fi';

const TagFeature = () => {
  return (
    <div className="inline-flex items-center gap-3 rounded-2xl bg-brand-50 p-1 pr-[0.625rem]">
      <span className="inline-block h-6 rounded-2xl bg-white px-[0.625rem] text-xs/6 font-medium text-brand-700 lg:text-sm/6">
        New feature
      </span>
      <a
        href="#"
        className="flex items-center gap-1 text-xs/6 font-medium text-brand-700 transition-opacity hover:opacity-50 lg:text-sm/6"
      >
        Check out the team dashboard <FiArrowRight />
      </a>
    </div>
  )
}

export default TagFeature
