import { useState } from "react";
import FAQ from "./FAQ";
import Programs from "./Programs";
import Help from "./Help";
import We from "./We";

export default function About() {
  
  
  const [isFAQ, setFAQ] = useState(true);
  const [isWe, setWe] = useState(false);
  const [isHelp, setHelp] = useState(false);
  const [isPrograms, setPrograms] = useState(false);

  const setState = (stateSetter) => {
    setFAQ(false);
    setWe(false);
    setHelp(false);
    setPrograms(false);

    stateSetter(true);
    console.log(isWe);
  };


  return (
    <div className="md:mx-28 mx-14 mt-8 bg-[#e4e4e4]">
      <div className="flex flex-col justify-between py-20 px-16">
        <div className="flex justify-between">
          <h2 className="text-2xl font-bold">Know more about us!</h2>
          <div className="space-x-5 items-center text-center ">
            <button className="btnabout"onClick={()=>setState(setFAQ)}>Frequent Questions</button>
            <button className="btnabout"onClick={()=>setState(setWe)}>Who are we?</button>
            <button className="btnabout"onClick={()=>setState(setPrograms)}>Partner Programs</button>
            <button className="btnabout"onClick={()=>setState(setHelp)}>Help & Support</button>
          </div>
        </div>
        <div className="bg-[#FFFFFF] mt-8 pt-10 pb-4 pl-6 pr-3 flex-grow">
          { isFAQ && <FAQ/> }
          { isWe && <We/> }
          { isHelp && <Help/> }
          { isPrograms && <Programs/> }
        </div>
      </div>
    </div>
  );
}
