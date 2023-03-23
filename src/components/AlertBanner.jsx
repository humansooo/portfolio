import React from 'react'

function AlertBanner({title}) {
  return (
    <div className={' alert fixed top-10 left-1/2 bg-[#e5e5e578] duration-300 ease-in-out backdrop-blur-[5px] translate-y-[-150%] shadow-[#00000051] shadow-2xl rounded-3xl translate-x-[-50%]  p-3 z-[9999999] '
    + setTimeout(() => {
        document.querySelector('.alert').classList.remove('translate-y-[-150%]')
        document.querySelector('.alert').classList.add('translate-y-0')
    }, 300) + setTimeout(() => {
        document.querySelector('.alert').classList.remove('translate-y-0')
        document.querySelector('.alert').classList.add('translate-y-[-150%]')
        document.querySelector('.alert').classList.add('shadow-sm')

    }, 3000) + setTimeout(() => {
        document.querySelector('.alert').classList.add("hidden")
    }, 3300)
    }>
        <div className='border flex border-[#00000047] p-4 rounded-2xl '>
            <h1 className=' w-full text-center font-bold text-[#1c1c1c] '>
                {title}
            </h1>
        </div>
    </div>
  )
}

export default AlertBanner