import { useEffect, useState } from "react"
import TransactionsList from "./components/TransactionsList"
import { getBalance } from "./lib/transactionsApi"

const POSITIVE_BALANCE_CLASSNAME = "text-green-500"
const NEGATIVE_BALANCE_CLASSNAME = "text-red-500"

const App = () => {

  const [balance, setBalance] = useState({
    total: 0,
    currency: "€",
    transactions: []
  })
  console.log(balance)
  useEffect(() => {
    getBalance()
      .then(balance => setBalance(balance))
      .catch(err => console.log(err))
  }, [])

  return (
    <div >
      <h1 className="text-xl font-bold" >Current balance:
        <span className={`text-lg 
        ${balance.total > 0 ? POSITIVE_BALANCE_CLASSNAME : NEGATIVE_BALANCE_CLASSNAME}`} >
          {Math.abs(balance.total)}
        </span>
      </h1>
      <TransactionsList transactions={balance.transactions} />
    </div>
  )
}

export default App
