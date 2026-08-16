import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <UtilityPage title="Careers">
      <p>
        Protostellar works with a small number of people. Introductions are
        typically made through existing relationships.
      </p>
      <p>
        Those who believe they can contribute to the firm’s long-term work may
        write in confidence. Roles are not listed publicly.
      </p>
      <InquiryForm defaultInquiry="careers" />
    </UtilityPage>
  );
}
