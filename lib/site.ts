export const site = {
  name: "Protostellar",
  legalName: "Protostellar Inc.",
  url: "https://protostellar.com",
  email: "contact@protostellar.com",
  statement:
    "Protostellar is an investment firm building and owning exceptional businesses for the long term.",
  heroTitle: "Protostellar builds and owns exceptional businesses.",
  supporting:
    "We originate, invest in and acquire businesses with the potential to endure.",
  geography: ["New York", "London", "Melbourne"],
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/79120136/" },
    { label: "X", href: "https://x.com/protostellarco" },
  ],
} as const;

export const nav = [
  { href: "/#firm", id: "firm", label: "Firm" },
  { href: "/#protostellar-and-co", id: "protostellar-and-co", label: "Protostellar & Co." },
  { href: "/#protostellar-capital", id: "protostellar-capital", label: "Protostellar Capital" },
  { href: "/#portfolio", id: "portfolio", label: "Portfolio" },
  { href: "/#memos", id: "memos", label: "Memos" },
] as const;

export const inquiryTypes = [
  { id: "capital", label: "Capital partnerships" },
  { id: "business", label: "Business and investment opportunities" },
  { id: "careers", label: "Careers" },
  { id: "general", label: "General inquiries" },
] as const;

export const portfolio = [
  {
    slug: "brokr",
    name: "brokr",
    description:
      "Private-markets infrastructure for the relationships and workflows that move transactions.",
    href: "https://hellobrokr.com",
    logo: "/logos/brokr.svg",
    logoOnDark: "/logos/brokr.svg",
  },
  {
    slug: "pxiq",
    name: "PXIQ",
    description: "Intelligence and infrastructure for complex markets.",
    href: null,
    logo: "/logos/pxiq.png",
    logoOnDark: "/logos/pxiq-light.png",
  },
  {
    slug: "gatsbi",
    name: "Gatsbi",
    description: "Agentic operating infrastructure for modern businesses.",
    href: null,
    logo: "/logos/gatsbi.png",
    logoOnDark: "/logos/gatsbi.png",
  },
  {
    slug: "protostellar-endeavour",
    name: "Protostellar Endeavour I",
    description: "A private vehicle for defined strategies and long-duration alignment.",
    href: null,
    logo: "/logos/crest-dark.png",
    logoOnDark: "/logos/crest-dark.png",
  },
  {
    slug: "protostellar-re",
    name: "Protostellar Re",
    description: "Reinsurance in support of the firm’s ownership of businesses.",
    href: null,
    logo: "/logos/crest-dark.png",
    logoOnDark: "/logos/crest-dark.png",
  },
] as const;

export const legalNotice =
  "The information on this website is provided for general informational purposes only. It does not constitute an offer to sell, or a solicitation of an offer to buy, any securities. Any such offer or solicitation, if made, will be made only pursuant to confidential offering materials and only to qualified parties.";
