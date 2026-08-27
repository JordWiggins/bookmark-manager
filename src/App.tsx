import { useState } from 'react'

function App() {
  // use states
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')

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

  const handleCategorySelect = (category : string) => {
    setSelectedCategory(category)
    setSelectedSubCategory('') // reset subcategory when a new category is selected
    setSelectedTopic('') // reset topic when a new category is selected
  }

  const handleSubCategorySelect = (subCategory : string) => {
    setSelectedSubCategory(subCategory)
    setSelectedTopic('') // reset topic when a new category is selected
  }

  return (
    <div>
      <h1>Bookmark Manager</h1>

      <button>Favourites</button>

      <h2>Categories</h2>

      <div>
        <button onClick={() => handleCategorySelect('work')}>Work</button>
        <button onClick={() => handleCategorySelect('personal')}>Personal</button>
        <button onClick={() => handleCategorySelect('learning')}>Learning</button>
      </div>

      <p>Selected category: {selectedCategory}</p>

      {selectedCategory && ( // if thing on the left is selected, render thing on the right
        // opening fragement - used to group code together, kind of like a div without an official box around it 
        <> 
          <h2>Subcategories</h2>
          <div> 
            {Object.keys(categories[selectedCategory]).map((subCategory) => ( // map through the subcategories of the selected category
              <button key={subCategory} onClick={() => handleSubCategorySelect(subCategory)}>
                {subCategory}
              </button>
            ))}
          </div>
        
          <p>Selected subcategory: {selectedSubCategory}</p>
        </>
      )}

      {selectedSubCategory && (
        <>
          <h2>Topics</h2>
          <div>
            {categories[selectedCategory][selectedSubCategory].map((topic) => ( // map through the topics of the selected subcategory
              <button key={topic} onClick={() => setSelectedTopic(topic)}>
                {topic}
              </button>
            ))}
          </div>
          <p>Selected topic: {selectedTopic}</p>
        </>
      )}
    </div>
  )
}

export default App