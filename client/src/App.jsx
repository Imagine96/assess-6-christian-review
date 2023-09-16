import { useEffect, useState } from "react"
import TransactionsList from "./components/TransactionsList"
import { getBalance, postDeposit, postWithdrawal } from "./lib/transactionsApi"
import NewTransactionForm from "./components/NewTransactionForm"

const POSITIVE_BALANCE_CLASSNAME = "text-green-500"
const NEGATIVE_BALANCE_CLASSNAME = "text-red-500"

const App = () => {

  const [balance, setBalance] = useState({
    total: 0,
    currency: "€",
    transactions: []
  })

  useEffect(() => {
    getBalance()
      .then(balance => setBalance(balance))
      .catch(err => console.log(err))
  }, [])

  const onNewTransaction = async (type, amount) => {
    try {
      if (type === 'deposit') {
        console.log(amount)
        const update = await postDeposit(amount) 
        console.log(update)
        setBalance(update)
      } else if (type === 'withdrawal') {
        const update = await postWithdrawal(amount)
        setBalance(update)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="flex flex-col items-center pt-20 gap-4">
      <h1 className="text-xl font-bold" >Current balance: {' '}
        <span className={`text-lg 
        ${balance.total > 0 ? POSITIVE_BALANCE_CLASSNAME : NEGATIVE_BALANCE_CLASSNAME}`} >
          {Math.abs(balance.total)}
        </span>
      </h1>
      <NewTransactionForm onNewTransaction={onNewTransaction} />
      <TransactionsList transactions={balance.transactions} />
    </div>
  )
}

export default App
