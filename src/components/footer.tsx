import Image from 'next/image';

import {
    menuUseCases, menuSocial, menuResources, menuProduct, menuLegal, menuCompany
} from '@/utils/data';
import ItemNav from '@/components/item-nav';
import GridContainer from '@/components/grid-container';

const itemsNav = [
  {
    title: "Product",
    itemsMenu: menuProduct,
  },
  {
    title: "Company",
    itemsMenu: menuCompany,
  },
  {
    title: "Resources",
    itemsMenu: menuResources,
  },
  {
    title: "Use cases",
    itemsMenu: menuUseCases,
  },
  {
    title: "Social",
    itemsMenu: menuSocial,
  },
  {
    title: "Legal",
    itemsMenu: menuLegal,
  },
]

const Footer = () => {
  return (
    <footer className="py-12 lg:pt-16">
      <GridContainer>
        <div className="grid grid-cols-2 items-start justify-between gap-8 pb-16 lg:flex lg:gap-0">
          {itemsNav.map((item, index) => (
            <ItemNav key={index} {...item} />
          ))}
        </div>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-t-gray-200 pt-8 lg:flex-row lg:items-center lg:gap-0">
          <Image
            src="/logo.svg"
            alt="Logo Untitled UI"
            width={142}
            height={32}
          />
          <p className="text-gray-500">
            © {new Date().getFullYear()} Untitled UI. All rights reserved.
          </p>
        </div>
      </GridContainer>
    </footer>
  )
}

export default Footer
