import { useState } from 'react'
import './MagicCard.css'

interface Particle {
  top: string
  left: string
  size: number
  color: string
  dur: string
  delay: string
  dy: string
}

const PARTICLES: Particle[] = [
  { top: '8%',  left: '14%', size: 4, color: '#c084fc', dur: '2.5s', delay: '0s',    dy: '-12px' },
  { top: '16%', left: '79%', size: 3, color: '#a855f7', dur: '3.1s', delay: '0.4s',  dy: '-8px'  },
  { top: '41%', left: '6%',  size: 5, color: '#ddd6fe', dur: '3.5s', delay: '0.8s',  dy: '-15px' },
  { top: '59%', left: '87%', size: 3, color: '#c084fc', dur: '2.8s', delay: '1.2s',  dy: '-10px' },
  { top: '74%', left: '17%', size: 4, color: '#a855f7', dur: '3.2s', delay: '0.2s',  dy: '-14px' },
  { top: '82%', left: '71%', size: 3, color: '#ddd6fe', dur: '2.6s', delay: '1.6s',  dy: '-9px'  },
  { top: '12%', left: '47%', size: 2, color: '#c084fc', dur: '4.0s', delay: '0.6s',  dy: '-11px' },
  { top: '51%', left: '81%', size: 4, color: '#a855f7', dur: '3.4s', delay: '1.0s',  dy: '-13px' },
  { top: '29%', left: '37%', size: 2, color: '#ddd6fe', dur: '2.2s', delay: '1.4s',  dy: '-7px'  },
  { top: '67%', left: '57%', size: 3, color: '#c084fc', dur: '3.8s', delay: '0.3s',  dy: '-16px' },
  { top: '35%', left: '63%', size: 2, color: '#a855f7', dur: '3.0s', delay: '1.1s',  dy: '-10px' },
  { top: '88%', left: '38%', size: 3, color: '#ddd6fe', dur: '2.9s', delay: '0.7s',  dy: '-12px' },
]

interface MagicCardProps {
  photo: string
  label?: string
}

export default function MagicCard({ photo, label = 'Carta Mágica' }: MagicCardProps) {
  const [flipped, setFlipped] = useState(false)
  const [showFlash, setShowFlash] = useState(false)

  function handleClick() {
    if (flipped) return
    setFlipped(true)
    setShowFlash(true)
    setTimeout(() => setShowFlash(false), 700)
  }

  return (
    <div className="magic-scene" onClick={handleClick} aria-label={label}>
      <div className={`magic-card${flipped ? ' magic-card--flipped' : ''}`}>

        {/* ── Back face ── */}
        <div className="magic-face magic-face--back">
          <div className="magic-particles" aria-hidden="true">
            {PARTICLES.map((p, i) => (
              <span
                key={i}
                className="magic-particle"
                style={{
                  top: p.top,
                  left: p.left,
                  width: p.size,
                  height: p.size,
                  background: p.color,
                  '--dur': p.dur,
                  '--delay': p.delay,
                  '--dy': p.dy,
                } as React.CSSProperties}
              />
            ))}
          </div>

          <div className="magic-face-content">
            <div className="magic-symbol" aria-hidden="true">✦</div>
            <p className="magic-label">Clique para revelar</p>
            <div className="magic-hint" aria-hidden="true">✨</div>
          </div>

          <div className="magic-shimmer" aria-hidden="true" />
          <div className="magic-corner magic-corner--tl" aria-hidden="true">✦</div>
          <div className="magic-corner magic-corner--tr" aria-hidden="true">✦</div>
          <div className="magic-corner magic-corner--bl" aria-hidden="true">✦</div>
          <div className="magic-corner magic-corner--br" aria-hidden="true">✦</div>
        </div>

        {/* ── Front face (photo) ── */}
        <div className="magic-face magic-face--front">
          <img src={photo} alt={label} className="magic-photo" />
          {showFlash && <div className="magic-flash" aria-hidden="true" />}
          <div className="magic-revealed-badge" aria-hidden="true">✨ Revelado!</div>
        </div>
      </div>
    </div>
  )
}
