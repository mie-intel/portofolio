import Image from "next/image";
import Perkenalan from "./components/perkenalan";
import Skill1 from "./components/Skill1";

export default function Home() {
  return (
    <div className="bg-back w-full h-full min-h-fit font-sans">
      <Perkenalan />
      <Skill1 />
    </div>
  );
}

/*
  Perkenalan
    Halo Gamada!  
    Polikarpus Arya Pradhanika
    Teknologi Informasi 23
*/
