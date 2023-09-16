import dbClient from '../lib/prisma.js'

export async function getAllTransactions() {
  return await dbClient.transaction.findMany()
}