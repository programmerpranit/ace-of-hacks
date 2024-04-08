import connectToDB from "@/middleware/connectToDB";
import { Participant } from "@/models/Participant";
import type { ParticipantType } from "@/types/mongo";
import React from "react";
import ParticipantList from "./ParticipantList";

const AdminPage = async (): Promise<JSX.Element> => {
  const getParticipants = async (): Promise<ParticipantType[]> => {
    await connectToDB();

    const participants = await Participant.find();
    return JSON.parse(JSON.stringify(participants));
  };

  const participants = await getParticipants();

  return (
    <>
      <div className="p-5 ">
        <h1 className="text-center">Ace of hacks</h1>
        <ParticipantList participants={participants} />
      </div>
    </>
  );
};

export default AdminPage;
