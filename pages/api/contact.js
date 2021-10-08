export default function (req, res) {
  require('dotenv').config()
  
  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'detikino.request@gmail.com',
      pass: 'detikino.request2021',
    },
    secure: true,
  })
  const mailData = {
    from: 'detikino.request@gmail.com',
    to: 'stas.green@gmail.com',
    subject: `Заявка на кастинг`,
    text: req.body.phone + " | " + req.body.name + " | " + req.body.message + "",
    html: `<div> ${req.body.phone}</div><br/><div>${req.body.name}</div><br/><div>${req.body.message}</div>`
  }
  transporter.sendMail(mailData, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info.response)
  })
  res.status(200)
}
