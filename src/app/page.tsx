import { Fragment } from 'react';

import SectionTestimonials from '@/components/section-testimonials';
import SectionQuestions from '@/components/section-questions';
import SectionLaunch from '@/components/section-launch';
import SectionHero from '@/components/section-hero';
import SectionFeatures from '@/components/section-features';
import SectionCompanies from '@/components/section-companies';
import SectionAnalytics from '@/components/section-analytics';
import Header from '@/components/header';

export default function Page() {
  return (
    <Fragment>
      <Header />
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalytics />
      <SectionQuestions />
      <SectionLaunch />
    </Fragment>
  )
}
