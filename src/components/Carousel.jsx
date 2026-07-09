import { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

// A small, dependency-free carousel. Pass an array of React nodes as `slides`.
export default function Carousel({ slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length

  const go = (delta) => {
    setIndex((prev) => (prev + delta + count) % count)
  }

  if (count === 0) return null

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          display: 'flex',
          transform: `translateX(-${index * 100}%)`,
          transition: 'transform 0.5s ease',
        }}
      >
        {slides.map((slide, i) => (
          <div key={i} style={{ flex: '0 0 100%' }}>
            {slide}
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={() => go(-1)}
            aria-label="Previous project"
            style={carouselBtnStyle('left')}
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => go(1)}
            aria-label="Next project"
            style={carouselBtnStyle('right')}
          >
            <FaChevronRight />
          </button>

          <div style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 20 }}>
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  border: '1px solid var(--green)',
                  background: index === i ? 'var(--green)' : 'transparent',
                  cursor: 'pointer',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

function carouselBtnStyle(side) {
  return {
    position: 'absolute',
    top: '50%',
    [side]: 10,
    transform: 'translateY(-50%)',
    background: 'var(--light-navy)',
    color: 'var(--green)',
    border: '1px solid var(--lightest-navy)',
    borderRadius: '50%',
    width: 40,
    height: 40,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}
