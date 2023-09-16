import dbClient from '../lib/prisma.js'

export async function getAllTransactions() {
  return await dbClient.transaction.findMany()
}

export async function addTransaction(amount, type) {
  if (type !== 'WITHDRAWAL' && type !== 'DEPOSIT') {
    throw new Error(`invalid transaction type: ${type}`)
  }
  return await dbClient.transaction.create({
    data: {
      amount: amount,
      type: type
    }
  })
}