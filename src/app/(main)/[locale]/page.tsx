// import AcademicsSection from '@/components/general/home/academic-section'
import CtaSection from '@/components/general/home/call-to-action'
import { FeatureSection } from '@/components/general/home/feature-section'
import TestimonialsSection from '@/components/general/home/feedback-section'
import GallerySection from '@/components/general/home/gallery-section'
import HeroSection from '@/components/general/home/hero-section'
import HighLightSection from '@/components/general/home/highlight-section'
import ImpactVideoSection from '@/components/general/home/impact-video-section'
import LearningSystemSection from '@/components/general/home/leaning-system-section'
import LearningSection from '@/components/general/home/learning-section'
import Navbar from '@/components/general/home/navbar'
import EventSection from '@/components/general/home/our-gallery-section'
import PopularCoursesSection from '@/components/general/home/popular-courses-section'
import PrincipalMessageSection from '@/components/general/home/principal-message-section'
import TopStrip from '@/components/general/home/stir-up'
import TriHighlightSection from '@/components/general/home/tri-highlight-section'
import ShapeHero from '@/components/kokonutui/shape-hero'
import SmoothDrawer from '@/components/kokonutui/smooth-drawer'
import FeatureSteps from '@/components/mvpblocks/feature-2'
import FooterGlow from '@/components/mvpblocks/footer-glow'
import { Button } from '@/components/ui/button'
import { LocaleParams } from '@/data/locale'
import { Locale } from '@/data/stir-up-section-data'
import React from 'react'

const HomePage = ({params}:LocaleParams) => {
  return (
    <div>
      <TopStrip locale={params.locale} />
      <Navbar locale={params.locale}/>
      <HeroSection locale={params.locale} />
      <PrincipalMessageSection/>
      <FeatureSection/>
      <LearningSection/>
      {/* <LearningSystemSection/> */}
      <GallerySection/>
      {/* <ImpactVideoSection/> */}
      <ImpactVideoSection/>
      <PopularCoursesSection/>
      
      {/* <AcademicsSection/> */}
      {/* <EventSection/> */}
      {/* <FeatureSteps/> */}
      <TestimonialsSection/>
      {/* <ShapeHero/> */}
      <CtaSection/>

     
    </div>
  )
}

export default HomePage
