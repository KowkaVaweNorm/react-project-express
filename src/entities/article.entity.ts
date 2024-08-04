export type ArticleItem = {
  id: string
  title: string
  subtitle: string
  img: string
  views: number
  createdAt: string
  userId: string
  type: string[]
  blocks: ArticleBlock[]
}

export type ArticleBlock = {
  id: string
  type: string
  title?: string
  paragraphs?: string[]
  code?: string
  src?: string
}
