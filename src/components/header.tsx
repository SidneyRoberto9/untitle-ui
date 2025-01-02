import Image from "next/image"

import GridContainer from "@/components/grid-container"
import ItemMenu from "@/components/item-menu"

const menuItems = [
  { url: "/", title: "Home", dropdown: false },
  { url: "/products", title: "Products", dropdown: true },
  { url: "/resources", title: "Resources", dropdown: true },
  { url: "/pricing", title: "Pricing", dropdown: false },
]

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[5rem] w-full items-center border-b border-b-gray-100 bg-white">
      <GridContainer className="flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Image
            src="/logo.svg"
            alt="Logo Untitled UI"
            width={142}
            height={32}
          />
          <nav className="flex items-center gap-8">
            {menuItems.map(({ dropdown, title, url }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
        </div>

        <div>
          <Image src="/avatar.jpg" width={40} height={40} alt="Avatar" />
        </div>
      </GridContainer>
    </header>
  )
}

export default Header
