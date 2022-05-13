import nodemailer from "nodemailer";
import "dotenv/config";

export const dispatch = async (
  image1: string | Buffer,
  image2: string | Buffer
) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
      user: testAccount.user,
      pass: testAccount.pass,
    },
  });

  const info = await transporter.sendMail({
    from: `Example mailer sending... 👻" <${process.env.USER_EMAIL_SENDER}>`,
    to: `${process.env.USER_EMAIL_RECEIVER}`,
    subject: "Hello ✔, daily images here!",
    text: `Here is your img`,
    html: `
    <b>Here is your img</b> <br> 
    <div>
    <img src="data:image/png;base64,${image1}" alt="print1"/> 
    </div>
    <br>
    <hr>
    <div>
    <img src="data:image/png;base64,${image2}" alt="print2"/>
    </div>
    `,
  });

  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
};
