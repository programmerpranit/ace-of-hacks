import Image from "next/image";
import React from "react";

const OurTeam = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-5">
        <h2 className="text-center">Our Team</h2>
        <div className="flex justify-around">
          <Team
            image="/team/fardin.jpg"
            link=""
            name="Fardin"
            role="Organizer"
          />
          <Team
            image="/team/pranit.jpg"
            link=""
            name="Pranit"
            role="Organizer"
          />
        </div>
      </div>
    </>
  );
};

export default OurTeam;

interface ITeam {
  image: string;
  name: string;
  role: "Organizer" | "Crew";
  link: string;
}

const Team = ({ image, name, role, link }: ITeam): JSX.Element => {
  return (
    <>
      <div className="my-10 flex flex-col items-center text-center md:w-1/4">
        <a href={link} target="_blank" rel="noreferrer">
          <Image
            className="grey-img rounded-full"
            src={image}
            width={170}
            height={170}
            alt={"image"}
          />
          <h5 className="mt-8 font-semibold  text-white">{name}</h5>
          <p className="text-primary ">{role}</p>
        </a>
      </div>
    </>
  );
};
