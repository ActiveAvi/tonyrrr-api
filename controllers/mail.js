module.exports = {
  send: async (req, res) => {
    let nodemailer = require('nodemailer')
    require('dotenv').config()

    const transporter = nodemailer.createTransport({
      port: 465,
      host: process.env.EMAIL_HOST,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      secure: true,
    })

    const mailData = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_REC,
      subject: `Message from ${req.body.name}`,
      text: req.body.message,
      html: `<div>${req.body.message}</div>`,
    }

    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info)
      }
    })

    res.status(200).send()
  },
}
