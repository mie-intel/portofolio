import { transform } from "next/dist/build/swc";
import DefaultBox from "./DefaultBox";
import Image from "next/image";

const Skill1 = () => {
  return (
    <DefaultBox>
      <div className="w-full h-full flex flex-row justify-between">
        <div className="relative aspect-[448/505] w-[47.7%] flex flex-col pr-[4%] text-fgcolor justify-center items-end">
          <div className="aspect-[448/200] w-[80%] pr-[6%] text-left gap-0 flex-col text-[4.8vw] font-bold">
            <span>Aku </span>
            <span>cepat</span>
            <br></br>
            <span>bikin website</span>
          </div>
        </div>
        <div className="relative aspect-[459/506] w-[48.9%]">
          <Image src="Skill1.svg" alt="" fill />
        </div>
      </div>
    </DefaultBox>
  );
};

export default Skill1;
