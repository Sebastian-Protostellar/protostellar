import type { Metadata } from "next";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <UtilityPage title="Privacy">
      <p>
        Protostellar Inc. respects the confidentiality of correspondence and the
        limited information visitors may choose to provide.
      </p>
      <p>
        This website collects only the information you submit through the contact
        form or by email. That information is used solely to consider and respond
        to your inquiry. It is not sold, and it is not used for advertising.
      </p>
      <p>
        The site does not publish a newsletter, does not operate a public
        investor portal, and is not designed to track visitors for marketing
        purposes.
      </p>
      <p>
        If you wish to request that correspondence be deleted, write to
        contact@protostellar.com.
      </p>
    </UtilityPage>
  );
}
