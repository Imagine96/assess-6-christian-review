const BASE_URL = "http://localhost:8080"

export const getBalance = async () => {
  const response = await fetch(`${BASE_URL}/balance`)
  const balance = await response.json()
  if (response.status !== 200) {
    throw new Error("failed to get balance")
  }
  return balance
}