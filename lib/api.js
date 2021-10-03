import { google } from "googleapis"
import atob from "atob"
import _ from "lodash"
import fs from "fs"
import { join } from "path"
import matter from "gray-matter"

const postsDirectory = join(process.cwd(), "_posts")

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, "")
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === "slug") {
      items[field] = realSlug
    }
    if (field === "content") {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"))
  return posts
}

const colMapping = {
  Фамилия: "surname",
  Имя: "name",
  Пол: "gender",
  "Возраст (полных лет) ": "age",
  "Рост (см) ": "height",
  "Профессиональные фотографии": "photo",
  "Ссылка на видеовизитку, шоурил, этюды, аудио пробы на озвучивание": "links",
  "Телосложение": "constitution",
  "Цвет глаз": "eyes",
  "Цвет волос": "hair",
  "Длина волос": "hairlength",	
  "Готовы ли красить волосы?": "colorready",
  "Готовы ли стричься наголо?": "cutready",
  "Тип внешности": "type",
  "Иностранные языки": "languages",
  "Вокал": "vocal",
  "Музыкальные инструменты": "instruments",
  "Роли в кино и на ТВ": "roles_tv",
  "Роли в театре": "roles_th",
  "Съёмка в рекламе ТВ, интернет": "roles_ad"	
}
// Фамилия	Имя	Отчество	Дата рождения	Возраст (полных лет) 	Пол	Рост (см) 	Размер одежды	Обхват груди (см)	Талия (см)	Бёдра (см)	Размер обуви	Телосложение	Цвет глаз	Цвет волос	Длина волос	Готовы ли красить волосы?	Готовы ли стричься наголо?	Тип внешности	Иностранные языки	Вокал	Музыкальные инструменты	Виды спорта	Достижения, навыки и умения	Роли в кино и на ТВ	Роли в театре	Съёмка в рекламе ТВ, интернет	Фотография ребенка	Ссылка на видеовизитку, шоурил, этюды, аудио пробы на озвучивание

const mapSheet = (rows, mapping) => {
  const header = rows.shift()
  const indices = header.map(th => mapping[th] || "")
  return rows.map(row =>
    _.omit(
      _.mapValues(_.zipObject(indices, row), x => x || ""),
      [""]
    )
  )
}

export async function getKids() {
  try {
    const scopes = ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      // we need to replace the escaped newline characters
      // https://stackoverflow.com/questions/50299329/node-js-firebase-service-account-private-key-wont-parse
      (
        process.env.GOOGLE_SHEETS_PRIVATE_KEY ||
        JSON.parse(atob(process.env.GCLOUD_CREDENTIALS)).private_key
      ).replace(/\\n/g, "\n"),
      scopes
    )

    const sheets = google.sheets({ version: "v4", auth: jwt })
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: "A1:AE1000",
    })

    const rows = response.data.values
    const _kids = _.groupBy(mapSheet(rows, colMapping), "gender")
    let kids = {}
    kids["Девочки"] = _.groupBy(_kids["Женский"])
    kids["Мальчики"] = _.groupBy(_kids["Мужской"])
    return kids
  } catch (err) {
    console.log(err)
  }
  return {}
}
