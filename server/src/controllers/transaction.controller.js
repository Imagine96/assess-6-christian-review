import { getAllTransactions, addTransaction } from "../models/transaction.model.js";
import { calculateBalance } from "../utils/balance.js";

const CURRENCY = "€"

export async function getBalance(req, res) {
  try {
    const list = await getAllTransactions()
    const total = calculateBalance(list)
    res.status(200).json({
      total,
      currency: CURRENCY,
      transactions: list
    })

  } catch (err) {
    return res.status(500)
  }
}

export async function addDeposit(req, res) {
  const { amount } = req.body
  if (!amount || isNaN(amount)) {
    return res.status(400).json({
      message: "bad request"
    })
  }
  try {
    await addTransaction(amount, 'DEPOSIT')
    const list = await getAllTransactions()
    let total = calculateBalance(list)
    
    res.status(201).json({
      total,
      currency: CURRENCY,
      transactions: list
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: "something went wrong"
    })
  }
}

export async function addWithdrawal(req, res) {
  const { amount } = req.body
  if (!amount || isNaN(amount)) {
    return res.status(400).json({
      message: "bad request"
    })
  }
  const list = await getAllTransactions()
  let total = calculateBalance(list)

  if (amount > total) {
    return res.status(400).json({
      message: `invalid transaction, can not withdraw ${amount} from ${total}`
    })
  }

  try {
    const insertedDeposit = await addTransaction(amount, 'WITHDRAWAL')
    list.push(insertedDeposit)
    total = calculateBalance(list)
    res.status(201).json({
      total,
      currency: CURRENCY,
      transactions: list
    })
  } catch (err) {
    console.log(err)
    return res.status(500).json({
      message: "something went wrong"
    })
  }
}