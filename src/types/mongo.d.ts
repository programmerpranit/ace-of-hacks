import type { IParticipant } from "@/models/Participant";
import type { JwtPayload } from "jsonwebtoken";

interface MongoBase {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface IPayload extends JwtPayload {
  admin: {
    verified: boolean;
    _id: string;
  };
}

export interface ParticipantType extends IParticipant, MongoBase {}
