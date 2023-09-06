import type { Metadata } from 'next';
import { Entry } from 'contentful';
import { fetchLandingEntriesBySlug, getFieldsforEntry } from '@/lib/api';
import LandingPage from '@/components/LandingPage';

export async function generateMetadata(): Promise<Metadata> {
  // fetch data
  const entries = await fetchLandingEntriesBySlug(false);
  const fields = await getFieldsforEntry(entries && entries[0]);
  const seo = fields?.seo as Entry;

  return {
    title: seo.fields.title as string,
    description: seo.fields.description as string,
    robots: {
      index: seo.fields.no_index as boolean,
      follow: seo.fields.no_follow as boolean,
    },
  };
}

export default async function Home() {
  const page = await fetchLandingEntriesBySlug(false);

  return (
    <>
      <div className='flex min-h-screen flex-col items-center'>
        <main>
          <LandingPage preview={false} page={page && page[0]} />
        </main>
      </div>
    </>
  );
}
