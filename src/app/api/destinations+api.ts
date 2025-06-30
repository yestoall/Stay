"user server"

const API_PATH = process.env.STAY_API_URL
const STAY_API_KEY = process.env.STAY_API_KEY

import * as API from "@/utils/API"

export async function GET(request: Request) {
  const URL = `${API_PATH}/establishments/destinations?apikey=${STAY_API_KEY}`
  try {
    const response = await fetch(URL)

    if (!response.ok) return API.error("Error buscando destinos")

    const data = await response.json()
    return API.done({ ...data, success: true })
  } catch (error) {
    return API.error("Error buscando destinos", error)
  }
}
