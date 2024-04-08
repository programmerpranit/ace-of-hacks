"use client";
import type { ParticipantType } from "@/types/mongo";

import Image from "next/image";
import React, { useRef } from "react";

import { toPng } from "html-to-image";
const Certificate = ({
  participant,
}: {
  participant: ParticipantType;
}): JSX.Element => {
  const certHTML = useRef<HTMLDivElement | null>(null);

  const downloadCertificate = async (): Promise<void> => {
    const img = await toPng(certHTML.current as HTMLElement);
    const link = document.createElement("a");
    link.download = "AOHcertificate.png";
    link.href = img;
    link.click();
  };

  return (
    <>
      <div className=" my-20 flex flex-col items-center justify-center">
        <div
          ref={certHTML}
          className="relative flex  h-[707px] w-[1000px] justify-center bg-red-300"
        >
          <Image className="" src={"/cert.png"} fill alt="" />
          <h2 className="absolute top-72 text-center italic text-black">
            {participant.fname} {participant.lname}
          </h2>
        </div>

        <button
          onClick={() => {
            void downloadCertificate();
          }}
          className="m-5 bg-secondary"
        >
          Download Certificate
        </button>
      </div>
    </>
  );
};

export default Certificate;
