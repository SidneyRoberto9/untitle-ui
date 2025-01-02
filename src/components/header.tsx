import Image from 'next/image';

import ItemMenu from '@/components/item-menu';
import GridContainer from '@/components/grid-container';

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
        <div className="flex w-full items-center justify-between gap-10 lg:w-auto">
          <Image
            src="/logo.svg"
            alt="Logo Untitled UI"
            width={142}
            height={32}
          />
          <nav className="hidden items-center gap-8 lg:flex">
            {menuItems.map(({ dropdown, title, url }, index) => (
              <ItemMenu
                key={index}
                url={url}
                title={title}
                hasDropdown={dropdown}
              />
            ))}
          </nav>
          <button className="block lg:hidden">
            <Image
              src="/hamburger.svg"
              alt="Menu Hamburger"
              width={40}
              height={40}
            />
          </button>
        </div>

        <div>
          <Image
            src="/avatar.jpg"
            width={40}
            height={40}
            alt="Avatar"
            className="hidden lg:block"
          />
        </div>
      </GridContainer>
    </header>
  )
}

export default Header
