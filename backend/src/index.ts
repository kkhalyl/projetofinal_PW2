import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import createLangCookie from "./middlewares/createLangCookie"

dotenv.config()

const app = express()
const PORT = process.env.PORT ?? 7788

app.get("/", (req, res) => {
  res.send("Olá, bem-vindo(a) ao curso de PW2!")
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}.`)
})
