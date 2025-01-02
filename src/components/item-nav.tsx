interface ItemNavProps {
  title: string
  itemsMenu: ItemMenuProps[]
}

interface ItemMenuProps {
  url: string
  name: string
}

const ItemNav = ({ title, itemsMenu }: ItemNavProps) => {
  return (
    <div>
      <h4 className="mb-4 text-sm font-semibold capitalize text-gray-500">
        {title}
      </h4>
      <ul className="space-y-3">
        {itemsMenu.map(({ url, name }, index) => (
          <li key={index}>
            <a
              href={url}
              className="font-semibold text-gray-600 transition-opacity hover:opacity-50"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ItemNav
