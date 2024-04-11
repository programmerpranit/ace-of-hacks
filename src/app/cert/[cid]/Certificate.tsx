"use client";
import type { ParticipantType } from "@/types/mongo";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

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

  useEffect(() => {
    // Disable right-click
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    function ctrlShiftKey(e: any, keyCode: any): any {
      return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
    }

    document.onkeydown = (e) => {
      // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
      if (
        e.keyCode === 123 ||
        ctrlShiftKey(e, "I") ||
        ctrlShiftKey(e, "J") ||
        ctrlShiftKey(e, "C") ||
        (e.ctrlKey && e.keyCode === "U".charCodeAt(0))
      )
        return false;
    };
  }, []);

  return (
    <>
      <div className=" my-20 flex flex-col md:items-center md:justify-center">
        <h3 className="p-7">
          Hey, {participant.fname} Your certificate is here
        </h3>

        <div
          ref={certHTML}
          className="relative flex h-[707px] w-[1000px] justify-center bg-red-300"
        >
          <Image
            onContextMenu={(e) => {
              e.preventDefault();
              return false;
            }}
            className="pointer-events-none"
            src={"/hacks.png"}
            fill
            alt=""
          />
          <h2 className="pointer-events-none absolute top-[320px] text-center italic text-black">
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
