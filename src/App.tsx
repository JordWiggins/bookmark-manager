import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  const [selectedTopic, setSelectedTopic] = useState('')

  return (
    <div>
      <h1>Bookmark Manager</h1>
      <button>Favourites</button>

      <h2>Categories</h2>
      <div>
        <button onClick={() => setSelectedCategory('work')}>Work</button>
        <button onClick={() => setSelectedCategory('personal')}>Personal</button>
        <button onClick={() => setSelectedCategory('learning')}>Learning</button>
      </div>
      <p>Selected category: {selectedCategory}</p>

      {selectedCategory && ( // if thing on the left is selected, render thing on the right
        // opening fragement - used yo group code together, kind of like a div without an official box around it 
        <> 
          <h2>Subcategories</h2>
          <div>
            <button onClick={() => setSelectedSubCategory('projects')}>Projects</button>
            <button onClick={() => setSelectedSubCategory('resources')}>Resources</button>
          </div>
          <p>Selected subcategory: {selectedSubCategory}</p>
        </>
      )}

      {selectedSubCategory && (
        <>
          <h2>Topics</h2>
          <div>
            <button onClick={() => setSelectedTopic('typescript')}>TypeScript</button>
            <button onClick={() => setSelectedTopic('react')}>React</button>
          </div>
          <p>Selected topic: {selectedTopic}</p>
        </>
      )}
    </div>
  )
}

export default App