import mongoose, { Schema, model } from "mongoose";

export interface IParticipant {
  fname: string;
  lname: string;
  college: string;
  email: string;
  team: string;
  project: string;
  stage: string;
  mailSent: boolean;
}

const ParticipantSchema = new Schema<IParticipant>(
  {
    fname: { type: String, required: true, default: "" },
    lname: { type: String, required: true, default: "" },
    college: { type: String, required: true, default: "" },
    email: { type: String, required: true, unique: true, default: "" },
    team: { type: String, required: true, default: "" },
    project: { type: String, required: true, default: "" },
    stage: { type: String, required: true, default: "" },
    mailSent: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Participant =
  mongoose.models.Participant ??
  model<IParticipant>("Participant", ParticipantSchema);
