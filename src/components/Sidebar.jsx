import React from 'react'
import menu from "../assets/icons/menu.svg"
import home from "../assets/icons/home.svg"
import history from "../assets/icons/history.svg"
import playlist from "../assets/icons/playlist.svg"
import video from"../assets/icons/video.svg"
import time from"../assets/icons/time.svg"
import thumbs from"../assets/icons/thumbs.svg"
import settings from"../assets/icons/settings.svg"
import youtubep from"../assets/icons/youtubep.svg"
import youtubemusic from"../assets/icons/youtubemusic.svg"
import youtubestudio from"../assets/icons/youtubestudio.svg"
import youtubekids from"../assets/icons/youtubekids.svg"
import reels from"../assets/icons/reels.svg"
import sub from"../assets/icons/sub.svg"
import help from"../assets/icons/help.svg"
import flag from"../assets/icons/flag.svg"
import mas from"../assets/icons/mas.svg"
import logo from "../assets/images/logo.png"

export const Sidebar = () => {


  const menus = [
    {
      icon: home,
      title: "Home"
    },
    {
      icon: reels,
      title: "Shorts"
    },
    {
      icon: sub,
      title: "Subscription"
    },
  ]
  
  const menusYou = [
    {
      icon: history,
      title: "History"
    },
    {
      icon: playlist,
      title: "playlists"
    },
    {
      icon: video,
      title: "your Video"
    },
     {
      icon: time,
      title: "watch Later"
    },
    {
      icon: thumbs,
      title: "liked Video"
    },
  ]
  const more = [
    {
      icon: youtubep,
      title: "YouTube premium"
    },
    {
      icon: youtubestudio,
      title: "YouTube Studio"
    },
    {
      icon: youtubemusic,
      title: "YouTube Music"
    },
     {
      icon: youtubekids,
      title: "YouTube Kids"
    },
  ]
  const moretwo = [
    {
      icon: settings,
      title: "Settings"
    },
    {
      icon: flag,
      title: "Report history"
    },
    {
      icon: help,
      title: "Help"
    },
     {
      icon: mas,
      title: "Send feedback"
    },
  ]

  const MenuCom = ({ details }) => {
    return (
      <div className='flex gap-6 py-3 rounded-xl px-4 transition-all items-center cursor-pointer hover:bg-[#262626]'>
        <img src={details.icon} alt="" className='w-[20px]  h-[20px]'/>
        <p>{details.title}</p>
      </div>
    );
  };


  return (
    <div className='w-[300px] px-4 h-screen overflow-y-scroll'>
      <div className="w-fit fixed top-0 flex h-[12vh] bg-[#0f0f0f] items-center py-2 gap-4 px-4 ">
            <img src={menu} alt="menu" className='w-[30px]  h-[30px]'/>
            <img src={logo} alt="logo" className=''/>
      </div>

      <div className="flex flex-col gap-2 mt-[12vh]">
          {menus.map((m, index) => (
            <MenuCom details={m} key={index} />
          ))
          }
      </div>
      <hr className='my-6 text-[#262626]'/>
      <div className="flex flex-col gap-2 ">
          {menusYou.map((m, index) => (
            <MenuCom details={m} key={index} />
          ))
          }
      </div>
      <hr className='my-6 text-[#262626]'/>
      <div className="flex flex-col gap-2 ">
          {more.map((m, index) => (
            <MenuCom details={m} key={index} />
          ))
          }
      </div>
      <hr className='my-6 text-[#262626]'/>
      <div className="flex flex-col gap-2 ">
          {moretwo.map((m, index) => (
            <MenuCom details={m} key={index} />
          ))
          }
      </div>

    </div>
  )
}
