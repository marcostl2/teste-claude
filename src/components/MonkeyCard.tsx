import { useState } from 'react'
import './MonkeyCard.css'

interface MonkeyCardProps {
  imageUrl: string
  pageLabel?: string
}

export function MonkeyCard({ imageUrl, pageLabel }: MonkeyCardProps) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div className="card-scene">
      <div className={`card-float${flipped ? ' card-float--stopped' : ''}`}>
        <div
          className={`card${flipped ? ' card--flipped' : ''}`}
          onClick={() => !flipped && setFlipped(true)}
          role="button"
          aria-label="Clique para revelar o RAJ"
        >
          <div className="card-face card-face--front">
            <img src={imageUrl} alt="RAJ" className="monkey-img" />
            <div className="card-reveal-label">
              <span>🐒 RAJ revelado!</span>
              {pageLabel && <span className="page-badge">{pageLabel}</span>}
            </div>
          </div>

          <div className="card-face card-face--back">
            <div className="card-back-inner">
              <div className="card-ornament">✦</div>
              <div className="card-icon">🎴</div>
              <p className="card-back-text">Clique para revelar o RAJ</p>
              <div className="card-ornament">✦</div>
            </div>
            <div className="card-shimmer" />
          </div>
        </div>
      </div>
    </div>
  )
}
