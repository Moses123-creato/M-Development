import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/sections/HeroSection';
import CategoriesGrid from '../components/sections/CategoriesGrid';
import HowItWorks from '../components/sections/HowItWorks';
import ProgramsPreview from '../components/sections/ProgramsPreview';
import PortfolioCarousel from '../components/sections/PortfolioCarousel';
import Testimonials from '../components/sections/Testimonials';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Skill Acquisition Foundation - Vocational & Hybrid Training</title>
        <meta
          name="description"
          content="Learn practical vocational skills through hands-on training combining online and onsite learning."
        />
      </Helmet>

      <HeroSection />
      <CategoriesGrid />
      <ProgramsPreview />
      <HowItWorks />
      <PortfolioCarousel />
      <Testimonials />
    </>
  );
}