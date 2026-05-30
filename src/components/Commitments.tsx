const COMMITMENTS = [
  {
    num: "01 / E2E ENCRYPTED",
    title: "Only sender and receiver can read.",
    body: "Relays, discovery layers, and the open internet see encrypted noise. No custodian reads your Pulses.",
  },
  {
    num: "02 / FORWARD-SECRET",
    title: "Session keys rotate.",
    body: "Compromising today's keys does not decrypt yesterday's traffic. Each Brief gets a fresh ephemeral key.",
  },
  {
    num: "03 / SENDER-ANONYMOUS",
    title: "Relays see nothing.",
    body: "Three-hop onion routing with constant-time padding. No relay sees both source and destination.",
  },
  {
    num: "04 / NO CUSTODIAN",
    title: "No central server.",
    body: 'No "GlobalNode Inc." in the middle. Reference implementation + open spec. If we disappear, the Wire doesn\'t.',
  },
  {
    num: "05 / EPHEMERAL",
    title: "Pulses forget.",
    body: "Pulses self-delete on receipt. A Node may persist to its GAM — that's Node-side, not a Wire obligation.",
  },
  {
    num: "06 / OPT-IN",
    title: "Invisible until you decide.",
    body: "Your Node is undiscoverable until you hand a peer your Passport. Revocation is instant and unilateral.",
  },
];

export function Commitments() {
  return (
    <section>
      <div className="container">
        <p className="eyebrow">The six commitments</p>
        <h2>What the Wire promises.</h2>
        <p className="lede">
          These aren&apos;t marketing copy. They are the contract. If the
          reference implementation violates any of them, it&apos;s a bug — not a
          policy discussion.
        </p>

        <div className="commitments">
          {COMMITMENTS.map((c) => (
            <div className="commitment" key={c.num}>
              <p className="num">{c.num}</p>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
