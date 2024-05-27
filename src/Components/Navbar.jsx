import React from 'react'
import { MdOutlineSearch } from "react-icons/md";
import { FaFlagCheckered } from "react-icons/fa";
import { TiWeatherSunny } from "react-icons/ti";
import { MdFullscreen } from "react-icons/md";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { AiTwotoneBell } from "react-icons/ai";
import { CgPushChevronRight } from "react-icons/cg";
import { BiLeftIndent } from "react-icons/bi";

export default function Navbar() {
  return (
  <>

<div className=' h-20 w-full bg-white rounded-2xl flex  shadow-lg shadow-gray-300   '>
    <div className=' md:hidden lg:hidden xl:hidden  sm:h-full h-full w-[50%] sm:w-[50%]  sm:flex flex items-center pl-3 gap-3'>
        <button className=' h-12 w-12 rounded-2xl bg-gray-200 flex justify-center items-center text-lg font-bold '><CgPushChevronRight /></button>
        <button className=' h-12 w-12 rounded-2xl bg-gray-200 flex justify-center items-center text-lg font-bold '>...</button>

    </div>
    <div className=' md:hidden lg:hidden xl:hidden   sm:h-full h-full w-[50%] sm:w-[50%]  sm:flex flex items-center justify-end pr-3'>
    <button className=' h-12 w-12 rounded-2xl bg-gray-200 flex justify-center items-center text-lg font-bold '><BiLeftIndent /></button>

    </div>

    <div className='  hidden xl:h-full md:h-full xl:w-3/5 md:w-3/5    md:flex xl:flex justify-center items-center'>
    <MdOutlineSearch className=' text-4xl text-blue-500' />
        <input type="text" name="" id="" placeholder='search...' className=' h-14 w-[85%] placeholder:text-black outline-none pl-3' />
    </div>
    <div className=' hidden xl:h-full md:h-full xl:w-[39%] md:w-[80%]  md:flex   xl:flex justify-center items-center md:gap-2 gap-4'>
        <button className='  h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300 '> <FaFlagCheckered /></button>
        <button className='  h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300 text-yellow-400  '> <TiWeatherSunny /></button>
        <button className=' h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300  '> <MdFullscreen /></button>
        <button className='  h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300  '> <FaFlagCheckered /></button>
        <button className='  h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300  '> <HiAdjustmentsHorizontal /></button>
        <button className='  h-12 w-12 rounded-2xl flex justify-center items-center text-lg hover:bg-blue-100 duration-300  '> <AiTwotoneBell /></button>
        <div className=' h-12  w-28 md:w-36 pl-5  '>
            <h1 className=' text-gray-500 font-bold text-sm'>Chloe Walker</h1>
            <p className=' text-[12px] md:pl-1 pl-14'>Staff</p>
        </div>
        <div className=' h-12 rounded-full  bg-yellow-100  pl-1 overflow-hidden '>
            <img src="../asets/img/wanna6.c3785fbd1f55258c37d8.png" alt="" className=' h-12 w-11' />
        </div>
    
    
    </div>
   </div>
  </>
  )
}
