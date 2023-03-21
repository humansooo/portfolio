import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function NotFound() {
    const theme = useSelector((state) => state.theme)
    
  return (
    <div>
        <div style={{
        color: theme.lightText,
      }} className=" lg:w-56 pl-2 scroll text-[24px] animate-blur-in-0 leading-snug  mb-3 py-2 font-[800] uppercase rounded-full ">
            ERROR
      </div>
    </div>
  )
}

export default NotFound