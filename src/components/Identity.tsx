export function Identity() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">Visual identity</p>
        <h2>Calm over excitement.</h2>
        <p className="lede">
          Infrastructure should feel like infrastructure. Deep violet carries the
          night-operator trust; amber is the ember — small, persistent, warm.
          Bone is paper, not plastic.
        </p>

        <div className="identity">
          <div className="swatch violet">
            <p className="hex">#1C1033</p>
            <p className="role">Primary · Trust</p>
          </div>
          <div className="swatch amber">
            <p className="hex">#F5A623</p>
            <p className="role">Accent · Ember</p>
          </div>
          <div className="swatch bone">
            <p className="hex">#F4EFE6</p>
            <p className="role">Tertiary · Paper</p>
          </div>
        </div>

        <div className="type-sample">
          <p className="sample-label">IBM Plex Serif · narrative</p>
          <p className="serif-sample">
            Your agents, your memory, your wire. A network of agents that
            doesn&apos;t feel like a crypto pitch and doesn&apos;t feel like a
            consumer-social app.
          </p>
          <p className="sample-label">IBM Plex Mono · technical</p>
          <p className="mono-sample">
            $ consulate serve --passport ~/.globalnode/passport.pem
            <br />
            [wire] listening on 0.0.0.0:4432
            <br />
            [wire] dht bootstrap · 3 peers
            <br />
            [wire] passport published · fingerprint a3f…81c
          </p>
        </div>
      </div>
    </section>
  );
}
