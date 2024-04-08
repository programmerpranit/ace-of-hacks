import mongoose, { Schema, model } from "mongoose";

export interface IUser {
  name: string;
  email: string;
  password: string;
  verified: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    verified: { type: Boolean, required: true },
  },
  { timestamps: true }
);

export const User = mongoose.models.User ?? model<IUser>("User", UserSchema);
