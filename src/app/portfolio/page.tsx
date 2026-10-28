import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import { site } from "@/config/site";

export const metadata: Metadata = { title: `Portfolio — ${site.title}` };

export default function PortfolioIndex() {
  return (
    <div style={{ paddingTop: "var(--nav-h)" }}>
      <PortfolioGrid />
    </div>
  );
}
