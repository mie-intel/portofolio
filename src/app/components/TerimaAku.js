import Image from "next/image";
import Link from "next/link";

const TerimaAku = () => {
  return (
    <section className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 aspect-[938/505] w-[93.8%] bg-back">
        <div className="w-full h-full flex flex-row justify-end">
          <div className="relative aspect-[550/505] w-[50%] flex flex-col pr-[4%] text-right text-fgcolor justify-center items-end">
            <div className="aspect-[550/150] w-full pr-[6%] text-right gap-0 flex-col text-[4vw] font-bold">
              Terima aku yach kakack kakack 👉👈
            </div>
            <div className="aspect-[550/75] w-full pr-[6%] my-[3%] flex text-right gap-[3%] flex-row justify-end items-center text-[4vw] font-bold">
              <Link
                target="_blank"
                href="https://www.instagram.com/paryapradhanika/"
                className="relative aspect-[1/1] w-[10%]"
              >
                <Image src="ig.svg" alt="" fill />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/polikarpus-arya-pradhanika-2133b5256/"
                className="relative aspect-[1/1] w-[10%]"
              >
                <Image src="linked.svg" alt="" fill />
              </Link>
            </div>
            <div className="aspect-[550/40] w-full pr-[6%] text-right gap-0 flex-col flex justify-center text-[2.1vw] font-bold">
              <span>ada mama masak bawang</span>
              <span>terima gw bg</span>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute aspect-[502/515] w-[50%] z-20 left-[-1.2%] bottom-[3.4%]">
        <Image src="terimaaku.svg" alt="" fill />
      </div>
    </section>
  );
};

export default TerimaAku;
