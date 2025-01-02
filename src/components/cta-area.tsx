import { FiPlayCircle } from "react-icons/fi"

const CtaArea = () => {
  return (
    <div className="mb-16 flex items-center justify-center gap-3">
      <button className="flex items-center gap-3 rounded-lg border border-gray-300 px-7 py-4 text-lg font-semibold text-gray-700 transition-colors hover:bg-gray-100">
        <FiPlayCircle size={24} className="text-gray-700" />
        Demo
      </button>
      <button className="bg-brand-600 hover:bg-brand-700 rounded-lg px-7 py-4 text-lg font-semibold text-white transition-colors">
        Sign Up
      </button>
    </div>
  )
}

export default CtaArea
