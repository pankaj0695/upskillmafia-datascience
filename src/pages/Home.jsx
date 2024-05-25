import { Fragment } from 'react';

import MainNavigation from '../components/MainNavigation/MainNavigation';
import Hero from '../components/Hero/Hero';
import Curriculum from '../components/Curriculum/Curriculum';
import Refund from '../components/Refund/Refund';
import TopCompanies from '../components/TopCompanies/TopCompanies';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';

function Homepage() {
  return (
    <Fragment>
      <MainNavigation />
      <Hero />
      <Curriculum />
      <Refund />
      <TopCompanies />
      <Testimonials />
      <CTA />
    </Fragment>
  );
}

export default Homepage;
