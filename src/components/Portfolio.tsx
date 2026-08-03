import { LayoutGrid, type LucideIcon } from "lucide-react";
import { StampIcon } from "./StampIcon";

type Company = {
  name: string;
  href: string | null;
  nameClassName: string;
  hoverClassName: string;
} & (
  | {
      kind: "lucide";
      Icon: LucideIcon;
    }
  | {
      kind: "image";
      logo: string;
      logoClassName: string;
    }
  | {
      kind: "stamp";
    }
);

const companies: Company[] = [
  {
    name: "brokr",
    href: "https://brokr.app",
    kind: "lucide",
    Icon: LayoutGrid,
    nameClassName: "font-poppins font-medium tracking-tight",
    hoverClassName:
      "hover:bg-[#a3e635] hover:border-[#a3e635] hover:text-foreground focus-visible:bg-[#a3e635] focus-visible:border-[#a3e635] focus-visible:text-foreground",
  },
  {
    name: "PXIQ",
    href: "https://pxiq.io",
    kind: "image",
    logo: "/logos/pxiq-white.png",
    logoClassName: "h-12 w-12 sm:h-14 sm:w-14",
    nameClassName: "font-serif tracking-tight",
    hoverClassName:
      "hover:bg-foreground hover:border-foreground hover:text-background focus-visible:bg-foreground focus-visible:border-foreground focus-visible:text-background",
  },
  {
    name: "Gatsbi",
    href: null,
    kind: "image",
    logo: "/logos/gatsbi-light.svg",
    logoClassName: "h-11 w-11 sm:h-12 sm:w-12",
    nameClassName: "font-codec font-medium tracking-tight",
    hoverClassName:
      "hover:bg-[#1b17ff] hover:border-[#1b17ff] hover:text-white focus-visible:bg-[#1b17ff] focus-visible:border-[#1b17ff] focus-visible:text-white",
  },
  {
    name: "Protostellar Re",
    href: null,
    kind: "stamp",
    nameClassName: "font-serif tracking-tight",
    hoverClassName:
      "hover:bg-foreground hover:border-foreground hover:text-background focus-visible:bg-foreground focus-visible:border-foreground focus-visible:text-background",
  },
  {
    name: "PRX I",
    href: null,
    kind: "stamp",
    nameClassName: "font-serif tracking-tight",
    hoverClassName:
      "hover:bg-foreground hover:border-foreground hover:text-background focus-visible:bg-foreground focus-visible:border-foreground focus-visible:text-background",
  },
];

const delays = ["delay-1", "delay-2", "delay-3", "delay-4", "delay-5"] as const;

function CompanyMark({ company }: { company: Company }) {
  const reveal =
    "relative opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100 group-focus-visible:opacity-100";

  if (company.kind === "stamp") {
    return <StampIcon className={reveal} />;
  }

  if (company.kind === "lucide") {
    const { Icon } = company;
    return (
      <Icon
        aria-hidden="true"
        className={`h-12 w-12 sm:h-14 sm:w-14 ${reveal}`}
        strokeWidth={1.75}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={company.logo}
      alt=""
      className={`${company.logoClassName} object-contain ${reveal}`}
    />
  );
}

export function Portfolio() {
  return (
    <section
      id="portfolio"
      className="mx-auto w-full max-w-6xl px-6 py-24 sm:px-10 sm:py-32"
      aria-labelledby="portfolio-heading"
    >
      <h2
        id="portfolio-heading"
        className="mb-10 text-xs tracking-[0.18em] uppercase text-muted animate-fade-up"
      >
        Portfolio
      </h2>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {companies.map((company, index) => {
          const delayClass = delays[index] ?? "delay-3";

          const inner = (
            <>
              <CompanyMark company={company} />
              <span
                className={`${company.nameClassName} relative mt-auto w-full truncate whitespace-nowrap text-4xl leading-tight sm:text-5xl`}
              >
                {company.name}
              </span>
            </>
          );

          const sharedClassName = `group relative flex min-h-56 flex-col items-start justify-between overflow-hidden border border-line bg-surface p-7 text-foreground transition-colors duration-500 ease-out focus-visible:outline-none animate-fade-up ${company.hoverClassName} ${delayClass}`;

          return (
            <li key={company.name}>
              {company.href ? (
                <a
                  href={company.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={sharedClassName}
                >
                  {inner}
                </a>
              ) : (
                <div
                  className={`${sharedClassName} cursor-default`}
                  tabIndex={0}
                >
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
