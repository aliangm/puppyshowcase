import React from 'react'
import PuppyCard from './PuppyCard'
import { Puppy } from '../types'
import './PuppyGrid.css'

interface PuppyGridProps {
  puppies: Puppy[]
  onPuppyClick: (puppy: Puppy) => void
  favorites: Set<number>
  onToggleFavorite: (id: number) => void
}

const PuppyGrid: React.FC<PuppyGridProps> = ({ 
  puppies, 
  onPuppyClick,
  favorites,
  onToggleFavorite
}) => {
  if (puppies.length === 0) {
    return (
      <div className="empty-state">
        <div className="empty-box">
          <div className="empty-icon">😢</div>
          <h2 className="empty-title">NO PUPPIES FOUND</h2>
          <p className="empty-text">Try a different filter!</p>
        </div>
      </div>
    )
  }

  return (
    <div className="puppy-grid">
      <div className="grid-container">
        {puppies.map(puppy => (
          <PuppyCard
            key={puppy.id}
            puppy={puppy}
            onClick={() => onPuppyClick(puppy)}
            isFavorite={favorites.has(puppy.id)}
            onToggleFavorite={() => onToggleFavorite(puppy.id)}
          />
        ))}
      </div>
    </div>
  )
}

export default PuppyGrid
