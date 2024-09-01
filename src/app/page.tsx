import Marquee from "@/components/Marquee/Marquee";
import LenisProvider from "@/layout/LenisProvider";

export default function Home() {
  return (
    <>
      <LenisProvider>
        <div className="h-screen bg-red-100 ">
          <Marquee />
        </div>
        <div className="h-screen bg-red-200 " data-scroll-container></div>
        <div className="h-screen bg-red-300 " data-scroll-container></div>
        <div className="h-screen bg-red-400 " data-scroll-container></div>
        <div className="h-screen bg-red-500 " data-scroll-container></div>
        <div className="h-screen bg-red-600 " data-scroll-container></div>
      </LenisProvider>
    </>
  );
}
