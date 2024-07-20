const nodemailer = require('nodemailer');
const { email } = require('../config/config.json');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email.user,
    pass: email.pass,
  },
});

exports.sendEmail = (to, subject, text) => {
  const mailOptions = {
    from: email.user,
    to,
    subject,
    text,
  };

  return transporter.sendMail(mailOptions);
};
