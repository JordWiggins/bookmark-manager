import type { Category, SubCategory } from './category'

export type Bookmark = {
  id: number
  title: string
  url: string
  description: string
  category: Category
  subCategory?: SubCategory
  topic: string
  favourite: boolean
}