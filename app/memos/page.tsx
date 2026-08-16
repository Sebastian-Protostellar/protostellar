import type { Metadata } from "next";
import Link from "next/link";
import { UtilityPage } from "@/components/utility-page";
import { formatMemoDate, listMemos } from "@/lib/memos";

export const metadata: Metadata = {
  title: "Memos",
  description: "Public notes from Protostellar.",
};

export default function MemosPage() {
  const memos = listMemos();

  return (
    <UtilityPage title="Memos">
      {memos.length ? (
        <ul className="mt-4 divide-y divide-rule border-y border-rule">
          {memos.map((memo) => (
            <li key={memo.slug}>
              <Link href={`/memos/${memo.slug}`} className="block py-8 transition-opacity hover:opacity-70">
                <time dateTime={memo.date} className="kicker">
                  {formatMemoDate(memo.date)}
                </time>
                <span className="mt-3 block font-serif text-[1.85rem] leading-tight tracking-[-0.03em] text-ink">
                  {memo.title}
                </span>
                <span className="mt-3 block text-[1.02rem] leading-7 text-ink/65">{memo.summary}</span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>Notes will appear here.</p>
      )}
    </UtilityPage>
  );
}
