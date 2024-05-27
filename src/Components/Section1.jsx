import React from 'react'
import { FaCalculator } from "react-icons/fa";
import { MdSdCardAlert } from "react-icons/md";
import { TiBusinessCard } from "react-icons/ti";
import { GiCardBurn } from "react-icons/gi";
import { IoMdArrowDropdown } from "react-icons/io";
import { PiBellRingingBold } from "react-icons/pi";
import { IoMdStarOutline } from "react-icons/io";
import { FaCalendarCheck } from "react-icons/fa";

export default function Section1() {
  return (
    <>
            <div className='  grid sm:grid-cols-2   lg:grid-cols-2 xl:grid-cols-4 grid-cols-2 pt-10  gap-6'>
                <div className='  col-span-2 grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1  rounded-xl shadow-lg shadow-gray-400 pb-10 '>
                    <div className='  gird grid-cols-2   space-y-8 pl-8 '>
                        <div className=' h-14 w-36  flex '>
                            <div className=' h-full w-[40%]  flex justify-center items-center pl-5 text-3xl text-teal-500'>
                                <FaCalculator />
                            </div>
                            <div className=' h-full w-[60%] '>
                                <h2 className=' text-black font-bold text-lg pt-1'>Income</h2>
                                <p className=' text-sm'>Yearly</p>
                            </div>

                        </div>
                        <div className=' h-96 w-64 sm:w-[95%] md:w-[97%] lg:w-4/5 xl:w-80 bg-orange-200 rounded-2xl flex flex-col gap-7 pt-3 '>
                            <div className=' h-12 w-full pl-5 '>
                                <h2 className='font-bold text-lg'>Sales</h2>
                            </div>
                            <div className=' h-28 w-full  flex items-center justify-center'>
                                <h2 className=' text-5xl  font-bold'>Graph</h2>
                            </div>
                            <div className=' h-16 w-full  flex'>
                                <div className=' h-full w-[30%]  flex justify-center items-center'>
                                    <h2 className=' text-5xl font-bold text-yellow-500'>$</h2>
                                </div>
                                <div className=' h-full w-[70%] '>
                                    <h3 className=' text-black font-bold text-2xl'>$34.00 <span className='text-teal-500 text-sm'>41.67%</span></h3>
                                    <p className=' text-gray-500 text-sm'>Compared to ($24.00 last year)</p>
                                </div>

                            </div>


                        </div>
                    </div>
                    <div className='  space-y-6  pt-5    px-5'>
                        <div className='   flex justify-end items-center '>
                            <div className=' h-9 w-56 rounded-xl bg-gray-200 flex justify-center items-center text-blue-700 font-bold hover:bg-blue-700 hover:text-white duration-200'>
                                <GiCardBurn />
                                <p className='ml-1'>Compared to 2023</p>
                                <IoMdArrowDropdown />
                            </div>
                        </div>
                        <div className='pt-3'>
                            <div className=' h-44 w-full bg-pink-200 rounded-xl pt-4'>
                                <div className=' h-16 w-full pl-5'>
                                    <h3 className=' font-bold text-lg'>Campaigns</h3>
                                </div>
                                <div className=' h-16 w-full  flex'>
                                    <div className=' h-full w-[30%]  flex justify-center items-center'>
                                        <h2 className=' text-6xl font-bold text-pink-500'><MdSdCardAlert /></h2>
                                    </div>
                                    <div className=' h-full w-[70%] '>
                                        <h3 className=' text-black font-bold text-2xl'>$3,265.72 <span className='text-teal-500 text-sm'>-34.69%</span></h3>
                                        <p className=' text-gray-500 text-sm'>Compared to ($5,000.00 last <br />year)</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className=' '>
                            <div className=' h-44 w-full bg-gray-200  rounded-xl pt-4'>
                                <div className=' h-16 w-full pl-5 '>
                                    <h3 className=' font-bold text-lg'>Campaigns</h3>
                                </div>
                                <div className=' h-16 w-full  flex'>
                                    <div className=' h-full w-[30%]  flex justify-center items-center'>
                                        <h2 className=' text-6xl font-bold text-purple-500'><TiBusinessCard /></h2>
                                    </div>
                                    <div className=' h-full w-[70%] '>
                                        <h3 className=' text-black font-bold text-2xl'>$3,265.72 <span className='text-teal-500 text-sm'>-34.69%</span></h3>
                                        <p className=' text-gray-500 text-sm'>Compared to ($5,000.00 last <br />year)</p>
                                    </div>

                                </div>
                            </div>

                        </div>



                    </div>

                </div>

                <div className='  grid xl:col-span-1 col-span-2  sm:col-span-2 md:col-span-2 lg:col-span-2   pb-10 shadow-lg shadow-gray-400'>
                    <div className='   flex'>
                        <div className=' h-14 w-[20%]  flex justify-center items-center pl-3 text-3xl text-yellow-300'>
                            <PiBellRingingBold />
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-black font-bold text-lg pt-1'>Recent Activities</h2>
                            <p className=' text-sm'>last 2 weeks</p>
                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>9:33 PM</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Extended license purchased from France</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>5:15 PM</p>
                        </div>
                        <div className=' h-14 w-[60%]   '>
                            <h2 className='  text-sm pt-3 flex text-black font-bold'><IoMdStarOutline className=' text-yellow-500 font-bold text-2xl' /><IoMdStarOutline className=' text-yellow-500 font-bold text-2xl' />
                                <IoMdStarOutline className=' text-yellow-500 font-bold text-2xl' /><IoMdStarOutline className=' text-yellow-500 font-bold text-2xl' /><IoMdStarOutline className=' text-yellow-500 font-bold text-2xl' />
                                , a new rating has been received.</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>12:27 PM</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Customer's problem solved.</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>a day ago</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Regular license purchased from United Kingdom.</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>a day ago</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Regular license purchased from Italy.</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>2 days ag...</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>New version released. <span className=' text-blue-700 font-bold'>V12.1.0</span></h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[27%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-r-4 border-gray-500 px-1'>
                            <p>3 days ag...</p>
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Cover images will be edited
                                in 2 day</h2>

                        </div>
                    </div>

                </div>
                <div className='  pb-10 shadow-lg shadow-gray-300 pl-8 xl:pl-5 md:pl-20 sm:pl-16 lg:pl-32 xl:col-span-1 col-span-2  sm:col-span-2 md:col-span-2 lg:col-span-2 '>
                    <div className='  flex'>
                        <div className=' h-14 w-[20%]  flex justify-center items-center pl-3 text-3xl text-red-600'>
                            <FaCalendarCheck />
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-black font-bold text-lg pt-1'>John's Issue</h2>
                            <div className=' h-2 w-28 bg-gray-300 rounded-xl'>
                                <div className=' h-full w-10 bg-blue-600 rounded-xl'></div>
                            </div>
                        </div>
                        <button className=' h-9 w-20 rounded-xl bg-gray-300 font-bold text-sm duration-300 text-blue-700 hover:bg-blue-700 hover:text-white'>+ New</button>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-green-500 px-1'>
                            
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>Extended license purchased from France</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-blue-500 px-1'>
                    
                        </div>
                        <div className=' h-14 w-[60%]   '>
                            <h2 className='  text-sm pt-3 flex text-black font-bold'>
                                Preparing for A/B testing
                                in 2 days
                            </h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-yellow-400 px-1'>
                            
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>
                                Google Analytics data will be examined
                                in 4 days</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-blue-500 px-1'>
                            
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>

                                Invoices will be issued
                                in 9 days</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-red-500 px-1'>
                
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>
                                Dependencies check and update
                                in 15 days</h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-blue-500 px-1'>
                            
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>New version released. <span className=' text-blue-700 font-bold'>V12.1.0</span></h2>

                        </div>
                    </div>
                    <div className='  flex gap-2  items-start'>
                        <div className=' h-12 w-[5%]  flex justify-center items-center pl-3 text-sm text-black font-bold border-l-4 border-pink-300 px-1'>
                    
                        </div>
                        <div className=' h-14 w-[50%]  '>
                            <h2 className=' text-gray-500 text-sm pt-3'>
                                End of month meeting
                                in a month</h2>

                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}
