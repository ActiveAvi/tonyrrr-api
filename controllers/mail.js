module.exports = {
  send: async (req, res) => {
    if (!req.body.name || !req.body.message) {
      res.status(400).send('Missing fields')
      return
    }

    let mailer = require('@sendgrid/mail')
    mailer.setApiKey(process.env.SENDGRID_API_KEY)

    const mailData = {
      from: 'epsteindidntkillhimself@boomyourballs.social',
      to: process.env.EMAIL_REC,
      subject: `Message from ${req.body.name}`,
      text: `sender: ${req.body.email} message: ${req.body.message}`,
      html: `<div>${req.body.message}</div>`,
    }

    mailer
      .send(mailData)
      .then(() => res.status(200).send(mailData))
      .catch((err) => res.status(500).send(err))
  },
}
