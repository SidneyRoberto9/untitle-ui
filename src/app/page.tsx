import { Fragment } from "react"

import Header from "@/components/header"
import SectionCompanies from "@/components/section-companies"
import SectionHero from "@/components/section-hero"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <SectionHero />
      <SectionCompanies />
    </Fragment>
  )
}
