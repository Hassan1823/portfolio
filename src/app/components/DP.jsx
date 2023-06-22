import Image from 'next/image'
import React from 'react'

function DP() {
  return (
    <div className='h-72 md:w-[30%] w-[50%] border border-opacity-20 rounded-md relative md:inline hidden'>
        <Image src='/../public/dp1.jpg' alt='dp' fill='true' className='object-center w-[100%] h-[100%] absolute hover:scale-105 hover:duration-300 rounded-md'/>
    </div>
  )
}

export default DP