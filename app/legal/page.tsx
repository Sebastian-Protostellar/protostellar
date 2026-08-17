import type { Metadata } from "next";
import { legalNotice, site } from "@/lib/site";
import { UtilityPage } from "@/components/utility-page";

export const metadata: Metadata = { title: "Terms of use" };

export default function LegalPage() {
  return (
    <UtilityPage title="Terms of use" kicker="Legal">
      <p>
        These terms govern access to and use of this website. By using the
        website, you agree to them. If you do not agree, do not use the site.
      </p>
      <p>Last updated: 17 August 2026.</p>

      <h2>The firm</h2>
      <p>
        This website is operated by Protostellar Inc. References to
        “Protostellar,” “the firm,” “we,” or “us” mean Protostellar Inc. and its
        related entities, including but not limited to Protostellar &amp; Co.,
        Protostellar Capital, Protostellar Re, and
        other affiliated, associated, or related entities, except where a
        particular entity is named.
      </p>
      <p>
        Each Protostellar entity is a separate business. Nothing on this website
        creates a partnership, agency, or joint venture among them, or between
        any of them and you.
      </p>

      <h2>No offer or solicitation</h2>
      <p>{legalNotice}</p>
      <p>
        Nothing on this website is an offer to sell, or a solicitation of an
        offer to buy, any security, interest, or other investment product, or an
        offer of investment advisory or other regulated services, in any
        jurisdiction. Any such offer or solicitation, if made, will be made only
        pursuant to confidential offering or other governing materials, only to
        persons who meet applicable sophistication, wealth, or professional
        criteria, and only where lawful.
      </p>
      <p>
        The website is not directed at any person in any jurisdiction where its
        distribution or use would be contrary to law or would subject any
        Protostellar entity to any registration, authorization, or licensing
        requirement. It is not intended for retail investors.
      </p>

      <h2>No advice</h2>
      <p>
        Nothing on this website is investment, legal, tax, accounting, or other
        advice. You should not rely on it as the basis for any decision. You
        should obtain relevant professional advice and, where applicable, the
        confidential materials relating to a particular matter.
      </p>
      <p>
        Past performance of any business, vehicle, or activity associated with
        Protostellar is not indicative of future results. Forward-looking
        statements, if any, are inherently uncertain.
      </p>

      <h2>Portfolio and third parties</h2>
      <p>
        Companies, vehicles, and other interests mentioned on this website
        remain separate. A reference to a name, mark, or business does not mean
        that Protostellar offers that company’s securities or services, or that
        the company endorses Protostellar. All such names and marks remain the
        property of their respective owners.
      </p>

      <h2>Restricted access</h2>
      <p>
        Parts of the website or related systems, including any portal, may be
        limited to invited or authorized users. You may not attempt to gain
        unauthorized access. Credentials, if issued, are personal and
        confidential.
      </p>

      <h2>Intellectual property</h2>
      <p>
        The names Protostellar, Protostellar &amp; Co., Protostellar Capital,
        and Protostellar Re, together with the crest
        and the contents of this website, are owned or used under license by
        Protostellar. You may not copy, modify, distribute, or create derivative
        works from them without prior written consent, except for the limited
        purpose of viewing the site in a browser.
      </p>

      <h2>Use of the website</h2>
      <p>
        You may use the website only for lawful purposes. You may not misuse it,
        attempt to interfere with its operation, or use it to transmit anything
        unlawful, harmful, or confidential to Protostellar that you are not
        authorized to send. Information you submit must be accurate to the best
        of your knowledge.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The website is provided “as is.” To the fullest extent permitted by law,
        Protostellar disclaims all warranties, express or implied, and will not
        be liable for any loss or damage arising from use of, or inability to
        use, the website or reliance on its contents, whether in contract, tort
        (including negligence), or otherwise. This does not exclude liability
        that cannot be excluded under applicable law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of New York, without
        regard to conflict-of-law rules. The courts located in New York County,
        New York, have exclusive jurisdiction over disputes arising out of or
        relating to the website or these terms, without limiting any right
        Protostellar may have to seek relief elsewhere.
      </p>

      <h2>Changes</h2>
      <p>
        Protostellar may change these terms at any time by posting the revised
        terms on this page. Continued use of the website after a change
        constitutes acceptance of the revised terms.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <br />
        Protostellar Inc., 250 Park Avenue, Floor 14, New York.
      </p>
    </UtilityPage>
  );
}
