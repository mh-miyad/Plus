import Marquee from "@/components/Marquee/Marquee";
import StatusMarquee from "@/components/Marquee/Status";
import LenisProvider from "@/layout/LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
        <div className="h-screen bg-red-300 " data-scroll-container></div>
        <div className="h-screen bg-green-2 flex items-center 00 ">
          <Marquee />
        </div>
        <div className="h-screen bg-purple-500  " data-scroll-container>
          <StatusMarquee />
        </div>
        <div className="h-screen bg-red-400 " data-scroll-container></div>
        <div className="h-screen bg-red-500 " data-scroll-container></div>
        <div className="h-screen bg-red-600 " data-scroll-container></div>
      </LenisProvider>
    </>
  );
}
