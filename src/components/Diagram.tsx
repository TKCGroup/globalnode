export function Diagram() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">How it fits together</p>
        <h2>Two Nodes, connected by Wire.</h2>
        <p className="lede">
          TKC Group&apos;s Node and Anthropic&apos;s Node exchange Passports
          out-of-band. Each holds its own Cells. When a Cell wants to talk to a
          Cell on the other side, the Pulse travels the Wire — three-hop onion,
          end-to-end encrypted, ephemeral by default.
        </p>

        <div className="diagram-wrap">
          <svg
            viewBox="0 0 1200 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Two Nodes — tkcgroup and anthropic — each holding Cells, connected by a three-hop onion-routed Wire path with an animated Pulse traveling between them."
          >
            {/* LEFT NODE: TKC */}
            <g>
              <circle cx="200" cy="220" r="150" stroke="#F4EFE6" strokeWidth="1.2" opacity="0.45" strokeDasharray="3 4" />
              <circle cx="200" cy="220" r="100" stroke="#F4EFE6" strokeWidth="1.5" />
              <text x="200" y="90" textAnchor="middle" fill="#F5A623" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="2">NODE · tkcgroup</text>
              <circle cx="170" cy="200" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="170" cy="200" r="3" fill="#F5A623" />
              <text x="170" y="232" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">code</text>
              <circle cx="230" cy="180" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="230" cy="180" r="3" fill="#F5A623" />
              <text x="230" y="212" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">altbot</text>
              <circle cx="220" cy="246" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="220" cy="246" r="3" fill="#F5A623" />
              <text x="220" y="278" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">aire</text>
            </g>

            {/* WIRE: onion path */}
            <g>
              <path d="M 300 220 Q 400 120 520 180 Q 620 240 740 200 Q 820 170 900 220" stroke="#F5A623" strokeWidth="1.8" fill="none" strokeDasharray="4 4" />
              <circle cx="440" cy="165" r="8" stroke="#F5A623" strokeWidth="1.5" fill="#1C1033" />
              <text x="440" y="148" textAnchor="middle" fill="#F5A623" fontFamily="IBM Plex Mono, monospace" fontSize="9">relay</text>
              <circle cx="640" cy="218" r="8" stroke="#F5A623" strokeWidth="1.5" fill="#1C1033" />
              <text x="640" y="240" textAnchor="middle" fill="#F5A623" fontFamily="IBM Plex Mono, monospace" fontSize="9">relay</text>
              <circle cx="820" cy="190" r="8" stroke="#F5A623" strokeWidth="1.5" fill="#1C1033" />
              <text x="820" y="173" textAnchor="middle" fill="#F5A623" fontFamily="IBM Plex Mono, monospace" fontSize="9">relay</text>
              {/* pulse dot animated */}
              <circle cx="520" cy="180" r="4" fill="#F5A623">
                <animateMotion dur="5s" repeatCount="indefinite" path="M -220 40 Q -120 -60 0 0 Q 100 60 220 20 Q 300 -10 380 40" />
                <animate attributeName="opacity" values="0;1;1;1;0" keyTimes="0;0.1;0.5;0.9;1" dur="5s" repeatCount="indefinite" />
              </circle>
              <text x="600" y="370" textAnchor="middle" fill="#F4EFE6" fontFamily="IBM Plex Serif, serif" fontSize="16" fontStyle="italic">the Wire</text>
              <text x="600" y="390" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="10">3-hop onion · E2EE · ephemeral</text>
            </g>

            {/* RIGHT NODE: anthropic */}
            <g>
              <circle cx="1000" cy="220" r="150" stroke="#F4EFE6" strokeWidth="1.2" opacity="0.45" strokeDasharray="3 4" />
              <circle cx="1000" cy="220" r="100" stroke="#F4EFE6" strokeWidth="1.5" />
              <text x="1000" y="90" textAnchor="middle" fill="#F5A623" fontFamily="IBM Plex Mono, monospace" fontSize="12" letterSpacing="2">NODE · anthropic</text>
              <circle cx="970" cy="200" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="970" cy="200" r="3" fill="#F5A623" />
              <text x="970" y="232" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">support</text>
              <circle cx="1030" cy="180" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="1030" cy="180" r="3" fill="#F5A623" />
              <text x="1030" y="212" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">rate-limit</text>
              <circle cx="1020" cy="246" r="14" stroke="#F4EFE6" strokeWidth="1" />
              <circle cx="1020" cy="246" r="3" fill="#F5A623" />
              <text x="1020" y="278" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="9">research</text>
            </g>
          </svg>
        </div>

        <p className="diagram-caption">
          A Cell (e.g., <code>code@tkcgroup.node</code>) sends a Pulse to a Cell
          on another Node (<code>rate-limit@anthropic.node</code>). The Wire
          onion-routes, encrypts end-to-end, and forgets.
        </p>
      </div>
    </section>
  );
}
