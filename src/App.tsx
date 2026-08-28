import { useState } from 'react'

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

  type Category = keyof typeof categories // type of category is the keys of the categories object
  type SubCategory = keyof typeof categories[Category] // type of subcategory is the keys of the categories object

   // use states
  const [selectedCategory, setSelectedCategory] = useState<Category | ''>('') // type category or empty
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | ''>('') // type subcategory or empty
  const [selectedTopic, setSelectedTopic] = useState('')

  const handleCategorySelect = (category : Category) => {
    setSelectedCategory(category)
    setSelectedSubCategory('') // reset subcategory when a new category is selected
    setSelectedTopic('') // reset topic when a new category is selected
  }

  const handleSubCategorySelect = (subCategory : SubCategory) => {
    setSelectedSubCategory(subCategory)
    setSelectedTopic('') // reset topic when a new subcategory is selected
  }

  return (
    <div>
      <header>
        <h1>Bookmark Manager</h1>
        <div>
          <button>Add Bookmark</button>
          <button>Favourites</button>
        </div>
      </header>

      <nav aria-label="Bookmark filters">
        <section>
          <h2>Categories</h2>

          <div>
            <button onClick={() => handleCategorySelect('work')}>Work</button>
            <button onClick={() => handleCategorySelect('personal')}>Personal</button>
            <button onClick={() => handleCategorySelect('learning')}>Learning</button>
          </div>

          <p>Selected category: {selectedCategory}</p>
        </section>

        {selectedCategory && ( // if thing on the left is selected, render thing on the right
          // opening fragement - used to group code together, kind of like a div without an official box around it 
          <section> 
            <h2>Subcategories</h2>
            <div> 
              {(Object.keys(categories[selectedCategory]) as SubCategory[]).map((subCategory) => ( // map through the subcategories of the selected category
                <button key={subCategory} onClick={() => handleSubCategorySelect(subCategory)}>
                  {subCategory}
                </button>
              ))}
            </div>
          
            <p>Selected subcategory: {selectedSubCategory}</p>
          </section>
        )}

        {selectedCategory && selectedSubCategory && (
          <section>
            <h2>Topics</h2>
            <div>
              {categories[selectedCategory][selectedSubCategory].map((topic) => ( // map through the topics of the selected subcategory
                <button key={topic} onClick={() => setSelectedTopic(topic)}>
                  {topic}
                </button>
              ))}
            </div>
            <p>Selected topic: {selectedTopic}</p>
          </section>
        )}
      </nav>
      <main><h2>Bookmarks</h2></main>
    </div>
  )
}

export default App