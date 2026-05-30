import { Hero } from "@/components/Hero";
import { Tiers } from "@/components/Tiers";
import { Diagram } from "@/components/Diagram";
import { Commitments } from "@/components/Commitments";
import { Lexicon } from "@/components/Lexicon";
import { LandingMock } from "@/components/LandingMock";
import { Altbox } from "@/components/Altbox";
import { Identity } from "@/components/Identity";
import { Taglines } from "@/components/Taglines";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Tiers />
      <Diagram />
      <Commitments />
      <Lexicon />
      <LandingMock />
      <Altbox />
      <Identity />
      <Taglines />
      <SiteFooter />
    </main>
  );
}
