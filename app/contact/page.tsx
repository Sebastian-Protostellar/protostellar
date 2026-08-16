import type { Metadata } from "next";
import { InquiryForm } from "@/components/inquiry-form";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <UtilityPage title="Contact">
      <InquiryForm />
    </UtilityPage>
  );
}
