import Image from 'next/image';
import type { Metadata } from 'next';
import { fetchLandingEntriesBySlug, getFieldsforEntry } from '@/lib/api';
import LandingPage from '@/components/LandingPage';
import { Entry } from 'contentful';

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const entries = await fetchLandingEntriesBySlug(false);
  const fields = await getFieldsforEntry(entries && entries[0]);
  const seo = fields?.seo?.fields;

  return {
    title: seo.title,
    description: seo.description,
    robots: {
      index: seo.no_index,
      follow: seo.no_follow,
    },
  };
}

export default async function Home({ preview = false }: { preview: boolean }) {
  const page = await fetchLandingEntriesBySlug(false);

  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <main>
          <LandingPage preview={preview} page={page && page[0]} />
        </main>
      </div>
    </>
  );
}
