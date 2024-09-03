import Marquee from "@/components/Marquee/Marquee";
import StatusMarquee from "@/components/Marquee/Status";
import LenisProvider from "@/layout/LenisProvider";
import img_1 from "../images/img-17.jpg";

export default function Home() {
  return (
    <>
      <LenisProvider>
        <div
          className="h-screen hero-bar bg-blue-300 "
          data-scroll-container
          style={{ backgroundImage: `url(${img_1})` }}
        ></div>
        <div className="h-screen bg-green-2 flex items-center ">
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
