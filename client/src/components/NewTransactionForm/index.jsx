/* eslint-disable react/prop-types */
import { useState } from "react"


const NewTransactionForm = ({ onNewTransaction }) => {

  const [type, setType] = useState('deposit')
  const [amount, setAmount] = useState(0)

  const onSubmit = async (e) => {
    e.preventDefault()
    if (amount !== 0) {
      await onNewTransaction(type, amount) 
      setType('deposit')
      setAmount(0)
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-row gap-4 shadow-sm py-4 items-center justify-center" >
      <div className="flex flex-col">
        <p> Type </p>
        <select value={type} onChange={(e) => setType(e.target.value)} className="shadow p-2 rounded-lg" >
          <option value='deposit' > Deposit </option>
          <option value='withdrawal' > Withdrawal </option>
        </select>
      </div>
      <div className="flex flex-col" >
        <label htmlFor="amount" > Amount </label>
        <input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="shadow p-2 rounded-lg"
          name="amount"
          type="number"
          step={10}
        />
      </div>
      <button type="submit" className="bg-blue-500 place-self-end text-white py-2 px-3 shadow rounded-lg" >
          Submit
      </button>
    </form>
  )
}

export default NewTransactionForm