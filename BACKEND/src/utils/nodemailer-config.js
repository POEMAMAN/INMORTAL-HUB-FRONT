const nodemailer = require("nodemailer");
   
   let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: "inmortal.upgrade@gmail.com", // generated ethereal user
          pass: "snnd msgq zvqt aica", // generated ethereal password
        },
      });

module.exports = {
    transporter
}