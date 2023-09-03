import Image from "next/image";
import { fetchLandingEntriesBySlug } from "@/lib/api";

export default async function Home({ params }: { params: { slug: string } }) {
  const entries = await fetchLandingEntriesBySlug(false);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      Blog home
    </main>
  );
}
