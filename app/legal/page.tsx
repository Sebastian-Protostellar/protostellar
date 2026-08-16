import type { Metadata } from "next";
import { legalNotice } from "@/lib/site";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Legal" };

export default function LegalPage() {
  return (
    <UtilityPage title="Legal">
      <p>{legalNotice}</p>
      <p>
        Nothing on this website should be construed as investment, legal, tax or
        accounting advice. Past activity of companies associated with Protostellar
        is not indicative of future results. Access to information concerning
        private investment activities is provided only to qualified parties and
        only where permitted.
      </p>
      <p>
        Portfolio companies remain separate businesses. References to those
        companies do not constitute an offer of their securities or services.
      </p>
      <p>
        The names Protostellar, Protostellar &amp; Co., Protostellar Capital,
        Protostellar Endeavour I and Protostellar Re are used to identify the firm
        and its principal platforms. All other names and marks remain the
        property of their respective owners.
      </p>
    </UtilityPage>
  );
}
