import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../states'

function FloatingBtn() {

    const dispatch = useDispatch()
    const theme = useSelector((state) => state.theme)
    const [toggle, setToggle] = useState(false)

    const toggleTheme = () => {
        dispatch(setTheme())
    }

    // toggle close after 2s

    const delayToggle = () => {
        setTimeout(() => {
            setToggle(!toggle)
        }, 2000)
    }
    
  return (
    <div
        style={{
          transform: toggle ? "translateX(0%)" : "translateX(-80%)",
          // transform: toggle ? "rotate(0deg)" : "rotate(10deg)",
          transition: "transform 0.2s ease-in-out",
        }}
        className=" fixed flex flex-row bottom-8 left-0 cursor-pointer "
      >
        <div
          onClick={toggleTheme}
          className=" font-[900] items-center justify-center rounded-full mx-5 flex bg-[#0000007e] px-6 py-1 backdrop-blur-sm cursor-pointer "
        >
          {theme.mode}
        </div>
        <div
          onClick={() => setToggle(!toggle) + delayToggle()}
          className=" p-2 bg-[black] text-white rounded-full h-[24px] ml-[-4px] mt-[4px] w-[24px] flex justify-center items-center "
        >
          <div
            style={{ transform: toggle ? "rotate(180deg)" : "rotate(0deg)" }}
          >
            {">"}
          </div>
        </div>
      </div>
  )
}

export default FloatingBtn