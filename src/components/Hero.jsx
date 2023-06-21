import React from 'react'

const Hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4'>
      <div className='max-h-[500px] relative'>
        {/* Overlay */}

        <div className='absolute w-full h-full text-grey-200 max-h[500px] bg-black/40  flex flex-col justify-center'>
        <h1 className='px-4 py-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-unbounded text-gray-50 '><span className='text-orange-500'> </span></h1>
        <h1 className='pt-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-50 '><span className='text-orange-500'> </span></h1>
        </div>
        
        <img className='w-full max-h-[500px] object-cover' src='https://th.bing.com/th/id/R.5f9303c8a1127f572b061c7632bb3d77?rik=pnmRDjlR2X3wcA&riu=http%3a%2f%2ffunfoodthailand.com%2fwp-content%2fuploads%2f2016%2f03%2fBurger-Restaurant-Design.jpg&ehk=qAFh5GGFGJ3zbsWKrrq%2fj%2bFiCMhoLAaEp8yDw4wjNm0%3d&risl=&pid=ImgRaw&r=0' alt="/" />
      </div>
    </div>
  )
}

export default Hero
