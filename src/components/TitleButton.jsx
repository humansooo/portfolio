import React from 'react'
import { useState } from 'react';
import { RandomReveal } from 'react-random-reveal';
import { useNavigate } from 'react-router-dom'

const TitleButton = ({project, theme, small}) => {
    const [hover,setHover] = useState(false);
    const navigate = useNavigate();

    return (
        <div
            style={{ color: theme.text }}
            onMouseEnter={() => {
                setHover(!hover)
            }}
            onMouseLeave={() => {
                setHover(!hover)
            }}
            className={" text-5xl max-md:text-2xl font-[700] cursor-pointer w-fit "
                + (small && 'text-xl')
            }
            onClick={() => {
                navigate(`/Projects/${project.title.split('#')[1]}`, { state: project })
            }}
        >
            {
                hover ? <RandomReveal isPlaying={true} duration={0.5} revealDuration={0.9} revealEasing='easeInQuad' characters={project.title} /> : `${project.title}`
            }

        </div>
    )
}

export default TitleButton