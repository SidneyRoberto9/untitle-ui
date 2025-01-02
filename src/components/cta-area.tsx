import { FiPlayCircle } from 'react-icons/fi';

const CtaArea = () => {
  return (
    <div className="mb-16 flex flex-col items-center justify-center gap-3 lg:flex-row">
      <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 px-7 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100 lg:w-auto">
        <FiPlayCircle size={24} className="text-gray-700" />
        Demo
      </button>
      <button className="w-full rounded-lg bg-brand-600 px-7 py-4 text-lg font-semibold text-white transition-colors hover:bg-brand-700 lg:w-auto">
        Sign Up
      </button>
    </div>
  )
}

export default CtaArea
