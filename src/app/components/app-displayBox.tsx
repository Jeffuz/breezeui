import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { duotoneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

interface detailType {
  detail: ComponentType;
}

const displayBox = ({ detail }: detailType) => {
  return (
    <div className="flex flex-col w-full max-w-3xl sm:mx-auto mx-5">
      {/* Heading */}
      <div className="font-bold text-xl mb-2">{detail.name}</div>
      <div className="text-base text-gray-500">{detail.description}</div>
      {/* Display Component */}
      <div className="flex flex-col my-5 border border-gray-300 rounded-lg shadow-lg bg-[#faf8f5]">
        <div className="flex justify-center items-center p-4 border-b border-gray-300 rounded-t-lg">
          <div className="flex justify-center">{detail.component}</div>
        </div>
        <div className="rounded-b-lg">
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {detail.code}
          </SyntaxHighlighter>
        </div>
      </div>
      {/* Usage */}
      <div className="font-bold text-2xl mt-5">Usage</div>
      <div className="flex flex-col my-5 border border-gray-300 rounded-lg shadow-lg bg-[#faf8f5]">
        <div className="rounded-b-lg">
          <SyntaxHighlighter language="javascript" style={duotoneLight}>
            {detail.usage}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default displayBox;
