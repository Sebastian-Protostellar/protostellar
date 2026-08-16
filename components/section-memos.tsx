import Link from "next/link";
import { SectionFrame } from "@/components/section-frame";
import { formatMemoDate, listMemos } from "@/lib/memos";

export function SectionMemos() {
  const latest = listMemos().slice(0, 3);

  return (
    <SectionFrame
      id="memos"
      theme="light"
      kicker="Notes"
      title="Memos"
    >
      {latest.length ? (
        <ul className="mt-24">
          {latest.map((memo) => (
            <li key={memo.slug} className="border-t border-rule last:border-b">
              <Link
                href={`/memos/${memo.slug}`}
                className="grid gap-4 py-10 transition-opacity hover:opacity-70 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
              >
                <span className="md:col-span-5">
                  <time dateTime={memo.date} className="kicker block">
                    {formatMemoDate(memo.date)}
                  </time>
                  <span className="mt-3 block font-serif text-[1.7rem] leading-tight tracking-[-0.03em] md:text-[1.9rem]">
                    {memo.title}
                  </span>
                </span>
                <span className="text-[1.02rem] leading-8 text-ink/65 md:col-span-6 md:col-start-7">
                  {memo.summary}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-24 border-t border-rule pt-10 text-[1.02rem] text-ink/55">Notes will appear here.</p>
      )}

      <Link href="/memos" className="anchor mt-14 text-ink">
        All memos
      </Link>
    </SectionFrame>
  );
}
