import Image from "next/image";
import React from "react";
/**
 *
 * Devfolio Gold
 * Eth india , Polygon   Silver
 *
 *
 */
const Sponsors = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-20 max-w-7xl py-10 text-center">
        <h2 className=" text-center">Our Sponsors</h2>
        <h2 className="pt-20 text-secondary">Gold</h2>
        <div className="flex flex-wrap items-center justify-center">
          <Image
            className="rounded bg-white px-10 py-6"
            src={"/images/devfolio1.png"}
            alt="Devfolio"
            width={270}
            height={200}
          />
        </div>
        <h2 className="pt-20 text-secondary">Silver</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-5">
          <Image
            className="rounded bg-white"
            src={"/images/polygon.png"}
            alt=""
            width={250}
            height={200}
          />
          <Image
            className="rounded bg-white p-5"
            src={"/images/ethindia.png"}
            alt=""
            width={250}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
