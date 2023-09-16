import express from 'express'
import { getBalance } from './controllers/transaction.controller.js'

const app = express()

app.get("/balance", getBalance)
app.post("/deposit", (_, res) => res.status(200).json("deposit"))
app.post("/withdrawal", (_, res) => res.status(200).json("withdrawal"))

export default app