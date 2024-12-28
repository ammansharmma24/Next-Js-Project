import FeaturedCourses from '@/components/FeaturedCourses'
import FeaturedWebinar from '@/components/FeaturedWebinar'
import Footer from '@/components/Footer'
import GridBackground from '@/components/GridBackground'
import HeroSection from '@/components/HeroSection'
// import WhyChooseUs from '@/components/WhyChooseUs'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] no-scrollbar'>
      <HeroSection/>
      <FeaturedCourses/>
      {/* <WhyChooseUs/> */}
      <GridBackground/>
      <FeaturedWebinar/>
      <Footer/>
    </main>
  )
}

export default Home
