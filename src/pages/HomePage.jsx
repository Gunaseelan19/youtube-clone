import React from 'react'
import { Sidebar } from '../components/sidebar'
import { Navbar } from '../components/navbar'
import { Categories } from '../components/categories'
import { VideoGridLayout } from '../layouts/videoGridLayout'
import '../styles/HomePage.css'


export const HomePage = () => {
  return (
    <div>
      <div className="grid-layout">
        <Sidebar/>
        <div className="px-8">
          <div className="">
            <Navbar/>
            <Categories/>
          </div>
          <VideoGridLayout/>
        </div>
      </div>
    </div>
  )
}
