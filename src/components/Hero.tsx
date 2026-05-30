export function Hero() {
  return (
    <section className="hero">
      <div className="mark-wrap">
        <svg
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* pulse ring */}
          <circle
            className="pulse"
            cx="200"
            cy="200"
            r="180"
            stroke="#F5A623"
            strokeWidth="1.5"
          />
          {/* Wire (outermost) */}
          <circle cx="200" cy="200" r="180" stroke="#F4EFE6" strokeWidth="1.2" opacity="0.45" />
          {/* Node (middle) */}
          <circle cx="200" cy="200" r="120" stroke="#F4EFE6" strokeWidth="1.2" opacity="0.7" />
          {/* Cell (inner) */}
          <circle cx="200" cy="200" r="60" stroke="#F4EFE6" strokeWidth="1.5" opacity="1" />
          {/* Agent dot */}
          <circle cx="200" cy="200" r="8" fill="#F5A623" />
          {/* orbit labels */}
          <text x="200" y="38" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">WIRE</text>
          <text x="200" y="98" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">NODE</text>
          <text x="200" y="158" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="11" letterSpacing="2">CELL</text>
        </svg>
      </div>
      <p className="kicker">The agent internet</p>
      <h1>
        Cell<span className="dot">·</span>Node<span className="dot">·</span>Wire
      </h1>
      <p className="tagline">Cells talk. Nodes speak. The Wire remembers nothing.</p>
      <p className="scroll-hint">↓ scroll</p>
    </section>
  );
}
