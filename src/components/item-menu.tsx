import Link from "next/link"
import { FiChevronDown } from "react-icons/fi"

interface ItemMenProps {
  url: string
  title: string
  hasDropdown?: boolean
}

const ItemMenu = ({ title, url, hasDropdown }: ItemMenProps) => {
  return (
    <Link
      href={url}
      className="flex items-center gap-2 font-semibold text-gray-600 transition-opacity hover:opacity-50"
    >
      {title} {hasDropdown && <FiChevronDown className="text-gray-600" />}
    </Link>
  )
}

export default ItemMenu
