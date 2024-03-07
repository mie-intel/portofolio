import Image from "next/image";

const Inovasi = () => {
  const inoList = [
    { pic: "one.svg", text: "Sistem Branch per Fitur" },
    { pic: "two.svg", text: "Fully make persen % (bukan px)" },
    { pic: "three.svg", text: "Aku ada kenalan ketua ukm karate kalo mau :V" },
  ];
  return (
    <section id="inovasi" className="relative aspect-[1003/563] bg-cyan w-full">
      <div className="absolute mx-auto my-auto z-2 right-0 left-[1.5%] top-[2%] bottom-0 aspect-[938/505] w-[93.8%] bg-darkcyan"></div>
      <div className="absolute mx-auto my-auto z-[10] right-0 left-0 top-0 bottom-0 flex flex-col justify-start items-center aspect-[938/505] w-[93.8%] bg-back">
        <div className="aspect-[938/50] mt-[5%] text-[3.8vw] text-fgcolor font-bold flex justify-center items-center text-center w-full">
          <div>Jd inovasi gw gini bg</div>
        </div>
        <div className="aspect-[938/350] w-full flex flex-col justify-evenly gap-[2%] items-center">
          {inoList.map((item, index) => {
            return (
              <div
                key={index}
                className="aspect-[938/125] flex justify-start gap-[3%] w-[60%]"
              >
                <div className="relative aspect-[102/74] w-[17%]">
                  <Image src={item.pic} alt="" fill />
                </div>
                <div className="aspect-[600/74] w-[80%] flex items-center font-bold text-fgcolor text-[2vw]">
                  {item.text}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Inovasi;
