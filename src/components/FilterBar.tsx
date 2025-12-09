import React from 'react'
import './FilterBar.css'

interface FilterBarProps {
  currentFilter: string
  onFilterChange: (filter: string) => void
  favoriteCount: number
}

const filters = [
  'ALL',
  'FAVORITES',
  'GOLDEN RETRIEVER',
  'HUSKY',
  'BEAGLE',
  'CORGI',
  'GERMAN SHEPHERD',
  'LABRADOR',
  'POODLE',
  'BULLDOG',
  'SHIBA INU',
  'BOXER'
]

const FilterBar: React.FC<FilterBarProps> = ({ currentFilter, onFilterChange, favoriteCount }) => {
  return (
    <div className="filter-bar">
      <div className="filter-container">
        <div className="filter-label-box">
          <span className="filter-label">FILTER BY:</span>
        </div>
        <div className="filter-buttons">
          {filters.map(filter => (
            <button
              key={filter}
              className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
              onClick={() => onFilterChange(filter)}
            >
              {filter}
              {filter === 'FAVORITES' && favoriteCount > 0 && (
                <span className="badge">{favoriteCount}</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FilterBar
