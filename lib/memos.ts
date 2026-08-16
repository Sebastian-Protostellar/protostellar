export type Memo = {
  slug: string;
  date: string;
  title: string;
  summary: string;
  body: string[];
};

/**
 * Public notes from the firm.
 * To publish: add an object below (newest first) and deploy.
 */
export const memos: Memo[] = [
  {
    slug: "a-public-record",
    date: "2026-08-14",
    title: "A public record",
    summary:
      "Protostellar will publish occasional notes on the firm, its platforms and the businesses it owns.",
    body: [
      "This page is a public record of notes from Protostellar. It is not a circular, a solicitation, or a substitute for private correspondence.",
      "Entries will appear when the firm has something it intends to state in public. Most of the firm’s work will continue to be conducted privately.",
    ],
  },
];

export function listMemos() {
  return [...memos].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function getMemo(slug: string) {
  return memos.find((memo) => memo.slug === slug);
}

export function formatMemoDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}
