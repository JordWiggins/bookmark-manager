type HeaderProps = {
  showFavourites: boolean
  onToggleFavourites: () => void
}

function Header({ showFavourites, onToggleFavourites }: HeaderProps) {
  return (
    <header className="app-header">
      <h1>Bookmark Manager</h1>
      <div className="header-actions">
        <button>Add Bookmark</button>
        <button
          className={showFavourites ? 'selected' : ''}
          onClick={onToggleFavourites}
        >
          Favourites
        </button>
      </div>
    </header>
  )
}

export default Header