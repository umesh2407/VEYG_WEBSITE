import React from 'react'
import banner from '../../src/assets/contactbanner.svg';
import Team from './Team';
import Footer from './Footer';
import transition from '../transition';

const About = () => {
  return (
    <div className='wrapper overflow-x-hidden max-w-screen'>
      <div>
        <div className='text-white text-center font-varino text-[70px] mt-10 m-contactus m-aboutus'>ABOUT US</div>
        <img src={banner} alt='contactbanner' className='w-screen translate-y-4 m-contact-banner' />
        <div className=''>
          <div className='flex flex-col justify-center absolute top-[15rem] items-center gap-7 w-screen'>
            <div className='text-white z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-welcome-zieger'>Welcome to Veyg 2024</div>
            <div className='text-gray-400 text-xl font-readex text-center max-w-2xl mx-auto mt-10'>
    <p className='mb-[0.5rem]'>Welcome to VEYG, Saffrony Institute’s Technical Festival! Explore a platform where budding Saffronites unfold their engineering potential, refine soft skills, and gain recognition for their discipline and outstanding performance. 💡</p>
</div>


          </div>
          <div className='flex flex-col justify-center absolute top-[31rem] items-center -gap-[22rem] w-screen m-mainobjective'>
            <div className='text-white top-[15.5rem] z-1 border border-solid border-[#E5E7EB] font-readex text-[30px] text-center font-bold rounded-full py-1 px-6 m-main-objective'>Main Objectives</div>
            <div className='text-gray-400 mt-[2rem] text-3xl font-bold font-readex text-center max-w-2xl mx-auto'>
    <span className='block mb-6 '>🚀 Elevate Technical Prowess</span>
    <span className='block mb-6 '>🌱 Cultivate Leadership and Management</span>
    <span className='block'>💡 Refine Essential Soft Skills</span>
</div>


          </div>
          <div className='mt-[35rem] lg:mt-[30rem]'>
          <Team/>
        </div>
        </div>
       
      </div>
      <br/>
      <br/>
      <br/>
      <div className="flex mt-[5rem]">

      <Footer/>
      </div>
    </div>
    
  )
}

export default transition(About);