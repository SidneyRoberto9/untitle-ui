interface ItemLaunchProps {
  number: string
  title: string
  text: string
}

const ItemLaunch = ({ number, text, title }: ItemLaunchProps) => {
  return (
    <div className="w-full text-center">
      <h3 className="text-5xl font-semibold text-brand-600 lg:text-6xl">
        {number}
      </h3>
      <h4 className="mb-2 mt-3 text-lg font-medium text-gray-900">{title}</h4>
      <p className="text-gray-600">{text}</p>
    </div>
  )
}

export default ItemLaunch
