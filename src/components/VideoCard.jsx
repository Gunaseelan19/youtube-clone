import React from 'react'

export const VideoCard = ({video}) => {


function formatViews(views) {
  // Remove commas and convert to number
  views = parseInt(String(views).replace(/,/g, ''), 10);

  if (isNaN(views)) return "0";

  if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (views >= 1_000) {
    return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return views.toString();
  }
}


function formatUploadTime(dateString) {
  const uploadDate = new Date(dateString);
  const now = new Date();
  const diff = now - uploadDate;

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`;
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`;
  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
}



  return (
    <div className="">
      <div className="">
        <img src="https://i.ytimg.com/vi_webp/gWw23EYM9VM/maxresdefault.webp" alt="" className='aspect-video rounded-xl' />
        <div className="pt-4 flex gap-4 items-start">
          <img src="https://img.jakpost.net/c/2019/09/03/2019_09_03_78912_1567484272._large.jpg" alt="" className='w-[35px] h-[35px] rounded-full'/>
          <div className="">
            <p className='truncate'>{video?.title}</p>
            <p className='text-[#ababab]'>{video?.author}</p>
            <p className='text-[#ababab]'>{formatViews(video?.views)} views • {formatUploadTime(video?.uploadTime)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
