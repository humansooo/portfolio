import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function AboutPage() {
    const theme = useSelector((state) => state.theme)

  return (
    <div className='  p-3 sm:p-6 pt-[7rem] sm:pt-[8rem] lg:pt-[5rem] h-screen animate-blur-slide-down-10 '>
      <div style={{
        color: theme.lightText,
      }} className=" lg:w-56 pl-2 scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full ">
            abut me
      </div>

    </div>
  )
}

export default AboutPage