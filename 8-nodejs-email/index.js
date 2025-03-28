const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "boevye.manekeny@gmail.com",
    pass: "mamamskfhfvego",
  },
});

const mailOptions = {
  from: "boevye.manekeny@gmail.com",
  to: "boevye.manekeny@gmail.com, boevye.manekeny@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
