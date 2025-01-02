import { Fragment } from 'react';

import SectionTrial from '@/components/section-trial';
import SectionTestimonials from '@/components/section-testimonials';
import SectionQuestions from '@/components/section-questions';
import SectionLaunch from '@/components/section-launch';
import SectionHero from '@/components/section-hero';
import SectionFeatures from '@/components/section-features';
import SectionCompanies from '@/components/section-companies';
import SectionAnalytics from '@/components/section-analytics';

export default function Page() {
  return (
    <Fragment>
      <SectionHero />
      <SectionCompanies />
      <SectionFeatures />
      <SectionTestimonials />
      <SectionAnalytics />
      <SectionQuestions />
      <SectionLaunch />
      <SectionTrial />
    </Fragment>
  )
}
