import React from 'react'
import { useSelector } from 'react-redux'

function ContactPage() {
  const theme = useSelector((state) => state.theme)
  return (
    <>
      <div style={{
        color: theme.lightText,
      }} className=" pl-2 scroll text-[24px] animate-blur-in-0 leading-snug  mb-3 py-2 font-[800] uppercase rounded-full ">
        Connect with me
      </div>
    </>
  )
}

export default ContactPage