import React from "react";
import Sidebar from "@/app/components/app-sidebar";
import DisplayBox from "@/app/components/app-displayBox";
import SmallButton from "@/app/components/SmallButton";
import smallButtonCode from "!!raw-loader!@/app/components/SmallButton";
import MediumButton from "@/app/components/MediumButton";
import mediumButtonCode from "!!raw-loader!@/app/components/MediumButton";
import LargeButton from "@/app/components/LargeButton";
import largeButtonCode from "!!raw-loader!@/app/components/LargeButton";

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

  const mediumButton: ComponentType = {
    name: "Medium Button",
    description: "A medium button component that can be disabled or enabled.",
    component: (
      <div className="flex gap-3">
        <MediumButton />
        <MediumButton disabled={true} />
      </div>
    ),
    code: mediumButtonCode,
    usage: `<MediumButton/>
<MediumButton disabled={true}/>`,
  };

  const largeButton: ComponentType = {
    name: "Large Button",
    description: "A large button component that can be disabled or enabled.",
    component: (
      <div className="flex gap-3">
        <LargeButton />
        <LargeButton disabled={true} />
      </div>
    ),
    code: largeButtonCode,
    usage: `<LargeButton/>
<LargeButton disabled={true}/>`,
  };

  return (
    <div className="flex justify-center gap-10 overflow-x-hidden">
      <Sidebar />
      <div className="flex flex-col m-4 w-screen max-w-3xl">   
        {/* Header Information for Page */}
        <div className="mb-10 flex flex-col gap-2 sm:mx-0 mx-8">
          <div className="font-bold text-4xl">Button</div>
          <div className="text-base text-gray-500">
            Displays a button or a component that looks like a button.
          </div>
          <div className="border-b-2" />
        </div>
        <DisplayBox detail={smallButton} />
        <div className="border-b-2 my-5" />
        <DisplayBox detail={mediumButton} />
        <div className="border-b-2 my-5" />
        <DisplayBox detail={largeButton} />
      </div>
    </div>
  );
};

export default page;
