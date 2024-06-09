import React from 'react'
import Features from '../assets/Our Features Image.png'
const Feature = () => {
  return (
    <div className="flex  flex-col items-center  md:flex-row lg:w-[90rem] relative mx-auto">
  
    <div className=' lg:h-[50rem] lg:w-[48rem] h-auto w-auto py-40 px-5 gap-4'>
        <h3 className='text-5xl py-5'>Our Features</h3>
        <h1 className='text-6xl font-bold py-5'>The creative spark you need for your success</h1>
        <p className='text-2xl mx-8 py-5'>Korem ipsum dolor sit amet, consectetur adipisicing elit, sed do se eiusmod temps incididunt ut labore et sa dolore si magna aliqua. Ut enim ad minim veniam, inant quis nostrud.</p>
        <p className='text-3xl font-semibold py-2'> &#10003; At vero eos et accusamus et iusto odio dignissimos</p>
        <p className='text-3xl font-semibold'> &#10003; Similique sunt in culpa qui officia</p>
        <div className=" flex justify-center m-10">
            <button className="bg-transparent text-black font-semibold py-2 px-4 border border-black hover:bg-slate-400 rounded tracking-wide text-2xl w-80 ">
            Contact Us
            </button>
          </div>
    </div>
    <div className='bg-red-700 lg:h-[50rem] lg:w-[48rem] h-52 w-60'>
        <img src={Features} alt="" className='bg-red-700 h-[50rem] w-[48rem]'/>
    </div>
  </div>
  )
}

export default Feature