import express from 'express'
import { getBalance } from './controllers/transaction.controller.js'
import cors from 'cors'

const app = express()
app.use(cors()) 
app.use(express.json())

app.get("/balance", getBalance)
app.post("/deposit", (_, res) => res.status(200).json("deposit"))
app.post("/withdrawal", (_, res) => res.status(200).json("withdrawal"))

export default app