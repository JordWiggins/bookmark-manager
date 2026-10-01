import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import BookmarkFilters from './components/BookmarkFilters'
import BookmarkList from './components/BookmarkList'
import type { Category, SubCategory } from './types/category'
import { bookmarks } from './data/bookmarks'
import { categories } from './data/categories'

function App() {
   // use states
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([])
  const [selectedSubCategories, setSelectedSubCategories] = useState<SubCategory[]>([])
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [showFavourites, setShowFavourites] = useState(false)

  const handleCategorySelect = (category: Category) => {
  setSelectedCategories((currentCategories) => // use the current selected categories
    currentCategories.includes(category) // if the category is already selected
      ? currentCategories.filter((item) => item !== category) // remove it from the array
      : [...currentCategories, category] // otherwise create a new array from the current array withthe selected category added to the end
  )
  setSelectedSubCategories([]) // reset subcategory
  setSelectedTopics([]) // reset topic
  }

  const handleSubCategorySelect = (subCategory : SubCategory) => {
  setSelectedSubCategories((currentSubCategories) =>
    currentSubCategories.includes(subCategory)
      ? currentSubCategories.filter((item) => item !== subCategory)
      : [...currentSubCategories, subCategory]
  )

    setSelectedTopics([]) // reset topic when a new subcategory is selected
  }

  const handleTopicSelect = (topic: string) => {
  setSelectedTopics((currentTopics) =>
    currentTopics.includes(topic)
      ? currentTopics.filter((item) => item !== topic)
      : [...currentTopics, topic]
  )
  }

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(bookmark.category as Category)

    const matchesSubCategory =
      selectedSubCategories.length === 0 ||
      selectedSubCategories.includes(bookmark.subCategory as SubCategory)
    
    const matchesTopic =
      selectedTopics.length === 0 ||
      selectedTopics.includes(bookmark.topic)
    
    const matchesFavourites = !showFavourites || bookmark.favourite

    return matchesCategory && matchesSubCategory && matchesTopic && matchesFavourites
  })

  return (
    <div>

      <Header
        showFavourites={showFavourites}
        onToggleFavourites={() =>
          setShowFavourites((current) => !current)
        }
      />

      <BookmarkFilters
        categories={categories}
        selectedCategories={selectedCategories}
        selectedSubCategories={selectedSubCategories}
        selectedTopics={selectedTopics}
        onCategorySelect={handleCategorySelect}
        onSubCategorySelect={handleSubCategorySelect}
        onTopicSelect={handleTopicSelect}
      />

      <BookmarkList 
        bookmarks={filteredBookmarks} 
      />

    </div>
  )
}

export default App