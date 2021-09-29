import { google } from "googleapis"
import atob from "atob"

// we need to replace the escaped newline characters
// https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
const private_key = (
  process.env.GOOGLE_SHEETS_PRIVATE_KEY ||
  JSON.parse(atob(process.env.GCLOUD_CREDENTIALS)).private_key
).replace(/\\n/g, "\n")

async function post(name, tel, third) {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets"]
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      private_key,
      scopes
    )

    const sheets = google.sheets({ version: "v4", auth: jwt })
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.POST_SPREADSHEET_ID,
      range: "A1:D1",
      insertDataOption: "INSERT_ROWS",
      valueInputOption: "USER_ENTERED",
      resource: { values: [[name, tel, third, new Date().toLocaleString()]] },
    })
    return true
  } catch (err) {
    console.log(err)
  }
  return false
}
module.exports = async (req, res) => {
  try {
    const { body } = req
    body.name = body.name.trim().slice(0, 20)
    body.tel = body.tel.trim().slice(0, 20)
    body.third = body.third.trim().slice(0, 20)
    post(body.name, body.tel, body.third)
    res.status(200).send(JSON.stringify({ message: "success" }))
  } catch (e) {
    res.status(400).send(JSON.stringify({ message: e.message }))
  }
}
