import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { UtilityPage } from "@/components/utility-page";
import { formatMemoDate, getMemo, listMemos } from "@/lib/memos";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return listMemos().map((memo) => ({ slug: memo.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const memo = getMemo(slug);
  if (!memo) return { title: "Memo" };
  return {
    title: memo.title,
    description: memo.summary,
  };
}

export default async function MemoPage({ params }: Props) {
  const { slug } = await params;
  const memo = getMemo(slug);
  if (!memo) notFound();

  return (
    <UtilityPage title={memo.title} kicker={formatMemoDate(memo.date)}>
      {memo.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <Link href="/memos" className="anchor mt-4 text-ink">
        All memos
      </Link>
    </UtilityPage>
  );
}
