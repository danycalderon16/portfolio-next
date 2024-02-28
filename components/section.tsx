import React from 'react'

interface Props {
  children: React.ReactNode;
  id: string
}

export const Section = ({children, id}:Props) => {
  return (
    <section id={id} className='pt-[70px] mb-4'>
      {children}
    </section>
  )
}
