import Image from 'next/image'
import React from 'react'
import { FaAndroid, FaGoogle, FaJava } from 'react-icons/fa'
import { SiAndroidstudio, SiFirebase } from 'react-icons/si'

export function ProjectItem() {
  return (
    <div  className='border rounded-md p-4 max-w-[200px]'>
      <Image
        src="/profile.jpeg"
        width={100}
        height={100}
        alt='demo'
      />
      <h3>App de prestamos</h3>
      <p>Aplicacion Android para llevar un control de prestamos</p>
      <div className='flex gap-2 align-middle items-center'>
        <FaAndroid className="text-light dark:text-dark" size={20}/>
        <FaJava className="text-light dark:text-dark" size={20}/>
        <SiAndroidstudio className="text-light dark:text-dark" size={20}/>
        <SiFirebase className="text-light dark:text-dark" size={20}/>
        <FaGoogle className="text-light dark:text-dark" size={20}/>

      </div>
    </div>
  )
}
