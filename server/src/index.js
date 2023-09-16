import express from 'express'

const PORT = "8080"

const app = express()

app.get("/", (_, res) => res.status(200).json("hello world"))

app.listen(PORT, () => {
  console.log("listening on PORT:", PORT)
})