import Image from "next/image";
import Perkenalan from "./components/perkenalan";
import Skill1 from "./components/Skill1";
import TerimaAku from "./components/TerimaAku";
import Website from "./components/website";
import Inovasi from "./components/Inovasi";

export default function Home() {
  return (
    <div className="bg-back w-full h-screen min-h-fit font-sans">
      <Perkenalan />
      <Skill1 />
      <Website />
      <Inovasi />
      <TerimaAku />
    </div>
  );
}
