import React, { useEffect } from 'react'
import { Puppy } from '../types'
import './PuppyModal.css'

interface PuppyModalProps {
  puppy: Puppy
  onClose: () => void
  isFavorite: boolean
  onToggleFavorite: () => void
}

const PuppyModal: React.FC<PuppyModalProps> = ({ 
  puppy, 
  onClose,
  isFavorite,
  onToggleFavorite
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-grid">
          <div className="modal-image-section">
            <div className="modal-image-container" style={{ borderColor: puppy.color }}>
              <img src={puppy.image} alt={puppy.name} className="modal-image" />
            </div>
            <button 
              className={`modal-favorite-btn ${isFavorite ? 'active' : ''}`}
              onClick={onToggleFavorite}
            >
              {isFavorite ? '❤️ REMOVE FROM FAVORITES' : '🤍 ADD TO FAVORITES'}
            </button>
          </div>

          <div className="modal-info-section">
            <div className="modal-header" style={{ backgroundColor: puppy.color }}>
              <h2 className="modal-name">{puppy.name}</h2>
              <span className="modal-age">{puppy.age}</span>
            </div>

            <div className="modal-breed-section">
              <div className="modal-label-box">
                <span className="modal-label">BREED</span>
              </div>
              <div className="modal-breed-value">
                {puppy.breed}
              </div>
            </div>

            <div className="modal-personality-section">
              <div className="modal-label-box">
                <span className="modal-label">PERSONALITY</span>
              </div>
              <div className="modal-tags">
                {puppy.personality.map(trait => (
                  <span key={trait} className="modal-tag">
                    {trait}
                  </span>
                ))}
              </div>
            </div>

            <div className="modal-description-section">
              <div className="modal-label-box">
                <span className="modal-label">ABOUT</span>
              </div>
              <div className="modal-description-box">
                <p className="modal-description">{puppy.description}</p>
              </div>
            </div>

            <div className="modal-actions">
              <button className="modal-adopt-btn" style={{ backgroundColor: puppy.color }}>
                🐾 ADOPT {puppy.name}
              </button>
              <button className="modal-contact-btn">
                📧 CONTACT US
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PuppyModal
