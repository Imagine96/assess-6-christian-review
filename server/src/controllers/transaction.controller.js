import { getAllTransactions } from "../models/transaction.model.js";
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