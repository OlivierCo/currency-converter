import axios from 'axios'
import { toJson } from 'xml2json'

export const get = async (url: string) => {
  try {
    const response = await axios({
      url,
    })
    const parsedResponse = toJson(response.data)

    return parsedResponse
  } catch (error) {
    throw Error(error)
  }
}
