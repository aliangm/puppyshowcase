import React, { useState } from 'react'
import Header from './components/Header'
import PuppyGrid from './components/PuppyGrid'
import PuppyModal from './components/PuppyModal'
import FilterBar from './components/FilterBar'
import { Puppy } from './types'
import { puppies } from './data/puppies'
import './App.css'

const App: React.FC = () => {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null)
  const [filter, setFilter] = useState<string>('ALL')
  const [favorites, setFavorites] = useState<Set<number>>(new Set())

  const filteredPuppies = filter === 'ALL' 
    ? puppies 
    : filter === 'FAVORITES'
    ? puppies.filter(p => favorites.has(p.id))
    : puppies.filter(p => p.breed === filter)

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(id)) {
        newFavorites.delete(id)
      } else {
        newFavorites.add(id)
      }
      return newFavorites
    })
  }

  return (
    <div className="app">
      <Header />
      <FilterBar 
        currentFilter={filter} 
        onFilterChange={setFilter}
        favoriteCount={favorites.size}
      />
      <PuppyGrid 
        puppies={filteredPuppies}
        onPuppyClick={setSelectedPuppy}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
      {selectedPuppy && (
        <PuppyModal 
          puppy={selectedPuppy}
          onClose={() => setSelectedPuppy(null)}
          isFavorite={favorites.has(selectedPuppy.id)}
          onToggleFavorite={() => toggleFavorite(selectedPuppy.id)}
        />
      )}
    </div>
  )
}

export default App
