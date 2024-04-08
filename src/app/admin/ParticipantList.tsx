"use client";

import type { ParticipantType } from "@/types/mongo";
import React from "react";
import { sendMail } from "./actions";

const ParticipantList = ({
  participants,
}: {
  participants: ParticipantType[];
}): JSX.Element => {
  return (
    <>
      <div className="mx-auto max-w-7xl p-10">
        <table className="w-full table-auto">
          <thead className="rounded bg-primary p-5">
            <tr className="text-left">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Mail Sent?</th>
              <th className="p-3">Send Mail</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((participant) => (
              <tr key={participant?._id}>
                <td className="p-3">
                  {participant?.fname} {participant?.lname}
                </td>
                {/* <td className="p-3">{participant?.email}</td> */}
                <td className="p-3">{participant?.email}</td>
                <td className="p-3">{participant?.stage}</td>
                <td className="p-3">
                  {participant?.mailSent ? "Sent" : "Not Sent"}
                </td>

                <td
                  onClick={() => {
                    void sendMail(participant?._id);
                  }}
                  className="cursor-pointer p-3 font-semibold "
                >
                  <button className="bg-secondary">Send Mail</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ParticipantList;
