import React from 'react'
import Sidebar from '@/app/components/app-sidebar'
import DisplayBox from '@/app/components/app-displayBox'

import SmallButton from '@/app/components/smallButton'

const page = () => {
  const smallComponent = 
  <div className='flex gap-3'>
    <SmallButton/>
    <SmallButton disabled={true}/>
  </div>
  
  return (
    <div className='flex'>
      <Sidebar />
      <DisplayBox component={smallComponent}/>
    </div>
  )
}

export default page