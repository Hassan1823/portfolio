import Image from 'next/image'
import React from 'react'

function loading() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <Image src='/spinner.gif' alt='spinner' width={400} height={400} className='object-contain' />
    </div>
  )
}

export default loading