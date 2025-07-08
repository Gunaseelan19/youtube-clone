import React from 'react'
import searchIcon from "../assets/icons/search.svg"
import micIcon from "../assets/icons/mic.svg"
import bellIcon from "../assets/icons/bell.svg"
export const Navbar = () => {
  return (
    <div className='h-[12vh] w-full flex justify-end items-center'>
        <div className="flex items-center gap-6 w-[65%]">
          <div className="w-[65%] flex ps-6 border border-[#262626] rounded-full">
            <input type="text" name="" id="" placeholder='Search' className='w-full py-2  outline-none' />
            <div className="rounded-r-full bg-[#262626] px-6 py-2 ">
              <img src={searchIcon} alt="" className='w-[25px] h-[25px]'/>
            </div>
          </div>
          <div className="bg-[#262626] w-[50px] h-[50px] flex justify-center items-center rounded-full">
              <img src={micIcon} alt="" className='w-[30px] h-[30px] cursor-pointer'/>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2 bg-[#262626] py-2 px-4 w-fit rounded-full">
            <p>+</p>
            <p>Create</p>
          </div>
          <div className="">
              <img src={bellIcon} alt="" className='w-[20px] h-[20px]'/>
          </div>
          <div className="w-[30px] h-[30px] rounded-full">
            <img className='rounded-full' src="https://yt3.googleusercontent.com/xBM9f3PJaEMKwZCYri4dwaWgYZ7CXE9kC-wnoZFZvy-HiczUu6KjSSu0Vb_cUHNpRnZM5Fz9hA=s160-c-k-c0x00ffffff-no-rj" alt="" />
          </div>
        </div>
    </div>
  )
}
