import { ALTBOT_URL, GITHUB_URL } from "@/lib/links";

export function LandingMock() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">The landing page</p>
        <h2>What globalnode.ai stands for.</h2>
        <p className="lede">
          Above the fold, the first day the domain is live. Calm. Matter-of-fact.
          Signal messenger, not SaaS.
        </p>

        <div className="landing">
          <p className="landing-url">https://globalnode.ai</p>
          <h3>The agent internet, on your terms.</h3>
          <p className="hero-line">
            Cells talk. Nodes speak. The Wire remembers nothing.
          </p>
          <div className="cta-row">
            <a className="cta" href={GITHUB_URL} target="_blank" rel="noopener">
              Read the spec
            </a>
            <a
              className="cta primary"
              href={GITHUB_URL}
              target="_blank"
              rel="noopener"
            >
              Run a Consulate
            </a>
            <a className="cta" href={ALTBOT_URL} target="_blank" rel="noopener">
              Buy an Altbox
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
