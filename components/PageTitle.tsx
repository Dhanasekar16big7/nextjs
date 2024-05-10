import React from 'react'
import { cn } from '@/lib/utils'

type props = {
    title: string
    className?: string
}

const PageTitle = ({title, className} : props) => {
  return (
    <>
      <div className="bg-primary p-3 text-white">
        <div className='container w-full'>
            <h4 className={cn("md:text-2xl text-xl font-medium pl-0 ml-4 md:ml-0", className)}>{title}</h4>
        </div>
      </div>
    </>
  )
}

export default PageTitle
