import React from 'react'
import { MdOutlineSpeakerNotes } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { FaCircleQuestion } from "react-icons/fa6";
import { data } from './Data';
export default function Section2() {
    return (
        <>
            <div className='grid sm:grid-cols-4  grid-cols-1 gap-7 pt-10  '>
                <div className='  col-span-4 sm:col-span-4 xl:col-span-3 rounded-2xl  shadow-xl shadow-gray-400 pb-10 flex '>
                    <div className=' h-full w-[25%]  space-y-4 pl-7'>
                        <div className=' h-14 w-52  flex '>
                            <div className=' h-full w-[30%]  flex justify-center items-center  text-3xl text-purple-500'>
                                <MdOutlineSpeakerNotes />
                            </div>
                            <div className=' h-full w-full  '>
                                <h2 className=' text-black font-bold text-lg pt-1'>Sales by Stores</h2>
                                <p className=' text-sm'>Reports</p>
                            </div>

                        </div>

                        <div className=' h-20 w-40 rounded-2xl  bg-gray-200 flex justify-center items-center'>
                            <img src="../asets/img/download (6).png" alt="" />
                        </div>
                        <div className=' h-20 w-40 rounded-2xl bg-white shadow-lg shadow-gray-400 flex justify-center items-center'>
                            <img src="../asets/img/download (7).png" alt="" />
                        </div>
                        <div className=' h-20 w-40 rounded-2xl bg-white shadow-lg shadow-gray-400 flex justify-center items-center'>
                            <img src="../asets/img/download (8).png" alt="" />
                        </div>
                        <div className=' h-20 w-40 rounded-2xl bg-white shadow-lg shadow-gray-400 flex justify-center items-center'>
                            <img src="../asets/img/download (9).png" alt="" />
                        </div>
                    </div>
                    <div className='  h-full w-[50%]  sm:text-3xl lg:text-6xl md:text-5xl xl:text-6xl  flex justify-center items-center text-2xl font-bold'>
                        <h2 className=' hidden md:block xl:block sm:block lg:block '> Make a Graph</h2>
                    </div>
                    <div className=' h-full w-[25%] flex justify-end pr-5'>
                        <div className=' h-10 w-40 rounded-2xl overflow-hidden bg-gray-200 flex'>
                            <button className=' h-full w-[25%]  bg-gray-300 flex justify-center items-center text-gray-600 hover:bg-blue-700 hover:text-white duration-300'><FaAngleLeft /></button>
                            <div className=' h-full w-[50%] flex justify-center items-center text-gray-600 '><p>2024</p></div>
                            <button className=' h-full w-[25%] bg-gray-300 flex justify-center items-center text-gray-600'><FaAngleRight /></button>
                        </div>
                    </div>
                </div>
                <div className=' rounded-2xl pl-2 sm:col-span-4 col-span-4 xl:col-span-1    shadow-lg shadow-gray-400 space-y-6 pb-10'>
                    <div className='   flex'>
                        <div className=' h-16 w-[15%]   flex justify-start items-center  text-4xl text-red-300'>
                            <FaCircleQuestion />
                        </div>
                        <div className=' h-14 w-[60%]  '>
                            <h2 className=' text-black font-bold text-lg pt-1'>Waiting for an Answer</h2>
                            <p>Customer</p>

                        </div>
                        <button className=' h-9 w-12 rounded-xl bg-white font-bold text-sm duration-300 text-black hover:bg-gray-200 flex justify-center items-center '>...</button>
                    </div>
               
            
                        {data.map((ele)=>{
                            return(
                                <>
                                <div className=' h-12 w-full flex justify-between'>
                                <div className=' h-10 w-10 rounded-full bg-red-200 overflow-hidden'>
                                <img src={ele.img} alt="" />
                                </div>
                                <h2 className=' text-black text-sm font-bold'>{ele.head}</h2>
                                <p>{ele.para}</p>
                        <div className=' h-9 w-9 rounded-full border-4 border-yellow-300'></div>
                    <button className=' h-9 w-20 rounded-xl bg-gray-300 font-bold text-sm duration-300 text-blue-700 hover:bg-blue-700 hover:text-white'>Send</button> 
                    </div>

                                </>
                            
                            )
                        })}

                       
                      

                    
                </div>


            </div>
        </>
    )
}
