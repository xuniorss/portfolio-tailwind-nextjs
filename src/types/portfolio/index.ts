export type workImagesProps = {
   id: number
   img: string
   name: string
   category: 'web' | 'app' | 'clones'
   repoLink: string
   deployUrl?: string | null
}

export type TabProps = {
   name: string
}
