"use client";

import Image from "next/image";
import React, { useState, type Dispatch, type SetStateAction } from "react";

const FAQ = (): JSX.Element => {
  const [active, setActive] = useState<number>(1);
  return (
    <>
      <div className="mx-auto my-20 max-w-7xl p-5 py-10">
        <h2 className="text-center text-5xl">FAQ</h2>
        <AccordItem
          numb={1}
          question="Is there a Registration fee to participate in Ace Of Hacks
          2024?"
          answer="No, Ace Of Hacks does not charge you or your team any fee to participate in
          the hackathon."
          active={active}
          setActive={setActive}
        />
        <AccordItem
          numb={2}
          question="What are the team formation rules?"
          answer="No. of team members: 2 - 4 A participant cannot be a part of multiple teams simultaneously"
          active={active}
          setActive={setActive}
        />
      </div>
    </>
  );
};

export default FAQ;

interface IAccord {
  question: string;
  answer: string;
  numb: number;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
}

const AccordItem = ({
  question,
  answer,
  numb,
  active,
  setActive,
}: IAccord): JSX.Element => {
  return (
    <div className="mt-10">
      <div
        onClick={() => {
          setActive((prev) => (prev === numb ? 0 : numb));
        }}
        className="flex cursor-pointer items-center justify-between"
      >
        <p className="text-xl">
          {numb}. {question}
        </p>
        <Image
          className={`transition-all ${active === numb ? "rotate-0" : "rotate-180"}`}
          src={"/images/arrow-up.webp"}
          alt=""
          width={50}
          height={50}
        />
      </div>
      <p
        className={`pb-5 pt-2 transition-all duration-300 md:px-10 ${active === numb ? "opacity-100 " : "  hidden opacity-0"}`}
      >
        {answer}
      </p>
    </div>
  );
};
