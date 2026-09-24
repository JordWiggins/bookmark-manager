import { useState } from 'react'
import './App.css'

function App() {
  const categories = { // object to represent the categories
    work: { // property of categories, type object
      projects: ['typescript', 'react'], // property of work, type array
      resources: ['typescript', 'react'], // property of work, type array
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

  const bookmarks = [
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

  type Category = keyof typeof categories // type of category is the keys of the categories object
  type SubCategory = keyof typeof categories[Category] // type of subcategory is the keys of the categories object

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

      <header className="app-header">
        <h1>Bookmark Manager</h1>
        <div className="header-actions">
          <button>Add Bookmark</button>
          <button
            className={showFavourites ? 'selected' : ''}
            onClick={() => setShowFavourites((current) => !current)}
          >
            Favourites
          </button>
        </div>
      </header>

      <nav className="bookmark-filters" aria-label="Bookmark filters">

        <section className="category-filter">
          <h2>Categories:</h2>
          <div className="category-buttons">
            <button
              className={selectedCategories.includes('work') ? 'selected' : ''}
              onClick={() => handleCategorySelect('work')}
            >
              Work            
            </button>
            <button
              className={selectedCategories.includes('personal') ? 'selected' : ''}
              onClick={() => handleCategorySelect('personal')}
            >
              Personal
            </button>
            <button
              className={selectedCategories.includes('learning') ? 'selected' : ''}
              onClick={() => handleCategorySelect('learning')}
            >
              Learning
            </button>
          </div>
        </section>

        {selectedCategories.length > 0 && ( // if thing on the left is selected, render thing on the right
          <section> 
            <h2>Subcategories</h2>
            <div> 
              {Array.from( // create a new array from the unique subcategories of the selected categories
                new Set( // remove duplicates from the array of subcategories
                  selectedCategories.flatMap((category) => // flatmap through the selected categories and return the subcategories of each category
                    Object.keys(categories[category]) as SubCategory[] // cast the keys of the categories object to the SubCategory type
                  )
                )
              ).map((subCategory) => ( // map through the unique subcategories and render a button for each one
                <button
                  key={subCategory}
                  className={selectedSubCategories.includes(subCategory) ? 'selected' : ''}
                  onClick={() => handleSubCategorySelect(subCategory)}
                >

                  {subCategory}
                </button>
              ))}
            </div>         
          </section>
        )}

        {selectedCategories.length > 0 && selectedSubCategories.length > 0 && (
          <section>
            <h2>Topics</h2>
            <div>
              {Array.from(
                new Set(
                  selectedCategories.flatMap((category) =>
                    selectedSubCategories.flatMap((subCategory) =>
                      categories[category][subCategory]
                    )
                  )
                )
              ).map((topic) => ( // map through the topics of the selected subcategory
                <button key={topic} className={selectedTopics.includes(topic) ? 'selected' : ''} onClick={() => handleTopicSelect(topic)}>
                  {topic}
                </button>
              ))}
            </div>
          </section>
        )}
      </nav>

      <main>
        <h2>Bookmarks</h2>

        {filteredBookmarks.map((bookmark) => (
          <div key={bookmark.id}>
            <a href={bookmark.url} target="_blank">
              {bookmark.title}
            </a>

            <p>{bookmark.description}</p>
            <p>{bookmark.category}</p>
            <p>{bookmark.subCategory}</p>
            <p>{bookmark.topic}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App