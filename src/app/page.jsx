import Image from "next/image";
import FrontEnd from "./components/FrontEnd";
import DP from "./components/DP";
import Quote from "./components/Quote";

export default function Home() {
  return (
    <>
      {/* Main Container */}
      <div className="w-full h-screen flex flex-wrap justify-center items-center">
        <div className="lg:w-1/2 md:w-10/12 w-[90%] h-full border border-opacity-20 rounded-md shadow-lg flex flex-wrap lg:justify-between justify-start">
          <div className="w-full h-auto flex md:flex-row flex-col md:justify-around justify-center items-center gap-8">
            <FrontEnd />
            <DP />
          </div>
          <Quote />
        </div>
      </div>
    </>
  );
}
