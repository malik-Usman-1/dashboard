import React from 'react'
import { CiMail } from "react-icons/ci";
import { FaMobileAlt } from "react-icons/fa";
import { RiMessage2Line } from "react-icons/ri";
import { FaAngleRight } from "react-icons/fa6";

export default function Header() {
  return (
    <>
   <div className='  grid lg:grid-cols-3 grid-cols-1 gap-6 '>
    <div className='  rounded-xl grid grid-cols-2 shadow-lg shadow-gray-300 '>
    <div className='  pl-6'>
        <h2 className=' font-bold text-lg'>Sam Roberts</h2>
        <p>Team Lead</p>
        <div className=' h-14 w-44  flex gap-2 pt-5'>
        <button className='  h-9  w-9 rounded-2xl flex justify-center items-center text-lg bg-blue-100 hover:bg-blue-700 duration-300 text-blue-700 hover:text-white  '><CiMail /> </button>
        <button className='  h-9 w-9 rounded-2xl flex justify-center items-center text-lg bg-blue-100 hover:bg-blue-700 duration-300 text-blue-700 hover:text-white  '><FaMobileAlt /> </button>
        <button className='  h-9 w-9 rounded-2xl flex justify-center items-center text-lg bg-blue-100 hover:bg-blue-700 duration-300 text-blue-700 hover:text-white '><RiMessage2Line /> </button>


            
        </div>
    </div>
    <div className='  flex justify-center items-center pl-16'>
        <div className=' sm:h-24 md:h-24 lg:h-24 xl:h-24 h-16  sm:w-24 md:-w-24 lg:w-24 xl:w-24 w-16 rounded-full  bg-red-200 overflow-hidden'>
        <img src="../asets/img/download (4).png" alt="" />
        </div>
    </div>

    </div>
    <div className='  rounded-xl  grid grid-cols-2 shadow-lg shadow-gray-300 '>
         <div className='  pl-6'>
        <h2 className=' font-bold text-lg'>Marketing Team</h2>
        <p>There is a meeting at 12 o'clock.</p>
        <div className=' h-24 w-44 pt-12   flex relative'>
            <div className='h-9 w-9 border-2 border-black bg-red-200 overflow-hidden rounded-full absolute z-20'>
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
    <div className='  flex justify-end pr-4'>
        <div className=' h-12  w-12 rounded-2xl  hover:shadow-lg shadow-gray-300  bg-white flex justify-center items-center'>
        <FaAngleRight />
        </div>
    </div>
    </div>
    <div className='  rounded-xl grid grid-cols-2 shadow-lg shadow-gray-300 '>
    <div className='  pl-6'>
        <h2 className=' font-bold text-lg'>Marketing Team</h2>
        <p>There is a meeting at 12 o'clock.</p>
        <div className=' h-24 w-44 pt-12   flex relative'>
            <div className='h-9 w-9 border-2 border-black bg-red-200 overflow-hidden rounded-full absolute z-20'>
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
    <div className='  flex justify-end pr-4'>
        <div className=' h-12  w-12 rounded-2xl  hover:shadow-lg shadow-gray-300  bg-white flex justify-center items-center'>
        <FaAngleRight />
        </div>
    </div>

    </div>
   </div>
   </>
  )
}
