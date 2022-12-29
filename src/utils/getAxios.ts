import axios from "axios"

async function getAxios<T>(path: string): Promise<T[]> {
  console.log("ask: ", path)

  const API = "http://xdream.ddns.net:8001"

  const { data: response } = await axios.get(API + path)
  // console.log("returns: ", response, typeof response)
  return response
}

export default getAxios
