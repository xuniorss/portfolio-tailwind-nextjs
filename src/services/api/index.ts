import axios from 'axios'

export const api = axios.create({
   baseURL: process.env.NEXT_PUBLIC_GITHUB_BASE_URL,
   headers: {
      Authorization: `Bearer ${process.env.GITHUB_PERSONAL_TOKEN}`,
   },
})
