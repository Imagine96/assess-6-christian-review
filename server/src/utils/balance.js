const TRANSACTION_TYPES = {
  deposit: "DEPOSIT",
  withdrawal: "WITHDRAWAL"
}

export const calculateBalance = (transactionsList) => {
  return transactionsList.reduce((acc, current) => {
    if (current.type === TRANSACTION_TYPES.deposit) {
      return acc + current.amount      
    } else if (current.type === TRANSACTION_TYPES.withdrawal) {
      return acc - current.amount      
    }
    return acc
  }, 0)
}