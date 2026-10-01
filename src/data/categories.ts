import type { Category, SubCategory } from '../types/category'

export const categories: Record<Category, Record<SubCategory, string[]>> = {
  work: {
    projects: ['typescript', 'react'],
    resources: ['typescript', 'react'],
  },
  personal: {
    projects: ['typescript', 'react'],
    resources: ['typescript', 'react'],
  },
  learning: {
    projects: ['typescript', 'react'],
    resources: ['typescript', 'react'],
  },
}