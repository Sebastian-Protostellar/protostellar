import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Submit a deal" };

export default function DealPage() {
  return (
    <UtilityPage title="Submit a deal">
      <p>
        Protostellar considers a limited number of businesses and investment
        opportunities. Materials may be sent to the firm in confidence.
      </p>
      <p>
        There is no public process, timeline or commitment implied by this form.
      </p>
      <InquiryForm />
    </UtilityPage>
  );
}
