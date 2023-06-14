import { api } from '@/services/api'

export const getCommits = async () => {
   const username = 'xuniorss'

   try {
      const { data } = await api.get<Array<any>>(`/users/${username}/repos`)
      let commitCount = 0

      const promises = data.map((repo) =>
         api.get(`/repos/${username}/${repo.name}/commits`)
      )

      const commitResponses = await Promise.all(promises)

      commitResponses.forEach(
         (response) => (commitCount += response.data.length)
      )

      return commitCount
   } catch (error) {
      console.error(error)
   }
}
