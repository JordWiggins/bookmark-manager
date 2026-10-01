import type { Bookmark } from '../types/bookmark'

type BookmarkListProps = {
  bookmarks: Bookmark[]
}

function BookmarkList({ bookmarks }: BookmarkListProps) {
  return (
    <main>
      <h2>Bookmarks</h2>

      {bookmarks.map((bookmark) => (
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
  )
}

export default BookmarkList