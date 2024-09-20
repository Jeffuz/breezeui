import Link from 'next/link';
import React from 'react'

const sidebar = () => {
  const started: string[] = ["introduction"];
  const components: string[] = ["navbar", "button"].sort();
  return (
    <div className='p-4 sm:flex hidden'>
      <div className='flex flex-col overflow-y-auto text-base text-gray-500'>
        {/* Getting Started */}
        <div className='text-black text-lg mb-2'>
          Getting Started
        </div>
        <ul>
          {/* change href for link if have more elements in started array */}
          {started.map((item, index) => <li key={index} className='mb-2 capitalize'><Link href={"/docs"}>{item}</Link></li>)}
        </ul>
        {/* Components */}
        <div className='text-black text-lg mb-2'>
          Components
        </div>
        <ul>
          {components.map((component, index) => <li key={index} className='mb-2 capitalize'><Link href={`/docs/components/${component}`}>{component}</Link></li>)}
        </ul>
      </div>
    </div>
  )
}

export default sidebar