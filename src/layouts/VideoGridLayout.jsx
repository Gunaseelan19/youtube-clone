import React, { useEffect, useState } from 'react'
import { VideoCard } from '../components/videoCard';

export const VideoGridLayout = () => {

  const [data,setData] = useState([])

  async function getVideoDetails(){
    try {
      const res = await fetch('https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json');
      const result = await res.json()
      setData(result)
    } catch (error) {
      console.log(error)  
    }
  }

  useEffect(()=>{
    getVideoDetails()
  },[])

  return (
    <div className='grid pt-4 overflow-y-scroll no-scrollbar  h-[80vh] grid-cols-3 gap-2.5'>
        {data.map((video,i)=><VideoCard video={video} key={i}/>)}
    </div>
  )
}
