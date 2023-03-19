import React from 'react'
import { Link } from 'react-router-dom'
import { setTheme } from '../states'
import { useSelector, useDispatch } from 'react-redux'
import NavButton from './NavButton'
import { navlinks } from '../data'

function Navbar() {
  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme)
  return (
    <div className=' w-full h-[44px] flex flex-row justify-end gap-3 '>
      {navlinks.map((link) => (

        <NavButton 
        key={link.id}
          theme={theme}
          to={link.path}
          text={link.title}
          icon={'>'}
          length={link.data.length}
        />
      ))}
      <NavButton 
          theme={theme}
          to={''}
          text={ theme.mode !== 'dark' ? <img src="https://cdn-icons-png.flaticon.com/512/5043/5043139.png" width="24" height="26" alt="Moon free icon" title="Moon free icon"></img> : <img src="https://cdn-icons-png.flaticon.com/512/1687/1687737.png" className=' invert
           ' width="24" height="24" alt="Brightness free icon" title="Brightness free icon"></img>}
          // icon={'>'}
          onClick={() => {
            dispatch(setTheme());
          }
          }
        />
    </div>
  )
}

export default Navbar