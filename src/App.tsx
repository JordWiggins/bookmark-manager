import { useState } from 'react'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')

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
    </div>
  )
}

export default App