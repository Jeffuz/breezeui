"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaClipboard, FaClipboardCheck } from "react-icons/fa6";
import React, { useState } from "react";

interface detailType {
  detail: ComponentType;
}

const DisplayBox = ({ detail }: detailType) => {
  const [copied, setCopied] = useState(<FaClipboard size={20} />);

  // Allow users to copy and paste
  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(<FaClipboardCheck size={20} />);
    setTimeout(() => {
      setCopied(<FaClipboard size={20} />);
    }, 2000);
  };

  return (
    <div className="max-w-3xl sm:mx-auto w-[100wh] mx-8">
      {/* Display Component */}
      <div className="flex flex-col my-5 border border-gray-300 rounded-lg shadow-lg bg-[#faf8f5]">
        {/* Heading */}
        <div className="flex flex-col justify-center p-4 border-b border-gray-300 rounded-t-lg">
          <div className="font-medium text-xl mb-2">{detail.name}</div>
          <div className="text-base text-gray-500">{detail.description}</div>
        </div>
        <div className="flex justify-center items-center p-4 border-b border-gray-300 rounded-t-lg">
          <div className="flex justify-center">{detail.component}</div>
        </div>
        <div className="relative mb-2">
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {detail.code}
          </SyntaxHighlighter>
          <button
            onClick={() => copyToClipboard(detail.code)}
            className="absolute top-4 right-4 p-2 border-2 border-gray-300  text-[#728fcb] hover:text-[#728fcb]/90 transition duration-300"
          >
            {copied}
          </button>
        </div>
        <div className="flex flex-col justify-center p-4 border-gray-300 border-t">
          <div className="font-medium text-xl">Usage</div>
          <div className="rounded-b-lg">
            <SyntaxHighlighter language="javascript" style={duotoneLight}>
              {detail.usage}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayBox;
