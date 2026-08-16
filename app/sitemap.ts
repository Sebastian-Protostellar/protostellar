import type { MetadataRoute } from "next";
import { listMemos } from "@/lib/memos";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/privacy", "/legal", "/deal", "/careers", "/memos", "/portal"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date(),
  }));

  const notes = listMemos().map((memo) => ({
    url: `${site.url}/memos/${memo.slug}`,
    lastModified: new Date(memo.date),
  }));

  return [...pages, ...notes];
}
