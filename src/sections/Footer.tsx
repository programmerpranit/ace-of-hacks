import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = (): JSX.Element => {
  return (
    <>
      <div className="mt-20 border-t-2 border-gray-700 bg-[#1d2749] p-5 md:pt-20">
        <div className="mx-auto flex max-w-7xl flex-col md:flex-row">
          <div className="md:w-1/4">
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
            <p>Empowering Innovation</p>
          </div>
          <div className="md:w-1/4">
            <h3>Quick Links</h3>
            <Link href={"/code-of-conduct"}>
              <p className="text-white hover:text-secondary">Code of Conduct</p>
            </Link>
            <Link href={"/team"}>
              <p className="text-white hover:text-secondary">Our Team</p>
            </Link>
          </div>
          <div className="md:w-1/4">
            <h3>Contact</h3>
            <a
              className="text-white hover:text-secondary"
              href="mailto:fardin8samir@gmail.com"
            >
              <p>fardin8samir@gmail.com</p>
            </a>
            <a
              className="text-white hover:text-secondary"
              href="tel:918412875662"
            >
              <p>+91 84128 75662</p>
            </a>
          </div>
          <div className="md:w-1/4">
            <h3>Address</h3>
            <p>A. C. Patil College of Engineering. Kharghar</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.754038585022!2d73.05895307520417!3d19.030556982164715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c24052e100f3%3A0xb6e3e4259b43a898!2sA.%20C.%20Patil%20College%20of%20Engineering!5e0!3m2!1sen!2sin!4v1708847205696!5m2!1sen!2sin"
              width="250"
              height="100"
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="pt-20 text-center">
          <p>Made with ♥ from DevHigh</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
