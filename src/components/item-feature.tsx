import { IconType } from "react-icons"
import { FiArrowRight } from "react-icons/fi"

interface ItemFeatureProps {
  icon: IconType
  title: string
  text: string
  hasBtn?: boolean
}

const ItemFeature = ({
  icon: Icon,
  text,
  title,
  hasBtn = false,
}: ItemFeatureProps) => {
  return (
    <div className="w-full max-w-96 text-center">
      <div className="bg-brand-100 border-brand-50 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full border-8">
        <Icon size={24} className="text-brand-600" />
      </div>
      <h3 className="mb-2 text-xl/6 font-medium text-gray-900">{title}</h3>
      <p className="leading-6 text-gray-600">{text}</p>

      {hasBtn && (
        <a
          href="#"
          className="text-brand-700 mt-5 flex items-center justify-center gap-2 font-semibold transition-opacity hover:opacity-50"
        >
          Learn more
          <FiArrowRight size={20} className="text-brand-700" />
        </a>
      )}
    </div>
  )
}

export default ItemFeature
