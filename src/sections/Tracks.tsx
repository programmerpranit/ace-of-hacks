import React from "react";

const Tracks = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl py-10">
        <h2 className="text-center">Tracks</h2>
        <div className="flex flex-col justify-around text-center md:flex-row">
          <div className="p-5 md:w-1/3">
            <div className=" h-full rounded-lg border border-primary p-5">
              <h3 className="text-secondary">Generative AI</h3>
              <br />
              <p>
                {" "}
                The Generative AI track invites you to push the boundaries of
                creativity, enabling machines to generate content, art, and
                ideas.{" "}
              </p>
            </div>
          </div>
          <div className="p-5 md:w-1/3">
            <div className=" h-full rounded-lg border border-primary p-5">
              <h3 className="text-secondary">Blockchain</h3>
              <br />
              <p>
                Explore the transformative potential of Blockchain technology,
                design smart contracts, and unravel the possibilities of a
                trustless future.{" "}
              </p>
            </div>
          </div>
          <div className="p-5 md:w-1/3">
            <div className=" h-full rounded-lg border border-primary p-5">
              <h3 className="text-secondary">Open Innovation</h3>
              <br />

              <p>
                It&apos;s combining existing technologies in novel ways or
                inventing entirely new solutions, this track is the playground
                for visionaries.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tracks;
