import React from 'react'
import { aboutMe } from '../data'

function AboutBanner() {
  return (
    <div className=' w-full  '>
        <div>
            <h1>{aboutMe.title}</h1>
        </div>
    </div>
  )
}

export default AboutBanner