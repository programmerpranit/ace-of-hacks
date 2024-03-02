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
        <h2 className="pt-20 text-secondary">Title</h2>
        <div className="flex flex-wrap items-center justify-evenly ">
          <Image
            className="h-24 w-72 rounded bg-white object-contain p-4"
            src={"/images/postman-logo.webp"}
            alt="Postman"
            width={300}
            height={270}
          />
        </div>
        <h2 className="pt-20 text-secondary">Gold</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-5 ">
          <Image
            className="h-24 w-72 rounded bg-white object-contain p-1"
            src={"/images/letsupgrade.png"}
            alt=""
            width={300}
            height={270}
          />
          <Image
            className="h-24 w-72 rounded bg-white object-contain"
            src={"/images/devfolio2.png"}
            alt="DEVFOLIO LOGO"
            width={300}
            height={270}
          />
        </div>
        <h2 className="pt-20 text-secondary">Silver</h2>
        <div className="flex flex-wrap items-center justify-evenly gap-5">
          <Image
            className="h-24 w-72 rounded bg-white object-contain "
            src={"/images/polygon2.png"}
            alt="POLYGON LOGO"
            width={250}
            height={200}
          />
          <Image
            className="h-24 w-72 rounded bg-white object-contain "
            src={"/images/ethindia2.png"}
            alt="ETHINDIA LOGO"
            width={250}
            height={200}
          />
        </div>
      </div>
    </>
  );
};

export default Sponsors;
