import React from "react";

const About = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto my-20 flex max-w-7xl flex-col justify-center py-10 md:flex-row md:items-center">
        <div className="p-5 md:w-1/2">
          <h2>About</h2>
          <h2 className="text-4xl md:text-5xl">
            <span className="text-primary"> Ace </span>of{" "}
            <span className="text-secondary"> Hacks</span>
            <span className="text-primary">.</span>
          </h2>
        </div>
        <div className=" p-5 md:w-1/2">
          <p>
            Ace of Hacks is a 24 hours coding and innovation challenge where
            students from diverse backgrounds come together to address
            real-world problems{" "}
          </p>

          <p>
            It&apos;s a melting pot of creativity, technology, and
            entrepreneurship, fostering an environment of learning, building,
            and collaboration.
          </p>
          <p>
            It will also be responsible for creating an environment where all
            the like-minded personals come together and discuss various topics,
            intern creating an opportunity for growth and networking.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
