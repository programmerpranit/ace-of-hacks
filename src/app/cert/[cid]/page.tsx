import connectToDB from "@/middleware/connectToDB";
import { Participant } from "@/models/Participant";
import type { ParticipantType } from "@/types/mongo";
import Certificate from "./Certificate";
import React from "react";

const ParticipantCertificate = async ({
  params: { cid },
}: {
  params: { cid: string };
}): Promise<JSX.Element> => {
  const getParticipant = async (cid: string): Promise<ParticipantType> => {
    await connectToDB();
    const participant = await Participant.findById(cid);
    if (participant === null) throw Error("Participant Not Found");
    return JSON.parse(JSON.stringify(participant));
  };
  const participant = await getParticipant(cid);

  return (
    <>
      <Certificate participant={participant} />
    </>
  );
};

export default ParticipantCertificate;
