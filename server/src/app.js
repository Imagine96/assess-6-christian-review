import express from 'express'
import { addDeposit, getBalance, addWithdrawal } from './controllers/transaction.controller.js'
import cors from 'cors'

const app = express()
app.use(cors()) 
app.use(express.json())

app.get("/balance", getBalance)
app.post("/deposit", addDeposit)
app.post("/withdrawal", addWithdrawal)

export default app