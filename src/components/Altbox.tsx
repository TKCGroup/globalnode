import { ALTBOT_URL } from "@/lib/links";

export function Altbox() {
  return (
    <section className="altbox-section">
      <div className="container">
        <div className="altbox-hero">
          <div className="altbox-copy">
            <p className="eyebrow">The hardware · altbot.ai</p>
            <h2>
              A Node
              <br />
              you can hold.
            </h2>
            <p className="hero-echo">
              Your AI. Now Local. <em>— altbot.ai</em>
              <br />
              Your Node. Now Real. <em>— us, here</em>
            </p>
            <p className="bridge">
              Cell, Node, Wire describe the concept. <strong>Altbox</strong>{" "}
              makes the Node physical. A private AI compute hub — Jetson Orin Nano
              Super, 67&nbsp;TOPS of quiet on your desk, zero cloud dependency.
              Plug it in, generate a Passport, speak the Wire.
            </p>

            <div className="spec-row">
              <div className="spec-item">
                <p className="spec-num">$799</p>
                <p className="spec-label">Pre-order</p>
              </div>
              <div className="spec-item">
                <p className="spec-num">
                  67{" "}
                  <span style={{ fontSize: "0.7em", opacity: 0.65 }}>TOPS</span>
                </p>
                <p className="spec-label">Jetson Orin Nano Super</p>
              </div>
              <div className="spec-item">
                <p className="spec-num">
                  25<span style={{ fontSize: "0.7em", opacity: 0.65 }}>W</span>
                </p>
                <p className="spec-label">Max power</p>
              </div>
              <div className="spec-item">
                <p className="spec-num">
                  Q3{" "}
                  <span style={{ fontSize: "0.7em", opacity: 0.65 }}>&apos;26</span>
                </p>
                <p className="spec-label">Ships</p>
              </div>
            </div>

            <a className="altbox-cta" href={ALTBOT_URL} target="_blank" rel="noopener">
              Pre-order Altbox <span className="arrow">→</span>
            </a>
            <p className="altbox-sub-cta">
              altbot.ai · $0/month · your data stays yours
            </p>
          </div>

          <div className="altbox-render">
            <svg viewBox="0 0 520 420" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Altbox device render">
              <defs>
                <linearGradient id="boxBody" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#2A1F47" />
                  <stop offset="55%" stopColor="#1C1033" />
                  <stop offset="100%" stopColor="#13092A" />
                </linearGradient>
                <linearGradient id="boxTop" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3A2E5E" />
                  <stop offset="100%" stopColor="#2A1F47" />
                </linearGradient>
                <radialGradient id="boxGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#F5A62333" />
                  <stop offset="100%" stopColor="#F5A62300" />
                </radialGradient>
                <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="18" />
                  <feOffset dy="22" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.5" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <ellipse cx="260" cy="230" rx="220" ry="180" fill="url(#boxGlow)" />
              <ellipse cx="260" cy="360" rx="180" ry="14" fill="#000" opacity="0.35" />

              <g filter="url(#softShadow)">
                <path d="M 110 140 L 170 110 L 410 110 L 450 140 Z" fill="url(#boxTop)" stroke="#F4EFE624" strokeWidth="1" />
                <rect x="110" y="140" width="340" height="200" rx="10" fill="url(#boxBody)" stroke="#F4EFE633" strokeWidth="1" />
                <line x1="110" y1="320" x2="450" y2="320" stroke="#F4EFE614" strokeWidth="1" />
                <line x1="110" y1="160" x2="450" y2="160" stroke="#F4EFE614" strokeWidth="1" />

                <g transform="translate(280 240)">
                  <circle cx="0" cy="0" r="58" stroke="#F4EFE6" strokeWidth="0.8" opacity="0.18" />
                  <circle cx="0" cy="0" r="38" stroke="#F4EFE6" strokeWidth="0.8" opacity="0.26" />
                  <circle cx="0" cy="0" r="18" stroke="#F4EFE6" strokeWidth="1" opacity="0.5" />
                  <circle cx="0" cy="0" r="3.5" fill="#F5A623" />
                </g>

                <circle className="status-led" cx="420" cy="175" r="4" fill="#F5A623" />
                <circle cx="420" cy="175" r="7" stroke="#F5A62340" strokeWidth="1" fill="none" />

                <text x="140" y="332" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="3">ALTBOX</text>
                <text x="140" y="345" fill="#F4EFE640" fontFamily="IBM Plex Mono, monospace" fontSize="8" letterSpacing="1">consulate · tkcgroup.node</text>

                <rect x="432" y="205" width="14" height="3" rx="1" fill="#F4EFE620" />
                <rect x="432" y="215" width="14" height="3" rx="1" fill="#F4EFE620" />
                <rect x="432" y="225" width="14" height="3" rx="1" fill="#F4EFE620" />
              </g>

              <g>
                <line x1="100" y1="380" x2="460" y2="380" stroke="#F4EFE640" strokeWidth="1" strokeDasharray="2 4" />
                <text x="280" y="400" textAnchor="middle" fill="#F4EFE680" fontFamily="IBM Plex Mono, monospace" fontSize="10" letterSpacing="2">~4&quot; × 4&quot; · fits in one hand</text>
              </g>
            </svg>
          </div>
        </div>

        <div className="altbox-claims">
          <div className="altbox-claim">
            <p className="claim-eyebrow">Private by default</p>
            <h4>Your Cells never leave the box.</h4>
            <p>
              Until you hand a peer your Passport. No cloud round-trip, no
              custodial inspection, no &quot;free&quot; tier paying in your data.
            </p>
          </div>
          <div className="altbox-claim">
            <p className="claim-eyebrow">67 TOPS · 25W · silent</p>
            <h4>Runs your agents locally.</h4>
            <p>
              Jetson Orin Nano Super compute under the hood. Day 1 ready — no cold
              start, no learning period, $0/month.
            </p>
          </div>
          <div className="altbox-claim">
            <p className="claim-eyebrow">Consulate pre-loaded</p>
            <h4>Speaks the Wire out of the box.</h4>
            <p>
              Plug in → generate Passport → advertise to your trust ring → start
              pulsing. Zigbee + Matter for the rest of your house.
            </p>
          </div>
        </div>

        <div className="altbox-close">
          <p>
            &quot;ChatGPT doesn&apos;t know your Cells.
            <br />
            Alexa doesn&apos;t speak the Wire.
            <br />A Node without hardware is a diagram.&quot;
          </p>
          <p style={{ fontSize: "1em", fontStyle: "normal", color: "var(--amber)" }}>
            Altbox is the Node, made real.
          </p>
          <p className="attribution">— altbot.ai · adapted for Cell / Node / Wire</p>
        </div>
      </div>
    </section>
  );
}
