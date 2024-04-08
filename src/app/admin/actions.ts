"use server";

import connectToDB from "@/middleware/connectToDB";
import { Participant } from "@/models/Participant";
import type { ParticipantType } from "@/types/mongo";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.in",
  port: 465,
  name: "Pranit Patil",
  secure: true,
  auth: {
    user: process.env.MAIL,
    pass: process.env.PASS,
  },
});

export const sendMail = async (cid: string): Promise<boolean> => {
  await connectToDB();
  const participant: ParticipantType | null = await Participant.findById(cid);
  if (participant === null) return false;
  const mailOptions = {
    from: "Pranit Patil <dev@pranitpatil.com>", // sender address
    to: participant.email,
    subject: ` Download your certificate`, // Subject line
    html: `<p> Hello Hacker,</p>
<p>Your certificate is ready get it form this link https://aceofhacks.tech/cert/${participant._id}</p> 
`,
  };

  const info = await transporter.sendMail(mailOptions);
  await Participant.findByIdAndUpdate(cid, { mailSent: true });
  console.log(info);
  return true;
};
