import { Fragment } from "react"

import Header from "@/components/header"
import SectionAnalytics from "@/components/section-analytics"
import SectionCompanies from "@/components/section-companies"
import SectionFeatures from "@/components/section-features"
import SectionHero from "@/components/section-hero"
import SectionTestimonials from "@/components/section-testimonials"

export default function Home() {
  return (
    <Fragment>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalytics />
    </Fragment>
  )
}
