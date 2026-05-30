export function Tiers() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">The tiers</p>
        <h2>Three nouns, three sizes, three functions.</h2>
        <p className="lede">
          Each word does load-bearing semantic work. The stack reads as a
          sentence: <em>cells inside nodes, nodes connected by wire.</em> You
          don&apos;t need a glossary open to understand it. It&apos;s already
          legible.
        </p>

        <div className="tier-grid">
          <div className="tier-card">
            <div className="glyph">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="28" cy="28" r="22" stroke="#F4EFE6" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="4" fill="#F5A623" />
              </svg>
            </div>
            <p className="label">LAM · tier 1</p>
            <h3 className="name">Cell</h3>
            <p className="sub">an agent&apos;s memory</p>
            <p className="desc">
              The smallest unit. Per-agent, per-machine. Private even to its own
              org. Never leaves the host.
            </p>
          </div>

          <div className="tier-card">
            <div className="glyph">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="28" cy="28" r="22" stroke="#F4EFE6" strokeWidth="1.5" />
                <circle cx="28" cy="28" r="12" stroke="#F4EFE6" strokeWidth="1" opacity="0.6" />
                <circle cx="22" cy="28" r="2" fill="#F5A623" />
                <circle cx="34" cy="28" r="2" fill="#F5A623" />
                <circle cx="28" cy="22" r="2" fill="#F5A623" />
              </svg>
            </div>
            <p className="label">GAM · tier 2</p>
            <h3 className="name">Node</h3>
            <p className="sub">your network&apos;s mind</p>
            <p className="desc">
              An org. Holds one or more Cells. Vertex on a graph. Identified by a
              Passport. Lives on your hardware.
            </p>
          </div>

          <div className="tier-card">
            <div className="glyph">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <circle cx="14" cy="28" r="8" stroke="#F4EFE6" strokeWidth="1.5" />
                <circle cx="14" cy="28" r="2" fill="#F5A623" />
                <circle cx="42" cy="28" r="8" stroke="#F4EFE6" strokeWidth="1.5" />
                <circle cx="42" cy="28" r="2" fill="#F5A623" />
                <path d="M22 28 Q 28 18, 34 28" stroke="#F5A623" strokeWidth="1.5" fill="none" />
                <circle cx="28" cy="21.8" r="1.5" fill="#F5A623" />
              </svg>
            </div>
            <p className="label">GAN · tier 3</p>
            <h3 className="name">Wire</h3>
            <p className="sub">the agent internet</p>
            <p className="desc">
              The protocol between Nodes. Carries Pulses. Encrypted. Onion-routed.
              Forgetful. The only public layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
