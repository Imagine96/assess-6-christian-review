const BASE_URL = "http://localhost:8080"

export const getBalance = async () => {
  const response = await fetch(`${BASE_URL}/balance`)
  const balance = await response.json()
  if (response.status !== 200) {
    throw new Error("failed to get balance")
  }
  return balance
}

export const postDeposit = async (amount) => {
  const response = await fetch(`${BASE_URL}/deposit`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount
    })
  })
  const balance = await response.json()
  if (response.status !== 201) {
    throw new Error("failed to get balance")
  }
  return balance
}

export const postWithdrawal = async (amount) => {
  const response = await fetch(`${BASE_URL}/withdrawal`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      amount
    })
  })

  const balance = await response.json()
  if (response.status !== 201) {
    throw new Error("failed to get balance")
  }
  return balance
}