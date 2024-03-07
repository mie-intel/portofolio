import Image from "next/image";

const Perkenalan = () => {
  return (
    <section className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 aspect-[938/505] w-[93.8%] bg-back">
        <div className="w-full h-full flex flex-row justify-between">
          <div className="relative aspect-[459/506] w-[48.9%]">
            <Image src="perkenalan.svg" alt="" fill />
          </div>
          <div className="relative aspect-[448/505] w-[47.7%] flex flex-col pr-[4%] text-fgcolor justify-center items-end">
            <div className="aspect-[448/200] w-[80%] pr-[6%] text-right gap-0 flex-col text-[6vw] font-bold">
              <span>Halo bg!</span>
              <br></br>
              <span>Aku Arya</span>
            </div>
            <div className="aspect-[448/50] w-[80%] pr-[6%] flex justify-center items-end flex-col">
              <div className="text-[2.8vw] font-semibold">
                Teknologi Informasi 23
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perkenalan;

/*
  Perkenalan
    Halo Gamada!  
    Polikarpus Arya Pradhanika
    Teknologi Informasi 23
*/
