import Image from "next/image";
import React from "react";
// import Snoopy from './../public/snoopy'

function FrontEnd() {
  return (
    <div className="hover:border border-opacity-20 rounded-md hover:shadow-md hover:scale-105 hover:duration-300 w-1/2 h-60 flex flex-col justify-around items-center bg-white ">
      <Image
        src="/../public/snoopy.png"
        alt="logo"
        width={200}
        height={100}
        className="object-contain"
      />
      <span className="mb-8 text-xl font-semibold">
        A Front-End Developer
      </span>
    </div>
  );
}

export default FrontEnd;
