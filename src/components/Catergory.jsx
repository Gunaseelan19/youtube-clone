import React from 'react'

export const Catergory = ({cat}) => {
  return (
    <div>
    <p className={`${cat == "All" && 'bg-white text-[#0f0f0f]'} cursor-pointer text-nowrap py-1 px-3 rounded-md bg-[#262626]`}>{cat}</p>
    </div>
  )
}
