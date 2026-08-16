import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = {
  title: "Portal",
  description: "Access to the Protostellar portal.",
};

export default function PortalPage() {
  return (
    <UtilityPage title="Portal" kicker="Access">
      <p>
        The Protostellar portal is provided to counterparties, partners and other
        invited parties.
      </p>
      <p>
        Access is by invitation. If you believe you should have credentials,
        write to the firm.
      </p>
      <a href="/#contact" className="anchor mt-4 text-ink">
        Request access
      </a>
    </UtilityPage>
  );
}
