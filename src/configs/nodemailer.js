import { createTransport } from "nodemailer";

const transporter = createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "kopiboss72.chy@gmail.com",
    pass: "kmbbifvbrqcdnuoj",
  },
});

export default transporter;
