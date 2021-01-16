import { getData } from './service'

const baseUrl = 'https://jsonplaceholder.typicode.com'
const url = '/comments?_limit=42'

export const getComments = async () => {
  return await getData(baseUrl, url)
}
