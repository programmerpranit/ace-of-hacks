import Footer from "@/sections/Footer";
import React from "react";

const Timeline = (): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-5 py-20">
        <h1 className="pb-20 text-center text-primary">
          Hackathon <span className="text-secondary"> Timeline</span>
        </h1>
        <div className="">
          <Activity time="9:00 am - 10:30 am" title="Registration" />
          <Activity time="10:30 am - 11:30 am" title="Inauguration" />
          <Activity time="12:00 pm" title="Hackathon Starts" />
          <Activity time="12:00 pm - 1:00 pm" title="1st Mentoring Round" />
          <Activity time="1:00 pm" title="Lunch" />
          <Activity time="6:00 pm" title="Tea" />
          <Activity time="7:00 pm - 8:00 pm" title="2nd Mentoring Round" />
          <Activity time="9:00 pm" title="Dinner" />
          <Activity time="2.00 am" title="Break" />
          <Activity time="8:00 am" title="Breakfast" />
          <Activity time="12:00 pm" title="Final Commit (Coding Stops)" />
          <Activity time="12:00 pm - 1:00 pm" title="1st Judging Round" />
          <Activity time="12:30 pm" title="Lunch" />
          <Activity time="1:30 pm" title="Finalist Announcement" />
          <Activity
            time="2:00 pm - 4:00 pm"
            title="Final judging round and closing ceremony"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Timeline;

function Activity({
  time,
  title,
}: {
  time: string;
  title: string;
}): JSX.Element {
  return (
    <>
      <div className="flex border-b border-primary py-5">
        <div className="w-2/5 md:w-1/4">
          <h3 className="text-base uppercase">{time}</h3>
        </div>
        <div className="w-3/5 md:w-3/4">
          <h3 className="text-xl">{title}</h3>

          {/* <p className="mt-4">By Ali Mustafa</p> */}
        </div>
      </div>
    </>
  );
}
