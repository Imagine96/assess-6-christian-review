/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
const TransactionsList = ({transactions}) => {
  return (
    <>
      {
        transactions.map(t => <div key={t.id} > {t.amount} {t.type.toLowerCase()} </div>)
      }
    </>
  )
}

export default TransactionsList