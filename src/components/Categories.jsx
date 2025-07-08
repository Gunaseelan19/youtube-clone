import React from 'react'
import { Catergory } from './catergory'

export const Categories = () => {

  const arr = [
    "All",
    "Music",
    "Tamil Cinema",
    "JavaScript",
    "Mixes",
    "Web series",
    "Data Structures",
    "Skills",
    "Gaming",
    "Live",
    "Information Technology"
  ];


  return (
    <div className='flex gap-2 pb-6'>
      {arr.map((cat,i)=><Catergory cat={cat} key={i}/>)}
    </div>
  )
}
