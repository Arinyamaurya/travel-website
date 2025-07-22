import Image from 'next/image'
import React from 'react'
import Button from './Button'



const Hero=()=> {
    return (
        <section className='mx-auto max-w-[1440px] px-6 lg:px-20 flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row '>
            <div className="absolute right-0 top-0 h-screen w-screen bg-[url('/pattern-bg.png')] bg-cover bg-center md:-right-28 xl:-top-60"/>
            {/*left */}
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image src="/camp.svg" alt="camp" width={50} height={50}
        className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="text-[52px] font-[700] leading-[120%] lg:text-[88px] lg:font-[700] lg:leading-[120%]">The Sacred Escape</h1>
        <p className="text-[16px] font-[400] mt-6 text-[#7B7B7B] xl:max-w-[520px]">From the serene ghats of Varanasi to the wild heart of the Western Ghats, from sun-kissed deserts to Himalayan forests — India offers more than landscapes; it offers transformation.</p>
        <div className="my-11 flex flex-wrap gap-5">
            <div className="flex items-center gap-2">
                 {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
            </div>
            <p className="text-[16px] font-[700] lg:text-[20px] lg:font-[700] text-[#021639]">
            198k
            <span className="text-[16px] font-[400] lg:text-[20px] lg:font-[400] ml-1">Excellent Reviews</span>
          </p>
        </div>
          <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button
            type="button" 
            title="Download App" 
            variant="boredr border-[#30AF5B] bg-[#30AF5B] px-8 py-5 text-white" />
          <Button 
            type="button" 
            title="How we work?" 
            icon="/play.svg"
            variant="border border-white bg-white px-8 py-3 text-[#141414]" 
          />
        </div>
      </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-[#292c27] px-7 py-8">

           <div className="flex flex-col">
            <div className="flex items-center justify-between">
              <p className="text-[16px] font-[400] text-[#A2A2A2]">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="text-[20px] font-[700] text-white">Spiti Valley</p>
          </div>

         <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">Distance</p>
              <p className="text-[20px] font-[700] text-white">625.40 km</p>
              </div>
              <div className="flex flex-col">
              <p className="text-[16px] font-[400] block text-[#A2A2A2]">Elevation</p>
              <p className="text-[20px] font-[700] text-white">4.270 km</p>
            </div>
        </div>
        </div>
        </div>

        
        </section>

        
    )
}

export default Hero
