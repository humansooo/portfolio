import React from 'react'
import { aboutMe } from '../data'
import { useSelector } from 'react-redux'


function AboutBanner() {
  const theme = useSelector((state) => state.theme)

  const randomColor = () => {
    const colors = ['#ff5757', '#ff9d57', '#9e83ff', '#a4a4a4', '#636793']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div style={{background: randomColor()}} className={` w-full h-[700px] overflow-auto p-8 rounded-[20px] `}>
        <div>
            <h1 style={{color: theme.primary}} className=' text-6xl max-md:text-3xl font-[900] '>{aboutMe.title}'</h1>
        </div>
        <div className=' mt-6  '>
            <h1 style={{color: theme.primary}} className=' text-4xl max-md:text-3xl font-[900] '>{aboutMe.description}'</h1></div>
    </div>
  )
}

export default AboutBanner