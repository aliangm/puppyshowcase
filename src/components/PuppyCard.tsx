import React from 'react'
import { Puppy } from '../types'
import './PuppyCard.css'

interface PuppyCardProps {
  puppy: Puppy
  onClick: () => void
  isFavorite: boolean
  onToggleFavorite: () => void
}

const PuppyCard: React.FC<PuppyCardProps> = ({ 
  puppy, 
  onClick,
  isFavorite,
  onToggleFavorite
}) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onToggleFavorite()
  }

  return (
    <div className="puppy-card" onClick={onClick}>
      <div className="card-image-container" style={{ borderColor: puppy.color }}>
        <img src={puppy.image} alt={puppy.name} className="card-image" />
        <button 
          className={`favorite-btn ${isFavorite ? 'active' : ''}`}
          onClick={handleFavoriteClick}
        >
          {isFavorite ? '❤️' : '🤍'}
        </button>
      </div>
      <div className="card-content" style={{ backgroundColor: puppy.color }}>
        <div className="card-header">
          <h3 className="card-name">{puppy.name}</h3>
          <span className="card-age">{puppy.age}</span>
        </div>
        <div className="card-breed-box">
          <span className="card-breed">{puppy.breed}</span>
        </div>
        <div className="card-tags">
          {puppy.personality.map(trait => (
            <span key={trait} className="card-tag">
              {trait}
            </span>
          ))}
        </div>
        <button className="view-btn">
          VIEW DETAILS →
        </button>
      </div>
    </div>
  )
}

export default PuppyCard
