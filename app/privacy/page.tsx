import type { Metadata } from "next";
import { site } from "@/lib/site";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Privacy" };

export default function PrivacyPage() {
  return (
    <UtilityPage title="Privacy" kicker="Notice">
      <p>
        This notice describes how Protostellar Inc. and its related entities
        (together, “Protostellar,” “we,” or “us”) collect, use, and protect
        personal information in connection with this website and correspondence
        sent to the firm. Related entities include, without limitation,
        Protostellar &amp; Co., Protostellar Capital,
        Protostellar Re, and other affiliated or associated entities.
      </p>
      <p>Last updated: 17 August 2026.</p>

      <h2>Who is responsible</h2>
      <p>
        Protostellar Inc. is the operator of this website. Depending on the
        nature of an inquiry, another Protostellar entity may receive or hold
        the information you provide. Correspondence should be directed to{" "}
        <a href={`mailto:${site.email}`}>{site.email}</a>.
      </p>

      <h2>Information we collect</h2>
      <p>We collect information you choose to provide, including:</p>
      <ul>
        <li>name, email address, and the content of a message submitted through the contact form or sent by email;</li>
        <li>any other information you elect to include in that correspondence.</li>
      </ul>
      <p>
        When you visit the website, our hosting provider may automatically
        record technical data such as IP address, browser type, date and time of
        access, and the pages requested. That information is used to operate,
        secure, and diagnose the site. The site is not designed to track
        visitors for advertising, does not publish a newsletter, and does not
        sell personal information.
      </p>

      <h2>How we use information</h2>
      <p>Personal information is used to:</p>
      <ul>
        <li>consider and respond to inquiries;</li>
        <li>maintain records of correspondence;</li>
        <li>operate, protect, and improve the website;</li>
        <li>comply with law, regulation, or a lawful request; and</li>
        <li>establish or defend legal claims.</li>
      </ul>
      <p>
        We do not use personal information collected through this website for
        marketing lists, and we do not sell it.
      </p>

      <h2>Sharing</h2>
      <p>
        Information may be shared with service providers who assist in operating
        the website and transmitting email, with professional advisers, and with
        other Protostellar entities where required to handle an inquiry. Those
        parties are permitted to use the information only for the purpose for
        which it is provided. We may also disclose information if required by
        law or to protect the rights, property, or safety of Protostellar or
        others.
      </p>

      <h2>International transfers</h2>
      <p>
        Protostellar works from New York, London, and Melbourne. Information may
        be processed in the United States, the United Kingdom, Australia, or
        other jurisdictions where we or our service providers operate. Where
        required, we take steps appropriate to the transfer.
      </p>

      <h2>Retention</h2>
      <p>
        Correspondence is retained for as long as needed to handle the inquiry
        and for a reasonable period thereafter, or longer where law, regulation,
        or a dispute requires it.
      </p>

      <h2>Your rights</h2>
      <p>
        Depending on your location, you may have the right to request access to
        personal information we hold about you, to correct it, to request
        deletion, or to object to or restrict certain processing. Those rights
        are not absolute. To make a request, write to {site.email}. We may need
        to verify your identity before acting.
      </p>

      <h2>Security</h2>
      <p>
        We take reasonable technical and organizational measures to protect
        personal information. No method of transmission or storage is entirely
        secure.
      </p>

      <h2>Children</h2>
      <p>
        This website is not directed at children, and we do not knowingly
        collect personal information from them.
      </p>

      <h2>Changes</h2>
      <p>
        This notice may be updated from time to time. The revised notice will be
        posted on this page.
      </p>

      <h2>Contact</h2>
      <p>
        Privacy inquiries: <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Protostellar Inc., 250 Park Avenue, Floor 14, New York.
      </p>
    </UtilityPage>
  );
}
