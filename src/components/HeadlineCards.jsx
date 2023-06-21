import React from 'react'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6 bg-gray-200'>
      
      {/* Card 8*/}
      
      <div className='rounded-xl relative'> 
        
        {/* overlay */}
        <div className='absolute w-full h-full bg:balck/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4'>Barbeque's</p>
<p className='px-2'>Through 8/26</p>
<button className='border-white bg-white text-black mx-2 absolute button-4'>Order Now</button>

        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
{/* Card 8*/}
      
<div className='rounded-xl relative'> 
        
        {/* overlay */}
        <div className='absolute w-full h-full bg:balck/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4'>New Resturants</p>
<p className='px-2'>Added Daily</p>
<button className='border-white bg-white text-black mx-2 absolute button-4'>Order Now</button>

        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="/" />
      </div>
      {/* Card 8*/}
      
      <div className='rounded-xl relative'> 
        
        {/* overlay */}
        <div className='absolute w-full h-full bg:balck/50 rounded-xl text-white'>
<p className='font-bold text-2xl px-2 pt-4'>Desserts</p>
<p className='px-2 '>Tasty Bite</p>
<button className='border-white bg-white text-black mx-2 absolute button-4'>Order Now</button>

        </div>
        <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="https://images.pexels.com/photos/918328/pexels-photo-918328.jpeg?auto=compress&cs=tinysrgb&w=400" alt="/" />
      </div>

    </div>
    
  )
}

export default HeadlineCards
