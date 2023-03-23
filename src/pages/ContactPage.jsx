import React from 'react'
import { useSelector } from 'react-redux'

function ContactPage() {
  const theme = useSelector((state) => state.theme)
  return (
    <div className='pt-[7rem] md:pt-[5rem] h-screen animate-blur-slide-down-10 p-3 sm:p-6 '>
      <div style={{
        color: theme.lightText,
      }} className=" pl-2  scroll text-[24px] leading-snug  mb-3 py-2 font-[800] uppercase rounded-full ">
        Connect with me
      </div>
    </div>
  )
}

export default ContactPage