import { getCommits } from '@/actions/getCommits'
import AboutView from '@/view/About'
import HomeView from '@/view/Home'
import Portfolio from '@/view/Portfolio'
import SkillsView from '@/view/Skills'

export default async function Home() {
   const commits = await getCommits()

   return (
      <>
         <HomeView />
         <AboutView />
         <SkillsView commitsQtd={commits || 0} />
         <Portfolio />
      </>
   )
}
