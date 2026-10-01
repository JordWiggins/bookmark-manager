import type { Category, SubCategory } from '../types/category'

type BookmarkFiltersProps = {
  categories: Record<Category, Record<SubCategory, string[]>>
  selectedCategories: Category[]
  selectedSubCategories: SubCategory[]
  selectedTopics: string[]
  onCategorySelect: (category: Category) => void
  onSubCategorySelect: (subCategory: SubCategory) => void
  onTopicSelect: (topic: string) => void
}

function BookmarkFilters({
  categories,
  selectedCategories,
  selectedSubCategories,
  selectedTopics,
  onCategorySelect,
  onSubCategorySelect,
  onTopicSelect,
}: BookmarkFiltersProps) {
    return (
        <nav className="bookmark-filters" aria-label="Bookmark filters">

            <section className="category-filter">
            <h2>Categories:</h2>
            <div className="category-buttons">
                <button
                className={selectedCategories.includes('work') ? 'selected' : ''}
                onClick={() => onCategorySelect('work')}
                >
                Work            
                </button>
                <button
                className={selectedCategories.includes('personal') ? 'selected' : ''}
                onClick={() => onCategorySelect('personal')}
                >
                Personal
                </button>
                <button
                className={selectedCategories.includes('learning') ? 'selected' : ''}
                onClick={() => onCategorySelect('learning')}
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
                    onClick={() => onSubCategorySelect(subCategory)}
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
                    <button key={topic} className={selectedTopics.includes(topic) ? 'selected' : ''} onClick={() => onTopicSelect(topic)}>
                    {topic}
                    </button>
                ))}
                </div>
            </section>
            )}
        </nav>
    )

}

export default BookmarkFilters