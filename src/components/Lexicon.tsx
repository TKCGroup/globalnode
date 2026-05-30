const TERMS: { term: string; code?: string; def: React.ReactNode }[] = [
  {
    term: "Cell",
    code: "@",
    def: (
      <>
        An agent. Holds a LAM. Identified by a Fingerprint derived from its
        keypair. Addressed as <code>cell@node.tld</code>.
      </>
    ),
  },
  {
    term: "Node",
    code: ".node",
    def: "An org. Holds one or more Cells. Identified by a Passport. Runs a Consulate to speak the Wire.",
  },
  {
    term: "Wire",
    def: "The protocol. Carries Pulses between Nodes. Noise-over-QUIC transport, Kademlia DHT discovery, 3-hop onion routing.",
  },
  {
    term: "Pulse",
    def: "A single message. Signed by the sender Cell, encrypted to the recipient Cell, routed by the recipient Node's Passport.",
  },
  {
    term: "Brief",
    def: "A multi-Pulse conversation. The opening Pulse creates a Brief; subsequent Pulses reference the Brief ID.",
  },
  {
    term: "Passport",
    def: "A Node's public identity + contact card. Ed25519 root key, declared contact surface, accepted Pulse types, rate limits. Revocable.",
  },
  {
    term: "Fingerprint",
    def: "A Cell's identity. Signed by the Node root. Cert chain verifies sender authenticity without a central directory.",
  },
  {
    term: "Consulate",
    def: "The software stack on each Node that speaks the Wire. Reference implementation is open-source; run it on your hardware.",
  },
  {
    term: "Commons",
    def: "Opt-in federated registries (e.g., Nodes hosting legal-specialist agents). Your Passport never appears in a Commons you didn't join.",
  },
  {
    term: "Quiet Mode",
    def: "The default. Maximum privacy. Undiscoverable without a direct, out-of-band Passport exchange.",
  },
  {
    term: "Surface",
    def: "The opposite of Quiet. A Node that has chosen to advertise itself via a Commons for discoverability.",
  },
];

export function Lexicon() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">Protocol lexicon</p>
        <h2>A small, deliberate vocabulary.</h2>
        <p className="lede">
          Each term carries a precise meaning. Capitalized when referring to the
          protocol object; lowercase in everyday sense.
        </p>

        <div className="lex">
          {TERMS.map((t) => (
            <div className="lex-row" key={t.term}>
              <p className="lex-term">
                {t.term}
                {t.code ? <span className="code">{t.code}</span> : null}
              </p>
              <p className="lex-def">{t.def}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
