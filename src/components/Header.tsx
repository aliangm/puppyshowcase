import React from 'react'
import './Header.css'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <div className="logo-box">🐕</div>
          <h1 className="title">PUPPY GALLERY</h1>
        </div>
        <div className="tagline-box">
          <span className="tagline">ADOPT. LOVE. REPEAT.</span>
        </div>
      </div>
      <div className="header-stripe"></div>
    </header>
  )
}

export default Header
