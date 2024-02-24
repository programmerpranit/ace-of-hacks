import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="mt-20 border-t-2 border-gray-700 p-5 md:py-40">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          <div className="md:w-1/3">
            <Image
              src={"/images/acpce-dark-logo.png"}
              width={150}
              height={150}
              alt=""
              className="max-md:w-40"
            />
            <h2 className="pt-5">
              <span className="text-primary"> Ace </span>of{" "}
              <span className="text-secondary"> Hacks</span>
              <span className="text-primary">.</span>
            </h2>
            <p>Explore Everything</p>
          </div>
          <div className="md:w-1/3">
            <h3>Quick Links</h3>
            <Link href={"/code-of-conduct"}>
              <p className="text-white hover:text-secondary">Code of Conduct</p>
            </Link>
          </div>
          <div className="md:w-1/3">
            <h3>Contact</h3>
            <a
              className="text-white hover:text-secondary"
              href="mailto:fardin8samir@gmail.com"
            >
              <p>fardin8samir@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
