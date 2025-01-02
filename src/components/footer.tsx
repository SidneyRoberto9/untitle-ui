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
    <footer className="pb-12 pt-16">
      <GridContainer>
        <div className="flex items-start justify-between pb-16">
          {itemsNav.map((item, index) => (
            <ItemNav key={index} {...item} />
          ))}
        </div>
        <div className="flex items-center justify-between border-t border-t-gray-200 pt-8">
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
