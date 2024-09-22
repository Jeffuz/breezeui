import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { duotoneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

const displayBox = ({ component = "test", name = "Button", description = "Displays a button or a component that looks like a button.", codeString = "test" }: any) => {

    return (
        <div className='flex flex-col w-full max-w-3xl sm:mx-auto mx-5'>
            {/* Heading */}
            <div className='font-bold text-2xl mb-2'>{name}</div>
            <div className='text-base text-gray-500'>{description}</div>
            {/* Display Component */}
            <div className='flex flex-col my-5 border border-gray-300 rounded-lg shadow-lg bg-[#faf8f5]'>
                <div className='flex justify-center items-center p-4 border-b border-gray-300 rounded-t-lg'>
                    <div className='flex justify-center'>{component}</div>
                </div>
                <div className='rounded-b-lg'>
                    <SyntaxHighlighter language="javascript" style={duotoneLight}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>
            {/* Usage */}
            <div className='font-bold text-2xl mt-5'>Usage</div>
            <div className='flex flex-col my-5 border border-gray-300 rounded-lg shadow-lg bg-[#faf8f5]'>
                <div className='rounded-b-lg'>
                    <SyntaxHighlighter language="javascript" style={duotoneLight}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>
            </div>   
        </div>
    )
}

export default displayBox