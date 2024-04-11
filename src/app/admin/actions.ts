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
    subject: `Your Hackathon Participation Certificate Is Here! `, // Subject line

    html: `
    <p>Hey ${participant.fname}</p>

<p>We hope you're still riding high on the hackathon vibes! As promised, your participation certificate for Ace of Hacks is ready for download. Click here to grab it: https://aceofhacks.tech/cert/${participant._id}</p>

<p>But wait, there's more! We've also compiled an awesome album of photos capturing the best moments from the hackathon. Relive the excitement, the teamwork, and the unforgettable memories! Check out the photo album here: https://photos.app.goo.gl/uumpmfK6tky6KeRm8</p>

<p>Now, it's your time to shine! Share your hackathon experience, along with your participation certificate, on LinkedIn or Twitter. Let the world know about your incredible journey and the amazing project you worked on!</p>

<p>Keep inspiring, keep innovating, and keep shining bright! &#55357;&#56491;</p>
    `,
  };

  const info = await transporter.sendMail(mailOptions);
  await Participant.findByIdAndUpdate(cid, { mailSent: true });
  console.log(info);
  return true;
};
