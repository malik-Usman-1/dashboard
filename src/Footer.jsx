import React from 'react'
import { RiWallet2Line } from "react-icons/ri";
import { RiSkipLeftLine } from "react-icons/ri";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { RiSkipRightLine } from "react-icons/ri";

export default function Footer() {
    return (
        <>
            <div className=' xl:flex justify-between gap-5  pt-10'>
               
                <div className="space-y-10   xl:w-[30%] sm:w-full   pt-3 pb-10 rounded-2xl  shadow-2xl shadow-gray-400">
                    <div className='   px-6 flex justify-between items-center'>
                        <div className=' flex    gap-1'>
                            <RiWallet2Line className=' text-3xl text-blue-700 font-bold' />
                            <h2 className=' text-lg font-bold'>My Wallet</h2>
                        </div>
                        <div>
                        <button className=' h-9 w-32 bg-gray-200 hover:bg-blue-600 hover:text-white duration-300 rounded-2xl text-blue-600 font-bold '>Add new</button>
                        </div>
                    </div>
            <div className="sm:w-96 md:w-96 xl:96 w-72 sm:h-56 md:h-56 lg:h-56 xl:h-56 h-48 m-auto bg-orange-500 rounded-xl relative text-white pb-12 ">
            
            
            
                
                <div className="w-full px-8 absolute  top-8">
                    <div className="flex justify-between ">
                        <div className="">
                <img className=' h-12 w-16' src="../asets/img/download (4).svg" alt="" />
                         
                        </div>
                        <img className="w-14 h-14" src="https://i.imgur.com/bbPHJVe.png"/>
                    </div>
                    <div className="pt-3 sm:w-80 md:w-80 lg:w-80 xl:w-80 w-48 text-2xl pl-5 ">
                       
                        <p className="font-medium tracking-more-wider text-lg sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl text-black">
                            ****  ****  ****  1198
                        </p>
                    </div>
                    <div className="pt-6 pr-6">
                        <div className="flex justify-between">
                            <div className="">
                               
                                <p className="font-medium tracking-wider text-sm">
                                JOHN DOE
                                </p>
                            </div>
                          
    
                            <div className="">
                                <p className="font-light text-xs">
                                    valid thru
                                </p>
                                <p className="font-bold tracking-more-wider text-sm">
                                    12/14
                                </p>
                            </div>
                        </div>
                    </div>
    
                </div>
            </div>
            <div className='  h-28 w-[90%]  m-auto rounded-2xl bg-gray-300 flex'>
                <div className=' h-full w-[50%]   flex justify-center items-center gap-2 flex-col'>
                    <button className=' h-10 sm:w-44 w-36 border text-white font-bold bg-black  rounded-2xl hover:bg-transparent hover:text-black duration-300'>Visa-1134</button>
                    <button className=' h-10 sm:w-44 w-36 border text-black font-bold  rounded-2xl hover:bg-black hover:text-white duration-300'>Amex-00002</button>

                </div>
                <div className=' h-full w-[50%]   pt-2 flex justify-center'>
                <button className=' h-10 sm:w-44 w-36  text-black font-bold  rounded-2xl hover:bg-black hover:text-white duration-300'>Mastercard-1198</button>

                </div>
            </div>
        </div>
                <div className='  overflow-hidden rounded-2xl pt-3   pb-12 shadow-xl shadow-gray-400  sm:w-full md:w-full lg:w-full xl:w-[70%] w-full'>
                    <div className="overflow-x-auto space-y-12">
                        <table className="min-w-full divide-gray-200 font-[sans-serif]">
                            <thead className="bg-gray-100 whitespace-nowrap">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        #
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Image
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Sales
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Stock
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Price
                                    </th>
                                    <th className="px-6 py-3 text-left text-xs font-bold text-black uppercase tracking-wider">
                                        Store
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 whitespace-nowrap">
                                <tr>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        1
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <img src="../asets/img/beveled-cone.c514eaa96d3ae243fb12.png" className=' h-12 w-12' alt="" />
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <h2 className=' font-bold text-sm '> Beveled Cone</h2>
                                        <p className=' text-[12px]'>3D Shapes</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        Graph
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        380

                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        $14.50
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <div className=' h-6 w-24 text-[12px] text-white flex justify-center items-center font-bold  bg-orange-600 rounded-xl'>Company A</div>
                                    </td>

                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        2
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <img src="../asets/img/cloud-ball.abb7c4032f675db8997d.png" className=' h-12 w-12' alt="" />

                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <h2 className=' font-bold text-sm '> Bendy Rectangle</h2>
                                        <p className=' text-[12px]'>3D Shapes</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        Graph
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        1245

                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        $12.00

                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <div className=' h-6 w-24 text-[12px] text-white flex justify-center items-center font-bold  bg-orange-600 rounded-xl'>Company A</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        3
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <img src="../asets/img/quadrilateral.e9659c4042e25a3e305c.png" className=' h-12 w-12' alt="" />

                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">

                                        <h2 className=' font-bold text-sm '>
                                            Beveled Cone</h2>
                                        <p className=' text-[12px]'>3D Shapes</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        Graph
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        27
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        $12.80
                                    </td>
                                    <td className="px-6 py-4 text-sm text-[#333]">
                                        <div className=' h-6 w-24 text-[12px] text-white flex justify-center items-center font-bold  bg-blue-600 rounded-xl'>Company A</div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <div className=' h-28 w-full   sm:flex md:flex lg:flex xl:flex justify-between'>
                            <div className=' h-full w-80  flex  pl-4 items-end'>
                                <p className=' text-gray-500 text-sm'>Showing 1 to 3 of 5 items</p>
                            </div>
                            <div className=' h-full w-80  justify-end sm:justify-start md:justify-start lg:justify-start xl:justify-start  flex items-end'>
                                <div className=' h-8 w-56 bg-gray-300 rounded-xl flex overflow-hidden'>
                                    <button className=' h-full w-10 flex justify-center items-center '><RiSkipLeftLine /></button>
                                    <button className=' h-full w-10 flex justify-center items-center '><FaAngleLeft /></button>
                                    <button className=' h-full w-10 flex justify-center items-center bg-purple-500 '>1</button>
                                    <button className=' h-full w-10 flex justify-center items-center '>2</button>
                                    <button className=' h-full w-10 flex justify-center items-center '><FaAngleRight /></button>
                                    <button className=' h-full w-10 flex justify-center items-center '><RiSkipRightLine /></button>
                                  





                                </div>
                            </div>

                        </div>
                    </div>
                </div>




            </div>
        </>
    )
}
