import React from "react";
import Sidebar from "@/app/components/app-sidebar";
import DisplayBox from "@/app/components/app-displayBox";
import SmallButton from "@/app/components/smallButton";
import smallButtonCode from "!!raw-loader!../../components/smallButton";

const page = () => {
  const smallButton: ComponentType = {
    name: "Small Button",
    description: "A small button component that can be disabled or enabled.",
    component: (
      <div className="flex gap-3">
        <SmallButton />
        <SmallButton disabled={true} />
      </div>
    ),
    code: smallButtonCode,
    usage: `<SmallButton/>
<SmallButton disabled={true}/>`,
  };

  return (
    <div className="flex justify-center">
      <Sidebar />
      <div className="flex flex-col m-4 overflow-y-auto">
        {/* Header Information for Page */}
        <div className="mb-10">
          <div className="font-bold text-3xl mb-2">Button</div>
          <div className="text-base text-gray-500">
            Displays a button or a component that looks like a button.
          </div>
        </div>
        <DisplayBox detail={smallButton} />
      </div>
    </div>
  );
};

export default page;
