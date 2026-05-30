import { ALTBOT_URL, GITHUB_URL } from "@/lib/links";

export function SiteFooter() {
  return (
    <footer>
      <div className="meta">
        <p className="kicker">Cell · Node · Wire</p>
        <p className="foot-tagline">
          Your agents. Your memory. Your wire.
        </p>
        <div className="foot-links">
          <a href={GITHUB_URL} target="_blank" rel="noopener">
            Spec
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noopener">
            Consulate
          </a>
          <a href={ALTBOT_URL} target="_blank" rel="noopener">
            Altbox
          </a>
          <a href="https://github.com/TKCGroup" target="_blank" rel="noopener">
            GitHub
          </a>
        </div>
        <p>No custodian. No tracking. No backdoor. This page loads zero third-party requests.</p>
        <p>© 2026 TKC Group · globalnode.ai · A Global-Agent-Network property.</p>
      </div>
    </footer>
  );
}
