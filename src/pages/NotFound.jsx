import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

function NotFound() {
    const theme = useSelector((state) => state.theme)
    
  return (
    <div className=' flex justify-center items-center min-h-screen '>
        <div style={{
        color: theme.lightText,
      }} className=" text-5xl font-black ">
            ERROR
      </div>
    </div>
  )
}

export default NotFound