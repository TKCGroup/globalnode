const TAGLINES = [
  { text: "Cells talk. Nodes speak. The Wire remembers nothing.", hero: true },
  { text: "A protocol for agents, not a platform for ads." },
  { text: "Your agents. Your memory. Your wire." },
  { text: "The agent internet, on your terms." },
  { text: "Quiet by default." },
  { text: "No custodian. No middleman. No backdoor." },
];

export function Taglines() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">Taglines · deck</p>
        <h2>Committed order.</h2>
        <p className="lede">
          One hero, five alternates. The hero ships on the homepage; the others
          live in ad copy, docs, social, and the README.
        </p>

        <div className="taglines">
          {TAGLINES.map((t) => (
            <div
              className={t.hero ? "tagline-item hero-line" : "tagline-item"}
              key={t.text}
            >
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
