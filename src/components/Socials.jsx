import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Socials({data}) {
  const theme = useSelector((state) => state.theme)
  return (
    <a
      style={{ color: theme.lightText }}
      href={data.path}
      target="_blank"
      className={
        ` max-sm:text-sm max-sm:p-2 duration-500 h-full p-3 flex justify-between items-center border-[2px] rounded-full ` +
        `${
          theme.mode === "light" ? "border-[#00000056]" : "border-[#ffffff24]"
        } `
      }
    >
      
      <img src={data.logo} className={" grayscale h-[16px] mx-[2px] max-sm:h-[16px] " + `${theme.mode === 'dark' && 'invert'}`} alt="" />
    </a>
  )
}
 
export default Socials