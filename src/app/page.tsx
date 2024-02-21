import Image from "next/image";
import React from "react";

export default function Home(): JSX.Element {
  return (
    <>
      <div className="relative flex h-screen w-screen flex-col items-center justify-center">
        <div className="absolute -z-50 flex h-screen w-screen justify-evenly">
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
          <div className="h-full w-0.5 bg-gray-700 opacity-20"></div>
        </div>

        <Image
          src={"/images/acpce-dark-logo.png"}
          width={250}
          height={250}
          alt=""
          className="absolute left-5 top-5"
        />
        <Image
          src={"/images/blu-circles.png"}
          width={150}
          height={150}
          alt=""
          className="animate-cross absolute right-0 top-0"
        />
        <Image
          src={"/images/blu-decor.png"}
          className="transition-duration-5 absolute -left-20 animate-spin"
          width={180}
          height={180}
          alt=""
        />
        <Image
          className="absolute left-[40vw] top-10 animate-bounce"
          src={"/images/yellow-deco.webp"}
          width={100}
          height={100}
          alt=""
        />

        <h1 className="text-9xl font-extrabold">
          {" "}
          <span className="text-primary"> Ace </span>of{" "}
          <span className="text-secondary"> Hacks</span>
          <span className="text-primary">.</span>
        </h1>

        <div className="mt-10 animate-pulse rounded-full border border-secondary px-20 py-2 ">
          <p className="spacing text-4xl font-semibold">COMING SOON</p>
        </div>

        <div className="absolute bottom-10  mt-10 rounded-full border border-secondary px-10 py-1 ">
          <p className="pb-1 text-xl font-semibold text-secondary">2024</p>
        </div>
      </div>
    </>
  );
}