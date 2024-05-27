import React from 'react'

export default function Navbar2() {
  return (
    <>
    <div className=' h-12 w-full bg-white shadow-lg shadow-gray-300 my-6  flex justify-between  '>
     <div className=' h-full sm:w-[80%] w-full    flex  items-center'>
         <div className=' h-7 w-[45%] xl:w-[15%] lg:w-[20%] sm:w-[45%] border-r-2 border-gray-600 pl-11'>
             <h2 className=' text-black md:text-2xl text-lg sm:text-lg  font-bold'>Overview</h2>
         </div>
         <div className=' md:h-10 lg:h-10 xl:h10 md:w-[50%] lg:w-[20%] xl-w-[50%] sm:h-8 sm:w-[40%] w-[45%] h-8  rounded-2xl overflow-hidden ml-3'>
             <button className=' h-full w-[35%] sm:text-[13px] text-[12px] bg-gray-300 hover:bg-gray-400 duration-200 '>Weekly</button>
             <button className=' h-full w-[35%] sm:text-[13px]  text-[12px] bg-gray-300 hover:bg-gray-400 duration-200 '>Monthly</button>
             <button className=' h-full w-[30%] sm:text-[13px]  text-[12px] bg-teal-400 hover:bg-teal-500 duration-200 '>Yearly</button>
         </div>
     </div>
     <div className=' sm:h-full sm:w-[60%] lg:w-[30%] xl:w-[20%] hidden  sm:flex'>
         <div className=' h-full w-[50%] flex justify-center items-center '>
             <h2 className=' text-black text-sm font-bold'>Marketing <span className=' text-gray-600 text-[13px] font-normal'>Team</span></h2>
         </div>
         <div className='  h-full w-[50%]  flex relative'>
             <div className='h-9 w-9 bg-red-200 overflow-hidden rounded-full absolute z-20'>
                 <img src="../asets/img/download (1).png" alt="" />
             </div>
             <div className='h-9 w-9  rounded-full bg-red-200 overflow-hidden absolute left-7 z-10'>
             <img src="../asets/img/download (2).png" alt="" />
             </div>
             <div className='h-9 w-9  rounded-full bg-red-200 overflow-hidden absolute left-14'>
             <img src="../asets/img/download (3).png" alt="" />
             </div>
             <div className='h-9 w-9  rounded-full absolute flex justify-center items-center text-[12px] font-bold text-blue-800 bg-blue-100  left-24'>
                 <h2>+3</h2>
             </div>
 
 
 
         </div>
     </div>
    </div>
    </>
  )
}
