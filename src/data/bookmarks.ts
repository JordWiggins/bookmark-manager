import type { Bookmark } from '../types/bookmark'

export const bookmarks: Bookmark[] = [
  {
    id: 1,
    title: 'React Documentation',
    url: 'https://react.dev',
    description: 'Official React documentation',
    category: 'learning',
    subCategory: 'resources',
    topic: 'react',
    favourite: true,
  },
  {
    id: 2,
    title: 'TypeScript Documentation',
    url: 'https://www.typescriptlang.org',
    description: 'Official TypeScript documentation',
    category: 'work',
    subCategory: 'resources',
    topic: 'typescript',
    favourite: false,
  },
  {
    id: 3,
    title: 'Personal React Project',
    url: 'https://example.com',
    description: 'Example personal React project',
    category: 'personal',
    subCategory: 'projects',
    topic: 'react',
    favourite: true,
  },
]