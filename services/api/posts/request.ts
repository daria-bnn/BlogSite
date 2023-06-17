import { AxiosInstance } from 'axios'

async function getPostsRequest(axios: AxiosInstance): Promise<unknown> {
  return (
    await axios.get<unknown>('https://jsonplaceholder.typicode.com/posts')
  ).data
}

export default getPostsRequest
